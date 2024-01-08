import {Input as Component} from './Input';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'input',
  component: Component,
};

export const TextActive: Story = {
  args: {
    state: 'TextActive',
    type: 'TextActive',
  },
};

export const DropdownActive: Story = {
  args: {
    state: 'DropdownActive',
    type: 'DropdownActive',
  },
};

export const TextSelected: Story = {
  args: {
    state: 'TextSelected',
    type: 'TextSelected',
  },
};

export const DropdownSelected: Story = {
  args: {
    state: 'DropdownSelected',
    type: 'DropdownSelected',
  },
};

export const DropdownError: Story = {
  args: {
    state: 'DropdownError',
    type: 'DropdownError',
  },
};

export const TextFilled: Story = {
  args: {
    state: 'TextFilled',
    type: 'TextFilled',
  },
};

export const DropdownFilled: Story = {
  args: {
    state: 'DropdownFilled',
    type: 'DropdownFilled',
  },
};

export const TextInactive: Story = {
  args: {
    state: 'TextInactive',
    type: 'TextInactive',
  },
};

export const DropdownInactive: Story = {
  args: {
    state: 'DropdownInactive',
    type: 'DropdownInactive',
  },
};

export const TextError: Story = {
  args: {
    state: 'TextError',
    type: 'TextError',
  },
};

export default meta;
