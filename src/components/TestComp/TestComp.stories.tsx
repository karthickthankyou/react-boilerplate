import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TestComp, { ITestCompProps } from './TestComp'

export default {
  title: 'components/TestComp',
  component: TestComp,
} as Meta

const Template: Story<ITestCompProps> = (args) => <TestComp {...args} />

export const Primary = Template.bind({})
Primary.args = {}
