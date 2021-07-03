import React from 'react';
import { Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions"
import {AddItemForm} from "../AddItemForm";
import {AddItemFormPropsType} from "../AddItemForm";

export default {
    title: 'Todolist/AddItemForm',
    component: AddItemForm,
    argTypes: {
       onClick:{
           description:'Button inside form clicked'
       },
    },
} as Meta<AddItemFormPropsType>;

const Template: Story = (args:AddItemFormPropsType) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
AddItemFormExample.args = {
addItem:action('Button inside form clicked'),
};