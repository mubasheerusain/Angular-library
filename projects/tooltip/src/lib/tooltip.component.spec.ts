import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonModule } from 'button';
import { TooltipDirective } from './tooltip.directive';
import { TooltipModule } from './tooltip.module';

@Component({
    template: `
            <div style="width:100%;height:100px;display:flex; justify-content:center;align-items:center;gap:25px;">
                <template #tooltipTemplate>
                    <input type="text" [(ngModel)]="username"><br/>
                    {{username}}
                </template>
                <div>
                    <lib-button [variant]="'primary'" [size]="'large'" #tooltip3="solTooltip" solTooltip [trigger]="'click'" [position]="'bottom'" [ariaDescribedBy]="'Forms tooltip'" [interactive]="true" [darkMode]="true" [closeOnOutsideClick]="false" [content]="'This is a tooltip <br> Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'" [arrow]="true">test</lib-button>
                </div>
                <div>
                    <lib-button [variant]="'primary'" [size]="'large'" #tooltip="solTooltip" solTooltip [trigger]="'click'" [position]="'bottom'" [ariaDescribedBy]="'Forms tooltip'" [interactive]="true" [darkMode]="false" [closeOnOutsideClick]="false" [popoverTemplate]="tooltipTemplate" [arrow]="true">test</lib-button>
                </div>
            </div>
    `
  })
  class TestWrapperComponent {
    @ViewChild(TooltipDirective) tooltipRef!: TooltipDirective;
    username = "Jane Doe";
  }
  
describe('TooltipComponent', () => {
  let fixture: ComponentFixture<any>;
  let buttonDebugElement: DebugElement;
  let buttonElement: HTMLButtonElement;
  let tooltipDirective: TooltipDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestWrapperComponent],
      imports: [TooltipModule, ButtonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    fixture.detectChanges();
    buttonDebugElement = fixture.debugElement.query(By.css('button'))!;
    buttonElement = <HTMLButtonElement>buttonDebugElement.nativeElement;
    tooltipDirective = buttonDebugElement.injector.get<TooltipDirective>(TooltipDirective);
  });
 
  it('should get tippy instance afterContentInit and open on show', () => {
    fixture.componentInstance.tooltipRef.ngAfterContentInit();
    fixture.detectChanges();
    fixture.componentInstance.tooltipRef.show();
    fixture.detectChanges();
    expect(fixture.componentInstance.tooltipRef.open).toBeTruthy();
  });

  it('should close tooltip on calling close', () => {
    fixture.componentInstance.tooltipRef.hide();
    fixture.detectChanges();
    expect(fixture.componentInstance.tooltipRef.open).toBeFalsy();
  });

  it('should toggle tooltip between open and close on calling toggle', () => {
    fixture.componentInstance.tooltipRef.toggle();
    fixture.detectChanges();
    expect(fixture.componentInstance.tooltipRef.open).toBeFalsy();
    fixture.componentInstance.tooltipRef.toggle();
    fixture.detectChanges();
    expect(fixture.componentInstance.tooltipRef.open).toBeTruthy();
  });

  it('should show the tooltip', fakeAsync(() => {
    tooltipDirective.show();
    tick(0);
    expect(tooltipDirective.open).toBe(true);
    fixture.detectChanges();
    const tooltipElement = fixture.debugElement.query(By.css('.tippy-box'));
    expect(tooltipElement instanceof DebugElement).toBeTruthy();
  }))

  it('should hide the tooltip', fakeAsync(() => {
    tooltipDirective.hide();
    tick(0);
    expect(tooltipDirective.open).toBe(false);
    fixture.detectChanges();
    const tooltipElement = fixture.debugElement.query(By.css('.tippy-box'));
    expect(tooltipElement instanceof DebugElement).toBeFalsy();
  }))

  it('should able to toggle the tooltip to show and hide', fakeAsync(() => {
    tooltipDirective.show();
    tick(0);
    fixture.detectChanges();
    expect(tooltipDirective.open).toBe(true);
    tooltipDirective.hide();
    tick(0);
    fixture.detectChanges();
    expect(tooltipDirective.open).toBe(false);
  }))
});