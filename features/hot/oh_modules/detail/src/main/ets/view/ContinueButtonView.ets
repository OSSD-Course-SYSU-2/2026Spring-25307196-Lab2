/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { ContinueService } from 'base';

/**
 * 流转按钮组件
 * 悬浮按钮，点击显示流转面板
 */
@Component
export struct ContinueButtonView {
  @Link showContinuePanel: boolean;
  @State deviceCount: number = 0;
  
  private continueService: ContinueService = ContinueService.getInstance();

  aboutToAppear(): void {
    // 初始化流转服务
    this.continueService.initialize().then(() => {
      const devices = this.continueService.getAvailableDevices();
      this.deviceCount = devices.length;
    });
  }

  build() {
    Stack({ alignContent: Alignment.BottomEnd }) {
      // 流转按钮
      Button({ type: ButtonType.Circle }) {
        Badge({
          count: this.deviceCount,
          position: BadgePosition.RightTop,
          style: { badgeSize: 16, badgeColor: '#FF4D4F' }
        }) {
          SymbolGlyph($r('sys.symbol.arrow_left_arrow_right'))
            .fontSize(24)
            .fontColor([Color.White])
        }
      }
      .width(56)
      .height(56)
      .backgroundColor('#007DFF')
      .shadow({
        radius: 12,
        color: '#40007DFF',
        offsetX: 0,
        offsetY: 4
      })
      .margin({ right: 20, bottom: 20 })
      .onClick(() => {
        this.showContinuePanel = true;
      })
    }
  }
}
