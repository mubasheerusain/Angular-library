import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'lib-loader',
  template: `
    <div [class]="dark ? 'spinner-dark' : 'spinner-light'" *ngIf="showLoader || isLoader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() isLoader?: boolean = false;

  @Input() dark?: boolean = false;

  showLoader?: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

}
