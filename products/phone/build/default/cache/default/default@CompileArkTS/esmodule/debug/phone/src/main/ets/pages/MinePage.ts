if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MinePage_Params {
    currentBreakpoint?: string;
    userPosts?: PostData[];
    showMyPosts?: boolean;
    contentMenuItems?: MenuItem[];
    moreMenuItems?: MenuItem[];
}
import { BreakpointConstants as Breakpoint } from "@normalized:N&&&base/Index&1.0.0";
// 菜单项接口
interface MenuItem {
    icon?: Resource;
    title: string;
    count: string;
}
// 帖子数据接口
interface PostData {
    id: number;
    content: string;
    images: string[];
    timestamp: number;
}
export class MinePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__userPosts = this.createStorageLink('userPosts', [], "userPosts");
        this.__showMyPosts = new ObservedPropertySimplePU(false, this, "showMyPosts");
        this.contentMenuItems = [
            { icon: { "id": 67109250, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, title: '我的发布', count: '36' },
            { icon: { "id": 67109383, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, title: '我的收藏', count: '128' },
            { icon: { "id": 67109377, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, title: '我的评论', count: '256' }
        ];
        this.moreMenuItems = [
            { title: '浏览历史', count: '' },
            { title: '账号设置', count: '' },
            { title: '帮助与反馈', count: '' }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MinePage_Params) {
        if (params.showMyPosts !== undefined) {
            this.showMyPosts = params.showMyPosts;
        }
        if (params.contentMenuItems !== undefined) {
            this.contentMenuItems = params.contentMenuItems;
        }
        if (params.moreMenuItems !== undefined) {
            this.moreMenuItems = params.moreMenuItems;
        }
    }
    updateStateVars(params: MinePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__userPosts.purgeDependencyOnElmtId(rmElmtId);
        this.__showMyPosts.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__userPosts.aboutToBeDeleted();
        this.__showMyPosts.aboutToBeDeleted();
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
    private __userPosts: ObservedPropertyAbstractPU<PostData[]>;
    get userPosts() {
        return this.__userPosts.get();
    }
    set userPosts(newValue: PostData[]) {
        this.__userPosts.set(newValue);
    }
    private __showMyPosts: ObservedPropertySimplePU<boolean>;
    get showMyPosts() {
        return this.__showMyPosts.get();
    }
    set showMyPosts(newValue: boolean) {
        this.__showMyPosts.set(newValue);
    }
    // 菜单数据
    private contentMenuItems: MenuItem[];
    private moreMenuItems: MenuItem[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showMyPosts) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.MyPostsPage.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height('100%');
                        Column.padding({ top: 8 });
                        Column.backgroundColor('#F5F5F5');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 用户信息卡片
                        Column.create();
                        // 用户信息卡片
                        Column.width('100%');
                        // 用户信息卡片
                        Column.linearGradient({
                            angle: 135,
                            colors: [['#667eea', 0], ['#764ba2', 1]]
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.padding({ left: 16, right: 16, top: 12, bottom: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109221, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width(56);
                        Image.aspectRatio(1);
                        Image.borderRadius(28);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.alignItems(HorizontalAlign.Start);
                        Column.margin({ left: 12 });
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('用户昵称');
                        Text.fontSize(18);
                        Text.fontWeight(FontWeight.Bold);
                        Text.fontColor(Color.White);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('ID: 123456');
                        Text.fontSize(11);
                        Text.fontColor(Color.White);
                        Text.opacity(0.8);
                        Text.margin({ top: 2 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width(20);
                        Image.aspectRatio(1);
                    }, Image);
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 数据统计
                        Row.create();
                        // 数据统计
                        Row.width('100%');
                        // 数据统计
                        Row.justifyContent(FlexAlign.SpaceAround);
                        // 数据统计
                        Row.padding({ top: 8, bottom: 8 });
                    }, Row);
                    this.StatItem.bind(this)('关注', '128');
                    this.StatItem.bind(this)('粉丝', '1.2万');
                    this.StatItem.bind(this)('获赞', '3.6万');
                    this.StatItem.bind(this)('收藏', '256');
                    // 数据统计
                    Row.pop();
                    // 用户信息卡片
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 功能菜单
                        Column.create();
                        // 功能菜单
                        Column.width('100%');
                        // 功能菜单
                        Column.layoutWeight(1);
                        // 功能菜单
                        Column.padding({ left: 16, right: 16, top: 8 });
                        // 功能菜单
                        Column.backgroundColor('#F5F5F5');
                    }, Column);
                    this.MenuSection.bind(this)('内容管理', this.contentMenuItems);
                    this.MenuSection.bind(this)('更多功能', this.moreMenuItems);
                    // 功能菜单
                    Column.pop();
                    Column.pop();
                });
            }
        }, If);
        If.pop();
    }
    StatItem(title: string, count: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(count);
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(11);
            Text.fontColor(Color.White);
            Text.opacity(0.8);
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    MenuSection(title: string, items: MenuItem[], parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(13);
            Text.fontColor('#999999');
            Text.margin({ top: 8, bottom: 6, left: 16 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                }, Column);
                this.MenuItem.bind(this)(item.icon, item.title, item.count);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index < items.length - 1) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Divider.create();
                                Divider.width('100%');
                                Divider.height(0.5);
                                Divider.color('#F0F0F0');
                                Divider.margin({ left: item.icon ? 52 : 16 });
                            }, Divider);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, items, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
    }
    MenuItem(icon: Resource | undefined, title: string, count: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(48);
            Row.alignItems(VerticalAlign.Center);
            Row.onClick(() => {
                if (title === '我的发布') {
                    this.showMyPosts = true;
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (icon) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(icon);
                        Image.width(22);
                        Image.height(22);
                        Image.margin({ left: 16 });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(15);
            Text.margin({ left: icon ? 12 : 16 });
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (count !== '') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(count);
                        Text.fontSize(13);
                        Text.fontColor('#999999');
                        Text.margin({ right: 8 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(14);
            Image.height(14);
            Image.opacity(0.3);
            Image.rotate({ angle: 90 });
            Image.margin({ right: 16 });
        }, Image);
        Row.pop();
    }
    MyPostsPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.padding({ top: 8 });
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(56);
            Row.padding({ left: 8, right: 8 });
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(40);
            Column.height(40);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.showMyPosts = false;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(24);
            Image.height(24);
            Image.rotate({ angle: 180 });
        }, Image);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我的发布');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.layoutWeight(1);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.width(40);
        }, Blank);
        Blank.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.userPosts.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                        Column.justifyContent(FlexAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('暂无发布内容');
                        Text.fontSize(16);
                        Text.fontColor('#999999');
                        Text.margin({ top: 100 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('点击首页右下角的"+"按钮发布内容');
                        Text.fontSize(14);
                        Text.fontColor('#CCCCCC');
                        Text.margin({ top: 8 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.width('100%');
                        List.layoutWeight(1);
                        List.padding({ left: 16, right: 16, top: 8 });
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const post = _item;
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
                                    this.PostItem.bind(this)(post);
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.userPosts, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    PostItem(post: PostData, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.padding(12);
            Column.backgroundColor(Color.White);
            Column.borderRadius(8);
            Column.margin({ bottom: 8 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109221, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(36);
            Image.aspectRatio(1);
            Image.borderRadius(18);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: 8 });
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('用户昵称');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.FormatTime(post.timestamp));
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (post.content) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(post.content);
                        Text.fontSize(14);
                        Text.margin({ top: 8 });
                        Text.width('100%');
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (post.images.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.margin({ top: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const imageUri = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create(imageUri);
                                Image.width(80);
                                Image.height(80);
                                Image.objectFit(ImageFit.Cover);
                                Image.borderRadius(8);
                                Image.margin({ right: 8 });
                            }, Image);
                        };
                        this.forEachUpdateFunction(elmtId, post.images.slice(0, 3), forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
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
    private FormatTime(timestamp: number): string {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        if (minutes < 1)
            return '刚刚';
        if (minutes < 60)
            return `${minutes}分钟前`;
        if (hours < 24)
            return `${hours}小时前`;
        return `${days}天前`;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
