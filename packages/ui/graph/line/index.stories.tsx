import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import LineGraph from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Graph",
  component: LineGraph,
} as Meta<typeof LineGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Template: StoryFn<typeof LineGraph> = args => <LineGraph {...args} />;

export const lineGraph = Template.bind({});

lineGraph.args = {
  graphData: [
    {
      id: "1",
      data: [{ x: "apple", y: 3 }],
    },
    {
      id: "2",
      data: [{ x: "watermelon", y: 5 }],
    },
    {
      id: "3",
      data: [{ x: "melon", y: 1 }],
    },
  ],
};
