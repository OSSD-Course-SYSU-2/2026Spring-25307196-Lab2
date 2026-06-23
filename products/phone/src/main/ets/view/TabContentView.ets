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
import { HotPointPage } from 'hot';
import { ContinueButtonView, ContinuePanelView } from 'detail';
import { BarItemInterface } from '../model/TabBarModel';
import { TabBarViewModel } from '../viewmodel/TabBarViewModel';
import { HomePage } from '../pages/HomePage';
import { MessagePage } from '../pages/MessagePage';
import { MinePage } from '../pages/MinePage';

@Component
export struct TabContentView {
  @StorageLink('currentBreakpoint') currentBreakpoint: string = Breakpoint.BREAKPOINT_LG;
  @State currentIndex: number = 1;
  @State showContinuePanel: boolean = false;
  tabBarsInfo: TabBarViewModel = new TabBarViewModel();

  @Builder
  TabBarBuilder(item: BarItemInterface, index: number) {
    Column() {
      Image(index !== this.currentIndex ? item.icon : item.iconSelected)
        .width($r('app.float.icon_tab_width'))
        .aspectRatio(1)
      Text(item.name)
        .fontSize($r('app.float.tab_font_size'))
        .fontWeight(Common.FONT_WEIGHT_500)
        .fontColor(index === this.currentIndex ? $r('app.color.tab_select_color') : $r('app.color.tab_normal_color'))
    }
    .height(Common.FULL_PERCENT)
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  DefaultTabBuilder(name: Resource) {
    Column() {
      Text(name)
        .fontSize($r('app.float.default_tab_font_size'))
        .fontWeight(Common.FONT_WEIGHT_700)
    }
    .justifyContent(FlexAlign.Center)
    .width(Common.FULL_PERCENT)
    .height(Common.FULL_PERCENT)
    .backgroundColor(Color.White)
  }

  build() {
    Stack({ alignContent: Alignment.BottomEnd }) {
      Column() {
        Tabs({
          barPosition: this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? BarPosition.Start : BarPosition.End,
          index: this.currentIndex
        }) {
          TabContent() {
            HomePage()
          }
          .tabBar(this.TabBarBuilder(this.tabBarsInfo.getTabList()[0], 0))

          TabContent() {
            HotPointPage()
          }
          .tabBar(this.TabBarBuilder(this.tabBarsInfo.getTabList()[1], 1))

          TabContent() {
            MessagePage()
          }
          .tabBar(this.TabBarBuilder(this.tabBarsInfo.getTabList()[2], 2))

          TabContent() {
            MinePage()
          }
          .tabBar(this.TabBarBuilder(this.tabBarsInfo.getTabList()[3], 3))
        }
        .vertical(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG)
        .onChange((index: number) => {
          this.currentIndex = index;
        })
        .barHeight(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ? Common.HALF_PERCENT : $r('app.float.bar_height'))
        .barWidth(this.currentBreakpoint === Breakpoint.BREAKPOINT_LG ?
          $r('app.float.tab_bar_width') : Common.FULL_PERCENT)
        .scrollable(false)
        .height(Common.FULL_PERCENT)
      }
      .backgroundColor($r('app.color.bar_background_color'))
      .padding({ bottom: this.currentBreakpoint !== Breakpoint.BREAKPOINT_LG ?
        $r('app.float.tab_content_pb') : $r('app.float.zero') })
      .height(Common.FULL_PERCENT)

      // 流转悬浮按钮
      ContinueButtonView({ showContinuePanel: $showContinuePanel })

      // 流转面板
      if (this.showContinuePanel) {
        Column() {
          Blank()
          
          ContinuePanelView({ isVisible: $showContinuePanel })
            .height('70%')
        }
        .width('100%')
        .height('100%')
        .backgroundColor('rgba(0, 0, 0, 0.4)')
        .onClick(() => {
          this.showContinuePanel = false;
        })
      }
    }
    .width('100%')
    .height('100%')
  }
}