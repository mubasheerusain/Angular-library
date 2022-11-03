import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DatepickerModule } from "./datepicker.module";
import { Component } from '@angular/core';


@Component({
    selector: 'lib-daterangepicker-reactive-form-wrapper',
    template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmitTemplateBased(myForm)">
        <input type="text" [libDatepicker]="daterangepicker" [value]="daterangepicker.SelectedRange">
        <lib-daterangepicker #daterangepicker  (closed)="getdate(daterangepicker.SelectedRange)"></lib-daterangepicker>
        <br />
        <button type="submit" style="margin-top: 20px;">Submit</button>
    </form>
    `
})
class DateRangePickerReactiveFormWrapper {
    myForm!: FormGroup;

    onSubmitTemplateBased(form: FormGroup) {
        console.log(form.value)
    }
    constructor(private formBuilder: FormBuilder) {
        this.myForm = this.formBuilder.group({ LeaveRange: new FormControl() });
    }

    getdate(value: any) {
        this.myForm.patchValue({ 'LeaveRange': value })
    }
}

@Component({
    selector: 'lib-daterangepicker-template-form-wrapper',
    template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmitTemplateBased(myForm.value)">
        <input [libDatepicker]="daterangepicker" name="LeaveRange" [(ngModel)]="daterangepicker.SelectedRange" autocomplete="off">
        <lib-daterangepicker #daterangepicker></lib-daterangepicker>
        <br />
        <button type="submit" style="margin-top: 20px;">Submit</button>
    </form>
    `
})
class DateRangePickerTemplateFormWrapper {
    onSubmitTemplateBased(value: any) {
        console.log(value);
    }    
}

export default {
    title: 'DatePicker',
    decorators: [
        moduleMetadata({
            declarations: [DateRangePickerReactiveFormWrapper, DateRangePickerTemplateFormWrapper],
            imports: [DatepickerModule, FormsModule, ReactiveFormsModule],
        }),
    ]
} as Meta;

const DatePickerReactiveFormStory: Story = (args) => ({
    props: args,
    template: `
    <lib-daterangepicker-reactive-form-wrapper></lib-daterangepicker-reactive-form-wrapper>
    `
});

export const DateRangePickerReactiveForm = DatePickerReactiveFormStory.bind({});

const DatePickerTemplateFormStory: Story = (args) => ({
    props: args,
    template: `
    <lib-daterangepicker-template-form-wrapper></lib-daterangepicker-template-form-wrapper>
    `
});

export const DateRangePickerTemplateForm = DatePickerTemplateFormStory.bind({});