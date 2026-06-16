if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CardItemView_Params {
    currentBreakpoint?: string;
    index?: number;
    item?: FollowItemInterface;
    name?: string;
    isLiked?: boolean;
    isFavorited?: boolean;
    likeCount?: number;
}
import app from "@native:system.app";
import { BreakpointConstants as Breakpoint, CommonConstants as BaseCommon, BreakpointType } from "@normalized:N&&&base/Index&1.0.0";
import { CommonConstants as Common } from "@normalized:N&&&hot/src/main/ets/constants/CommonConstants&1.0.0";
import { FOLLOW_LIST, TITLE_DETAIL_LIST } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
import type { FollowItemInterface } from "@normalized:N&&&hot/src/main/ets/model/FollowModel&1.0.0";
export class CardItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', Breakpoint.BREAKPOINT_SM, "currentBreakpoint");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.item = FOLLOW_LIST[0];
        this.name = '';
        this.__isLiked = new ObservedPropertySimplePU(false, this, "isLiked");
        this.__isFavorited = new ObservedPropertySimplePU(false, this, "isFavorited");
        this.__likeCount = new ObservedPropertySimplePU(0, this, "likeCount");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CardItemView_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.name !== undefined) {
            this.name = params.name;
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
    updateStateVars(params: CardItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__isLiked.purgeDependencyOnElmtId(rmElmtId);
        this.__isFavorited.purgeDependencyOnElmtId(rmElmtId);
        this.__likeCount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        this.__isLiked.aboutToBeDeleted();
        this.__isFavorited.aboutToBeDeleted();
        this.__likeCount.aboutToBeDeleted();
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
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private item: FollowItemInterface;
    private name: string;
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
    aboutToAppear(): void {
        app.setImageRawDataCacheSize(1024 * 1024 * 100);
        app.setImageCacheCount(100);
        // 初始化点赞数
        this.likeCount = this.item.favourCount;
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
            Column.padding({
                top: { "id": 67109011, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                left: new BreakpointType({ "id": 67109019, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109012, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109009, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 67109019, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109012, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }, { "id": 67109009, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                bottom: { "id": 67109010, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Column.borderRadius({ "id": 67109000, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.index === 0 ? this.item.icon : TITLE_DETAIL_LIST[this.index].icon);
            Image.width({ "id": 67109008, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 67109007, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.autoResize(true);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({
                left: { "id": 67109021, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.index === 0 ? this.item.name : TITLE_DETAIL_LIST[this.index].name);
            Text.fontSize({ "id": 67109020, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.date);
            Text.fontSize({ "id": 67109003, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108968, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109120, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.width({ "id": 67109013, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.alignContent(Alignment.BottomStart);
            Stack.margin({
                top: { "id": 67109014, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109014, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Stack.constraintSize({
                maxHeight: Common.FOLLOW_ITEM_PICTURE_MAX_HEIGHT
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.item.picture);
            Image.width(BaseCommon.FULL_PERCENT);
            Image.objectFit(ImageFit.Cover);
            Image.autoResize(true);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.backgroundColor({ "id": 67108970, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.padding({
                left: { "id": 67109025, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109025, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                top: { "id": 67109026, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109026, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Row.borderRadius({ "id": 67109022, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Row.margin({
                left: { "id": 67109024, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                bottom: { "id": 67109024, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.type);
            Text.fontSize({ "id": 67109023, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(true);
            Divider.width({ "id": 67109006, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Divider.height({ "id": 67109004, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Divider.margin({
                left: { "id": 67109005, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                right: { "id": 67109005, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
            Divider.color(Color.White);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.subType);
            Text.fontSize({ "id": 67109023, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.content);
            Text.maxLines(1);
            Text.layoutWeight(1);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            Text.fontColor({ "id": 67108966, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109001, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 67108958, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108967, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontSize({ "id": 67109001, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontWeight(BaseCommon.FONT_WEIGHT_500);
            Text.margin({
                left: { "id": 67109002, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(BaseCommon.FULL_PERCENT);
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({
                top: { "id": 67109018, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 分享按钮
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109251, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.height({ "id": 67109016, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.item.shareCount}`);
            Text.fontSize({ "id": 67109015, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108969, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67109017, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        // 分享按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 评论按钮
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109377, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.height({ "id": 67109016, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.item.viewCount}`);
            Text.fontSize({ "id": 67109015, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor({ "id": 67108969, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67109017, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        // 评论按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 点赞按钮
            Row.create();
            // 点赞按钮
            Row.onClick(() => {
                this.toggleLike();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109250, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.height({ "id": 67109016, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.likeCount}`);
            Text.fontSize({ "id": 67109015, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.fontColor(this.isLiked ? '#FF6B6B' : { "id": 67108969, "type": 10001, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Text.margin({
                left: { "id": 67109017, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        // 点赞按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 收藏按钮 - 星形图标
            Row.create();
            // 收藏按钮 - 星形图标
            Row.onClick(() => {
                this.toggleFavorite();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 67109383, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.height({ "id": 67109016, "type": 10002, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" });
            Image.aspectRatio(1);
            Image.fillColor(this.isFavorited ? '#FFB84D' : Color.Black);
        }, Image);
        // 收藏按钮 - 星形图标
        Row.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
