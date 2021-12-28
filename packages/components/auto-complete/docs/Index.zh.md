---
category: components
type: 数据录入
title: AutoComplete
subtitle: 自动完成
order: 0
---

## API

### IxAutoComplete

#### AutoCompleteProps

| 名称 | 说明 | 类型  | 默认值 | 全局配置 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `value` | 输入框输入的数据 | `string` | - | - | - |
| `placeholder` | 输入框提示 | `string` | - | ✅ | - |
| `disabled` | 是否禁用 | `boolean` | `false` | - | - |
| `defaultValue` | 指定默认选中的条目 | `string` | - | - | - |
| `dataSource` | 数据源 | `string[] \| AutoCompleteOption[] \| #dataSource` | - | - | - |
| `clearable` | 是否显示清除图标 | `boolean` | `false` | ✅ | - |
| `size` | 输入框尺寸大小 | `'sm' \| 'md' \| 'lg'` | `sm` | ✅ | - |
| `prefix` | 设置前缀图标 | `string \| #prefix` | - | - | - |
| `suffix` | 设置后缀图标 | `string \| #suffix` | - | - | - |
| `onBlur` | 失焦时触发的回调函数 | `() => void` | - | - | - |
| `onFocus` | 获得焦点时触发的回调函数 | `() => void` | - | - | - |
| `onSelect` | 选中候选项时触发的回调函数 | `(value: string) => void` | - | - | - |
| `onChange` | 输入框输入变化时触发的回调函数 | `(value: string) => void` | - | - | - |

```ts
export interface AutoCompleteOption {
  key: string;
  label: string;
  disabled: boolean;
}
```
