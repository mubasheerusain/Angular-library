import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ButtonModule } from "button";
import { TooltipModule } from "./tooltip.module";

export default {
    title: 'Tooltip',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [TooltipModule, ButtonModule, FormsModule],
        }),
    ]
} as Meta;

const ToolTipStory: Story = (args: any) => {
    args.onChange = (e: any) => {
        console.log(e.target.value);
    };
    return {
        props: args,
        template: `
    <div style="width:100%;height:300px;display:flex; justify-content:center;align-items:center;gap:25px;">
        <template #tooltipTemplate>
        <input type="text" [(ngModel)]="username" (input)="onChange($event)"><br/>
        {{username}}
        </template>
        <div>
            <lib-button [variant]="'primary'" [size]="'large'" #tooltip="solTooltip" solTooltip [trigger]="trigger" [position]="'bottom'" [interactive]="interactive" [darkMode]="darkMode" [closeOnOutsideClick]="false" [popoverTemplate]="tooltipTemplate" [arrow]="arrow">test</lib-button>
        </div>
        <button (click)="tooltip.show()">show</button>
        <button (click)="tooltip.hide()">hide</button>
        <button (click)="tooltip.toggle()">toggle</button>
        User Name: {{ username }}
    </div>
    `,
    }
};

export const tooltipWithBinding = ToolTipStory.bind({});
tooltipWithBinding.args = {
    arrow: true,
    darkMode: true,
    trigger: 'click',
    interactive: true,
    username: "Jane Doe"
}