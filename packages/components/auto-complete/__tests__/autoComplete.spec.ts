import { mount, MountingOptions } from '@vue/test-utils'
import { renderWork } from '@tests'
import AutoComplete from '../src/AutoComplete'
import { AutoCompleteProps } from '../src/types'

describe('AutoComplete', () => {
  const AutoCompleteMount = (options?: MountingOptions<Partial<AutoCompleteProps>>) => mount(AutoComplete, { ...(options as MountingOptions<AutoCompleteProps>)})

  renderWork<AutoCompleteProps>(AutoComplete,{
    props: { },
  })

  test('xxx work', async () => {
    const wrapper = AutoCompleteMount({ props: { xxx: 'Xxx' } })

    expect(wrapper.classes()).toContain('ix-Xxx')

    await wrapper.setProps({ xxx: 'Yyy' })

    expect(wrapper.classes()).toContain('ix-Yyy')
  })
})
