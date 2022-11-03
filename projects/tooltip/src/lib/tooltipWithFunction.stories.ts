import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ButtonModule } from "button";
import { TooltipModule } from "./tooltip.module";

export default {
    title: 'Tooltip',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [TooltipModule, ButtonModule],
        }),
    ]
} as Meta;

const ToolTipStory: Story = (args: any) => ({
    props: args,
    template: `
        <div style="width:100%;height:100px;display:flex; justify-content:center;align-items:center;gap:25px;">
            <div>
                <lib-button [variant]="'primary'" [size]="'large'" #tooltip1="solTooltip" solTooltip [trigger]="trigger" [position]="'bottom'" [interactive]="interactive" [darkMode]="darkMode" [closeOnOutsideClick]="false" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow">test</lib-button>
            </div>
            <button (click)="tooltip1.show()">show</button>
            <button (click)="tooltip1.hide()">hide</button>
            <button (click)="tooltip1.toggle()">toggle</button>
        </div>
        <div style="width:100%;height:100px;display:flex; justify-content:center;align-items:center;gap:25px;">
            <div>
                <lib-button [variant]="'primary'" [size]="'large'" #tooltip2="solTooltip" solTooltip [trigger]="trigger" [position]="'bottom'" [interactive]="interactive" [darkMode]="darkMode" [closeOnOutsideClick]="false" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow">test</lib-button>
            </div>
            <button (click)="tooltip2.show()">show</button>
            <button (click)="tooltip2.hide()">hide</button>
            <button (click)="tooltip2.toggle()">toggle</button>
        </div>
        <div style="width:100%;height:100px;display:flex; justify-content:center;align-items:center;gap:25px;">
            <div>
                <lib-button [variant]="'primary'" [size]="'large'" #tooltip3="solTooltip" solTooltip [trigger]="trigger" [position]="'bottom'" [interactive]="interactive" [darkMode]="darkMode" [closeOnOutsideClick]="false" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow">test</lib-button>
            </div>
            <button (click)="tooltip3.show()">show</button>
            <button (click)="tooltip3.hide()">hide</button>
            <button (click)="tooltip3.toggle()">toggle</button>
        </div>
    `,
});

export const tooltipWithFunction = ToolTipStory.bind({});
tooltipWithFunction.args = {
    arrow: true,
    darkMode: true,
    trigger: 'click',
    interactive: true
}