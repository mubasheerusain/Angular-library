import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CustomBodyComponent } from './customBody.component';
import { CustomFooterComponent } from './customFooter.component';
import { CustomHeaderComponent } from './customHeader.component';


@Component({
    selector: 'sol-modal',
    template: `
    <ng-template let-type="type"  #icon>
        <svg *ngIf="type === 'warning'" width="20" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7956 17.0157L11.8074 2.09424C11.408 1.39791 10.7091 1 10.0101 1C9.31116 1 8.61219 1.39791 8.21279 2.09424L0.224666 17.0157C-0.0748887 17.6126 -0.0748887 18.4084 0.224666 19.0052C0.624072 19.6021 1.22318 20 1.92214 20H17.8984C18.5973 20 19.2963 19.6021 19.5959 19.0052C20.0951 18.3089 20.0951 17.6126 19.7956 17.0157ZM10.0101 16.9162C9.41101 16.9162 9.0116 16.5183 9.0116 15.9215C9.0116 15.3246 9.41101 14.9267 10.0101 14.9267C10.5094 14.9267 11.0086 15.3246 11.0086 15.9215C11.0086 16.5183 10.5094 16.9162 10.0101 16.9162ZM11.0086 11.9424C11.0086 12.5393 10.5094 12.9372 10.0101 12.9372C9.41101 12.9372 9.0116 12.5393 9.0116 11.9424V7.96335C9.0116 7.36649 9.41101 6.96859 10.0101 6.96859C10.5094 6.96859 11.0086 7.36649 11.0086 7.96335V11.9424Z" fill="#EFA716"/>
        </svg>
        <svg *ngIf="type === 'alert'" width="20" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM11 14.5C11 15.1 10.6 15.5 10 15.5C9.4 15.5 9 15.1 9 14.5V13.5C9 12.9 9.4 12.5 10 12.5C10.6 12.5 11 12.9 11 13.5V14.5ZM11 9.5C11 10.1 10.6 10.5 10 10.5C9.4 10.5 9 10.1 9 9.5V5.5C9 4.9 9.4 4.5 10 4.5C10.6 4.5 11 4.9 11 5.5V9.5Z" fill="#CE313F"/>
        </svg>
        <svg *ngIf="type === 'information'" width="20" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM11 14.5C11 15 10.5 15.5 10 15.5C9.4 15.5 9 15 9 14.5V10.5C9 10 9.4 9.5 10 9.5C10.5 9.5 11 10 11 10.5V14.5ZM11 6.5C11 7 10.5 7.5 10 7.5C9.4 7.5 9 7 9 6.5V5.5C9 5 9.4 4.5 10 4.5C10.5 4.5 11 5 11 5.5V6.5Z" fill="#5261FF"/>
        </svg>
    </ng-template>
    <ng-template let-type="type"  #footer>
        <ng-container *ngIf="type==='warning'">
            <al-button [variant]="'warn'" [size]="'large'">Don't Save</al-button>
            <al-button [variant]="'basic'" [size]="'large'" mat-dialog-close>Cancel</al-button>
        </ng-container>
        <ng-container *ngIf="type==='information' || type==='alert'">
            <al-button [variant]="'basic'" [size]="'large'" mat-dialog-close>Ok</al-button>
        </ng-container>
    </ng-template>
    <div mat-dialog-title>
        <div class="modalHeader">
            <ng-container *ngIf="!customHeader" [ngTemplateOutlet]="icon" [ngTemplateOutletContext] ="{'type': type}"></ng-container>  
            <span *ngIf="headerTitle && !customHeader">{{ headerTitle }}</span>
            <ng-container *ngIf="customHeader" [ngTemplateOutlet]="customHeader.headerContent">
          </ng-container>
        </div>
        <div class="closeIcon">
            <button mat-dialog-close>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3125 10.0465L15.7188 5.67442C16.0938 5.30233 16.0938 4.74419 15.7188 4.37209C15.3438 4 14.7812 4 14.4062 4.37209L10 8.74419L5.59375 4.27907C5.21875 3.90698 4.65625 3.90698 4.28125 4.27907C3.90625 4.65116 3.90625 5.2093 4.28125 5.5814L8.6875 10.0465L4.28125 14.4186C3.90625 14.7907 3.90625 15.3488 4.28125 15.7209C4.65625 16.093 5.21875 16.093 5.59375 15.7209L10 11.3488L14.4062 15.7209C14.7812 16.093 15.3438 16.093 15.7188 15.7209C16.0938 15.3488 16.0938 14.7907 15.7188 14.4186L11.3125 10.0465Z" fill="#333333"/>
                </svg>
            </button>
        </div>
    </div>
    <div mat-dialog-content>
        <span *ngIf="bodyMessage && !customBody">{{ bodyMessage }}</span>
        <ng-container *ngIf="customBody" [ngTemplateOutlet]="customBody.bodyContent"></ng-container>
    </div>
    <div mat-dialog-actions [align]="'end'">
        <ng-container *ngIf="!customFooter" [ngTemplateOutlet]="footer" [ngTemplateOutletContext] ="{'type': type}"></ng-container>
        <ng-container *ngIf="customFooter" [ngTemplateOutlet]="customFooter.footerContent"></ng-container>
    </div>
  `,
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements AfterViewInit {
    @Input() headerTitle!: string;

    @Input() type!: 'warning' | 'alert' | 'information';

    @Input() bodyMessage!: string;

    @ViewChild('warningIcon') public warningIconRef: TemplateRef<any> | null = null;

    @ViewChild('alertIcon') public alertIconRef: TemplateRef<any> | null = null;

    @ViewChild('informationIcon') public informationIconRef: TemplateRef<any> | null = null;

    @ContentChild(CustomHeaderComponent) customHeader!: CustomHeaderComponent;

    @ContentChild(CustomBodyComponent) customBody!: CustomBodyComponent;

    @ContentChild(CustomFooterComponent) customFooter!: CustomFooterComponent;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
}