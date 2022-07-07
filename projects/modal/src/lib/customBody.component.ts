import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sol-custom-body',
    template: `
        <ng-template><ng-content></ng-content></ng-template>
    `,
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomBodyComponent {

  @ViewChild(TemplateRef) bodyContent: TemplateRef<any> | null = null;
}

