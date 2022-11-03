import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { LoaderModule } from "./loader.module";

export default {
    title: 'Loader',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [LoaderModule],
        }),
    ]
} as Meta;

const LoaderStory: Story = (args) => ({
    props: args,
    template: `<lib-loader [isLoader]="isLoader" [dark]="dark"></lib-loader>`
});

export const LoaderLight = LoaderStory.bind({});

LoaderLight.args = {
    isLoader: true,
    dark: false
}

export const LoaderDark = LoaderStory.bind({});

LoaderDark.args = {
    isLoader: true,
    dark: true
}