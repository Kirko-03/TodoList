import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions"
import {Task, TaskInterType} from "../Task";


export default {
    title: 'Todolist/Task',
    component: Task,
} as Meta<TaskInterType>;

const changeTaskStatusCallback = action('Status changed  inside task')
const changeTaskTitleCallback=action('Title changed inside Task')
const removeTaskCallback = action('Remove button  inside Task clicked')

const Template: Story<TaskInterType> = (args) => <Task {...args}/>;

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback
}
export const TaskIsNotDoneExample = Template.bind({})
TaskIsNotDoneExample.args = {
    ...baseArgs,
    tasks: {id: '1', title: 'JS', isDone: true}
}

export const TaskIsDoneExample = Template.bind({})
TaskIsDoneExample.args = {
    ...baseArgs,
    tasks: {id: '1', title: 'JS', isDone: false}
}