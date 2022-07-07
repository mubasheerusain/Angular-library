import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { AccordionComponent } from "./accordion.component";
import { AccordionTabComponent } from "./accordionTab.component";

export default {
    title: 'Accordion',
    component: AccordionComponent,
    decorators: [
        moduleMetadata({
            declarations: [AccordionComponent, AccordionTabComponent],
            imports: [MatExpansionModule, BrowserAnimationsModule],
        }),
    ]
} as Meta;

const AccordionStory: Story<AccordionComponent> = (args: AccordionComponent) => ({
    props: args,
    template: `
    <ng-template #titleTemplate>
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8 16H3.2C1.44 16 0 14.56 0 12.8V10.4H11.2V12.8C11.2 13.68 11.92 14.4 12.8 14.4C13.68 14.4 14.4 13.68 14.4 12.8V1.6H3.2V8.8H1.6V0H16V12.8C16 14.56 14.56 16 12.8 16ZM1.6 12V12.8C1.6 13.68 2.32 14.4 3.2 14.4H10C9.76 13.92 9.6 13.36 9.6 12.8V12H1.6Z" fill="currentColor" />
            <path d="M4.8 3.2H6.4V4.8H4.8V3.2Z" fill="currentColor" />
            <path d="M8 3.2H12.8V4.8H8V3.2Z" fill="currentColor" />
            <path d="M4.8 6.4H6.4V8H4.8V6.4Z" fill="currentColor" />
            <path d="M8 6.4H12.8V8H8V6.4Z" fill="currentColor" />
        </svg>
        Details
    </ng-template>
    <sol-accordion [multi]="multi">
        <sol-accordion-tab [titleTemplate]="titleTemplate" [disabled]="true">
            <p>This is the primary content of the panel.</p>
        </sol-accordion-tab>
        <sol-accordion-tab [title]="'Accordion 2'" [expanded]="true">
            <h2>HTML Forms</h2>
            <form>
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value="John"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <input type="button" value="Submit">
            </form> 
        </sol-accordion-tab>
        <sol-accordion-tab [title]="'Accordion 3'">
            <p>This is the secondary content of the panel.</p>
        </sol-accordion-tab>
        <sol-accordion-tab [title]="'Accordion 4'">
            <p>This is the tertary content of the panel.</p>
        </sol-accordion-tab>
    </sol-accordion>
    `,
});

export const Single = AccordionStory.bind({});

Single.args = {
    multi: false
};

export const Multi = AccordionStory.bind({});

Multi.args = {
    multi: true
};