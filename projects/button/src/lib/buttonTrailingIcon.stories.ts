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
    <ng-template #trailingAddIcon>
        <svg style="margin-left: 9.6px" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9H11V2H9V9H2V11H9V18H11V11H18V9Z" fill="currentColor" />
        </svg>
    </ng-template>
    <div style="display: flex; border: grey 1px solid; padding: 24px; align-items: center; column-gap: 10px;">
    <lib-button [variant]="variant" [size]="'large'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedEnd]="trailingAddIcon">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'medium'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedEnd]="trailingAddIcon">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'small'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedEnd]="trailingAddIcon">Button Text</lib-button>
    </div>
    `
});

export const TrailingIconPrimary = ButtonStory.bind({});
TrailingIconPrimary.args = {
    variant: 'primary',
    disabled: false
}
export const TrailingIconBasic = ButtonStory.bind({});
TrailingIconBasic.args = {
    variant: 'basic',
    disabled: false
}
export const TrailingIconText = ButtonStory.bind({});
TrailingIconText.args = {
    variant: 'text',
    disabled: false
}
export const TrailingIconWarn = ButtonStory.bind({});
TrailingIconWarn.args = {
    variant: 'warn',
    disabled: false
}
export const TrailingIconDisabled = ButtonStory.bind({});
TrailingIconDisabled.args = {
    variant: 'primary',
    disabled: true
}