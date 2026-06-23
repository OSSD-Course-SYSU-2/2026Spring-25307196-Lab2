if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomePage_Params {
    currentBreakpoint?: string;
    bannerIndex?: number;
    showPostDialog?: boolean;
    postContent?: string;
    selectedImages?: string[];
    userPosts?: PostData[];
    bannerImages?: Resource[];
}
import { BreakpointConstants as Breakpoint } from "@normalized:N&&&base/Index&1.0.0";
import photoAccessHelper from "@ohos:file.photoAccessHelper";
// 帖子数据接口
interface PostData {
    id: number;
    content: string;
    images: string[];
    timestamp: number;
}
export class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__bannerIndex = new ObservedPropertySimplePU(0, this, "bannerIndex");
        this.__showPostDialog = new ObservedPropertySimplePU(false, this, "showPostDialog");
        this.__postContent = new ObservedPropertySimplePU('', this, "postContent");
        this.__selectedImages = new ObservedPropertyObjectPU([], this, "selectedImages");
        this.__userPosts = this.createStorageLink('userPosts', [], "userPosts");
        this.bannerImages = [
            { "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109236, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
            { "id": 67109237, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
        if (params.bannerIndex !== undefined) {
            this.bannerIndex = params.bannerIndex;
        }
        if (params.showPostDialog !== undefined) {
            this.showPostDialog = params.showPostDialog;
        }
        if (params.postContent !== undefined) {
            this.postContent = params.postContent;
        }
        if (params.selectedImages !== undefined) {
            this.selectedImages = params.selectedImages;
        }
        if (params.bannerImages !== undefined) {
            this.bannerImages = params.bannerImages;
        }
    }
    updateStateVars(params: HomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__bannerIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__showPostDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__postContent.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedImages.purgeDependencyOnElmtId(rmElmtId);
        this.__userPosts.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__bannerIndex.aboutToBeDeleted();
        this.__showPostDialog.aboutToBeDeleted();
        this.__postContent.aboutToBeDeleted();
        this.__selectedImages.aboutToBeDeleted();
        this.__userPosts.aboutToBeDeleted();
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
    private __bannerIndex: ObservedPropertySimplePU<number>;
    get bannerIndex() {
        return this.__bannerIndex.get();
    }
    set bannerIndex(newValue: number) {
        this.__bannerIndex.set(newValue);
    }
    private __showPostDialog: ObservedPropertySimplePU<boolean>;
    get showPostDialog() {
        return this.__showPostDialog.get();
    }
    set showPostDialog(newValue: boolean) {
        this.__showPostDialog.set(newValue);
    }
    private __postContent: ObservedPropertySimplePU<string>;
    get postContent() {
        return this.__postContent.get();
    }
    set postContent(newValue: string) {
        this.__postContent.set(newValue);
    }
    private __selectedImages: ObservedPropertyObjectPU<string[]>;
    get selectedImages() {
        return this.__selectedImages.get();
    }
    set selectedImages(newValue: string[]) {
        this.__selectedImages.set(newValue);
    }
    private __userPosts: ObservedPropertyAbstractPU<PostData[]>;
    get userPosts() {
        return this.__userPosts.get();
    }
    set userPosts(newValue: PostData[]) {
        this.__userPosts.set(newValue);
    }
    // 轮播图数据
    private bannerImages: Resource[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
            Stack.width('100%');
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部搜索栏
            Row.create();
            // 顶部搜索栏
            Row.width('100%');
            // 顶部搜索栏
            Row.height(56);
            // 顶部搜索栏
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109221, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(40);
            Image.aspectRatio(1);
            Image.borderRadius(20);
            Image.margin({ left: 16 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.layoutWeight(1);
            Row.height(36);
            Row.backgroundColor('#F5F5F5');
            Row.borderRadius(18);
            Row.padding({ left: 12, right: 12 });
            Row.margin({ left: 12, right: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109377, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(16);
            Image.aspectRatio(1);
            Image.opacity(0.5);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('搜索感兴趣的内容');
            Text.fontSize(14);
            Text.fontColor('#999999');
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(24);
            Image.aspectRatio(1);
            Image.margin({ right: 16 });
        }, Image);
        // 顶部搜索栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 轮播图
            Swiper.create();
            // 轮播图
            Swiper.autoPlay(true);
            // 轮播图
            Swiper.interval(3000);
            // 轮播图
            Swiper.indicator(true);
            // 轮播图
            Swiper.loop(true);
            // 轮播图
            Swiper.width('100%');
            // 轮播图
            Swiper.height(180);
            // 轮播图
            Swiper.margin({ top: 8, left: 16, right: 16 });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const image = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(image);
                    Image.width('100%');
                    Image.height(180);
                    Image.objectFit(ImageFit.Cover);
                    Image.borderRadius(8);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.bannerImages, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        // 轮播图
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 快捷入口
            Row.create();
            // 快捷入口
            Row.width('100%');
            // 快捷入口
            Row.justifyContent(FlexAlign.SpaceAround);
            // 快捷入口
            Row.padding({ top: 16, bottom: 16 });
            // 快捷入口
            Row.backgroundColor(Color.White);
            // 快捷入口
            Row.margin({ top: 8 });
        }, Row);
        this.ShortcutItem.bind(this)('推荐', { "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        this.ShortcutItem.bind(this)('关注', { "id": 67109250, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        this.ShortcutItem.bind(this)('热门', { "id": 67109246, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        this.ShortcutItem.bind(this)('同城', { "id": 67109207, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        // 快捷入口
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 推荐内容列表
            Column.create();
            // 推荐内容列表
            Column.layoutWeight(1);
            // 推荐内容列表
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('推荐内容');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 16, bottom: 12, left: 16 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容卡片列表
            List.create();
            // 内容卡片列表
            List.width('100%');
            // 内容卡片列表
            List.layoutWeight(1);
            // 内容卡片列表
            List.padding({ left: 16, right: 16 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
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
                        this.ContentCard.bind(this)();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, [1, 2, 3], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 内容卡片列表
        List.pop();
        // 推荐内容列表
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 发帖按钮
            Button.createWithChild({ type: ButtonType.Circle });
            // 发帖按钮
            Button.width(56);
            // 发帖按钮
            Button.height(56);
            // 发帖按钮
            Button.backgroundColor('#FF6B6B');
            // 发帖按钮
            Button.shadow({
                radius: 12,
                color: '#40FF6B6B',
                offsetX: 0,
                offsetY: 4
            });
            // 发帖按钮
            Button.margin({ right: 20, bottom: 140 });
            // 发帖按钮
            Button.onClick(() => {
                this.showPostDialog = true;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('+');
            Text.fontSize(32);
            Text.fontColor(Color.White);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        // 发帖按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 发帖对话框
            if (this.showPostDialog) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.PostDialog.bind(this)();
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
    PostDialog(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('70%');
            Column.backgroundColor('rgba(0, 0, 0, 0.4)');
            Column.justifyContent(FlexAlign.End);
            Column.onClick(() => {
                this.showPostDialog = false;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(Color.White);
            Column.borderRadius({ topLeft: 16, topRight: 16 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题栏
            Row.create();
            // 标题栏
            Row.width('100%');
            // 标题栏
            Row.padding(16);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('取消');
            Text.fontSize(16);
            Text.fontColor('#666666');
            Text.onClick(() => {
                this.showPostDialog = false;
                this.postContent = '';
                this.selectedImages = [];
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('发帖');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.layoutWeight(1);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('发布');
            Text.fontSize(16);
            Text.fontColor('#FF6B6B');
            Text.fontWeight(FontWeight.Bold);
            Text.onClick(() => {
                if (this.postContent || this.selectedImages.length > 0) {
                    const newPost: PostData = {
                        id: Date.now(),
                        content: this.postContent,
                        images: this.selectedImages,
                        timestamp: Date.now()
                    };
                    this.userPosts = [newPost, ...this.userPosts];
                    this.showPostDialog = false;
                    this.postContent = '';
                    this.selectedImages = [];
                }
            });
        }, Text);
        Text.pop();
        // 标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 内容输入
            TextArea.create({ placeholder: '分享你的想法...', text: this.postContent });
            // 内容输入
            TextArea.width('100%');
            // 内容输入
            TextArea.height(150);
            // 内容输入
            TextArea.backgroundColor('#F5F5F5');
            // 内容输入
            TextArea.borderRadius(8);
            // 内容输入
            TextArea.padding(12);
            // 内容输入
            TextArea.margin({ top: 8, left: 16, right: 16 });
            // 内容输入
            TextArea.onChange((value: string) => {
                this.postContent = value;
            });
        }, TextArea);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 图片选择
            Column.create();
            // 图片选择
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('添加图片');
            Text.fontSize(14);
            Text.fontColor('#666666');
            Text.margin({ top: 16, bottom: 8 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 已选择的图片
            if (this.selectedImages.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Grid.create();
                        Grid.columnsTemplate('1fr 1fr 1fr 1fr');
                        Grid.rowsGap(8);
                        Grid.columnsGap(8);
                        Grid.width('100%');
                        Grid.height(88);
                        Grid.padding({ left: 16, right: 16 });
                    }, Grid);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = (_item, index: number) => {
                            const imageUri = _item;
                            {
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    GridItem.create(() => { }, false);
                                };
                                const observedDeepRender = () => {
                                    this.observeComponentCreation2(itemCreation2, GridItem);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Stack.create({ alignContent: Alignment.TopEnd });
                                        Stack.width(80);
                                        Stack.height(80);
                                    }, Stack);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Image.create(imageUri);
                                        Image.width(80);
                                        Image.height(80);
                                        Image.objectFit(ImageFit.Cover);
                                        Image.borderRadius(8);
                                    }, Image);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('×');
                                        Text.fontSize(14);
                                        Text.fontColor(Color.White);
                                        Text.backgroundColor('#FF6B6B');
                                        Text.borderRadius(10);
                                        Text.width(20);
                                        Text.height(20);
                                        Text.textAlign(TextAlign.Center);
                                        Text.margin({ top: -4, right: -4 });
                                        Text.onClick(() => {
                                            this.selectedImages = this.selectedImages.filter((uri: string, i: number) => i !== index);
                                        });
                                    }, Text);
                                    Text.pop();
                                    Stack.pop();
                                    GridItem.pop();
                                };
                                observedDeepRender();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.selectedImages, forEachItemGenFunction, undefined, true, false);
                    }, ForEach);
                    ForEach.pop();
                    Grid.pop();
                });
            }
            // 添加图片按钮
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 添加图片按钮
            Row.create();
            // 添加图片按钮
            Row.width('100%');
            // 添加图片按钮
            Row.padding({ left: 16, right: 16, top: 8 });
            // 添加图片按钮
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild({ type: ButtonType.Normal });
            Button.width(120);
            Button.height(40);
            Button.backgroundColor('#F5F5F5');
            Button.borderRadius(8);
            Button.onClick(() => {
                this.selectImages();
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width(20);
            Image.height(20);
            Image.fillColor('#666666');
            Image.rotate({ angle: 45 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('选择图片');
            Text.fontSize(14);
            Text.fontColor('#666666');
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        Row.pop();
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.selectedImages.length}/9`);
            Text.fontSize(12);
            Text.fontColor('#999999');
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        // 添加图片按钮
        Row.pop();
        // 图片选择
        Column.pop();
        Column.pop();
        Column.pop();
    }
    private async selectImages(): Promise<void> {
        try {
            const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
            photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
            photoSelectOptions.maxSelectNumber = 9 - this.selectedImages.length;
            const photoPicker = new photoAccessHelper.PhotoViewPicker();
            const photoSelectResult = await photoPicker.select(photoSelectOptions);
            if (photoSelectResult.photoUris && photoSelectResult.photoUris.length > 0) {
                this.selectedImages = [...this.selectedImages, ...photoSelectResult.photoUris];
            }
        }
        catch (err) {
            console.error('Image selection failed:', err);
        }
    }
    ShortcutItem(title: string, icon: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(60);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(icon);
            Image.width(40);
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(12);
            Text.margin({ top: 4 });
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        Column.pop();
    }
    ContentCard(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.padding(12);
            Column.backgroundColor(Color.White);
            Column.borderRadius(8);
            Column.margin({ bottom: 8 });
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
            Text.create('用户名称');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('2小时前');
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('这是一条推荐内容的描述文字，展示在首页的推荐列表中。');
            Text.fontSize(14);
            Text.margin({ top: 8 });
            Text.maxLines(2);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width('100%');
            Image.height(120);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(8);
            Image.margin({ top: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.margin({ top: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('👍 128');
            Text.fontSize(12);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('💬 36');
            Text.fontSize(12);
            Text.fontColor('#666666');
            Text.margin({ left: 16 });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
