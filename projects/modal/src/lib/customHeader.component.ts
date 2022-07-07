import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sol-custom-header',
    template: `
        <ng-template><ng-content></ng-content></ng-template>
    `,
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent {

  @ViewChild(TemplateRef) headerContent: TemplateRef<any> | null = null;
}

