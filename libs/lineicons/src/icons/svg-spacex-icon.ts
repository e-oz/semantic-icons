import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-spacex-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.42595 11.0004H2.2778L2.1667 11.2227L4.53704 12.9634C4.98151 12.7041 5.48149 12.4449 6 12.1856M6.35187 14.2597L8.44446 15.7782H10.5926L10.6852 15.5745L7.57409 13.2967C7.16669 13.6115 6.74078 13.9263 6.35187 14.2597Z"
        fill="#323544"
      />
      <path
        d="M4.11113 15.7782H2.1667L2 15.5189C3.31485 14.2412 9.2037 8.79673 22 8.22266C22 8.22266 11.2778 8.593 4.11113 15.7782Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSpacexIcon {
  readonly class = input('');
}