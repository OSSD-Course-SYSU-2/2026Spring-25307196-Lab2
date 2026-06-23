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

import { BreakpointConstants as Breakpoint, CommonConstants as Common } from 'base';

// 菜单项接口
interface MenuItem {
  icon: Resource;
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

@Component
export struct MinePage {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = Breakpoint.BREAKPOINT_SM;
  @StorageLink('userPosts') userPosts: PostData[] = [];
  @State showMyPosts: boolean = false;

  // 菜单数据
  private contentMenuItems: MenuItem[] = [
    { icon: $r('app.media.ic_toolbar_heart'), title: '我的发布', count: '36' },
    { icon: $r('app.media.ic_state_favor'), title: '我的收藏', count: '128' },
    { icon: $r('app.media.ic_toolbar_comment'), title: '我的评论', count: '256' }
  ];

  private moreMenuItems: MenuItem[] = [
    { icon: $r('app.media.ic_toolbar_share'), title: '浏览历史', count: '' },
    { icon: $r('app.media.ic_state_new'), title: '账号设置', count: '' },
    { icon: $r('app.media.ic_state_fire'), title: '帮助与反馈', count: '' }
  ];

  build() {
    if (this.showMyPosts) {
      this.MyPostsPage()
    } else {
      Column() {
        // 用户信息卡片
        Column() {
          Row() {
            Image($r('app.media.ic_icon_1'))
              .width(56)
              .aspectRatio(1)
              .borderRadius(28)

            Column() {
              Text('用户昵称')
                .fontSize(18)
                .fontWeight(FontWeight.Bold)
                .fontColor(Color.White)

              Text('ID: 123456')
                .fontSize(11)
                .fontColor(Color.White)
                .opacity(0.8)
                .margin({ top: 2 })
            }
            .alignItems(HorizontalAlign.Start)
            .margin({ left: 12 })
            .layoutWeight(1)

            Image($r('app.media.ic_toolbar_share'))
              .width(20)
              .aspectRatio(1)
          }
          .width('100%')
          .padding({ left: 16, right: 16, top: 12, bottom: 8 })

          // 数据统计
          Row() {
            this.StatItem('关注', '128')
            this.StatItem('粉丝', '1.2万')
            this.StatItem('获赞', '3.6万')
            this.StatItem('收藏', '256')
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceAround)
          .padding({ top: 8, bottom: 8 })
        }
        .width('100%')
        .linearGradient({
          angle: 135,
          colors: [['#667eea', 0], ['#764ba2', 1]]
        })

        // 功能菜单
        Column() {
          this.MenuSection('内容管理', this.contentMenuItems)
          this.MenuSection('更多功能', this.moreMenuItems)
        }
        .width('100%')
        .layoutWeight(1)
        .padding({ left: 16, right: 16, top: 8 })
        .backgroundColor('#F5F5F5')
      }
      .width('100%')
      .height('100%')
      .padding({ top: 8 })
      .backgroundColor('#F5F5F5')
    }
  }

  @Builder
  StatItem(title: string, count: string) {
    Column() {
      Text(count)
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.White)

      Text(title)
        .fontSize(11)
        .fontColor(Color.White)
        .opacity(0.8)
        .margin({ top: 2 })
    }
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  MenuSection(title: string, items: MenuItem[]) {
    Column() {
      Text(title)
        .fontSize(13)
        .fontColor('#999999')
        .margin({ top: 8, bottom: 6, left: 16 })
        .width('100%')

      Column() {
        ForEach(items, (item: MenuItem, index: number) => {
          Column() {
            this.MenuItem(item.icon, item.title, item.count)
            if (index < items.length - 1) {
              Divider()
                .width('100%')
                .height(0.5)
                .color('#F0F0F0')
                .margin({ left: 52 })
            }
          }
        })
      }
      .width('100%')
      .backgroundColor(Color.White)
      .borderRadius(8)
    }
    .width('100%')
  }

  @Builder
  MenuItem(icon: Resource, title: string, count: string) {
    Row() {
      Image(icon)
        .width(22)
        .height(22)
        .margin({ left: 16 })

      Text(title)
        .fontSize(15)
        .margin({ left: 12 })
        .layoutWeight(1)

      if (count !== '') {
        Text(count)
          .fontSize(13)
          .fontColor('#999999')
          .margin({ right: 8 })
      }

      Image($r('app.media.ic_toolbar_share'))
        .width(14)
        .height(14)
        .opacity(0.3)
        .rotate({ angle: 90 })
        .margin({ right: 16 })
    }
    .width('100%')
    .height(48)
    .alignItems(VerticalAlign.Center)
    .onClick(() => {
      if (title === '我的发布') {
        this.showMyPosts = true;
      }
    })
  }

  @Builder
  MyPostsPage() {
    Column() {
      Row() {
        Column() {
          Image($r('app.media.ic_toolbar_share'))
            .width(24)
            .height(24)
            .rotate({ angle: 180 })
        }
        .width(40)
        .height(40)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.showMyPosts = false;
        })

        Text('我的发布')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)
          .textAlign(TextAlign.Center)

        Blank()
          .width(40)
      }
      .width('100%')
      .height(56)
      .padding({ left: 8, right: 8 })
      .backgroundColor(Color.White)

      if (this.userPosts.length === 0) {
        Column() {
          Text('暂无发布内容')
            .fontSize(16)
            .fontColor('#999999')
            .margin({ top: 100 })

          Text('点击首页右下角的"+"按钮发布内容')
            .fontSize(14)
            .fontColor('#CCCCCC')
            .margin({ top: 8 })
        }
        .width('100%')
        .layoutWeight(1)
        .justifyContent(FlexAlign.Center)
      } else {
        List() {
          ForEach(this.userPosts, (post: PostData) => {
            ListItem() {
              this.PostItem(post)
            }
          })
        }
        .width('100%')
        .layoutWeight(1)
        .padding({ left: 16, right: 16, top: 8 })
      }
    }
    .width('100%')
    .height('100%')
    .padding({ top: 8 })
    .backgroundColor('#F5F5F5')
  }

  @Builder
  PostItem(post: PostData) {
    Column() {
      Row() {
        Image($r('app.media.ic_icon_1'))
          .width(36)
          .aspectRatio(1)
          .borderRadius(18)

        Column() {
          Text('用户昵称')
            .fontSize(14)
            .fontWeight(FontWeight.Bold)

          Text(this.FormatTime(post.timestamp))
            .fontSize(12)
            .fontColor('#999999')
        }
        .alignItems(HorizontalAlign.Start)
        .margin({ left: 8 })
        .layoutWeight(1)
      }
      .width('100%')

      if (post.content) {
        Text(post.content)
          .fontSize(14)
          .margin({ top: 8 })
          .width('100%')
      }

      if (post.images.length > 0) {
        Row() {
          ForEach(post.images.slice(0, 3), (imageUri: string) => {
            Image(imageUri)
              .width(80)
              .height(80)
              .objectFit(ImageFit.Cover)
              .borderRadius(8)
              .margin({ right: 8 })
          })
        }
        .width('100%')
        .margin({ top: 8 })
      }
    }
    .width('100%')
    .padding(12)
    .backgroundColor(Color.White)
    .borderRadius(8)
    .margin({ bottom: 8 })
    .alignItems(HorizontalAlign.Start)
  }

  private FormatTime(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    return `${days}天前`;
  }
}