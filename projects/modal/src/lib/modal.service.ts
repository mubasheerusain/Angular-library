import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openDialog(modalRef: any, modalWidth = '420px', modalHeight = '212px') {
    const dialogRef = this.dialog.open(modalRef, {
            width: modalWidth,
            height: modalHeight
        });
  }
}
