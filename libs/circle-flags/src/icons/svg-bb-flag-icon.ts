import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bb-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#0052b4"
          d="M0 0h144.8l112.9 36.7L367.4 0H512v512H367.4l-108.9-38.1L144.8 512H0z"
        />
        <path fill="#ffda44" d="M144.8 0h222.6v512H144.8z" />
        <path
          fill="#333"
          d="m334.1 155.8 14.8 7.5-14.9-7.5-15-7.4c-.8 1.8-20.3 41.4-23.5 102h-22.7v-94.6l-16.7-22.2-16.7 22.2v94.6h-22.7a278.3 278.3 0 0 0-23.6-102l-29.8 14.9c.2.4 20.5 41.7 20.5 103.8v16.7h55.6v94.6h33.4v-94.6h55.6v-16.7c0-32 5.6-58.6 10.3-75.1 5-18 10.2-28.6 10.3-28.7l-15-7.5z"
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
export class SvgBbFlagIcon {
  readonly class = input('');
}