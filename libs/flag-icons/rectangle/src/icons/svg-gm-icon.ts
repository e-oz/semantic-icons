import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gm-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-gm"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="gm-a">
          <path fill-opacity=".7" d="M0-48h640v480H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#gm-a)"
        transform="translate(0 48)"
      >
        <path fill="red" d="M0-128h640V85.3H0z" />
        <path fill="#fff" d="M0 85.3h640V121H0z" />
        <path fill="#009" d="M0 120.9h640V263H0z" />
        <path fill="#fff" d="M0 263.1h640v35.6H0z" />
        <path fill="#090" d="M0 298.7h640V512H0z" />
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
export class SvgGmIcon {
  readonly class = input('');
}