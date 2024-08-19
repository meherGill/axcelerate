import type {Meta, StoryObj} from '@storybook/react';
import SearchBox from "@components/search-box/SearchBox";

const meta = {
  title: 'Search Box',
  component: SearchBox,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    value: 'hello',
    onChange: () => {},
  },
}