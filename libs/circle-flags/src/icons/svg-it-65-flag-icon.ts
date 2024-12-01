import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-65-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="512"
          height="512"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0V0Z" />
        <path
          fill="#0052b4"
          d="M256 404.4S368 378.7 368 293v-77l-88 80-78 86c27.3 16.3 54 22.4 54 22.4Z"
        />
        <path
          fill="#eee"
          d="M144 152v141a97 97 0 0 0 1.6 17.4L224 240l80-88H144Z"
        />
        <path
          fill="#6da544"
          d="M304 152 145.5 310.5c6.5 34 31.7 57 56.4 71.6l166-166v-64h-64Z"
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
export class SvgIt65FlagIcon {
  readonly class = input('');
}