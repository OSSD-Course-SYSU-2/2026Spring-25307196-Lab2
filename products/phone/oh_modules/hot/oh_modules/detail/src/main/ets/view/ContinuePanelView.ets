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

import { 
  DeviceInfo, 
  DeviceType,
  ContinueType,
  ContinueState,
  ContinueListener
} from 'base';
import { ContinueService } from 'base';

/**
 * 流转类型选项接口
 */
interface ContinueTypeOption {
  type: ContinueType;
  name: string;
  desc: string;
}

/**
 * 流转面板组件
 * 显示可用设备列表，支持选择设备进行流转
 */
@Component
export struct ContinuePanelView {
  @Link isVisible: boolean;
  @State deviceList: DeviceInfo[] = [];
  @State selectedDevice: DeviceInfo | null = null;
  @State continueState: ContinueState = ContinueState.IDLE;
  @State progress: number = 0;
  @State continueType: ContinueType = ContinueType.MIGRATION;
  
  private continueService: ContinueService = ContinueService.getInstance();
  private listener: ContinueListener = {
    onDeviceListChanged: (devices: DeviceInfo[]) => {
      this.deviceList = devices;
    },
    onContinueStateChanged: (state: ContinueState) => {
      this.continueState = state;
    },
    onContinueProgress: (progress: number) => {
      this.progress = progress;
    },
    onContinueCompleted: () => {
      setTimeout(() => {
        this.isVisible = false;
        this.resetState();
      }, 1000);
    },
    onContinueFailed: (error: string) => {
      console.error('Continue failed:', error);
    }
  };

  aboutToAppear(): void {
    this.continueService.addListener(this.listener);
    this.deviceList = this.continueService.getAvailableDevices();
  }

  aboutToDisappear(): void {
    this.continueService.removeListener(this.listener);
  }

  /**
   * 重置状态
   */
  private resetState(): void {
    this.selectedDevice = null;
    this.continueState = ContinueState.IDLE;
    this.progress = 0;
  }

  /**
   * 开始流转
   */
  private async startContinue(): Promise<void> {
    if (!this.selectedDevice) {
      return;
    }

    await this.continueService.startContinue({
      continueType: this.continueType,
      targetDevice: this.selectedDevice,
      showProgress: true
    });
  }

  /**
   * 取消流转
   */
  private cancelContinue(): void {
    this.continueService.cancelContinue();
    this.resetState();
  }

  /**
   * 获取设备图标
   */
  private getDeviceIcon(type: DeviceType): Resource {
    switch (type) {
      case DeviceType.PHONE:
        return $r('sys.symbol.phone');
      case DeviceType.TABLET:
        return $r('sys.symbol.phone');
      case DeviceType.TV:
        return $r('sys.symbol.phone');
      case DeviceType.FOLDABLE:
        return $r('sys.symbol.phone');
      default:
        return $r('sys.symbol.phone');
    }
  }

  /**
   * 获取流转类型名称
   */
  private getContinueTypeName(type: ContinueType): string {
    switch (type) {
      case ContinueType.MIGRATION:
        return '迁移';
      case ContinueType.COLLABORATION:
        return '协同';
      case ContinueType.SYNC:
        return '同步';
      default:
        return '流转';
    }
  }

  build() {
    Column() {
      // 标题栏
      this.TitleBar();
      
      // 内容区域
      if (this.continueState === ContinueState.IDLE) {
        this.DeviceListContent();
      } else {
        this.ProgressContent();
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F5F5F5')
    .borderRadius({ topLeft: 24, topRight: 24 })
  }

  /**
   * 标题栏
   */
  @Builder
  TitleBar() {
    Row() {
      Text('自由流转')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#1A1A1A')
      
      Blank()
      
      Button({ type: ButtonType.Circle }) {
        Text('×')
          .fontSize(24)
          .fontColor('#666666')
      }
      .width(32)
      .height(32)
      .backgroundColor(Color.Transparent)
      .onClick(() => {
        this.isVisible = false;
      })
    }
    .width('100%')
    .height(56)
    .padding({ left: 20, right: 12 })
    .backgroundColor(Color.White)
  }

  /**
   * 设备列表内容
   */
  @Builder
  DeviceListContent() {
    Column() {
      // 流转类型选择
      this.ContinueTypeSelector();
      
      // 设备列表
      if (this.deviceList.length > 0) {
        Text('选择目标设备')
          .fontSize(16)
          .fontColor('#666666')
          .margin({ top: 16, bottom: 12 })
          .width('100%')
          .padding({ left: 20 })

        List() {
          ForEach(this.deviceList, (device: DeviceInfo) => {
            ListItem() {
              this.DeviceItem(device);
            }
          }, (device: DeviceInfo) => device.deviceId)
        }
        .width('100%')
        .layoutWeight(1)
        .padding({ left: 16, right: 16 })
        .divider({ strokeWidth: 1, color: '#E5E5E5', startMargin: 56, endMargin: 16 })
      } else {
        this.EmptyView();
      }

      // 开始流转按钮
      if (this.selectedDevice) {
        Button(`开始${this.getContinueTypeName(this.continueType)}`)
          .width('90%')
          .height(48)
          .fontSize(18)
          .fontColor(Color.White)
          .backgroundColor('#007DFF')
          .borderRadius(24)
          .margin({ top: 20, bottom: 20 })
          .onClick(() => {
            this.startContinue();
          })
      }
    }
    .width('100%')
    .layoutWeight(1)
    .padding({ top: 8 })
  }

  /**
   * 流转类型选择器
   */
  @Builder
  ContinueTypeSelector() {
    Column() {
      Text('流转方式')
        .fontSize(16)
        .fontColor('#666666')
        .width('100%')
        .padding({ left: 20, bottom: 12 })

      Row() {
        ForEach([
          { type: ContinueType.MIGRATION, name: '迁移', desc: '迁移到目标设备' } as ContinueTypeOption,
          { type: ContinueType.COLLABORATION, name: '协同', desc: '多设备协同' } as ContinueTypeOption,
          { type: ContinueType.SYNC, name: '同步', desc: '状态同步' } as ContinueTypeOption
        ], (item: ContinueTypeOption) => {
          Column() {
            Text(item.name)
              .fontSize(16)
              .fontColor(this.continueType === item.type ? '#007DFF' : '#333333')
              .fontWeight(this.continueType === item.type ? FontWeight.Bold : FontWeight.Normal)
            
            Text(item.desc)
              .fontSize(12)
              .fontColor('#999999')
              .margin({ top: 4 })
          }
          .width('30%')
          .padding(12)
          .borderRadius(12)
          .backgroundColor(this.continueType === item.type ? '#E8F4FF' : Color.White)
          .border({
            width: 1,
            color: this.continueType === item.type ? '#007DFF' : '#E5E5E5'
          })
          .onClick(() => {
            this.continueType = item.type;
          })
        })
      }
      .width('90%')
      .justifyContent(FlexAlign.SpaceBetween)
      .margin({ left: '5%' })
    }
    .width('100%')
    .margin({ top: 12 })
  }

  /**
   * 设备项
   */
  @Builder
  DeviceItem(device: DeviceInfo) {
    Row() {
      // 设备图标
      SymbolGlyph(this.getDeviceIcon(device.deviceType))
        .fontSize(32)
        .fontColor([this.selectedDevice?.deviceId === device.deviceId ? '#007DFF' : '#666666'])

      // 设备信息
      Column() {
        Text(device.deviceName)
          .fontSize(16)
          .fontColor('#333333')
          .fontWeight(FontWeight.Medium)

        Text(this.getDeviceTypeName(device.deviceType))
          .fontSize(12)
          .fontColor('#999999')
          .margin({ top: 4 })
      }
      .alignItems(HorizontalAlign.Start)
      .margin({ left: 12 })
      .layoutWeight(1)

      // 选中状态
      if (this.selectedDevice?.deviceId === device.deviceId) {
        SymbolGlyph($r('sys.symbol.checkmark_circle_fill'))
          .fontSize(24)
          .fontColor(['#007DFF'])
      }
    }
    .width('100%')
    .height(64)
    .padding({ left: 12, right: 12 })
    .backgroundColor(this.selectedDevice?.deviceId === device.deviceId ? '#F0F9FF' : Color.White)
    .borderRadius(12)
    .onClick(() => {
      this.selectedDevice = device;
    })
  }

  /**
   * 获取设备类型名称
   */
  private getDeviceTypeName(type: DeviceType): string {
    switch (type) {
      case DeviceType.PHONE:
        return '手机';
      case DeviceType.TABLET:
        return '平板';
      case DeviceType.TV:
        return '智慧屏';
      case DeviceType.FOLDABLE:
        return '折叠屏';
      default:
        return '设备';
    }
  }

  /**
   * 空视图
   */
  @Builder
  EmptyView() {
    Column() {
      SymbolGlyph($r('sys.symbol.phone'))
        .fontSize(64)
        .fontColor(['#CCCCCC'])

      Text('未发现可用设备')
        .fontSize(16)
        .fontColor('#999999')
        .margin({ top: 16 })

      Text('请确保其他设备已开启并登录同一华为账号')
        .fontSize(12)
        .fontColor('#CCCCCC')
        .margin({ top: 8 })
    }
    .width('100%')
    .layoutWeight(1)
    .justifyContent(FlexAlign.Center)
  }

  /**
   * 进度内容
   */
  @Builder
  ProgressContent() {
    Column() {
      // 目标设备信息
      if (this.selectedDevice) {
        Column() {
          SymbolGlyph(this.getDeviceIcon(this.selectedDevice.deviceType))
            .fontSize(64)
            .fontColor(['#007DFF'])

          Text(this.selectedDevice.deviceName)
            .fontSize(18)
            .fontColor('#333333')
            .fontWeight(FontWeight.Medium)
            .margin({ top: 16 })

          Text(`正在${this.getContinueTypeName(this.continueType)}...`)
            .fontSize(14)
            .fontColor('#999999')
            .margin({ top: 8 })
        }
        .margin({ top: 60 })
      }

      // 进度条
      Column() {
        Progress({ value: this.progress, total: 100, type: ProgressType.Linear })
          .width('80%')
          .height(8)
          .color('#007DFF')
          .margin({ top: 40 })

        Text(`${this.progress}%`)
          .fontSize(16)
          .fontColor('#666666')
          .margin({ top: 12 })
      }

      // 取消按钮
      Button('取消')
        .width('80%')
        .height(44)
        .fontSize(16)
        .fontColor('#666666')
        .backgroundColor('#F0F0F0')
        .borderRadius(22)
        .margin({ top: 40 })
        .onClick(() => {
          this.cancelContinue();
        })
    }
    .width('100%')
    .layoutWeight(1)
  }
}
