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
    <ng-template #LeadingIcon>
        <svg style="margin-right: 9.6px;" width="8" height="14" viewBox="0 0 8 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.98112 6.20396L6.1132 0.79102C6.3547 0.536294 6.77735 0.536294 7.01886 0.79102C7.26037 1.04575 7.26037 1.49152 7.01886 1.74624L2.18867 6.84077L7.01886 12.2537C7.26037 12.5084 7.26037 12.9542 7.01886 13.2089C6.77735 13.4637 6.3547 13.4637 6.1132 13.2089L0.98112 7.47759C0.799988 7.28654 0.799988 7.0955 0.799988 6.90445C0.799988 6.58604 0.860365 6.33132 0.98112 6.20396Z" fill="currentColor"/>
        </svg>
    </ng-template>
    <ng-template #TrailingIcon>
        <svg style="margin-left: 9.6px;" width="8" height="14" viewBox="0 0 8 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01886 6.20396L1.88678 0.79102C1.64527 0.536294 1.22263 0.536294 0.98112 0.79102C0.73961 1.04575 0.73961 1.49152 0.98112 1.74624L5.81131 6.84077L0.98112 12.2537C0.73961 12.5084 0.73961 12.9542 0.98112 13.2089C1.22263 13.4637 1.64527 13.4637 1.88678 13.2089L7.01886 7.47759C7.19999 7.28654 7.19999 7.0955 7.19999 6.90445C7.19999 6.58604 7.13961 6.33132 7.01886 6.20396Z" fill="currentColor"/>
        </svg>
    </ng-template>
    <div style="display: flex; border: grey 1px solid; padding: 24px; align-items: center; column-gap: 10px;">
    <lib-button [variant]="variant" [size]="'large'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingIcon" [IconPositionedEnd]="TrailingIcon">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'medium'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingIcon" [IconPositionedEnd]="TrailingIcon">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'small'" [aria-label]="'Button Aria Label'" [disabled]="disabled" [IconPositionedFront]="LeadingIcon" [IconPositionedEnd]="TrailingIcon">Button Text</lib-button>
    </div>
    `
});

export const DualIconPrimary = ButtonStory.bind({});
DualIconPrimary.args = {
    variant: 'primary',
    disabled: false
}
export const DualIconBasic = ButtonStory.bind({});
DualIconBasic.args = {
    variant: 'basic',
    disabled: false
}
export const DualIconText = ButtonStory.bind({});
DualIconText.args = {
    variant: 'text',
    disabled: false
}
export const DualIconWarn = ButtonStory.bind({});
DualIconWarn.args = {
    variant: 'warn',
    disabled: false
}
export const DualIconDisabled = ButtonStory.bind({});
DualIconDisabled.args = {
    variant: 'primary',
    disabled: true
}