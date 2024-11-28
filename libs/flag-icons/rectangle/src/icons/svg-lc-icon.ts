import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lc-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-lc"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9z" />
        <path fill="#000001" d="m319 96.5 140.8 340-279 .8z" />
        <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5z" />
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
export class SvgLcIcon {
  readonly class = input('');
}
