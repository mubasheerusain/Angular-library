import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
    title: 'Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule],
        }),
    ],
    argTypes: {
        OnClick: {
          action: 'clicked',
        }
      }
} as Meta;

const ButtonStory: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    template: `
    <div style="display: flex; border: grey 1px solid; padding: 24px; align-items: center; column-gap: 10px;">
    <lib-button [variant]="variant" [size]="'large'" [disabled]="disabled">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'medium'" [aria-label]="'Button Aria Label'" [disabled]="disabled">Button Text</lib-button>
    <lib-button [variant]="variant" [size]="'small'" [aria-label]="'Button Aria Label'" [disabled]="disabled">Button Text</lib-button>
    </div>
    `,
});

export const Primary = ButtonStory.bind({});
Primary.args = {
    variant: 'primary',
    disabled: false
}
export const Basic = ButtonStory.bind({});
Basic.args = {
    variant: 'basic',
    disabled: false
}
export const Text = ButtonStory.bind({});
Text.args = {
    variant: 'text',
    disabled: false
}
export const Warn = ButtonStory.bind({});
Warn.args = {
    variant: 'warn',
    disabled: false
}
export const Disabled = ButtonStory.bind({});
Disabled.args = {
    variant: 'basic',
    disabled: true
}



