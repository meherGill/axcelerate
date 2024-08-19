import type {Meta, StoryObj} from '@storybook/react';
import HeaderComponent from '@components/section/header/Header';

const meta = {
  title: 'Header',
  component: HeaderComponent,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    label: 'Some Header',
    onClickHandler: () => {},
  },
}