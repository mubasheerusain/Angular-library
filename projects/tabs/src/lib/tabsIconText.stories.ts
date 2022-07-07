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
    <ng-template #titleTemplate1>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor" />
            <path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor" />
            <path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor" />
            <path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor" />
            <path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor" />
        </svg>
        Details
    </ng-template>
        <ng-template #titleTemplate2>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00005 1.6C8.99579 1.6 9.91494 2 10.5277 2.72C11.1405 3.44 11.5235 4.4 11.5235 5.36C11.5235 6.08 11.3703 6.8 10.9873 7.36C10.8341 7.52 10.7575 7.76 10.6043 7.92L9.37877 9.36L10.9107 10.32C11.4469 10.64 11.983 11.12 12.4426 11.76C13.0554 12.64 13.5149 13.6 13.5915 14.4H2.10218C2.17877 13.6 2.79154 12.56 3.4043 11.76C3.86388 11.2 4.32345 10.72 4.93622 10.32L6.46813 9.36L5.3192 7.92C5.16601 7.76 5.08941 7.6 4.93622 7.44C4.62984 6.8 4.40005 6.08 4.40005 5.36C4.40005 4.4 4.78303 3.44 5.39579 2.72C6.08516 2 7.0043 1.6 8.00005 1.6ZM8.00005 0C6.54473 0 5.3192 0.56 4.32345 1.6C3.4043 2.64 2.86813 4 2.86813 5.36C2.86813 6.4 3.09792 7.36 3.63409 8.24C3.78728 8.48 3.94047 8.72 4.17026 8.96C3.4809 9.44 2.79154 10 2.25537 10.72C1.33622 11.92 0.800049 13.44 0.800049 14.64C0.800049 15.44 1.41281 16 2.25537 16H13.7447C14.5107 16 15.2 15.36 15.2 14.64C15.2 13.44 14.6639 12 13.7447 10.8C13.2086 10.08 12.5192 9.44 11.8298 9.04C11.983 8.8 12.2128 8.56 12.366 8.32C12.9022 7.44 13.132 6.48 13.132 5.44C13.0554 4 12.5192 2.64 11.6 1.6C10.6809 0.56 9.37877 0 8.00005 0V0Z" fill="currentColor"/>
            </svg>            
            Users
        </ng-template>
        <ng-template #titleTemplate3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.55997 0.800049C7.03997 0.800049 5.51997 1.29096 4.31997 2.27278C3.27997 3.09096 2.39997 4.31823 1.99997 5.5455L1.67997 4.97278C1.51997 4.80914 1.43997 4.72732 1.27997 4.6455C1.19997 4.6455 1.11997 4.6455 1.11997 4.6455C1.03997 4.6455 0.87997 4.6455 0.79997 4.72732C0.39997 4.89096 0.31997 5.30005 0.47997 5.62732L1.59997 7.67278C1.67997 7.83641 1.75997 7.91823 1.91997 8.00005C2.07997 8.08187 2.23997 8.00005 2.39997 7.91823L4.39997 6.77278C4.63997 6.77278 4.71997 6.60914 4.79997 6.4455C4.79997 6.28187 4.79997 6.03641 4.71997 5.87278C4.63997 5.70914 4.47997 5.62732 4.31997 5.5455C4.15997 5.5455 3.99997 5.5455 3.83997 5.62732L3.19997 5.95459C3.99997 3.66369 6.15997 2.19096 8.55997 2.19096C11.68 2.19096 14.24 4.80914 14.24 8.00005C14.24 11.191 11.68 13.8091 8.55997 13.8091C7.03997 13.8091 5.59997 13.2364 4.55997 12.091C4.31997 11.8455 3.91997 11.8455 3.59997 12.091C3.35997 12.3364 3.35997 12.8273 3.59997 13.0728C4.95997 14.4637 6.71997 15.2 8.55997 15.2C12.4 15.2 15.6 12.0091 15.6 8.00005C15.6 3.99096 12.48 0.800049 8.55997 0.800049Z" fill="currentColor"/>
                <path d="M8.15997 4.56369C7.83997 4.56369 7.51997 4.89096 7.51997 5.21823V8.81823C7.51997 9.1455 7.83997 9.47278 8.15997 9.47278H11.12C11.44 9.47278 11.76 9.1455 11.76 8.81823C11.76 8.49096 11.44 8.16369 11.12 8.16369H8.79997V5.21823C8.79997 4.89096 8.47997 4.56369 8.15997 4.56369Z" fill="currentColor"/>
            </svg>            
            History
        </ng-template>
    <sol-tabs [variant]="variant" [size]="size">
        <sol-tab [titleTemplate]="titleTemplate1">Content A - Loaded</sol-tab> 
        <sol-tab [titleTemplate]="titleTemplate2" >Content B - Loaded</sol-tab>
        <sol-tab [titleTemplate]="titleTemplate3" [isActive]="true">Content C - Loaded</sol-tab>
    </sol-tabs>
    `,
});

export const PrimaryExtraLargeIconText = TabStory.bind({});

PrimaryExtraLargeIconText.args = {
  variant: 'primary',
  size: 'extraLarge'
};

export const PrimaryLargeIconText = TabStory.bind({});

PrimaryLargeIconText.args = {
  variant: 'primary',
  size: 'large'
};

export const TextExtraLargeIconText = TabStory.bind({});

TextExtraLargeIconText.args = {
  variant: 'basic',
  size: 'extraLarge'
};

export const TextLargeIconText = TabStory.bind({});

TextLargeIconText.args = {
  variant: 'basic',
  size: 'large'
};