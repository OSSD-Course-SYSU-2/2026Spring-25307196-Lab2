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

import { CommonConstants as BaseCommon, BreakpointConstants as Breakpoint } from 'base';
import { CommonConstants as Common } from '../constants/CommonConstants';

const KEY_TEXTAREA: string = 'textarea_input';

// [Start comment_bar_view]
@Component
export struct CommentBarView {
  // [StartExclude comment_bar_view]
  @StorageProp('currentBreakpoint') currentBreakpoint: string = Breakpoint.BREAKPOINT_LG;
  @State isMouseClick: boolean = false;
  @State content: string = '';
  isShowInput?: boolean = true;
  isDarkMode: boolean = false;
  jumpDetail: () => void = () => {};
  @State isLiked: boolean = false; // 是否已点赞
  @State isFavorited: boolean = false; // 是否已收藏
  @State likeCount: number = 128; // 点赞数

  // 点赞处理
  toggleLike() {
    if (this.isLiked) {
      this.isLiked = false;
      this.likeCount--;
    } else {
      this.isLiked = true;
      this.likeCount++;
    }
  }

  // 收藏处理
  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }
  // [EndExclude comment_bar_view]

  build() {
    Column() {
      Row() {
        if (!this.isMouseClick) {
          Row() {
            Text($r('app.string.detail_write_comment'))
            // [StartExclude comment_bar_view]
              .fontSize($r('app.float.comment_context_fs'))
              .fontWeight(FontWeight.Normal)
              .fontColor(this.isDarkMode ? Color.White : Color.Black)
              .opacity($r('app.float.comment_context_opacity'))
            // [EndExclude comment_bar_view]
          }
          .borderRadius('20vp')
          .backgroundColor(this.isDarkMode ? '#26282A' : '#0D000000')
          .padding({ left: '16vp' })
          // [StartExclude comment_bar_view]
          .justifyContent(FlexAlign.Start)
          .height($r('app.float.comment_input_height'))
          .width(Common.COMMENT_BAR_INPUT_WIDTH)
          .margin({ left: Common.COMMENT_BAR_INPUT_ML })
          .visibility(this.isShowInput ? Visibility.Visible : Visibility.None)
          // [EndExclude comment_bar_view]
          .onMouse((event: MouseEvent) => {
            if (event.button === MouseButton.Left && event.action === MouseAction.Press) {
              this.isMouseClick = true;
            }
          })
          .onClick(() => {
            if (!this.isMouseClick) {
              AppStorage.setOrCreate('isShowInput', true);
            }
          })
          // [StartExclude comment_bar_view]
          Row() {
            Image(this.isDarkMode ? $r('app.media.ic_toolbar_comment_light') : $r('app.media.ic_toolbar_comment'))
              .width($r('app.float.toolbar_comment_image_width'))
              .aspectRatio(1)
              .onClick(() => {
                this.jumpDetail();
              })
            
            // 收藏按钮 - 星形图标
            Image(this.isDarkMode ? $r('app.media.ic_toolbar_star_light') : $r('app.media.ic_toolbar_star'))
              .width($r('app.float.toolbar_comment_image_width'))
              .aspectRatio(1)
              .fillColor(this.isFavorited ? '#FFB84D' : (this.isDarkMode ? Color.White : Color.Black))
              .onClick(() => {
                this.toggleFavorite();
              })
            
            // 点赞按钮 - 心形图标
            Image(this.isDarkMode ? $r('app.media.ic_toolbar_heart_light') : $r('app.media.ic_toolbar_heart'))
              .width($r('app.float.toolbar_comment_image_width'))
              .aspectRatio(1)
              .fillColor(this.isLiked ? '#FF6B6B' : (this.isDarkMode ? Color.White : Color.Black))
              .onClick(() => {
                this.toggleLike();
              })
            
            Image(this.isDarkMode ? $r('app.media.ic_toolbar_share_light') : $r('app.media.ic_toolbar_share'))
              .width($r('app.float.toolbar_comment_image_width'))
              .aspectRatio(1)
          }
          .layoutWeight(1)
          .justifyContent(FlexAlign.SpaceAround)
          // [EndExclude comment_bar_view]
        } else {
          Row() {
            TextArea({ placeholder: 'comments', text: this.content })
            // [StartExclude comment_bar_view]
              .fontColor(this.isDarkMode ? $r('app.color.font_color_dark') : $r('app.color.font_color_normal'))
              .backgroundColor(this.isDarkMode ? $r('app.color.comment_context_bgc_dark') :
                $r('app.color.comment_context_bgc'))
              .maxLines(Common.TEXT_AREA_MAX_LINES)
              .constraintSize({
                minHeight: $r('app.float.constraint_size')
              })
              .enableKeyboardOnFocus(true)
              .maxLength(Common.TEXT_AREA_MAX_LENGTH)
              .showCounter(this.content.length === Common.TEXT_AREA_MAX_LENGTH ? true : false)
              .layoutWeight(1)
              .onChange((value: string) => {
                this.content = value;
              })
              .id(KEY_TEXTAREA)
              .onAppear(() => {
                focusControl.requestFocus(KEY_TEXTAREA)
              })
            // [EndExclude comment_bar_view]

            Image(this.isDarkMode ? $r('app.media.ic_toolbar_send_white') : $r('app.media.ic_toolbar_sent'))
              // [StartExclude comment_bar_view]
              .width($r('app.float.toolbar_sent_width'))
              .aspectRatio(1)
              .margin({
                left: $r('app.float.toolbar_sent_ml'),
                bottom: $r('app.float.toolbar_sent_mb')
              })
              // [EndExclude comment_bar_view]
              .onClick(() => {
                this.isMouseClick = false;
              })
          }
          // [StartExclude comment_bar_view]
          .width(BaseCommon.FULL_PERCENT)
          .padding({
            left: $r('app.float.dialog_pl'),
            right: $r('app.float.dialog_pr'),
            top: $r('app.float.dialog_pt'),
            bottom: $r('app.float.dialog_pt')
          })
          .justifyContent(FlexAlign.SpaceBetween)
          .alignItems(VerticalAlign.Bottom)
          .backgroundColor(this.isDarkMode ? Color.Transparent : $r('app.color.white'))
          // [EndExclude comment_bar_view]
        }
      }
      // [StartExclude comment_bar_view]
      .width(BaseCommon.FULL_PERCENT)
      .height($r('app.float.toolbar_comment_height'))
      .borderWidth({ top: $r('app.float.comment_bar_border_with') })
      .borderColor(this.isDarkMode ? $r('app.color.title_board_color') : $r('app.color.comment_bar_border_color'))
      // [EndExclude comment_bar_view]
    }
    // [StartExclude comment_bar_view]
    .width(BaseCommon.FULL_PERCENT)
    .height(this.getColumnHeight())
    // [EndExclude comment_bar_view]
  }
  // [StartExclude comment_bar_view]
  getColumnHeight(): Resource {
    if (this.currentBreakpoint === Breakpoint.BREAKPOINT_LG) {
      return $r('app.float.toolbar_comment_height');
    }
    return this.isShowInput ? $r('app.float.toolbar_comment_input_height') : $r('app.float.toolbar_comment_height');
  }
  // [EndExclude comment_bar_view]
}
// [End comment_bar_view]