import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sd-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-sd"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="sd-a">
          <path fill-opacity=".7" d="M0 0h496v496H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#sd-a)"
        transform="scale(1.0321)"
      >
        <path fill="#000001" d="M0 330.7h992.1v165.4H0z" />
        <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
        <path fill="red" d="M0 0h992.9v165.4H0z" />
        <path fill="#009a00" d="M0 0v496l330.7-248z" />
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
export class SvgSdFlagIcon {
  readonly class = input('');
}