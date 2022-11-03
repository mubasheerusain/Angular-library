import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";
import { Component } from '@angular/core';

@Component({
    selector: 'lib-datepicker-reactive-form-wrapper',
    template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmitTemplateBased(myForm)">
        <input [libDatepicker]="datepicker" [value]="datepicker.SelectedDate">
        <lib-datepicker #datepicker (closed)="getdate(datepicker.SelectedDate)"></lib-datepicker>
        <br />
        <button type="submit" style="margin-top: 20px;">Submit</button>
    </form>
    `
})
class DatePickerReactiveFormWrapper {
    myForm!: FormGroup;

    onSubmitTemplateBased(form: FormGroup) {
        console.log(form.value)
    }
    constructor(private formBuilder: FormBuilder) {
        this.myForm = this.formBuilder.group({ DOB: new FormControl() });
    }

    getdate(value: any) {
        this.myForm.patchValue({ 'DOB': value })
    }
}

@Component({
    selector: 'lib-datepicker-template-form-wrapper',
    template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmitTemplateBased(myForm.value)">
        <input [libDatepicker]="datepicker" name="DOB" [(ngModel)]="datepicker.SelectedDate" autocomplete="off">
        <lib-datepicker #datepicker></lib-datepicker>
        <br />
        <button type="submit" style="margin-top: 20px;">Submit</button>
    </form>
    `
})
class DatePickerTemplateFormWrapper {

    onSubmitTemplateBased(value: any) {
        console.log(value);
    }
}

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [DatePickerReactiveFormWrapper, DatePickerTemplateFormWrapper],
            imports: [DatepickerModule, FormsModule, ReactiveFormsModule],
        }),
    ]
} as Meta;

const DatePickerReactiveFormStory: Story = (args) => ({
    props: args,
    template: `
       <lib-datepicker-reactive-form-wrapper></lib-datepicker-reactive-form-wrapper>
    `
});

export const DatePickerReactiveForm = DatePickerReactiveFormStory.bind({});


const DatePickerTemplateFormStory: Story = (args) => ({
    props: args,
    template: `
       <lib-datepicker-template-form-wrapper></lib-datepicker-template-form-wrapper>
    `
});

export const DatePickerTemplateForm = DatePickerTemplateFormStory.bind({});