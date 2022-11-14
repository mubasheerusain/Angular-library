import { MAT_DATE_RANGE_SELECTION_STRATEGY } from "@angular/material/datepicker";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";
import { MultiWeekRangeSelectionStrategy } from "./multiWeekPicker.component";

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [DatepickerModule],
            providers: [
                {
                  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                  useClass: MultiWeekRangeSelectionStrategy,
                }
              ],
        }),
    ]
} as Meta;

const MultiweekpickerStory: Story = (args) => ({
    props: args,
    template: `
    <lib-multiweekpicker></lib-multiweekpicker>
    `
});

export const Multiweekpicker = MultiweekpickerStory.bind({});