if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommentItemView_Params {
    isFoldHorizontal?: boolean;
    currentBreakpoint?: string;
    commentItem?: CommentItemInterface;
    authorName?: ResourceStr;
    isDarkMode?: boolean;
    userStance?: StanceType;
    isFolded?: boolean;
    isLiked?: boolean;
    isFavorited?: boolean;
    likeCount?: number;
}
import { CommonConstants as BaseCommon, BreakpointType, BreakpointConstants as Breakpoint, StanceType, CommentQualityType } from "@normalized:N&&&base/Index&1.0.0";
import type { CommentItemInterface } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&detail/src/main/ets/constants/CommonConstants&1.0.0";
import { EmotionHeatmapView } from "@normalized:N&&&detail/src/main/ets/view/EmotionHeatmapView&1.0.0";
import { CommentQualityView, FoldableCommentContainer } from "@normalized:N&&&detail/src/main/ets/view/CommentQualityView&1.0.0";
import { MediaGalleryView } from "@normalized:N&&&detail/src/main/ets/view/MediaGalleryView&1.0.0";
export class CommentItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isFoldHorizontal = this.createStorageLink('isFoldHorizontal', true, "isFoldHorizontal");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.commentItem = {} as CommentItemInterface;
        this.authorName = '';
        this.isDarkMode = false;
        this.__userStance = new ObservedPropertySimplePU(StanceType.NONE, this, "userStance");
        this.__isFolded = new ObservedPropertySimplePU(true, this, "isFolded");
        this.__isLiked = new ObservedPropertySimplePU(false, this, "isLiked");
        this.__isFavorited = new ObservedPropertySimplePU(false, this, "isFavorited");
        this.__likeCount = new ObservedPropertySimplePU(0, this, "likeCount");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommentItemView_Params) {
        if (params.commentItem !== undefined) {
            this.commentItem = params.commentItem;
        }
        if (params.authorName !== undefined) {
            this.authorName = params.authorName;
        }
        if (params.isDarkMode !== undefined) {
            this.isDarkMode = params.isDarkMode;
        }
        if (params.userStance !== undefined) {
            this.userStance = params.userStance;
        }
        if (params.isFolded !== undefined) {
            this.isFolded = params.isFolded;
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
    updateStateVars(params: CommentItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isFoldHorizontal.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__userStance.purgeDependencyOnElmtId(rmElmtId);
        this.__isFolded.purgeDependencyOnElmtId(rmElmtId);
        this.__isLiked.purgeDependencyOnElmtId(rmElmtId);
        this.__isFavorited.purgeDependencyOnElmtId(rmElmtId);
        this.__likeCount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isFoldHorizontal.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__userStance.aboutToBeDeleted();
        this.__isFolded.aboutToBeDeleted();
        this.__isLiked.aboutToBeDeleted();
        this.__isFavorited.aboutToBeDeleted();
        this.__likeCount.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isFoldHorizontal: ObservedPropertyAbstractPU<boolean>;
    get isFoldHorizontal() {
        return this.__isFoldHorizontal.get();
    }
    set isFoldHorizontal(newValue: boolean) {
        this.__isFoldHorizontal.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private commentItem: CommentItemInterface;
    private authorName: ResourceStr;
    private isDarkMode: boolean;
    // 新增状态
    private __userStance: ObservedPropertySimplePU<StanceType>;
    get userStance() {
        return this.__userStance.get();
    }
    set userStance(newValue: StanceType) {
        this.__userStance.set(newValue);
    }
    private __isFolded: ObservedPropertySimplePU<boolean>; // 默认折叠
    get isFolded() {
        return this.__isFolded.get();
    }
    set isFolded(newValue: boolean) {
        this.__isFolded.set(newValue);
    }
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
    aboutToAppear() {
        // 从qualityData中读取初始折叠状态
        if (this.commentItem.qualityData) {
            this.isFolded = this.commentItem.qualityData.isFolded;
        }
        // 初始化点赞数
        this.likeCount = this.commentItem.favorCount;
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 如果有质量数据且为低质量，使用折叠容器
            if (this.commentItem.qualityData && this.commentItem.qualityData.quality === CommentQualityType.LOW) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new FoldableCommentContainer(this, {
                                    qualityData: this.commentItem.qualityData,
                                    isFolded: this.__isFolded,
                                    onFoldChange: (isFolded: boolean) => {
                                        this.isFolded = isFolded;
                                    },
                                    content: () => {
                                        this.CommentContent();
                                    }
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 73, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        qualityData: this.commentItem.qualityData,
                                        isFolded: this.isFolded,
                                        onFoldChange: (isFolded: boolean) => {
                                            this.isFolded = isFolded;
                                        },
                                        content: () => {
                                            this.CommentContent();
                                        }
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    qualityData: this.commentItem.qualityData
                                });
                            }
                        }, { name: "FoldableCommentContainer" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    // 正常显示评论内容
                    this.CommentContent.bind(this)();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    // 评论内容构建器
    CommentContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(BaseCommon.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 67109324, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.commentItem.icon);
            Image.width({ "id": 67109321, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 67109320, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.name);
            Text.fontSize({ "id": 67109322, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
            Text.margin({ left: { "id": 67109323, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.authorName === this.commentItem.name) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.borderColor(this.isDarkMode ? Color.White : { "id": 67109262, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderRadius({ "id": 67109283, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderWidth({ "id": 67109285, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.padding({ "id": 67109287, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.margin({ left: { "id": 67109286, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109253, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109284, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : { "id": 67109262, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 点赞按钮 - 心形图标
            Row.create({ space: 4 });
            // 点赞按钮 - 心形图标
            Row.onClick(() => {
                this.toggleLike();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.likeCount}`);
            Text.fontSize({ "id": 67109317, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor(this.isLiked ? '#FF6B6B' : (this.isDarkMode ? { "id": 67109273, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109270, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }));
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109250, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109319, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.fillColor(this.isLiked ? '#FF6B6B' : (this.isDarkMode ? Color.White : Color.Black));
        }, Image);
        // 点赞按钮 - 心形图标
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 收藏按钮 - 星形图标
            Row.create({ space: 4 });
            // 收藏按钮 - 星形图标
            Row.onClick(() => {
                this.toggleFavorite();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109383, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109319, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.fillColor(this.isFavorited ? '#FFB84D' : (this.isDarkMode ? Color.White : Color.Black));
        }, Image);
        // 收藏按钮 - 星形图标
        Row.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 质量标签显示
            if (this.commentItem.qualityData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new CommentQualityView(this, {
                                    qualityData: this.commentItem.qualityData
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 160, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        qualityData: this.commentItem.qualityData
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    qualityData: this.commentItem.qualityData
                                });
                            }
                        }, { name: "CommentQualityView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.content);
            Text.fontSize({ "id": 67109314, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67109315, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 媒体展示（图对图评论）
            if (this.commentItem.mediaList && this.commentItem.mediaList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.margin({ left: { "id": 67109315, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } });
                    }, Column);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MediaGalleryView(this, {
                                    mediaList: this.commentItem.mediaList,
                                    isDarkMode: this.isDarkMode
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 175, col: 11 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        mediaList: this.commentItem.mediaList,
                                        isDarkMode: this.isDarkMode
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "MediaGalleryView" });
                    }
                    Column.pop();
                });
            }
            // 情绪热力图显示
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 情绪热力图显示
            if (this.commentItem.emotionData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new EmotionHeatmapView(this, {
                                    emotionData: this.commentItem.emotionData
                                }, undefined, elmtId, () => { }, { page: "features/detail/src/main/ets/view/CommentItemView.ets", line: 186, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        emotionData: this.commentItem.emotionData
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    emotionData: this.commentItem.emotionData
                                });
                            }
                        }, { name: "EmotionHeatmapView" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: Common.TIME_POSITION_SPACE });
            Row.width(BaseCommon.FULL_PERCENT);
            Row.height({ "id": 67109363, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.justifyContent(FlexAlign.Start);
            Row.margin({
                left: { "id": 67109315, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentItem.timePosition);
            Text.fontSize({ "id": 67109362, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 67109364, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.commentItem.reviewCnt) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: Common.REVIEW_COUNT_SPACE });
                        Row.backgroundColor(this.isDarkMode ? { "id": 67109271, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109277, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.borderRadius({ "id": 67109348, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Row.padding({
                            left: { "id": 67109352, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109352, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Row.height({ "id": 67109347, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.commentItem.reviewCnt}`);
                        Text.fontSize({ "id": 67109353, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.opacity({ "id": 67109355, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109259, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109349, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(FontWeight.Normal);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.opacity({ "id": 67109351, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109259, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109349, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.opacity({ "id": 67109350, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.commentItem.reviewCnt) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: Common.REVIEW_COUNT_SPACE });
                        Column.backgroundColor(this.isDarkMode ? { "id": 67109271, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109275, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Column.borderRadius({ "id": 67109343, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Column.margin({
                            left: { "id": 67109315, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: new BreakpointType<ResourceStr>({ "id": 67109345, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, this.isFoldHorizontal ? { "id": 67109279, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" } : { "id": 67109280, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109346, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" })
                                .getValue(this.currentBreakpoint),
                            bottom: { "id": 67109357, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                        Column.alignItems(HorizontalAlign.Start);
                        Column.padding({
                            left: { "id": 67109358, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            right: { "id": 67109358, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            top: { "id": 67109359, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                            bottom: { "id": 67109359, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.commentItem.subContent);
                        Text.fontColor(this.isDarkMode ? Color.White : Color.Black);
                        Text.fontSize({ "id": 67109354, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                        Text.maxLines(Common.SUB_CONTENT_MAX_LINES);
                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 67109258, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontSize({ "id": 67109344, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontColor(this.isDarkMode ? Color.White : { "id": 67109276, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
                        Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
                    }, Text);
                    Text.pop();
                    Column.pop();
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
    rerender() {
        this.updateDirtyElements();
    }
}
