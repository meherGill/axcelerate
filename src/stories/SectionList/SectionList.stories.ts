import type {Meta, StoryObj} from '@storybook/react';
import SectionComponent from "@components/section/section-list/SectionList";

const meta = {
  title: 'Section',
  component: SectionComponent,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {
  args: {
    data: [
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
    ]
  },
}