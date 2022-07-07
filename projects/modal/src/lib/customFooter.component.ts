import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sol-custom-footer',
    template: `
        <ng-template><ng-content></ng-content></ng-template>
    `,
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFooterComponent {

  @ViewChild(TemplateRef) footerContent: TemplateRef<any> | null = null;
}

