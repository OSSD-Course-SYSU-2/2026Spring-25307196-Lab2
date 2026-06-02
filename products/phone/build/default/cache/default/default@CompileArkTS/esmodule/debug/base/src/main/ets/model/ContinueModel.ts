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
/**
 * 设备类型枚举
 */
export enum DeviceType {
    PHONE = "phone",
    TABLET = "tablet",
    FOLDABLE = "foldable",
    TV = "tv",
    UNKNOWN = "unknown" // 未知设备
}
/**
 * 设备状态枚举
 */
export enum DeviceState {
    ONLINE = "online",
    OFFLINE = "offline",
    AVAILABLE = "available" // 可用
}
/**
 * 流转类型枚举
 */
export enum ContinueType {
    MIGRATION = "migration",
    COLLABORATION = "collaboration",
    SYNC = "sync" // 同步：状态同步
}
/**
 * 流转状态枚举
 */
export enum ContinueState {
    IDLE = "idle",
    CONNECTING = "connecting",
    TRANSFERRING = "transferring",
    COMPLETED = "completed",
    FAILED = "failed" // 失败
}
/**
 * 设备信息接口
 */
export interface DeviceInfo {
    deviceId: string; // 设备ID
    deviceName: string; // 设备名称
    deviceType: DeviceType; // 设备类型
    deviceState: DeviceState; // 设备状态
    networkId?: string; // 网络ID
    icon?: string; // 设备图标
}
/**
 * 流转数据接口
 */
export interface ContinueData {
    continueId: string; // 流转唯一标识
    continueType: ContinueType; // 流转类型
    sourceDevice: DeviceInfo; // 源设备
    targetDevice: DeviceInfo; // 目标设备
    state: ContinueState; // 流转状态
    timestamp: number; // 时间戳
    progress?: number; // 进度（0-100）
    error?: string; // 错误信息
}
/**
 * 应用状态数据接口
 */
export interface AppState {
    currentPage: string; // 当前页面
    pageParams?: Record<string, Object>; // 页面参数
    scrollPosition?: number; // 滚动位置
    selectedTab?: number; // 选中的标签
    customData?: Record<string, Object>; // 自定义数据
}
/**
 * 流转监听器接口
 */
export interface ContinueListener {
    onDeviceListChanged?: (devices: DeviceInfo[]) => void; // 设备列表变化
    onContinueStateChanged?: (state: ContinueState) => void; // 流转状态变化
    onContinueProgress?: (progress: number) => void; // 流转进度
    onContinueCompleted?: (data: ContinueData) => void; // 流转完成
    onContinueFailed?: (error: string) => void; // 流转失败
}
/**
 * 流转选项接口
 */
export interface ContinueOptions {
    continueType: ContinueType; // 流转类型
    targetDevice: DeviceInfo; // 目标设备
    appState?: AppState; // 应用状态
    timeout?: number; // 超时时间（毫秒）
    showProgress?: boolean; // 是否显示进度
}
