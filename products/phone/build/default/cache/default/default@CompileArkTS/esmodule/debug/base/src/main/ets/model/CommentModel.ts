import { StanceType, EmotionType, CommentQualityType, MediaType, MediaCategory } from "@normalized:N&&&base/src/main/ets/viewmodel/CommentViewModel&1.0.0";
import type { CommentItemInterface, StanceData, EmotionData, QualityData, MediaData } from "@normalized:N&&&base/src/main/ets/viewmodel/CommentViewModel&1.0.0";
// 创建情绪分布Map的辅助函数
function createEmotionDistribution(angry: number, agree: number, tease: number, rational: number, neutral: number): Map<EmotionType, number> {
    const distribution = new Map<EmotionType, number>();
    distribution.set(EmotionType.ANGRY, angry);
    distribution.set(EmotionType.AGREE, agree);
    distribution.set(EmotionType.TEASE, tease);
    distribution.set(EmotionType.RATIONAL, rational);
    distribution.set(EmotionType.NEUTRAL, neutral);
    return distribution;
}
export const COMMENT_LIST: CommentItemInterface[] = [
    {
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109173, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 41,
        content: { "id": 67109161, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109180, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 123,
        subContent: { "id": 67109179, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 争议话题，带观点站队
        isControversial: true,
        stanceData: {
            userStance: StanceType.NONE,
            supportCount: 156,
            opposeCount: 89,
            neutralCount: 45,
            totalCount: 290
        } as StanceData,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 75,
            emotionDistribution: createEmotionDistribution(15, 35, 20, 45, 25)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['深度分析', '专业评论'],
            isFolded: false
        } as QualityData
    },
    {
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109174, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 36,
        content: { "id": 67109162, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109181, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 12,
        subContent: { "id": 67109179, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.AGREE,
            intensity: 60,
            emotionDistribution: createEmotionDistribution(5, 55, 15, 20, 5)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    {
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109175, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 432,
        content: { "id": 67109163, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 争议话题
        isControversial: true,
        stanceData: {
            userStance: StanceType.NONE,
            supportCount: 234,
            opposeCount: 198,
            neutralCount: 67,
            totalCount: 499
        } as StanceData,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.ANGRY,
            intensity: 85,
            emotionDistribution: createEmotionDistribution(60, 10, 5, 15, 10)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['深度分析'],
            isFolded: false
        } as QualityData
    },
    {
        icon: { "id": 67109222, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109172, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 33,
        content: { "id": 67109132, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.TEASE,
            intensity: 50,
            emotionDistribution: createEmotionDistribution(10, 20, 50, 10, 10)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    {
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109176, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 6,
        content: { "id": 67109133, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109183, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.NEUTRAL,
            intensity: 30,
            emotionDistribution: createEmotionDistribution(5, 10, 10, 15, 60)
        } as EmotionData,
        // 低质量评论（水评）
        qualityData: {
            quality: CommentQualityType.LOW,
            tags: [],
            isFolded: true,
            foldReason: '内容过短，疑似水评'
        } as QualityData
    },
    {
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109167, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 5,
        content: { "id": 67109134, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109184, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.ANGRY,
            intensity: 90,
            emotionDistribution: createEmotionDistribution(80, 5, 5, 5, 5)
        } as EmotionData,
        // 低质量评论（引战）
        qualityData: {
            quality: CommentQualityType.LOW,
            tags: [],
            isFolded: true,
            foldReason: '疑似引战言论'
        } as QualityData
    },
    {
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109168, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 33,
        content: { "id": 67109135, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        timePosition: { "id": 67109185, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 65,
            emotionDistribution: createEmotionDistribution(10, 25, 15, 50, 10)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    // 图对图评论示例 - 同款风景对比
    {
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109173, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 128,
        content: '我也拍了一张同款风景，大家看看像不像！',
        timePosition: { "id": 67109180, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 45,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.AGREE,
            intensity: 70,
            emotionDistribution: createEmotionDistribution(5, 60, 15, 15, 5)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData,
        // 媒体列表 - 同款风景图
        mediaList: [
            {
                type: MediaType.IMAGE,
                url: { "id": 67109235, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                category: MediaCategory.SAME_SCENE,
                description: '同款风景对比',
                width: 800,
                height: 600
            } as MediaData
        ]
    },
    // 图对图评论示例 - 搞笑梗图
    {
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109174, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 256,
        content: '看到这个我就想到了这个表情包哈哈哈',
        timePosition: { "id": 67109181, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 89,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.TEASE,
            intensity: 80,
            emotionDistribution: createEmotionDistribution(5, 20, 65, 5, 5)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData,
        // 媒体列表 - 搞笑梗图
        mediaList: [
            {
                type: MediaType.IMAGE,
                url: { "id": 67109245, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                category: MediaCategory.FUNNY_MEME,
                description: '搞笑梗图',
                width: 600,
                height: 600
            } as MediaData
        ]
    },
    // 图对图评论示例 - 表情包回复
    {
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109175, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 88,
        content: '',
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.TEASE,
            intensity: 60,
            emotionDistribution: createEmotionDistribution(5, 15, 60, 10, 10)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData,
        // 媒体列表 - 表情包
        mediaList: [
            {
                type: MediaType.STICKER,
                url: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                width: 120,
                height: 120
            } as MediaData
        ]
    },
    // 图对图评论示例 - 多图对比
    {
        icon: { "id": 67109222, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109172, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 312,
        content: '来个多图对比，看看哪个更好看',
        timePosition: { "id": 67109182, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 156,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 55,
            emotionDistribution: createEmotionDistribution(10, 30, 20, 30, 10)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['多图对比'],
            isFolded: false
        } as QualityData,
        // 媒体列表 - 多张图片
        mediaList: [
            {
                type: MediaType.IMAGE,
                url: { "id": 67109207, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                category: MediaCategory.SAME_SCENE,
                description: '风景图1',
                width: 800,
                height: 600
            } as MediaData,
            {
                type: MediaType.IMAGE,
                url: { "id": 67109208, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                category: MediaCategory.SAME_SCENE,
                description: '风景图2',
                width: 800,
                height: 600
            } as MediaData,
            {
                type: MediaType.IMAGE,
                url: { "id": 67109209, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
                category: MediaCategory.SAME_SCENE,
                description: '风景图3',
                width: 800,
                height: 600
            } as MediaData
        ]
    },
    // 技术分析评论
    {
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109480, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 456,
        content: '从技术角度分析，这张照片的曝光控制非常精准，高光和暗部细节都保留得很好。使用了渐变滤镜平衡天空和地面的光比，后期处理也很克制，没有过度调色。',
        timePosition: { "id": 67109500, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 89,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 85,
            emotionDistribution: createEmotionDistribution(5, 30, 10, 70, 5)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['技术分析', '专业评论'],
            isFolded: false
        } as QualityData
    },
    // 情感共鸣评论
    {
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109481, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 678,
        content: '看到这张照片，想起了和爷爷一起在老家的日子。那时候院子里的老树也是这样，阳光洒下来，一切都那么安详。谢谢作者让我找回了这份珍贵的记忆。',
        timePosition: { "id": 67109501, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 234,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.AGREE,
            intensity: 75,
            emotionDistribution: createEmotionDistribution(5, 65, 10, 15, 5)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['情感共鸣'],
            isFolded: false
        } as QualityData
    },
    // 建设性批评
    {
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109482, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 234,
        content: '整体构图不错，但有几个小建议：1. 前景的树枝有点抢眼，可以考虑后期处理一下；2. 地平线稍微有点倾斜，建议校正；3. 天空的云层可以再提亮一些，增加层次感。',
        timePosition: { "id": 67109502, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 67,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 70,
            emotionDistribution: createEmotionDistribution(10, 20, 15, 60, 15)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['建设性建议'],
            isFolded: false
        } as QualityData
    },
    // 简短赞美
    {
        icon: { "id": 67109221, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109483, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 89,
        content: '太美了！每一帧都是壁纸级别',
        timePosition: { "id": 67109494, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.AGREE,
            intensity: 65,
            emotionDistribution: createEmotionDistribution(5, 55, 20, 10, 10)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    // 互动提问
    {
        icon: { "id": 67109213, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109484, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 145,
        content: '请问这是在哪个城市拍的？建筑风格很有特色，想了解一下背后的历史文化。另外拍摄时间是什么时候？光线看起来很特别。',
        timePosition: { "id": 67109495, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 45,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 60,
            emotionDistribution: createEmotionDistribution(5, 25, 15, 45, 10)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    // 搞笑调侃
    {
        icon: { "id": 67109210, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109485, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 567,
        content: '这构图绝了！我上次去拍，三脚架还没架好，太阳就下山了😂 作者是不是有什么秘诀？求传授！',
        timePosition: { "id": 67109496, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 123,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.TEASE,
            intensity: 70,
            emotionDistribution: createEmotionDistribution(5, 20, 60, 10, 5)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    // 专业设备讨论
    {
        icon: { "id": 67109211, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109486, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 345,
        content: '看EXIF信息应该是全画幅相机拍的，焦段在35-50mm之间，光圈不大不小正好。这种画质应该是中高端机型，镜头素质也不错。后期风格有点像胶片模拟。',
        timePosition: { "id": 67109497, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 78,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 75,
            emotionDistribution: createEmotionDistribution(5, 20, 10, 70, 5)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['器材分析'],
            isFolded: false
        } as QualityData
    },
    // 系列作品期待
    {
        icon: { "id": 67109212, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109487, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 234,
        content: '这个系列拍得太棒了！已经关注了，期待后续作品。建议可以出个拍摄手记，分享一下创作思路和拍摄过程，相信很多人会感兴趣。',
        timePosition: { "id": 67109498, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 56,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.AGREE,
            intensity: 70,
            emotionDistribution: createEmotionDistribution(5, 60, 15, 15, 5)
        } as EmotionData,
        // 正常质量评论
        qualityData: {
            quality: CommentQualityType.NORMAL,
            tags: [],
            isFolded: false
        } as QualityData
    },
    // 艺术角度点评
    {
        icon: { "id": 67109224, "type": 20000, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        name: { "id": 67109488, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        favorCount: 456,
        content: '从艺术史的角度看，这组作品有着印象派的光影处理特点，同时又融入了现代摄影的精确构图。色彩运用克制而富有表现力，空间层次处理得当，具有很强的视觉叙事性。',
        timePosition: { "id": 67109499, "type": 10003, params: [], "bundleName": "com.huawei.multicommunityapplication", "moduleName": "phone" },
        reviewCnt: 89,
        // 情绪分析数据
        emotionData: {
            emotion: EmotionType.RATIONAL,
            intensity: 80,
            emotionDistribution: createEmotionDistribution(5, 25, 10, 70, 10)
        } as EmotionData,
        // 高质量评论
        qualityData: {
            quality: CommentQualityType.HIGH,
            tags: ['艺术评论', '深度分析'],
            isFolded: false
        } as QualityData
    }
];
