import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ButtonModule } from "button";
import { ModalModule } from "./modal.module";
import { ModalService } from "./modal.service";


@Component({
    template: `
    <sol-modal [headerTitle]="'Error'" [type]="'alert'" bodyMessage="Error messages goes here.
Second line for more information."></sol-modal>
    `
  })
 class AlertModal {}

 @Component({
    template: `
    <sol-modal [headerTitle]="'Warning'" [type]="'warning'" bodyMessage="Warning messages goes here.
Second line for more information."></sol-modal>
    `
  })
 class WarningModal {} 

 @Component({
    template: `
    <sol-modal [headerTitle]="'Information'" [type]="'information'" bodyMessage="Information messages goes here.
Second line for more information."></sol-modal>
    `
  })
 class InformationModal {} 

 @Component({
    template: `
    <sol-modal>
        <sol-custom-header>Standard Popover (Modal)</sol-custom-header>
        <sol-custom-body>Custom body has been added here.</sol-custom-body>
        <sol-custom-footer>
            <lib-button [variant]="'basic'" [size]="'large'">Cancel</lib-button>
            <lib-button [variant]="'primary'" [size]="'large'" mat-dialog-close>Confirm</lib-button>
        </sol-custom-footer>
    </sol-modal>
    `
  })
 class CustomModal {} 

@Component({
    selector: 'launch-dialog',
    template: ' <button mat-raised-button color="primary" (click)="openDialog()">Open Modal</button> '
  })
  class LaunchDialogComponent {
    @Input() modalType: 'warning' | 'alert' | 'information' | null = null;

    constructor(private dialog: ModalService) {}
    openDialog(): void {
      if(this.modalType === 'alert') {
        this.dialog.openDialog(AlertModal);
      }
      else if(this.modalType === 'warning') {
        this.dialog.openDialog(WarningModal);
      }
      else if(this.modalType === 'information') {
        this.dialog.openDialog(InformationModal);
      }
      else {
        this.dialog.openDialog(CustomModal, undefined, '190px');
      }
    }
  }
  
  export default {
    title: 'Modal',
    component: LaunchDialogComponent,
    decorators: [
      moduleMetadata({
        declarations: [LaunchDialogComponent, AlertModal, InformationModal, WarningModal, CustomModal],
        imports: [MatDialogModule, ModalModule, BrowserAnimationsModule, MatButtonModule, ButtonModule]
      })
    ],
    argTypes: {
        modalType: {
          options: ['warning', 'alert', 'information']
        },
     },
  } as Meta;
  
  const Template: Story<LaunchDialogComponent> = (args: LaunchDialogComponent) => ({
    props: args,
    template: `<launch-dialog [modalType]="modalType"></launch-dialog>`
  });
  
  export const Standard = Template.bind({});
  Standard.args = { };

  export const Warning = Template.bind({});
  Warning.args = {
    modalType: 'warning'
  };

  export const Alert = Template.bind({});
  Alert.args = {
    modalType: 'alert'
  };

  export const Information = Template.bind({});
  Information.args = {
    modalType: 'information'
  };
