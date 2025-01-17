import { MAT_DATE_RANGE_SELECTION_STRATEGY } from "@angular/material/datepicker";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";
import { WeekRangeSelectionStrategy } from "./dateweekpicker.component";

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [DatepickerModule],
            providers: [
                {
                  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
                  useClass: WeekRangeSelectionStrategy,
                }
              ],
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