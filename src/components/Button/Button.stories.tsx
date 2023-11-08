import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";
import {ButtonProps} from './Button.types';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'Elements/Button',
    component: Button,
    // ...
  };
      
  export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Button>;

export const DeleteButton: Story = {
    args: {
      type: 'primary',
      text: 'Delete now',
      onClick: () => console.log('click!')
    }
  };