import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'sol-tab',
    template: `
        <ng-template><ng-content></ng-content></ng-template>
    `
})
export class TabComponent {
  @Input()
  isActive: boolean = false;

  @Input()
  title: string = '';

  @Input()
  titleTemplate: TemplateRef<any> | null = null;

  @ViewChild(TemplateRef)
  itemContent: TemplateRef<any> | null = null;
}

