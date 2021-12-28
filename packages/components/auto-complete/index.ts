import type { AutoCompleteComponent } from './src/types'

import AutoComplete from './src/AutoComplete'

const IxAutoComplete = AutoComplete as unknown as AutoCompleteComponent

export { IxAutoComplete }

export type { AutoCompleteInstance, AutoCompleteComponent, AutoCompletePublicProps as AutoCompleteProps } from './src/types'
