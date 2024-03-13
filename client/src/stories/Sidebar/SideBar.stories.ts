import type { Meta, StoryObj } from '@storybook/react';
import SideBar from '../../components/modules/sidebarLogin';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SideBar',
  component: SideBar,
  tags: ['autodocs'],

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SideBarCustom: Story = {
  args: {
    title: "Sign up",
  },
};
