import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ButtonModule } from "button";
import { TooltipModule } from "./tooltip.module";


@Component({
    selector: 'sol-tooltipWrapper',
    template: `
    <div style="width:100%;height:300px;display:flex; justify-content:center;align-items:center;gap:25px;">
            <ng-template #tooltipTemplate let-data="userName">
              <input type="text" [value]="data"  ><br/>
              <p>{{data}}</p>
            </ng-template>
            <div>
                <lib-button [variant]="'primary'" [size]="'large'" #tooltip="solTooltip" solTooltip [trigger]="trigger" [position]="'bottom'" [ariaDescribedBy]="'Forms tooltip'" [interactive]="interactive" [darkMode]="darkMode" [closeOnOutsideClick]="false" [popoverTemplate]="tooltipTemplate" [arrow]="arrow">test</lib-button>
            </div>
            <button (click)="tooltip.show()">show</button>
            <button (click)="tooltip.hide()">hide</button>
            <button (click)="tooltip.toggle()">toggle</button>
            User Name: {{ userName }}
    </div>
    `
})
class ToolTipWrapper {
    @Input() arrow!: boolean;
    @Input() darkMode!: boolean;
    @Input() trigger!: string;
    @Input() interactive!: boolean;
    userName: string = "jbond";
}

export default {
    title: 'Tooltip',
    decorators: [
        moduleMetadata({
            declarations: [ToolTipWrapper],
            imports: [TooltipModule, ButtonModule, FormsModule, ReactiveFormsModule],
        }),
    ]
} as Meta;

const ToolTipStory: Story = (args: any) => ({
    props: args,
    template: `
        <sol-tooltipWrapper [arrow]="arrow" [darkMode]="darkMode" [trigger]="trigger" [interactive]="interactive"></sol-tooltipWrapper>
    `,
});

export const tooltipWithBinding = ToolTipStory.bind({});
tooltipWithBinding.args = {
    arrow: true,
    darkMode: true,
    trigger: 'click',
    interactive: true
}