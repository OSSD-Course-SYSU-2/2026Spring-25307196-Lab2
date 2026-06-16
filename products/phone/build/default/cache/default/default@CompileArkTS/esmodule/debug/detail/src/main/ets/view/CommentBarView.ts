if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentBarView_Params {
    currentBreakpoint?: string;
    isMouseClick?: boolean;
    content?: string;
    isShowInput?: boolean;
    isDarkMode?: boolean;
    jumpDetail?: () => void;
    isLiked?: boolean;
    isFavorited?: boolean;
    likeCount?: number;
}
import { CommonConstants as BaseCommon, BreakpointConstants as Breakpoint } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
const KEY_TEXTAREA: string = 'textarea_input';
export class CommentBarView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', Breakpoint.BREAKPOINT_LG, "currentBreakpoint");
        this.__isMouseClick = new ObservedPropertySimplePU(false, this, "isMouseClick");
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.isShowInput = true;
        this.isDarkMode = false;
        this.jumpDetail = () => { };
        this.__isLiked = new ObservedPropertySimplePU(false, this, "isLiked");
        this.__isFavorited = new ObservedPropertySimplePU(false, this, "isFavorited");
        this.__likeCount = new ObservedPropertySimplePU(128, this, "likeCount");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentBarView_Params) {
        if (params.isMouseClick !== undefined) {
            this.isMouseClick = params.isMouseClick;
        }
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.isShowInput !== undefined) {
            this.isShowInput = params.isShowInput;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
        if (params.jumpDetail !== undefined) {
            this.jumpDetail = params.jumpDetail;
        }
        if (params.isLiked !== undefined) {
            this.isLiked = params.isLiked;
        }
        if (params.isFavorited !== undefined) {
            this.isFavorited = params.isFavorited;
        }
        if (params.likeCount !== undefined) {
            this.likeCount = params.likeCount;
        }
    }
    updateStateVars(params: CommentBarView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isMouseClick.purgeDependencyOnElmtId(rmElmtId);
        this.__content.purgeDependencyOnElmtId(rmElmtId);
        this.__isLiked.purgeDependencyOnElmtId(rmElmtId);
        this.__isFavorited.purgeDependencyOnElmtId(rmElmtId);
        this.__likeCount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isMouseClick.aboutToBeDeleted();
        this.__content.aboutToBeDeleted();
        this.__isLiked.aboutToBeDeleted();
        this.__isFavorited.aboutToBeDeleted();
        this.__likeCount.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // [StartExclude comment_bar_view]
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isMouseClick: ObservedPropertySimplePU<boolean>;
    get isMouseClick() {
        return this.__isMouseClick.get();
    }
    set isMouseClick(newValue: boolean) {
        this.__isMouseClick.set(newValue);
    }
    private __content: ObservedPropertySimplePU<string>;
    get content() {
        return this.__content.get();
    }
    set content(newValue: string) {
        this.__content.set(newValue);
    }
    private isShowInput?: boolean;
    private isDarkMode: boolean;
    private jumpDetail: () => void;
    private __isLiked: ObservedPropertySimplePU<boolean>; // 是否已点赞
    get isLiked() {
        return this.__isLiked.get();
    }
    set isLiked(newValue: boolean) {
        this.__isLiked.set(newValue);
    }
    private __isFavorited: ObservedPropertySimplePU<boolean>; // 是否已收藏
    get isFavorited() {
        return this.__isFavorited.get();
    }
    set isFavorited(newValue: boolean) {
        this.__isFavorited.set(newValue);
    }
    private __likeCount: ObservedPropertySimplePU<number>; // 点赞数
    get likeCount() {
        return this.__likeCount.get();
    }
    set likeCount(newValue: number) {
        this.__likeCount.set(newValue);
    }
    // 点赞处理
    toggleLike() {
        if (this.isLiked) {
            this.isLiked = false;
            this.likeCount--;
        }
        else {
            this.isLiked = true;
            this.likeCount++;
        }
    }
    // 收藏处理
    toggleFavorite() {
        this.isFavorited = !this.isFavorited;
    }
    // [EndExclude comment_bar_view]
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.height(this.getColumnHeight());
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height({ "id": 67109366, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.borderWidth({ top: { "id": 67109309, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Row.borderColor(this.isDarkMode ? { "id": 67109278, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109267, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.isMouseClick) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.borderRadius('20vp');
                        Row.backgroundColor(this.isDarkMode ? '#26282A' : '#0D000000');
                        Row.padding({ left: '16vp' });
                        Row.justifyContent(FlexAlign.Start);
                        Row.height({ "id": 67109313, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.width(Common.COMMENT_BAR_INPUT_WIDTH);
                        Row.margin({ left: Common.COMMENT_BAR_INPUT_ML });
                        Row.visibility(this.isShowInput ? Visibility.Visible : Visibility.None);
                        Row.onMouse((event: MouseEvent) => {
                            if (event.button === MouseButton.Left && event.action === MouseAction.Press) {
                                this.isMouseClick = true;
                            }
                        });
                        Row.onClick(() => {
                            if (!this.isMouseClick) {
                                AppStorage.setOrCreate('isShowInput', true);
                            }
                        });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109257, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109311, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.opacity({ "id": 67109312, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // [StartExclude comment_bar_view]
                        Row.create();
                        // [StartExclude comment_bar_view]
                        Row.layoutWeight(1);
                        // [StartExclude comment_bar_view]
                        Row.justifyContent(FlexAlign.SpaceAround);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.isDarkMode ? { "id": 67109378, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109377, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width({ "id": 67109367, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                        Image.onClick(() => {
                            this.jumpDetail();
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 收藏按钮 - 星形图标
                        Image.create(this.isDarkMode ? { "id": 67109384, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109383, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // 收藏按钮 - 星形图标
                        Image.width({ "id": 67109367, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // 收藏按钮 - 星形图标
                        Image.aspectRatio(1);
                        // 收藏按钮 - 星形图标
                        Image.fillColor(this.isFavorited ? '#FFB84D' : (this.isDarkMode ? Color.White : Color.Black));
                        // 收藏按钮 - 星形图标
                        Image.onClick(() => {
                            this.toggleFavorite();
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 点赞按钮 - 心形图标
                        Image.create(this.isDarkMode ? { "id": 67109379, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109250, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // 点赞按钮 - 心形图标
                        Image.width({ "id": 67109367, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // 点赞按钮 - 心形图标
                        Image.aspectRatio(1);
                        // 点赞按钮 - 心形图标
                        Image.fillColor(this.isLiked ? '#FF6B6B' : (this.isDarkMode ? Color.White : Color.Black));
                        // 点赞按钮 - 心形图标
                        Image.onClick(() => {
                            this.toggleLike();
                        });
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.isDarkMode ? { "id": 67109382, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.width({ "id": 67109367, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Image.aspectRatio(1);
                    }, Image);
                    // [StartExclude comment_bar_view]
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(BaseCommon.FULL_PERCENT);
                        Row.padding({
                            left: { "id": 67109332, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109333, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            top: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109334, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.justifyContent(FlexAlign.SpaceBetween);
                        Row.alignItems(VerticalAlign.Bottom);
                        Row.backgroundColor(this.isDarkMode ? Color.Transparent : { "id": 67108986, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextArea.create({ placeholder: 'comments', text: this.content });
                        TextArea.fontColor(this.isDarkMode ? { "id": 67109273, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109274, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        TextArea.backgroundColor(this.isDarkMode ? { "id": 67109269, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109268, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        TextArea.maxLines(Common.TEXT_AREA_MAX_LINES);
                        TextArea.constraintSize({
                            minHeight: { "id": 67109330, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        TextArea.enableKeyboardOnFocus(true);
                        TextArea.maxLength(Common.TEXT_AREA_MAX_LENGTH);
                        TextArea.showCounter(this.content.length === Common.TEXT_AREA_MAX_LENGTH ? true : false);
                        TextArea.layoutWeight(1);
                        TextArea.onChange((value: string) => {
                            this.content = value;
                        });
                        TextArea.id(KEY_TEXTAREA);
                        TextArea.onAppear(() => {
                            focusControl.requestFocus(KEY_TEXTAREA);
                        });
                    }, TextArea);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // [EndExclude comment_bar_view]
                        Image.create(this.isDarkMode ? { "id": 67109380, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109381, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // [EndExclude comment_bar_view]
                        Image.width({ "id": 67109371, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        // [EndExclude comment_bar_view]
                        Image.aspectRatio(1);
                        // [EndExclude comment_bar_view]
                        Image.margin({
                            left: { "id": 67109370, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109369, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        // [EndExclude comment_bar_view]
                        Image.onClick(() => {
                            this.isMouseClick = false;
                        });
                    }, Image);
                    Row.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        Column.pop();
    }
    // [StartExclude comment_bar_view]
    getColumnHeight(): Resource {
        if (this.currentBreakpoint === Breakpoint.BREAKPOINT_LG) {
            return { "id": 67109366, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
        }
        return this.isShowInput ? { "id": 67109368, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109366, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" };
    }
    rerender() {
        this.updateDirtyElements();
    }
}
