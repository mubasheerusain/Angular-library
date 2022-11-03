import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ProgressBarComponent } from "./progress-bar.component";
import { ProgressBarModule } from "./progress-bar.module";

export default {
    title: 'ProgressBar',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [ProgressBarModule],
        }),
    ]
} as Meta;

const ProgressBarStory: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
    props: args,
    template: `
    <div style="width:300px">
        <lib-progressBar [progress]="progress" [inDeterminate]="inDeterminate"></lib-progressBar>
    </div>
    `
});

export const ProgressBarDeterminate = ProgressBarStory.bind({});

ProgressBarDeterminate.args = {
    progress: 75,
    inDeterminate: false
}

export const ProgressBarIndeterminate = ProgressBarStory.bind({});

ProgressBarIndeterminate.args = {
    inDeterminate: true
}