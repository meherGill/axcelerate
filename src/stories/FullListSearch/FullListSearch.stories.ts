import type {Meta, StoryObj} from '@storybook/react';
import FullListSearchComponent from "@components/full-list-search/FullListSearch";

const meta = {
  title: 'Full List Search',
  component: FullListSearchComponent,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FullListSearchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullListSearch: Story = {
  args: {
    data: {
      'Attending': [
        {
          name: "Alex",
          email: "alex@123.com"
        },
        {
          name: "Barry",
          email: "bar@123.com"
        },
        {
          name: "Katherine",
        },
      ],
      'Absent': [
        {
          name: "Aleanase",
          email: "alean@123.com"
        },
        {
          name: "Bathlamore",
          email: "brit@123.com"
        },
        {
          name: "Kranti",
          imageSrc: "pic1.svg"
        },
      ]
    }
  },
}