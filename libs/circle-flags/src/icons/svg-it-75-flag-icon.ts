import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-75-flag-icon',
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
        <path fill="#eee" d="M0 0h512v512H0V0Z" />
        <path
          fill="#338af3"
          d="M208 408a64 64 0 0 1-64-64v-1.6l4.8-54.4-4.8-38.4V184h65.6l46.4 3 46.4-3H368v65.6l-3.5 50.6 3.5 42.2v1.6a64 64 0 0 1-64 64"
        />
        <path
          fill="#eee"
          d="M352 335.8 295.8 392h-79.6L160 335.8v-79.6l56.2-56.2h79.6l56.2 56.2v79.6z"
        />
        <path fill="#ffda44" d="M144 152h224v32H144z" />
        <path
          fill="#d80027"
          d="M302.4 184h-92.8L144 249.6v92.8l65.6 65.6h92.8l65.6-65.6v-92.8L302.4 184Zm45.2 150L294 387.6h-76L164.4 334v-76l53.6-53.6h76l53.6 53.6v76Z"
        />
        <path
          fill="#6da544"
          d="M243.7 308.3c0 13.4-14 22.5-14 22.5h52.5s-13.9-9-13.9-22.5h-24.6Z"
        />
        <path
          fill="#496e2d"
          d="M256 245.2c-4.8 0-9.1 2.1-12.3 5.3a17.1 17.1 0 0 0-25.7 12.9 17.1 17.1 0 0 0 1 31.6 17.1 17.1 0 0 0 24.7 13.3c3.2 3.3 7.5 5.4 12.3 5.4s9.1-2.1 12.3-5.4c2.2 1.7 4.8 2.2 7.5 2.2A17 17 0 0 0 293 295a17.1 17.1 0 0 0 1.1-31.6 17.1 17.1 0 0 0-25.7-12.9 17.4 17.4 0 0 0-12.3-5.3Z"
        />
        <path
          fill="#ff9811"
          d="m352 120-16-16-16 16-16-16-16 16-16-16-16 16-16-16-16 16-16-16-16 16-16-16-16 16-16-16v32h224v-32l-16 16z"
        />
        <path fill="#6da544" d="M0 0h48v512H0z" />
        <path fill="#d80027" d="M464 0h48v512h-48z" />
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
export class SvgIt75FlagIcon {
  readonly class = input('');
}