if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ContinueButtonView_Params {
    showContinuePanel?: boolean;
    deviceCount?: number;
    continueService?: ContinueService;
}
import { ContinueService } from "@normalized:N&&&base/Index&1.0.0";
export class ContinueButtonView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__showContinuePanel = new SynchedPropertySimpleTwoWayPU(params.showContinuePanel, this, "showContinuePanel");
        this.__deviceCount = new ObservedPropertySimplePU(0, this, "deviceCount");
        this.continueService = ContinueService.getInstance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ContinueButtonView_Params) {
        if (params.deviceCount !== undefined) {
            this.deviceCount = params.deviceCount;
        }
        if (params.continueService !== undefined) {
            this.continueService = params.continueService;
        }
    }
    updateStateVars(params: ContinueButtonView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__showContinuePanel.purgeDependencyOnElmtId(rmElmtId);
        this.__deviceCount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__showContinuePanel.aboutToBeDeleted();
        this.__deviceCount.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __showContinuePanel: SynchedPropertySimpleTwoWayPU<boolean>;
    get showContinuePanel() {
        return this.__showContinuePanel.get();
    }
    set showContinuePanel(newValue: boolean) {
        this.__showContinuePanel.set(newValue);
    }
    private __deviceCount: ObservedPropertySimplePU<number>;
    get deviceCount() {
        return this.__deviceCount.get();
    }
    set deviceCount(newValue: number) {
        this.__deviceCount.set(newValue);
    }
    private continueService: ContinueService;
    aboutToAppear(): void {
        // 初始化流转服务
        this.continueService.initialize().then(() => {
            const devices = this.continueService.getAvailableDevices();
            this.deviceCount = devices.length;
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 流转按钮
            Button.createWithChild({ type: ButtonType.Circle });
            // 流转按钮
            Button.width(56);
            // 流转按钮
            Button.height(56);
            // 流转按钮
            Button.backgroundColor('#007DFF');
            // 流转按钮
            Button.shadow({
                radius: 12,
                color: '#40007DFF',
                offsetX: 0,
                offsetY: 4
            });
            // 流转按钮
            Button.margin({ right: 20, bottom: 80 });
            // 流转按钮
            Button.onClick(() => {
                this.showContinuePanel = true;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Badge.create({
                count: this.deviceCount,
                position: BadgePosition.RightTop,
                style: { badgeSize: 16, badgeColor: '#FF4D4F' }
            });
        }, Badge);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831296, "type": 40000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([Color.White]);
        }, SymbolGlyph);
        Badge.pop();
        // 流转按钮
        Button.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
