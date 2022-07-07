import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'; 

export default {
    title: 'Tabs',
    component: TabsComponent,
    decorators: [
        moduleMetadata({
            declarations: [TabsComponent, TabComponent],
            imports: [MatTabsModule, BrowserAnimationsModule],
        }),
    ]
} as Meta;

const TabStory: Story<TabsComponent> = (args: TabsComponent) => ({
    props: args,
    template: `
    <sol-tabs [variant]="variant" [size]="size">
        <sol-tab [title]="'Details'">Content A - Loaded</sol-tab> 
        <sol-tab [title]="'Users'" >Content B - Loaded</sol-tab>
        <sol-tab [title]="'History'" [isActive]="true">Content C - Loaded</sol-tab>
    </sol-tabs>
    `,
});

export const PrimaryExtraLarge = TabStory.bind({});

PrimaryExtraLarge.args = {
  variant: 'primary',
  size: 'extraLarge'
};

export const PrimaryLarge = TabStory.bind({});

PrimaryLarge.args = {
  variant: 'primary',
  size: 'large'
};

export const TextExtraLarge = TabStory.bind({});

TextExtraLarge.args = {
  variant: 'basic',
  size: 'extraLarge'
};

export const TextLarge = TabStory.bind({});

TextLarge.args = {
  variant: 'basic',
  size: 'large'
};