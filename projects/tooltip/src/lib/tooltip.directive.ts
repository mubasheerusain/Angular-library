import { Input, ElementRef, TemplateRef, AfterViewInit, Directive, AfterContentInit } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
    selector: '[solTooltip]',
    exportAs: 'solTooltip'
})
export class TooltipDirective implements AfterContentInit {

    @Input() popoverTemplate: any;

    @Input() content: string | null = null;

    @Input() trigger: 'mouseenter focus' | 'click' | 'focusin' | 'mouseenter click' = 'focusin';

    @Input() position: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'auto' | 'auto-start' | 'auto-end' = 'top';

    @Input() maxWidth: number = 350;

    @Input() interactive: boolean = false;

    @Input() closeOnOutsideClick: boolean = true;

    @Input() darkMode: boolean = false;

    @Input() arrow: boolean = false;

    tippyOptions!: Object;

    instance!: any;

    open = false;

    element!: Element;

    constructor(private el: ElementRef) {
        this.el = el;
    }

    ngAfterContentInit(): void {
        if (this.popoverTemplate) {
            this.element = document.createElement('div');
            this.element.append(...this.popoverTemplate.childNodes);
        }
        let popperOptions = { modifiers: [{ name: 'arrow', options: { padding: 15, } }] }
        this.tippyOptions = {
            arrow: this.arrow,
            trigger: this.trigger,
            interactive: this.interactive,
            placement: this.position,
            allowHTML: true,
            maxWidth: this.maxWidth,
            hideOnClick: this.closeOnOutsideClick,
            theme: this.darkMode ? 'dark' : 'light',
            popperOptions: popperOptions,
            onHide: () => {
                this.el.nativeElement.removeAttribute('aria-label');
            },
            onShow: (instance: any) => {
                if (this.element) {
                    instance.setContent(this.element);
                }
                else if (this.content) {
                    instance.setContent(this.content);
                    this.el.nativeElement.setAttribute('aria-label', this.content);
                }
            }
        };
        this.instance = tippy(this.el.nativeElement, this.tippyOptions || {});
        this.open = true;
    }

    show() {
        this.instance.show();
        this.open = true;
    }

    hide() {
        this.instance.hide();
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.hide();
        }
        else {
            this.show();
        }
    }
}