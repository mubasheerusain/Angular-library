import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'sol-accordion-tab',
    template: `<ng-template><ng-content></ng-content></ng-template>`,
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionTabComponent {

    @Input() title: string = '';

    @Input() id: string | null = null;

    @Input() expanded = false;

    @Input() hideToggle = false;

    @Input() disabled = false;

    @Input() titleTemplate: TemplateRef<any> | null = null;

    @Output() sectionOpened = new EventEmitter();

    @Output() sectionClosed = new EventEmitter(); 

    @ViewChild(TemplateRef) accordionContent: TemplateRef<any> | null = null;

    opened () {
        this.expanded = true;
        this.sectionOpened.emit();
    }

    closed () {
        this.expanded = false;
        this.sectionClosed.emit();
    }
}