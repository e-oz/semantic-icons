import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vn-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-vn"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="vn-a">
          <path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#vn-a)"
        transform="translate(80)scale(.9375)"
      >
        <path fill="#da251d" d="M-128 0h768v512h-768z" />
        <path
          fill="#ff0"
          d="M349.6 381 260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
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
export class SvgVnFlagIcon {
  readonly class = input('');
}