import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from "@angular/core";
import { delay, map, Observable, startWith } from "rxjs";
import { AccordionTabComponent } from "./accordionTab.component";

@Component({
    selector: 'sol-accordion',
    template: `
    <mat-accordion [displayMode]="'flat'" [multi]="multi" [attr.id]="id">
        <mat-expansion-panel hideToggle *ngFor="let item of accordionItems$ | async;" [expanded]="item.expanded" [disabled]="item.disabled" (opened)="item.opened()" (closed)="item.closed()" [attr.id]="item.id">
            <mat-expansion-panel-header>
                <svg viewBox="0 0 8 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.77358 7.00497L1.35849 0.238806C1.0566 -0.079602 0.528302 -0.079602 0.226415 0.238806C-0.0754717 0.557214 -0.0754717 1.11443 0.226415 1.43284L6.26415 7.80099L0.226415 14.5672C-0.0754717 14.8856 -0.0754717 15.4428 0.226415 15.7612C0.528302 16.0796 1.0566 16.0796 1.35849 15.7612L7.77358 8.59702C8 8.35821 8 8.1194 8 7.8806C8 7.48259 7.92453 7.16418 7.77358 7.00497Z" fill="currentColor"/>
                </svg>
                <span>
                    <ng-container *ngIf="item.title">{{item.title}}</ng-container>
                    <ng-container *ngIf="item.titleTemplate" [ngTemplateOutlet]="item.titleTemplate"></ng-container>
                </span>
            </mat-expansion-panel-header>
            <ng-container *ngTemplateOutlet="item.accordionContent">
            </ng-container>
        </mat-expansion-panel>
    </mat-accordion>
    `,
    styleUrls: ['./accordion.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit {

    @Input() multi = false;

    @Input() id: string | null = null;

    @ContentChildren(AccordionTabComponent) accordionTabs: QueryList<AccordionTabComponent> | undefined;

    accordionItems$: Observable<AccordionTabComponent[] | undefined> | undefined;

    ngAfterContentInit(): void {
        this.accordionItems$ = this.accordionTabs?.changes
            .pipe(startWith(""))
            .pipe(delay(0))
            .pipe(map(() => {
                return this.accordionTabs?.toArray()
            }));
    }
}