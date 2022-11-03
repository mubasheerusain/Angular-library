import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TooltipDirective } from './tooltip.directive';
import { TooltipModule } from './tooltip.module';

export default {
    title: 'Tooltip',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [TooltipModule],
        }),
    ]
} as Meta;

const ToolTipStory: Story<TooltipDirective> = (args: TooltipDirective) => ({
    props: args,
    template: `
    <div style="width:100%;height:300px;display:flex; justify-content:center;align-items:center;gap:25px;">
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'top'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'top-start'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'top-end'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'bottom'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'bottom-start'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'bottom-end'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'right'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'right-start'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'right-end'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'left'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'left-start'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
        <div>
            <svg solTooltip [trigger]="trigger" [position]="'left-end'" [interactive]="interactive" [darkMode]="darkMode" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M10.1 5.3C9 5.3 8 5.5 7 6.1L7.7 7.5C8.5 7.1 9.3 6.9 9.9 6.9C10.3 6.9 10.6 7 10.8 7.1C11 7.2 11.1 7.5 11.1 7.7C11.1 7.9 11 8.2 10.9 8.4C10.8 8.6 10.5 8.9 10 9.2C9.5 9.5 9.3 9.9 9.2 10.2C9 10.5 9 10.8 9 11.3V12H10V11.4C10 11.1 10.3 10.9 10.4 10.8C10.5 10.7 10.9 10.4 11.3 10.1C11.9 9.7 12.4 9.3 12.6 8.9C12.8 8.5 13 8.1 13 7.6C13 6.9 12.8 6.3 12.2 5.9C11.7 5.5 11 5.3 10.1 5.3Z" fill="black"/>
                <path d="M9.7 12.9C9.3 12.9 9.1 13 8.9 13.2C8.7 13.4 8.6 13.7 8.6 14C8.6 14.4 8.7 14.6 8.9 14.8C9.1 15 9.4 15.1 9.7 15.1C10.1 15.1 10.3 15 10.5 14.8C10.7 14.6 10.8 14.3 10.8 14C10.8 13.7 10.7 13.4 10.5 13.2C10.3 13 10.1 12.9 9.7 12.9Z" fill="black"/>
            </svg>
        </div>
    </div>
    `,
});

export const tooltipArrowDark = ToolTipStory.bind({});
tooltipArrowDark.args = {
    arrow: true,
    darkMode: true,
    trigger: 'focusin',
    interactive: false
}

export const tooltipArrowLight = ToolTipStory.bind({});
tooltipArrowLight.args = {
    arrow: true,
    darkMode: false,
    trigger: 'focusin',
    interactive: false
}

export const tooltipDark = ToolTipStory.bind({});
tooltipDark.args = {
    arrow: false,
    darkMode: true,
    trigger: 'focusin',
    interactive: false
}

export const tooltipLight = ToolTipStory.bind({});
tooltipLight.args = {
    arrow: false,
    darkMode: false,
    trigger: 'focusin',
    interactive: false
}

export const tooltipArrowDarkOnClick = ToolTipStory.bind({});
tooltipArrowDarkOnClick.args = {
    arrow: true,
    darkMode: true,
    trigger: 'click',
    interactive: false
}

export const tooltipArrowLightOnClick = ToolTipStory.bind({});
tooltipArrowLightOnClick.args = {
    arrow: true,
    darkMode: false,
    trigger: 'click',
    interactive: false
}

export const tooltipDarkOnClick = ToolTipStory.bind({});
tooltipDarkOnClick.args = {
    arrow: false,
    darkMode: true,
    trigger: 'click',
    interactive: false
}

export const tooltipLightOnClick = ToolTipStory.bind({});
tooltipLightOnClick.args = {
    arrow: false,
    darkMode: false,
    trigger: 'click',
    interactive: false
}

export const tooltipDarkInteractive = ToolTipStory.bind({});
tooltipDarkInteractive.args = {
    arrow: false,
    darkMode: true,
    trigger: 'focusin',
    interactive: true
}

export const tooltipArrowDarkOnClickInteractive = ToolTipStory.bind({});
tooltipArrowDarkOnClickInteractive.args = {
    arrow: true,
    darkMode: true,
    trigger: 'click',
    interactive: true
}