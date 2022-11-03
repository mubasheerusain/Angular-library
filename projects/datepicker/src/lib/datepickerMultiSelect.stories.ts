import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'lib-calendar-multi-select-template-form-wrapper',
    template: `
    <div style="width: 296px;">
        <form #myForm="ngForm" (ngSubmit)="onSubmitTemplateBased(myForm.value)">
            <lib-calendar [(ngModel)]="date" name="date"></lib-calendar>
            <button type="submit" style="margin-top: 20px;">Submit</button>
        </form>
    </div>
    `
})
class CalendarMultiSelectTemplateFormWrapper {
    date:any;

    onSubmitTemplateBased(value: any) {
        console.log(value);
    }    
}

@Component({
    selector: 'lib-calendar-multi-select-reactive-form-wrapper',
    template: `
    <div style="width: 296px;">
        <form [formGroup]="myForm" (ngSubmit)="onSubmitReactiveBased(myForm)">
            <lib-calendar formControlName="LeaveRange"></lib-calendar>
            <button type="submit" style="margin-top: 20px;">Submit</button>
        </form>
    </div>
    `
})
class CalendarMultiSelectReactiveFormWrapper {
    myForm: FormGroup;

    onSubmitReactiveBased(form: FormGroup) {
        console.log(form.value)
    }
    
    constructor(private formBuilder: FormBuilder) {
        this.myForm = new FormGroup({ LeaveRange: new FormControl() });
    }
}

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [CalendarMultiSelectTemplateFormWrapper, CalendarMultiSelectReactiveFormWrapper],
            imports: [DatepickerModule, FormsModule, ReactiveFormsModule],
        }),
    ]
} as Meta;

const CalendarMultiSelectTemplateFormStory: Story = (args) => ({
    props: args,
    template: `
       <lib-calendar-multi-select-template-form-wrapper></lib-calendar-multi-select-template-form-wrapper>
    `
});

export const CalendarMultiSelectTemplateForm = CalendarMultiSelectTemplateFormStory.bind({});

const CalendarMultiSelectReactiveFormStory: Story = (args) => ({
    props: args,
    template: `
       <lib-calendar-multi-select-reactive-form-wrapper></lib-calendar-multi-select-reactive-form-wrapper>
    `
});

export const CalendarMultiSelectReactiveForm = CalendarMultiSelectReactiveFormStory.bind({});

