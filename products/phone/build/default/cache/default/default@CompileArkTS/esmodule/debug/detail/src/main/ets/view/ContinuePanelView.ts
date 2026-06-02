if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ContinuePanelView_Params {
    isVisible?: boolean;
    deviceList?: DeviceInfo[];
    selectedDevice?: DeviceInfo | null;
    continueState?: ContinueState;
    progress?: number;
    continueType?: ContinueType;
    continueService?: ContinueService;
    listener?: ContinueListener;
}
import { DeviceType, ContinueType, ContinueState } from "@normalized:N&&&base/Index&1.0.0";
import type { DeviceInfo, ContinueListener } from "@normalized:N&&&base/Index&1.0.0";
import { ContinueService } from "@normalized:N&&&base/Index&1.0.0";
/**
 * 流转类型选项接口
 */
interface ContinueTypeOption {
    type: ContinueType;
    name: string;
    desc: string;
}
export class ContinuePanelView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isVisible = new SynchedPropertySimpleTwoWayPU(params.isVisible, this, "isVisible");
        this.__deviceList = new ObservedPropertyObjectPU([], this, "deviceList");
        this.__selectedDevice = new ObservedPropertyObjectPU(null, this, "selectedDevice");
        this.__continueState = new ObservedPropertySimplePU(ContinueState.IDLE, this, "continueState");
        this.__progress = new ObservedPropertySimplePU(0, this, "progress");
        this.__continueType = new ObservedPropertySimplePU(ContinueType.MIGRATION, this, "continueType");
        this.continueService = ContinueService.getInstance();
        this.listener = {
            onDeviceListChanged: (devices: DeviceInfo[]) => {
                this.deviceList = devices;
            },
            onContinueStateChanged: (state: ContinueState) => {
                this.continueState = state;
            },
            onContinueProgress: (progress: number) => {
                this.progress = progress;
            },
            onContinueCompleted: () => {
                setTimeout(() => {
                    this.isVisible = false;
                    this.resetState();
                }, 1000);
            },
            onContinueFailed: (error: string) => {
                console.error('Continue failed:', error);
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ContinuePanelView_Params) {
        if (params.deviceList !== undefined) {
            this.deviceList = params.deviceList;
        }
        if (params.selectedDevice !== undefined) {
            this.selectedDevice = params.selectedDevice;
        }
        if (params.continueState !== undefined) {
            this.continueState = params.continueState;
        }
        if (params.progress !== undefined) {
            this.progress = params.progress;
        }
        if (params.continueType !== undefined) {
            this.continueType = params.continueType;
        }
        if (params.continueService !== undefined) {
            this.continueService = params.continueService;
        }
        if (params.listener !== undefined) {
            this.listener = params.listener;
        }
    }
    updateStateVars(params: ContinuePanelView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isVisible.purgeDependencyOnElmtId(rmElmtId);
        this.__deviceList.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedDevice.purgeDependencyOnElmtId(rmElmtId);
        this.__continueState.purgeDependencyOnElmtId(rmElmtId);
        this.__progress.purgeDependencyOnElmtId(rmElmtId);
        this.__continueType.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isVisible.aboutToBeDeleted();
        this.__deviceList.aboutToBeDeleted();
        this.__selectedDevice.aboutToBeDeleted();
        this.__continueState.aboutToBeDeleted();
        this.__progress.aboutToBeDeleted();
        this.__continueType.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isVisible: SynchedPropertySimpleTwoWayPU<boolean>;
    get isVisible() {
        return this.__isVisible.get();
    }
    set isVisible(newValue: boolean) {
        this.__isVisible.set(newValue);
    }
    private __deviceList: ObservedPropertyObjectPU<DeviceInfo[]>;
    get deviceList() {
        return this.__deviceList.get();
    }
    set deviceList(newValue: DeviceInfo[]) {
        this.__deviceList.set(newValue);
    }
    private __selectedDevice: ObservedPropertyObjectPU<DeviceInfo | null>;
    get selectedDevice() {
        return this.__selectedDevice.get();
    }
    set selectedDevice(newValue: DeviceInfo | null) {
        this.__selectedDevice.set(newValue);
    }
    private __continueState: ObservedPropertySimplePU<ContinueState>;
    get continueState() {
        return this.__continueState.get();
    }
    set continueState(newValue: ContinueState) {
        this.__continueState.set(newValue);
    }
    private __progress: ObservedPropertySimplePU<number>;
    get progress() {
        return this.__progress.get();
    }
    set progress(newValue: number) {
        this.__progress.set(newValue);
    }
    private __continueType: ObservedPropertySimplePU<ContinueType>;
    get continueType() {
        return this.__continueType.get();
    }
    set continueType(newValue: ContinueType) {
        this.__continueType.set(newValue);
    }
    private continueService: ContinueService;
    private listener: ContinueListener;
    aboutToAppear(): void {
        this.continueService.addListener(this.listener);
        this.deviceList = this.continueService.getAvailableDevices();
    }
    aboutToDisappear(): void {
        this.continueService.removeListener(this.listener);
    }
    /**
     * 重置状态
     */
    private resetState(): void {
        this.selectedDevice = null;
        this.continueState = ContinueState.IDLE;
        this.progress = 0;
    }
    /**
     * 开始流转
     */
    private async startContinue(): Promise<void> {
        if (!this.selectedDevice) {
            return;
        }
        await this.continueService.startContinue({
            continueType: this.continueType,
            targetDevice: this.selectedDevice,
            showProgress: true
        });
    }
    /**
     * 取消流转
     */
    private cancelContinue(): void {
        this.continueService.cancelContinue();
        this.resetState();
    }
    /**
     * 获取设备图标
     */
    private getDeviceIcon(type: DeviceType): Resource {
        switch (type) {
            case DeviceType.PHONE:
                return { "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            case DeviceType.TABLET:
                return { "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            case DeviceType.TV:
                return { "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            case DeviceType.FOLDABLE:
                return { "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
            default:
                return { "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
        }
    }
    /**
     * 获取流转类型名称
     */
    private getContinueTypeName(type: ContinueType): string {
        switch (type) {
            case ContinueType.MIGRATION:
                return '迁移';
            case ContinueType.COLLABORATION:
                return '协同';
            case ContinueType.SYNC:
                return '同步';
            default:
                return '流转';
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F5F5F5');
            Column.borderRadius({ topLeft: 24, topRight: 24 });
        }, Column);
        // 标题栏
        this.TitleBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 内容区域
            if (this.continueState === ContinueState.IDLE) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.DeviceListContent.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.ProgressContent.bind(this)();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    /**
     * 标题栏
     */
    TitleBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(56);
            Row.padding({ left: 20, right: 12 });
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('自由流转');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#1A1A1A');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild({ type: ButtonType.Circle });
            Button.width(32);
            Button.height(32);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => {
                this.isVisible = false;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('×');
            Text.fontSize(24);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        Button.pop();
        Row.pop();
    }
    /**
     * 设备列表内容
     */
    DeviceListContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.layoutWeight(1);
            Column.padding({ top: 8 });
        }, Column);
        // 流转类型选择
        this.ContinueTypeSelector.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 设备列表
            if (this.deviceList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('选择目标设备');
                        Text.fontSize(16);
                        Text.fontColor('#666666');
                        Text.margin({ top: 16, bottom: 12 });
                        Text.width('100%');
                        Text.padding({ left: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.width('100%');
                        List.layoutWeight(1);
                        List.padding({ left: 16, right: 16 });
                        List.divider({ strokeWidth: 1, color: '#E5E5E5', startMargin: 56, endMargin: 16 });
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const device = _item;
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    ListItem.create(deepRenderFunction, true);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.DeviceItem.bind(this)(device);
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.deviceList, forEachItemGenFunction, (device: DeviceInfo) => device.deviceId, false, false);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.EmptyView.bind(this)();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 开始流转按钮
            if (this.selectedDevice) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(`开始${this.getContinueTypeName(this.continueType)}`);
                        Button.width('90%');
                        Button.height(48);
                        Button.fontSize(18);
                        Button.fontColor(Color.White);
                        Button.backgroundColor('#007DFF');
                        Button.borderRadius(24);
                        Button.margin({ top: 20, bottom: 20 });
                        Button.onClick(() => {
                            this.startContinue();
                        });
                    }, Button);
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    /**
     * 流转类型选择器
     */
    ContinueTypeSelector(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.margin({ top: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('流转方式');
            Text.fontSize(16);
            Text.fontColor('#666666');
            Text.width('100%');
            Text.padding({ left: 20, bottom: 12 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('90%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ left: '5%' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width('30%');
                    Column.padding(12);
                    Column.borderRadius(12);
                    Column.backgroundColor(this.continueType === item.type ? '#E8F4FF' : Color.White);
                    Column.border({
                        width: 1,
                        color: this.continueType === item.type ? '#007DFF' : '#E5E5E5'
                    });
                    Column.onClick(() => {
                        this.continueType = item.type;
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.name);
                    Text.fontSize(16);
                    Text.fontColor(this.continueType === item.type ? '#007DFF' : '#333333');
                    Text.fontWeight(this.continueType === item.type ? FontWeight.Bold : FontWeight.Normal);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.desc);
                    Text.fontSize(12);
                    Text.fontColor('#999999');
                    Text.margin({ top: 4 });
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, [
                { type: ContinueType.MIGRATION, name: '迁移', desc: '迁移到目标设备' } as ContinueTypeOption,
                { type: ContinueType.COLLABORATION, name: '协同', desc: '多设备协同' } as ContinueTypeOption,
                { type: ContinueType.SYNC, name: '同步', desc: '状态同步' } as ContinueTypeOption
            ], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
    }
    /**
     * 设备项
     */
    DeviceItem(device: DeviceInfo, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(64);
            Row.padding({ left: 12, right: 12 });
            Row.backgroundColor(this.selectedDevice?.deviceId === device.deviceId ? '#F0F9FF' : Color.White);
            Row.borderRadius(12);
            Row.onClick(() => {
                this.selectedDevice = device;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设备图标
            SymbolGlyph.create(this.getDeviceIcon(device.deviceType));
            // 设备图标
            SymbolGlyph.fontSize(32);
            // 设备图标
            SymbolGlyph.fontColor([this.selectedDevice?.deviceId === device.deviceId ? '#007DFF' : '#666666']);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设备信息
            Column.create();
            // 设备信息
            Column.alignItems(HorizontalAlign.Start);
            // 设备信息
            Column.margin({ left: 12 });
            // 设备信息
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(device.deviceName);
            Text.fontSize(16);
            Text.fontColor('#333333');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.getDeviceTypeName(device.deviceType));
            Text.fontSize(12);
            Text.fontColor('#999999');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // 设备信息
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 选中状态
            if (this.selectedDevice?.deviceId === device.deviceId) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        SymbolGlyph.create({ "id": 125831492, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        SymbolGlyph.fontSize(24);
                        SymbolGlyph.fontColor(['#007DFF']);
                    }, SymbolGlyph);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    /**
     * 获取设备类型名称
     */
    private getDeviceTypeName(type: DeviceType): string {
        switch (type) {
            case DeviceType.PHONE:
                return '手机';
            case DeviceType.TABLET:
                return '平板';
            case DeviceType.TV:
                return '智慧屏';
            case DeviceType.FOLDABLE:
                return '折叠屏';
            default:
                return '设备';
        }
    }
    /**
     * 空视图
     */
    EmptyView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.layoutWeight(1);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831788, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            SymbolGlyph.fontSize(64);
            SymbolGlyph.fontColor(['#CCCCCC']);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('未发现可用设备');
            Text.fontSize(16);
            Text.fontColor('#999999');
            Text.margin({ top: 16 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('请确保其他设备已开启并登录同一华为账号');
            Text.fontSize(12);
            Text.fontColor('#CCCCCC');
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    /**
     * 进度内容
     */
    ProgressContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 目标设备信息
            if (this.selectedDevice) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.margin({ top: 60 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        SymbolGlyph.create(this.getDeviceIcon(this.selectedDevice.deviceType));
                        SymbolGlyph.fontSize(64);
                        SymbolGlyph.fontColor(['#007DFF']);
                    }, SymbolGlyph);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.selectedDevice.deviceName);
                        Text.fontSize(18);
                        Text.fontColor('#333333');
                        Text.fontWeight(FontWeight.Medium);
                        Text.margin({ top: 16 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`正在${this.getContinueTypeName(this.continueType)}...`);
                        Text.fontSize(14);
                        Text.fontColor('#999999');
                        Text.margin({ top: 8 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            // 进度条
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 进度条
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.progress, total: 100, type: ProgressType.Linear });
            Progress.width('80%');
            Progress.height(8);
            Progress.color('#007DFF');
            Progress.margin({ top: 40 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.progress}%`);
            Text.fontSize(16);
            Text.fontColor('#666666');
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        // 进度条
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 取消按钮
            Button.createWithLabel('取消');
            // 取消按钮
            Button.width('80%');
            // 取消按钮
            Button.height(44);
            // 取消按钮
            Button.fontSize(16);
            // 取消按钮
            Button.fontColor('#666666');
            // 取消按钮
            Button.backgroundColor('#F0F0F0');
            // 取消按钮
            Button.borderRadius(22);
            // 取消按钮
            Button.margin({ top: 40 });
            // 取消按钮
            Button.onClick(() => {
                this.cancelContinue();
            });
        }, Button);
        // 取消按钮
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
