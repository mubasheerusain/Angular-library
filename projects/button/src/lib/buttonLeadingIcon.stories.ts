import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
    title: 'Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule],
        }),
    ]
} as Meta;

const ButtonStory: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `
    <ng-template #LeadingAddIcon>
        <svg style="margin-right: 9.6px;" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" fill="currentColor" />
        </svg>
    </ng-template>
    <div style="display: flex; border: grey 1px solid; padding: 24px; align-items: center; column-gap: 10px;">
    <lib-button [variant]="variant" [size]="'large'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingAddIcon" >Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'medium'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingAddIcon">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'small'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingAddIcon">Button Text</lib-button>
    </div>
    `
});

export const LeadingIconPrimary = ButtonStory.bind({});
LeadingIconPrimary.args = {
    variant: 'primary',
    disabled: false
}
export const LeadingIconBasic = ButtonStory.bind({});
LeadingIconBasic.args = {
    variant: 'basic',
    disabled: false
}
export const LeadingIconText = ButtonStory.bind({});
LeadingIconText.args = {
    variant: 'text',
    disabled: false
}
export const LeadingIconWarn = ButtonStory.bind({});
LeadingIconWarn.args = {
    variant: 'warn',
    disabled: false
}
export const LeadingIconDisabled = ButtonStory.bind({});
LeadingIconDisabled.args = {
    variant: 'primary',
    disabled: true
}