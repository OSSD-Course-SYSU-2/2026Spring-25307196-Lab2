/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BreakpointConstants as Breakpoint, CommonConstants as Common, BreakpointType } from 'base';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

// 帖子数据接口
interface PostData {
  id: number;
  content: string;
  images: string[];
  timestamp: number;
}

@Component
export struct HomePage {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = Breakpoint.BREAKPOINT_SM;
  @State bannerIndex: number = 0;
  @State showPostDialog: boolean = false;
  @State postContent: string = '';
  @State selectedImages: string[] = [];
  @StorageLink('userPosts') userPosts: PostData[] = [];

  // 轮播图数据
  private bannerImages: Resource[] = [
    $r('app.media.ic_social_circle1'),
    $r('app.media.ic_social_circle2'),
    $r('app.media.ic_social_circle3')
  ];

  build() {
    Stack({ alignContent: Alignment.BottomEnd }) {
      Column() {
        // 顶部搜索栏
        Row() {
          Image($r('app.media.ic_icon_1'))
            .width(40)
            .aspectRatio(1)
            .borderRadius(20)
            .margin({ left: 16 })

          Row() {
            Image($r('app.media.ic_toolbar_comment'))
              .width(16)
              .aspectRatio(1)
              .opacity(0.5)

            Text('搜索感兴趣的内容')
              .fontSize(14)
              .fontColor('#999999')
              .margin({ left: 8 })
          }
          .layoutWeight(1)
          .height(36)
          .backgroundColor('#F5F5F5')
          .borderRadius(18)
          .padding({ left: 12, right: 12 })
          .margin({ left: 12, right: 12 })

          Image($r('app.media.ic_toolbar_share'))
            .width(24)
            .aspectRatio(1)
            .margin({ right: 16 })
        }
        .width('100%')
        .height(56)
        .backgroundColor(Color.White)

        // 轮播图
        Swiper() {
          ForEach(this.bannerImages, (image: Resource, index: number) => {
            Image(image)
              .width('100%')
              .height(180)
              .objectFit(ImageFit.Cover)
              .borderRadius(8)
          })
        }
        .autoPlay(true)
        .interval(3000)
        .indicator(true)
        .loop(true)
        .width('100%')
        .height(180)
        .margin({ top: 8, left: 16, right: 16 })

        // 快捷入口
        Row() {
          this.ShortcutItem('推荐', $r('app.media.ic_state_fire'))
          this.ShortcutItem('关注', $r('app.media.ic_toolbar_heart'))
          this.ShortcutItem('热门', $r('app.media.ic_state_new'))
          this.ShortcutItem('同城', $r('app.media.ic_city_rank_1'))
        }
        .width('100%')
        .justifyContent(FlexAlign.SpaceAround)
        .padding({ top: 16, bottom: 16 })
        .backgroundColor(Color.White)
        .margin({ top: 8 })

        // 推荐内容列表
        Column() {
          Text('推荐内容')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 16, bottom: 12, left: 16 })
            .width('100%')

          // 内容卡片列表
          List() {
            ForEach([1, 2, 3], (item: number) => {
              ListItem() {
                this.ContentCard()
              }
            })
          }
          .width('100%')
          .layoutWeight(1)
          .padding({ left: 16, right: 16 })
        }
        .layoutWeight(1)
        .backgroundColor('#F5F5F5')
      }
      .width('100%')
      .height('100%')
      .backgroundColor('#F5F5F5')

      // 发帖按钮
      Button({ type: ButtonType.Circle }) {
        Text('+')
          .fontSize(32)
          .fontColor(Color.White)
          .fontWeight(FontWeight.Bold)
      }
      .width(56)
      .height(56)
      .backgroundColor('#FF6B6B')
      .shadow({
        radius: 12,
        color: '#40FF6B6B',
        offsetX: 0,
        offsetY: 4
      })
      .margin({ right: 20, bottom: 140 })
      .onClick(() => {
        this.showPostDialog = true;
      })

      // 发帖对话框
      if (this.showPostDialog) {
        this.PostDialog()
      }
    }
    .width('100%')
    .height('100%')
  }

  @Builder
  PostDialog() {
    Column() {
      Column() {
        // 标题栏
        Row() {
          Text('取消')
            .fontSize(16)
            .fontColor('#666666')
            .onClick(() => {
              this.showPostDialog = false;
              this.postContent = '';
              this.selectedImages = [];
            })

          Text('发帖')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .layoutWeight(1)
            .textAlign(TextAlign.Center)

          Text('发布')
            .fontSize(16)
            .fontColor('#FF6B6B')
            .fontWeight(FontWeight.Bold)
            .onClick(() => {
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
            })
        }
        .width('100%')
        .padding(16)

        // 内容输入
        TextArea({ placeholder: '分享你的想法...', text: this.postContent })
          .width('100%')
          .height(150)
          .backgroundColor('#F5F5F5')
          .borderRadius(8)
          .padding(12)
          .margin({ top: 8, left: 16, right: 16 })
          .onChange((value: string) => {
            this.postContent = value;
          })

        // 图片选择
        Column() {
          Text('添加图片')
            .fontSize(14)
            .fontColor('#666666')
            .margin({ top: 16, bottom: 8 })
            .width('100%')

          // 已选择的图片
          if (this.selectedImages.length > 0) {
            Grid() {
              ForEach(this.selectedImages, (imageUri: string, index: number) => {
                GridItem() {
                  Stack({ alignContent: Alignment.TopEnd }) {
                    Image(imageUri)
                      .width(80)
                      .height(80)
                      .objectFit(ImageFit.Cover)
                      .borderRadius(8)

                    Text('×')
                      .fontSize(14)
                      .fontColor(Color.White)
                      .backgroundColor('#FF6B6B')
                      .borderRadius(10)
                      .width(20)
                      .height(20)
                      .textAlign(TextAlign.Center)
                      .margin({ top: -4, right: -4 })
                      .onClick(() => {
                        this.selectedImages = this.selectedImages.filter((uri: string, i: number) => i !== index);
                      })
                  }
                  .width(80)
                  .height(80)
                }
              })
            }
            .columnsTemplate('1fr 1fr 1fr 1fr')
            .rowsGap(8)
            .columnsGap(8)
            .width('100%')
            .height(88)
            .padding({ left: 16, right: 16 })
          }

          // 添加图片按钮
          Row() {
            Button({ type: ButtonType.Normal }) {
              Row() {
                Image($r('app.media.ic_toolbar_share'))
                  .width(20)
                  .height(20)
                  .fillColor('#666666')
                  .rotate({ angle: 45 })

                Text('选择图片')
                  .fontSize(14)
                  .fontColor('#666666')
                  .margin({ left: 8 })
              }
            }
            .width(120)
            .height(40)
            .backgroundColor('#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectImages();
            })

            Text(`${this.selectedImages.length}/9`)
              .fontSize(12)
              .fontColor('#999999')
              .margin({ left: 8 })
          }
          .width('100%')
          .padding({ left: 16, right: 16, top: 8 })
          .justifyContent(FlexAlign.Start)
        }
        .width('100%')
      }
      .width('100%')
      .backgroundColor(Color.White)
      .borderRadius({ topLeft: 16, topRight: 16 })
    }
    .width('100%')
    .height('70%')
    .backgroundColor('rgba(0, 0, 0, 0.4)')
    .justifyContent(FlexAlign.End)
    .onClick(() => {
      this.showPostDialog = false;
    })
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
    } catch (err) {
      console.error('Image selection failed:', err);
    }
  }

  @Builder
  ShortcutItem(title: string, icon: Resource) {
    Column() {
      Image(icon)
        .width(40)
        .aspectRatio(1)

      Text(title)
        .fontSize(12)
        .margin({ top: 4 })
        .fontColor('#333333')
    }
    .width(60)
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  ContentCard() {
    Column() {
      Row() {
        Image($r('app.media.ic_icon_1'))
          .width(36)
          .aspectRatio(1)
          .borderRadius(18)

        Column() {
          Text('用户名称')
            .fontSize(14)
            .fontWeight(FontWeight.Bold)

          Text('2小时前')
            .fontSize(12)
            .fontColor('#999999')
        }
        .alignItems(HorizontalAlign.Start)
        .margin({ left: 8 })
        .layoutWeight(1)
      }
      .width('100%')

      Text('这是一条推荐内容的描述文字，展示在首页的推荐列表中。')
        .fontSize(14)
        .margin({ top: 8 })
        .maxLines(2)
        .textOverflow({ overflow: TextOverflow.Ellipsis })

      Image($r('app.media.ic_social_circle1'))
        .width('100%')
        .height(120)
        .objectFit(ImageFit.Cover)
        .borderRadius(8)
        .margin({ top: 8 })

      Row() {
        Text('👍 128')
          .fontSize(12)
          .fontColor('#666666')

        Text('💬 36')
          .fontSize(12)
          .fontColor('#666666')
          .margin({ left: 16 })
      }
      .width('100%')
      .margin({ top: 8 })
    }
    .width('100%')
    .padding(12)
    .backgroundColor(Color.White)
    .borderRadius(8)
    .margin({ bottom: 8 })
  }
}