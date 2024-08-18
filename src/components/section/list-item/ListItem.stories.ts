import type {Meta, StoryObj} from '@storybook/react';
import ListItemComponent from "./ListItem";

const meta = {
  title: 'ListItem',
  component: ListItemComponent,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: "radio",
      options: ['primary', ''],
    }
  }
} satisfies Meta<typeof ListItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemWithEmail: Story = {
  args: {
    primaryText: 'Some name',
    secondaryText: "some@email.com",
    imageSrc: 'defaultProfilePicture.svg',
  },
}

export const ListItemWithoutEmail: Story = {
  args: {
    primaryText: 'Some name',
    imageSrc: 'defaultProfilePicture.svg',
  },
}

export const PrimaryWithoutEmail: Story = {
  args: {
    primaryText: 'Some name',
    type: 'primary',
  },
}
