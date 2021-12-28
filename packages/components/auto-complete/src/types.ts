import type { DefineComponent, HTMLAttributes } from 'vue'
import type { IxInnerPropTypes, IxPublicPropTypes } from '@idux/cdk/utils'

import { IxPropTypes } from '@idux/cdk/utils'

export const autoCompleteProps = {
  
}

export type AutoCompleteProps = IxInnerPropTypes<typeof autoCompleteProps>
export type AutoCompletePublicProps = IxPublicPropTypes<typeof autoCompleteProps>
export type AutoCompleteComponent = DefineComponent<Omit<HTMLAttributes, keyof AutoCompletePublicProps> & AutoCompletePublicProps>
export type AutoCompleteInstance = InstanceType<DefineComponent<AutoCompleteProps>>
