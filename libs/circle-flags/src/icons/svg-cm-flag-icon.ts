import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cm-flag-icon',
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
          d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z"
        />
        <path
          fill="#ffda44"
          d="m256.1 167 22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
        />
        <path fill="#496e2d" d="M0 0h144.8v512H0z" />
        <path fill="#ffda44" d="M367.2 0H512v512H367.2z" />
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
export class SvgCmFlagIcon {
  readonly class = input('');
}