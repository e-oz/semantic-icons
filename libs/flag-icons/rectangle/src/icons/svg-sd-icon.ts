import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sd-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-sd"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="sd-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#sd-a)"
        transform="scale(.9375)"
      >
        <path fill="#000001" d="M0 341.3h1024V512H0z" />
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="red" d="M0 0h1024.8v170.7H0z" />
        <path fill="#009a00" d="M0 0v512l341.3-256z" />
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
export class SvgSdIcon {
  readonly class = input('');
}
