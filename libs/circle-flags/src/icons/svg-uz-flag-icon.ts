import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-uz-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#d80027"
          d="m0 178 254.2-22L512 178v22.3l-40.2 54.1 40.2 57.3V334l-254 23.4L0 334v-22.3l36.7-59.4-36.7-52z"
        />
        <path fill="#338af3" d="M0 0h512v178H0z" />
        <path fill="#eee" d="M0 200.3h512v111.4H0z" />
        <path fill="#6da544" d="M0 334h512v178H0z" />
        <path
          fill="#eee"
          d="M117.2 105.7a50 50 0 0 1 39.3-48.9 50.2 50.2 0 0 0-10.7-1.1 50 50 0 1 0 10.7 99c-22.5-5-39.3-25-39.3-49zm69 22.8 3.3 10.4h11l-9 6.5 3.5 10.4-9-6.4-8.7 6.4 3.4-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.4 10.4-8.8-6.4-9 6.4 3.5-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.4-8.8 6.4 3.4-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.4-8.8 6.4 3.4-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.4-8.8 6.4 3.4-10.4-8.8-6.5h11zm-105-36.4 3.4 10.4h11l-9 6.5 3.4 10.4-8.8-6.5-9 6.5 3.5-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.5-8.8 6.5 3.4-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.5-8.8 6.5 3.4-10.4-9-6.5h11zm35 0 3.4 10.4h11l-9 6.5 3.5 10.4-9-6.5-8.8 6.5 3.4-10.4-8.8-6.5h11zm-70-36.4 3.4 10.4h11l-9 6.4 3.6 10.5-9-6.5-8.8 6.5 3.4-10.5-9-6.4h11zm35 0 3.4 10.4h11l-9 6.4 3.6 10.5-9-6.5-8.8 6.5 3.4-10.5-9-6.4h11zm35 0 3.4 10.4h11l-9 6.4 3.6 10.5-9-6.5-8.8 6.5 3.4-10.5-8.8-6.4h11z"
        />
      </g>
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
export class SvgUzFlagIcon {
  readonly class = input('');
}