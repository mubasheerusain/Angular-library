import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { merge, Observable, Subscription } from 'rxjs';

export interface DatepickerPanel {
    templateRef: TemplateRef<any>;
    selectedDate?: Date;
    selectedDateRange?: DateRange<Date>;
    readonly closed: EventEmitter<void>;
}

@Directive({
    selector: '[libDatepicker]',
    host: {
        '(click)': 'toggleDatepicker()'
    }
})
export class DatePickerDirective {

    private isDatepickerOpen = false;
    private overlayRef!: OverlayRef;
    private datepickerClosingActionsSub = Subscription.EMPTY;

    @Input('libDatepicker') public datepickerPanel!: DatepickerPanel;

    constructor(private renderer: Renderer2, private overlay: Overlay, private elementRef: ElementRef<HTMLElement>, private viewContainerRef: ViewContainerRef, hostElement: ElementRef) {
        renderer.addClass(hostElement.nativeElement, 'calendar-svg');
    }

    toggleDatepicker(): void {
        this.isDatepickerOpen ? this.destroyDatepicker() : this.openDatepicker();
    }

    openDatepicker(): void {
        this.isDatepickerOpen = true;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions([
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetY: 8,
                        offsetX: 15
                    }
                ])
        });
        const templatePortal = new TemplatePortal(this.datepickerPanel.templateRef, this.viewContainerRef);
        this.overlayRef.attach(templatePortal);
        this.datepickerClosingActionsSub = this.datepickerClosingActions().subscribe(() => this.destroyDatepicker());
        (document.querySelector('.mat-calendar-body-active') as HTMLElement)?.focus();
    }

    private datepickerClosingActions(): Observable<MouseEvent | void> {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachment$ = this.overlayRef.detachments();
        const datepickerClosed = this.datepickerPanel.closed;
        return merge(backdropClick$, detachment$, datepickerClosed);
    }
    
    private destroyDatepicker(): void {
        if (!this.overlayRef || !this.isDatepickerOpen) {
          return;
        }
        this.datepickerClosingActionsSub.unsubscribe();
        this.isDatepickerOpen = false;
        this.overlayRef.detach();
    }
    
    ngOnDestroy(): void {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
}