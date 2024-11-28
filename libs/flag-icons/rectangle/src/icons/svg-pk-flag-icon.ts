import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pk-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-pk"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="pk-a">
          <path fill-opacity=".7" d="M-52.3 0h682.6v512H-52.3z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#pk-a)"
        transform="translate(49)scale(.9375)"
      >
        <path fill="#0c590b" d="M-95 0h768v512H-95z" />
        <path fill="#fff" d="M-95 0H97.5v512H-95z" />
        <g fill="#fff">
          <path
            d="m403.7 225.4-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"
          />
          <path
            d="M415.4 306a121.2 121.2 0 0 1-161.3 59.4 122.1 122.1 0 0 1-59.5-162.1A118.6 118.6 0 0 1 266 139a156.2 156.2 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z"
          />
        </g>
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
export class SvgPkFlagIcon {
  readonly class = input('');
}