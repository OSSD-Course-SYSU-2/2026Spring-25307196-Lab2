import distributedDeviceManager from "@ohos:distributedDeviceManager";
import hilog from "@ohos:hilog";
import { DeviceType, DeviceState } from "@normalized:N&&&base/src/main/ets/model/ContinueModel&1.0.0";
import type { DeviceInfo, ContinueListener } from "@normalized:N&&&base/src/main/ets/model/ContinueModel&1.0.0";
const TAG = 'DeviceManagerService';
const DOMAIN = 0x0000;
/**
 * 分布式设备管理服务
 * 负责设备发现、连接、状态管理
 */
export class DeviceManagerService {
    private static instance: DeviceManagerService;
    private deviceManager: distributedDeviceManager.DeviceManager | null = null;
    private deviceList: DeviceInfo[] = [];
    private listeners: ContinueListener[] = [];
    private isInitialized: boolean = false;
    private constructor() { }
    /**
     * 获取单例实例
     */
    static getInstance(): DeviceManagerService {
        if (!DeviceManagerService.instance) {
            DeviceManagerService.instance = new DeviceManagerService();
        }
        return DeviceManagerService.instance;
    }
    /**
     * 初始化设备管理器
     */
    async initialize(): Promise<boolean> {
        if (this.isInitialized) {
            return true;
        }
        try {
            // 创建设备管理器
            this.deviceManager = distributedDeviceManager.createDeviceManager('MultiCommunityApp');
            // 注册设备状态变化监听
            this.registerDeviceStateListener();
            // 发现设备
            await this.discoverDevices();
            this.isInitialized = true;
            hilog.info(DOMAIN, TAG, 'DeviceManager initialized successfully');
            return true;
        }
        catch (error) {
            hilog.error(DOMAIN, TAG, `Failed to initialize DeviceManager: ${JSON.stringify(error)}`);
            return false;
        }
    }
    /**
     * 注册设备状态监听器
     */
    private registerDeviceStateListener(): void {
        if (!this.deviceManager) {
            return;
        }
        try {
            // 监听设备状态变化
            this.deviceManager.on('deviceStateChange' as 'serviceDie', (data: any) => {
                const deviceInfo = data as distributedDeviceManager.DeviceBasicInfo;
                hilog.info(DOMAIN, TAG, `Device state changed: ${deviceInfo.deviceName}`);
                this.updateDeviceList();
            });
            // 监听设备发现结果
            this.deviceManager.on('discoveryResult' as 'serviceDie', (data: any) => {
                const deviceInfo = data as distributedDeviceManager.DeviceBasicInfo;
                hilog.info(DOMAIN, TAG, `Device discovered: ${deviceInfo.deviceName}`);
                this.updateDeviceList();
            });
        }
        catch (error) {
            hilog.error(DOMAIN, TAG, `Failed to register device state listener: ${JSON.stringify(error)}`);
        }
    }
    /**
     * 发现设备
     */
    async discoverDevices(): Promise<DeviceInfo[]> {
        if (!this.deviceManager) {
            hilog.error(DOMAIN, TAG, 'DeviceManager not initialized');
            return [];
        }
        try {
            // 获取可信设备列表
            const devices = this.deviceManager.getAvailableDeviceListSync();
            this.deviceList = devices.map((device: distributedDeviceManager.DeviceBasicInfo) => {
                return this.convertToDevice(device);
            });
            hilog.info(DOMAIN, TAG, `Discovered ${this.deviceList.length} devices`);
            this.notifyDeviceListChanged();
            return this.deviceList;
        }
        catch (error) {
            hilog.error(DOMAIN, TAG, `Failed to discover devices: ${JSON.stringify(error)}`);
            return [];
        }
    }
    /**
     * 转换为自定义设备信息
     */
    private convertToDevice(device: distributedDeviceManager.DeviceBasicInfo): DeviceInfo {
        const deviceTypeNum = typeof device.deviceType === 'string' ?
            parseInt(device.deviceType, 16) : device.deviceType;
        return {
            deviceId: device.deviceId,
            deviceName: device.deviceName,
            deviceType: this.getDeviceType(deviceTypeNum),
            deviceState: DeviceState.AVAILABLE,
            networkId: device.networkId,
            icon: this.getDeviceIcon(deviceTypeNum)
        };
    }
    /**
     * 获取设备类型
     */
    private getDeviceType(type: number): DeviceType {
        switch (type) {
            case 0x00: // PHONE
                return DeviceType.PHONE;
            case 0x01: // TABLET
                return DeviceType.TABLET;
            case 0x02: // TV
                return DeviceType.TV;
            case 0x0E: // FOLDABLE
                return DeviceType.FOLDABLE;
            default:
                return DeviceType.UNKNOWN;
        }
    }
    /**
     * 获取设备图标
     */
    private getDeviceIcon(type: number): string {
        switch (type) {
            case 0x00: // PHONE
                return 'phone';
            case 0x01: // TABLET
                return 'tablet';
            case 0x02: // TV
                return 'tv';
            case 0x0E: // FOLDABLE
                return 'foldable';
            default:
                return 'device';
        }
    }
    /**
     * 更新设备列表
     */
    private async updateDeviceList(): Promise<void> {
        await this.discoverDevices();
    }
    /**
     * 获取设备列表
     */
    getDeviceList(): DeviceInfo[] {
        return this.deviceList;
    }
    /**
     * 根据ID获取设备信息
     */
    getDeviceById(deviceId: string): DeviceInfo | undefined {
        return this.deviceList.find(device => device.deviceId === deviceId);
    }
    /**
     * 添加监听器
     */
    addListener(listener: ContinueListener): void {
        this.listeners.push(listener);
    }
    /**
     * 移除监听器
     */
    removeListener(listener: ContinueListener): void {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    /**
     * 通知设备列表变化
     */
    private notifyDeviceListChanged(): void {
        this.listeners.forEach(listener => {
            if (listener.onDeviceListChanged) {
                listener.onDeviceListChanged(this.deviceList);
            }
        });
    }
    /**
     * 释放资源
     */
    release(): void {
        if (this.deviceManager) {
            try {
                this.deviceManager.off('deviceStateChange' as 'serviceDie');
                this.deviceManager.off('discoveryResult' as 'serviceDie');
                distributedDeviceManager.releaseDeviceManager(this.deviceManager);
            }
            catch (error) {
                hilog.error(DOMAIN, TAG, `Failed to release DeviceManager: ${JSON.stringify(error)}`);
            }
            this.deviceManager = null;
        }
        this.isInitialized = false;
        this.deviceList = [];
        this.listeners = [];
    }
}
