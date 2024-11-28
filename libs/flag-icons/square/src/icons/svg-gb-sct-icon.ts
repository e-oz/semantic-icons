import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gb-sct-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-gb-sct"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#0065bd" d="M0 0h512v512H0z" />
      <path
        stroke="#fff"
        stroke-width=".6"
        d="m0 0 5 3M0 3l5-3"
        transform="scale(102.4 170.66667)"
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
export class SvgGbSctIcon {
  readonly class = input('');
}