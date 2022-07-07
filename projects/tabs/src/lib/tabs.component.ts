import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { delay, map, Observable, startWith } from 'rxjs';
import { TabComponent } from './tab.component';


@Component({
  selector: 'sol-tabs',
  template: `
    <div [class]="'tabs-' + variant + '-' + size">
      <mat-tab-group disableRipple="true">
        <mat-tab *ngFor="let item of tabItems$ | async;" [class]="'tabs-header-' + variant + '-' + size">
          <ng-template mat-tab-label>
            <ng-container *ngIf="item.title">{{item.title}}</ng-container>
            <ng-container *ngTemplateOutlet="item.titleTemplate"></ng-container>
          </ng-template>
          <ng-container *ngTemplateOutlet="item.itemContent">
          </ng-container>
        </mat-tab>
      </mat-tab-group>
    <div>
  `,
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterContentInit {

  @ViewChild(MatTabGroup) tabGroup?: MatTabGroup;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

  @Input() variant: 'primary' | 'basic' = 'basic';

  @Input() size: 'large' | 'extraLarge' = 'large';

  tabItems$: Observable<TabComponent[] | undefined> | undefined;

  activeTabIndex: number = 0;

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs?.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => {
        if (this.tabGroup) {
          this.tabGroup.selectedIndex = this.tabs?.toArray().findIndex((tab) => tab.isActive == true)
        }
        return this.tabs?.toArray()
      }));
  }
}
