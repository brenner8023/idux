/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import {
  type VNodeChild,
  computed,
  defineComponent,
  inject,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
} from 'vue'

import { isString } from 'lodash-es'

import { callEmit, convertCssPixel, offResize, onResize } from '@idux/cdk/utils'
import { ɵOverflow } from '@idux/components/_private/overflow'
import { useGlobalConfig } from '@idux/components/config'
import { FORM_TOKEN } from '@idux/components/form'
import { IxIcon } from '@idux/components/icon'

import { useInputState } from './composables/useInputState'
import Input from './contents/Input'
import Item from './contents/Item'
import { selectorToken } from './token'
import { selectorProps } from './types'

const hiddenBoxStyle = { width: 0, height: 0, display: 'flex', overflow: 'hidden', opacity: 0 }

export default defineComponent({
  name: 'ɵSelector',
  props: selectorProps,
  setup(props, { expose, slots }) {
    const common = useGlobalConfig('common')
    const mergedPrefixCls = computed(() => `${common.prefixCls}-selector`)
    const formContext = inject(FORM_TOKEN, null)
    const {
      mirrorRef,
      inputRef,
      inputValue,
      isComposing,
      isFocused,
      blur,
      focus,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      clearInput,
    } = useInputState(props)

    const mergedClearable = computed(() => {
      return !props.disabled && !props.readonly && props.clearable && props.selectedValue.length > 0
    })
    const mergedClearIcon = computed(() => props.clearIcon ?? props.config.clearIcon)
    const mergedSearchable = computed(() => {
      return !props.disabled && !props.readonly && props.searchable === true
    })
    const mergedSuffix = computed(() => {
      return props.suffix ?? (mergedSearchable.value && isFocused.value ? 'search' : props.config.suffix)
    })
    const showPlaceholder = computed(() => {
      return props.selectedValue.length === 0 && !isComposing.value && !inputValue.value
    })

    const classes = computed(() => {
      const config = props.config
      const { borderless = config.borderless, multiple, size = formContext?.size.value ?? config.size } = props
      const prefixCls = mergedPrefixCls.value
      return normalizeClass({
        [prefixCls]: true,
        [`${prefixCls}-borderless`]: borderless,
        [`${prefixCls}-clearable`]: mergedClearable.value,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-focused`]: isFocused.value,
        [`${prefixCls}-multiple`]: multiple,
        [`${prefixCls}-opened`]: props.opened,
        [`${prefixCls}-readonly`]: props.readonly,
        [`${prefixCls}-single`]: !multiple,
        [`${prefixCls}-searchable`]: mergedSearchable.value,
        [`${prefixCls}-with-suffix`]: slots.suffix || mergedSuffix.value,
        [`${prefixCls}-${size}`]: true,
      })
    })

    const handleClick = () => {
      const { disabled, opened, readonly } = props
      if (disabled || readonly || (opened && mergedSearchable.value)) {
        return
      }
      callEmit(props.onOpenedChange, !opened)
    }

    const handleClear = (evt: MouseEvent) => {
      const { disabled, readonly } = props
      if (disabled || readonly) {
        return
      }
      evt.stopPropagation()
      callEmit(props.onClear, evt)
    }

    expose({ focus, blur, clearInput })

    provide(selectorToken, {
      props,
      mergedPrefixCls,
      mergedSearchable,
      mirrorRef,
      inputRef,
      inputValue,
      isComposing,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
    })

    const elementRef = ref<HTMLDivElement>()
    const updateInputWidth = () => {
      const element = elementRef.value
      if (element) {
        callEmit(props.onWidthChange, convertCssPixel(element.getBoundingClientRect().width))
      }
    }

    onMounted(() => onResize(elementRef.value!, updateInputWidth))
    onBeforeUnmount(() => offResize(elementRef.value!, updateInputWidth))

    return () => {
      const { multiple, disabled, readonly, selectedValue, selectedData, maxLabel } = props
      const prefixCls = mergedPrefixCls.value
      const itemPrefixCls = `${prefixCls}-item`
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const renderItem = (item: any) => {
        const { key, label, value, rawData } = item
        const _disabled = disabled || item.disabled
        const removable = multiple && !_disabled && !readonly
        const itemProps = {
          key,
          disabled: _disabled,
          prefixCls: itemPrefixCls,
          removable,
          value,
          label,
          onRemove: props.onItemRemove,
        }

        const slotOrName = slots.selectedLabel || slots.label || rawData.customLabel || props.defaultLabelSlotName
        const selectedLabelRender = isString(slotOrName) ? slots[slotOrName] : slotOrName
        const labelNode = selectedLabelRender ? selectedLabelRender(rawData) : label
        return <Item {...itemProps}>{labelNode}</Item>
      }

      const children: VNodeChild[] = []
      if (multiple) {
        const renderRest = (rest: unknown[]) => {
          const key = '__IDUX_SELECT_MAX_ITEM'
          const itemProps = {
            key,
            prefixCls: itemPrefixCls,
            removable: false,
          }
          const overflowedLabelSlot = slots.overflowedLabel || slots.maxLabel
          const labelNode = overflowedLabelSlot ? overflowedLabelSlot(rest) : `+ ${rest.length} ...`
          return <Item {...itemProps}>{labelNode}</Item>
        }
        const overflowSlot = {
          item: renderItem,
          rest: renderRest,
          suffix: () => <Input />,
        }
        children.push(
          <ɵOverflow
            v-slots={overflowSlot}
            prefixCls={prefixCls}
            dataSource={selectedData}
            getKey={item => item.key}
            maxLabel={maxLabel}
          />,
        )
      } else {
        if (selectedValue.length > 0 && !isComposing.value && !inputValue.value) {
          selectedData.forEach(item => children.push(renderItem(item)))
        }
        children.push(<Input />)
      }

      if (showPlaceholder.value) {
        const placeholderNode = slots.placeholder ? slots.placeholder() : props.placeholder
        children.push(<div class={`${prefixCls}-placeholder`}>{placeholderNode}</div>)
      }

      const suffixNode = slots.suffix ? slots.suffix() : <IxIcon name={mergedSuffix.value} />
      suffixNode && children.push(<div class={`${prefixCls}-suffix`}>{suffixNode}</div>)

      if (mergedClearable.value) {
        children.push(
          <div class={`${prefixCls}-clear`} onClick={handleClear}>
            {slots.clearIcon ? slots.clearIcon() : <IxIcon name={mergedClearIcon.value} />}
          </div>,
        )
      }

      return (
        <div ref={elementRef} class={classes.value} onClick={handleClick}>
          {isFocused.value && !props.opened && (
            <span style={hiddenBoxStyle} aria-live="polite">
              {props.selectedValue.join(', ')}
            </span>
          )}
          <div class={`${prefixCls}-content`}>{children}</div>
        </div>
      )
    }
  },
})