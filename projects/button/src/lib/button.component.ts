import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Variant } from './enum//variant.enum';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html', 
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @ViewChild('buttonText', { static: true }) buttonText: ElementRef | null = null;

  @Input()
  variant: "primary" | "basic" | "text" | "warn" = "primary";

  @Input()
  id?: string = "";

  @Input()
  type?: string = "";

  @Input()
  name?: string = "";

  @Input()
  value: any;

  @Input() IconPositionedFront: TemplateRef<any> | null = null;

  @Input('aria-label') ariaLabel?: string;

  @Input()
  disabled: boolean = false;

  @Input() IconPositionedEnd: TemplateRef<any> | null = null;

  @Output() onClick = new EventEmitter();

  public Variant = Variant;

  @Input()
  size: "large" | "medium" | "small" = "large"

  constructor() { }

  get buttonClass() {
    return Variant[this.variant] + '-'+  this.size
  }

  ngOnInit(): void {
    if(!this.ariaLabel){
      this.ariaLabel = this.buttonText?.nativeElement?.textContent
    }
  }

  OnClick() {
    this.onClick.emit();
  }

}