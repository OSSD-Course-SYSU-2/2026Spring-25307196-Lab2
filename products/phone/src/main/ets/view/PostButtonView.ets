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

/**
 * 发帖按钮组件
 * 悬浮按钮，点击打开发帖页面
 */
@Component
export struct PostButtonView {
  @Link showPostPage: boolean;

  build() {
    Stack({ alignContent: Alignment.BottomEnd }) {
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
      .margin({ right: 20, bottom: 150 })
      .onClick(() => {
        this.showPostPage = true;
      })
    }
  }
}