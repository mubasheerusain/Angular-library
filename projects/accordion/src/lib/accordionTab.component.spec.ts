import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionTabComponent } from './accordionTab.component';

describe('AccordionTabComponent', () => {
  let component: AccordionTabComponent;
  let fixture: ComponentFixture<AccordionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call opened', () => {
    spyOn(component.sectionOpened, 'emit');
    component.opened();
    expect(component.sectionOpened.emit).toHaveBeenCalled();
  });

  it('should call closed', () => {
    spyOn(component.sectionClosed, 'emit');
    component.closed();
    expect(component.sectionClosed.emit).toHaveBeenCalled();
  });
});
