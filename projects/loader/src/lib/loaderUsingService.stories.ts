import { Component, Input, OnInit } from "@angular/core";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { LoaderModule } from "./loader.module";
import { LoaderService } from "./loader.service";

@Component({
    selector:'lib-loader-wrapper',
    template: `
      <lib-loader [dark]="dark"></lib-loader>
    `
})
class LoaderWrapperComponent implements OnInit {
    @Input() dark: boolean = false;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.loaderService.display(true);
    }
}

export default {
    title: 'Loader',
    decorators: [
        moduleMetadata({
            declarations: [LoaderWrapperComponent],
            imports: [LoaderModule],
        }),
    ]
} as Meta;

const LoaderStory: Story = (args) => ({
    props: args,
    template: `<lib-loader-wrapper [dark]="dark"></lib-loader-wrapper>`
});

export const LoaderUsingServiceLight = LoaderStory.bind({});

LoaderUsingServiceLight.args = {
    dark: false
}

export const LoaderUsingServiceDark = LoaderStory.bind({});

LoaderUsingServiceDark.args = {
    dark: true
}

