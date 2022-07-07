import { Input, ElementRef, TemplateRef, AfterViewInit, Directive, AfterContentInit } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
    selector: '[solTooltip]',
    exportAs: 'solTooltip'
})
export class TooltipDirective implements AfterContentInit {

    @Input() popoverTemplate: TemplateRef<any> | null = null;

    @Input() content: string | null = null;

    @Input() trigger: 'mouseenter focus' | 'click' | 'focusin' | 'mouseenter click' = 'mouseenter focus';

    @Input() position: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'auto' | 'auto-start' | 'auto-end' = 'top';

    @Input() maxWidth: number = 350;

    @Input() interactive: boolean = false;

    @Input() closeOnOutsideClick: boolean = true;

    @Input() darkMode: boolean = false;

    @Input() arrow: boolean = false;

    @Input() ariaDescribedBy: string | null = null;

    tippyOptions!: Object;

    instance!: any;

    open = false;

    constructor(private el: ElementRef) {
        this.el = el;
    }

    ngAfterContentInit(): void {
        const viewRef = this.popoverTemplate?.createEmbeddedView({ userName: 'jbond' });
        var htmlTemplate = '';
        viewRef?.rootNodes.map(ele => {
            if (ele.outerHTML) {
                htmlTemplate += ele.outerHTML.toString()
            }
            else {
                htmlTemplate += ele.textContent
            }
        });
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
            onMount: (instance: any) => { 
                if(this.ariaDescribedBy) {
                     instance.reference.setAttribute('aria-describedby', this.ariaDescribedBy); 
                } 
            }, 
            onHide: (instance: any) => {
                instance.reference.removeAttribute('aria-describedby'); 
            },
            onShow: (instance: any) => {
                if(htmlTemplate) {
                    instance.setContent(htmlTemplate);
                }
                else if(this.content) {
                    instance.setContent(this.content);
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
        if(this.open) {
            this.hide();
        }
        else {
            this.show();
        }
    }
}