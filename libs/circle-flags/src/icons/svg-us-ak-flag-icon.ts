import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-ak-flag-icon',
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
        <path fill="#0052b4" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="m336.8 199.7 104-75.1h-128l104 75.1-40-122.1zM57 231.7l52-37.4H45l52 37.4-20-60.9zm85.5 31.7 52-37.4h-64l52 37.4-20-60.9zM185 309l52-37.4h-64l52 37.4-20-60.9zm43 47.6 52-37.4h-64l52 37.4-20-60.9zm-5.6 67.1 52-37.4h-64l52 37.4-20-60.9zM356 402.2l52-37.4h-64l52 37.4-20-60.9zm-37.4 53.2 52-37.4h-64l52 37.4-20-60.9z"
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
export class SvgUsAkFlagIcon {
  readonly class = input('');
}