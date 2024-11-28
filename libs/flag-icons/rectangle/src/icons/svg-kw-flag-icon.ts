import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kw-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-kw"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="kw-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#kw-a)"
        transform="scale(.9375)"
      >
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="#f31830" d="M0 341.3h1024V512H0z" />
        <path fill="#00d941" d="M0 0h1024v170.7H0z" />
        <path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z" />
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
export class SvgKwFlagIcon {
  readonly class = input('');
}