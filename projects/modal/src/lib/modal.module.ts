import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalComponent } from './modal.component';
import { CustomHeaderComponent } from './customHeader.component';
import { CustomBodyComponent } from './customBody.component';
import { CustomFooterComponent } from './customFooter.component';
import { ButtonModule } from 'button';

@NgModule({
  declarations: [ModalComponent, CustomHeaderComponent, CustomBodyComponent, CustomFooterComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, ButtonModule],
  exports: [ModalComponent, CustomHeaderComponent, CustomBodyComponent, CustomFooterComponent]
})
export class ModalModule {}