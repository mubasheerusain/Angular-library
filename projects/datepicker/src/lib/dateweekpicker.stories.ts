import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [DatepickerModule],
        }),
    ]
} as Meta;

const WeekpickerStory: Story = (args) => ({
    props: args,
    template: `
    <lib-weekpicker></lib-weekpicker>
    `
});

export const Weekpicker = WeekpickerStory.bind({});