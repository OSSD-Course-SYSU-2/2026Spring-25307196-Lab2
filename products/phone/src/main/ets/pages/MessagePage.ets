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

@Component
export struct MessagePage {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = Breakpoint.BREAKPOINT_SM;

  build() {
    Column() {
      // 顶部标题栏
      Row() {
        Text('消息')
          .fontSize(18)
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)

        Image($r('app.media.ic_toolbar_comment'))
          .width(20)
          .aspectRatio(1)
      }
      .width('100%')
      .height(48)
      .padding({ left: 16, right: 16 })
      .backgroundColor(Color.White)

      // 消息分类
      Row() {
        this.MessageCategory('互动', '128', $r('app.media.ic_toolbar_heart'))
        this.MessageCategory('通知', '36', $r('app.media.ic_toolbar_comment'))
        this.MessageCategory('私信', '5', $r('app.media.ic_icon_1'))
        this.MessageCategory('系统', '12', $r('app.media.ic_toolbar_share'))
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .padding({ top: 12, bottom: 12 })
      .backgroundColor(Color.White)
      .margin({ top: 4 })

      // 消息列表
      List() {
        ForEach([1, 2, 3, 4, 5], (item: number) => {
          ListItem() {
            this.MessageItem()
          }
        })
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

  @Builder
  MessageCategory(title: string, count: string, icon: Resource) {
    Column() {
      Stack({ alignContent: Alignment.TopEnd }) {
        Image(icon)
          .width(40)
          .aspectRatio(1)

        if (count !== '0') {
          Text(count)
            .fontSize(10)
            .fontColor(Color.White)
            .backgroundColor('#FF0000')
            .borderRadius(10)
            .padding({ left: 6, right: 6, top: 2, bottom: 2 })
            .margin({ top: -4, right: -4 })
        }
      }
      .width(40)
      .height(40)

      Text(title)
        .fontSize(11)
        .margin({ top: 4 })
        .fontColor('#333333')
    }
    .width(56)
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  MessageItem() {
    Row() {
      Image($r('app.media.ic_icon_1'))
        .width(44)
        .aspectRatio(1)
        .borderRadius(22)

      Column() {
        Row() {
          Text('用户昵称')
            .fontSize(15)
            .fontWeight(FontWeight.Bold)
            .layoutWeight(1)

          Text('10:30')
            .fontSize(11)
            .fontColor('#999999')
        }
        .width('100%')

        Text('赞了你的评论：这个照片拍得真不错！')
          .fontSize(13)
          .fontColor('#666666')
          .margin({ top: 4 })
          .maxLines(1)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)
      .margin({ left: 10 })
    }
    .width('100%')
    .padding(10)
    .backgroundColor(Color.White)
    .borderRadius(8)
    .margin({ bottom: 6 })
  }
}