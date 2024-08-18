import type {Meta, StoryObj} from '@storybook/react';
import {HeaderAndSection as HeaderAndSectionComponent } from "./FullListSearch";

const meta = {
  title: 'Header and Section',
  component: HeaderAndSectionComponent,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderAndSectionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderAndSection: Story = {
  args: {
    header: "Attending",
    listOfUsers: [
      {
        name: "Alex",
        email: "a@123.com"
      },
      {
        name: "Barry",
        email: "b@123.com"
      },
      {
        name: "Katherine",
      },
    ],
  }
}