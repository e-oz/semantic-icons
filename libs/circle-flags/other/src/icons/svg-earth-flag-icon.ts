import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-earth-flag-icon',
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
        <path fill="#0052b4" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="M302.7 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M209.4 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M302.7 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M349.2 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M209.4 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M162.8 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
        />
        <path
          fill="#eee"
          d="M256 153.1a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83 0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83z"
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
export class SvgEarthFlagIcon {
  readonly class = input('');
}