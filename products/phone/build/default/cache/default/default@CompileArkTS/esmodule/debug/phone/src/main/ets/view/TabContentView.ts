if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabContentView_Params {
    currentBreakpoint?: string;
    currentIndex?: number;
    showContinuePanel?: boolean;
    tabBarsInfo?: TabBarViewModel;
}
import { BreakpointConstants as Breakpoint, CommonConstants as Common } from "@normalized:N&&&base/Index&1.0.0";
import { HotPointPage } from "@normalized:N&&&hot/Index&1.0.0";
import { ContinueButtonView, ContinuePanelView } from "@normalized:N&&&detail/Index&1.0.0";
import type { BarItemInterface } from '../model/TabBarModel';
import { TabBarViewModel } from "@normalized:N&&&phone/src/main/ets/viewmodel/TabBarViewModel&";
export class TabContentView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentIndex = new ObservedPropertySimplePU(1, this, "currentIndex");
        this.__showContinuePanel = new ObservedPropertySimplePU(false, this, "showContinuePanel");
        this.tabBarsInfo = new TabBarViewModel();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabContentView_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.showContinuePanel !== undefined) {
            this.showContinuePanel = params.showContinuePanel;
        }
        if (params.tabBarsInfo !== undefined) {
            this.tabBarsInfo = params.tabBarsInfo;
        }
    }
    updateStateVars(params: TabContentView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__showContinuePanel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__showContinuePanel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __showContinuePanel: ObservedPropertySimplePU<boolean>;
    get showContinuePanel() {
        return this.__showContinuePanel.get();
    }
    set showContinuePanel(newValue: boolean) {
        this.__showContinuePanel.set(newValue);
    }
    private tabBarsInfo: TabBarViewModel;
    TabBarBuilder(item: BarItemInterface, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(Common.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index !== this.currentIndex ? item.icon : item.iconSelected);
            Image.width({ "id": 67108887, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.name);
            Text.fontSize({ "id": 67108900, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(Common.FONT_WEIGHT_500);
            Text.fontColor(index === this.currentIndex ? { "id": 67108878, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108877, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    DefaultTabBuilder(name: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.width(Common.FULL_PERCENT);
            Column.height(Common.FULL_PERCENT);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.fontSize({ "id": 67108886, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(Common.FONT_WEIGHT_700);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
            Stack.width('100%');
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor({ "id": 67108875, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.padding({ bottom: this.currentBreakpoint !== Breakpoint.BREAKPOINT_LG ? { "id": 67108899, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67108909, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Column.height(Common.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? BarPosition.Start : BarPosition.End,
                index: this.currentIndex
            });
            Tabs.vertical(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
            Tabs.barHeight(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? Common.HALF_PERCENT : { "id": 67108879, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Tabs.barWidth(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? { "id": 67108895, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : Common.FULL_PERCENT);
            Tabs.scrollable(false);
            Tabs.height(Common.FULL_PERCENT);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108871, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[0], 0);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HotPointPage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/view/TabContentView.ets", line: 70, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HotPointPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[1], 1);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108872, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[2], 2);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.DefaultTabBuilder.bind(this)({ "id": 67108873, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBarBuilder.call(this, this.tabBarsInfo.getTabList()[3], 3);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 流转悬浮按钮
                    ContinueButtonView(this, { showContinuePanel: this.__showContinuePanel }, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/view/TabContentView.ets", line: 100, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            showContinuePanel: this.showContinuePanel
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ContinueButtonView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 流转面板
            if (this.showContinuePanel) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height('100%');
                        Column.backgroundColor('rgba(0, 0, 0, 0.4)');
                        Column.onClick(() => {
                            this.showContinuePanel = false;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Blank.create();
                    }, Blank);
                    Blank.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        __Common__.create();
                        __Common__.height('70%');
                    }, __Common__);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ContinuePanelView(this, { isVisible: this.__showContinuePanel }, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/view/TabContentView.ets", line: 107, col: 11 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        isVisible: this.showContinuePanel
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ContinuePanelView" });
                    }
                    __Common__.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
