import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-progressBar',
  template: `
    <div [class]="inDeterminate ? 'progress-bar-indeterminate': 'progress-bar-determinate'">
      <div class="progress-bar-fill" [ngStyle]="progress ? {'width.%': progress} : null"></div>
    </div>
  `,
  styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress?: number = 0;

  @Input() inDeterminate?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
