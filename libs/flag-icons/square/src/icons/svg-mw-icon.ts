import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mw-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-mw"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="mw-a">
          <path fill-opacity=".7" d="M179.7 0h708.7v708.7H179.7z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#mw-a)"
        transform="translate(-129.8)scale(.72249)"
      >
        <path fill="#f41408" d="M0 0h1063v708.7H0z" />
        <path fill="#21873b" d="M0 472.4h1063v236.3H0z" />
        <path fill="#000001" d="M0 0h1063v236.2H0z" />
        <path
          fill="#f31509"
          d="M401.4 214a147.3 147.3 0 0 1 192.2-80.3 142 142 0 0 1 80.2 80.3zm-36 9.8a419.9 419.9 0 0 1-72.5-12c-5.6-2-5.9-5.4-5.2-8a7 7 0 0 1 8.5-4.5c7.9 2 39.9 10.5 69.3 24.5zM538 92.6c-5.8-32-7.3-67.3-6.7-73.2.5-6 3.8-7 6.5-7a7 7 0 0 1 6.5 7c0 8.2-.2 41.3-6.3 73.2m16 .8a427.9 427.9 0 0 1-.5-73.6c1.1-5.9 4.4-6.7 7.1-6.4 2.7.2 6.3 3.3 5.9 7.6-.7 8-3.7 41-12.5 72.4m14.4 2c-.4-32.6 4-67.6 5.7-73.4 1.5-5.8 4.9-6.3 7.6-5.8a7 7 0 0 1 5.2 8c-1.4 8-7.1 40.6-18.5 71.1zm15.3 3.3c2.5-32.4 10-66.9 12-72.5 2-5.6 5.5-5.8 8.1-5.1a7 7 0 0 1 4.5 8.4c-2.1 7.9-10.6 39.9-24.6 69.2m15 4.8A421.6 421.6 0 0 1 617 32.3c2.6-5.4 6-5.3 8.6-4.4a7 7 0 0 1 3.7 8.9c-2.8 7.6-14.2 38.7-30.7 66.7zm14 5.9c8-31.6 21.4-64.2 24.5-69.4 3-5.2 6.4-4.8 8.8-3.6a7 7 0 0 1 3 9c-3.5 7.5-17.4 37.5-36.3 64m13.8 7.2a432 432 0 0 1 30.4-67c3.4-4.9 6.8-4.2 9.2-2.8a7 7 0 0 1 2 9.3c-4 7-20.5 35.7-41.6 60.5m13 8.3a419.9 419.9 0 0 1 36.2-64c3.8-4.6 7.1-3.6 9.3-2a7 7 0 0 1 1.3 9.4c-4.7 6.7-23.6 33.8-46.8 56.6m12.2 9.5c16-28.4 37.4-56.4 41.7-60.7 4.2-4.2 7.4-3 9.5-1.2 2 1.8 3.2 6.3.4 9.6-5.2 6.2-26.4 31.6-51.6 52.3m11.5 10.5a424 424 0 0 1 46.7-56.8c4.6-3.8 7.7-2.3 9.6-.4a7 7 0 0 1-.4 9.6 410 410 0 0 1-56 47.6zm10.4 11.5c20.7-25.1 46.7-49 51.6-52.4 5-3.4 7.8-1.6 9.6.4a7 7 0 0 1-1.2 9.5 421.5 421.5 0 0 1-60 42.5m9 11.8a422 422 0 0 1 55.8-48c5.2-3 8-.9 9.5 1.4 1.6 2.2 1.6 6.8-2 9.3a415.9 415.9 0 0 1-63.2 37.3zm8.2 12.8a421.7 421.7 0 0 1 59.7-43c5.4-2.5 8-.2 9.4 2.1 1.3 2.3 1 7-2.8 9.2-7 4-35.6 20.8-66.3 31.7m7.6 14.6a431.5 431.5 0 0 1 63.4-37.3c5.6-2 8 .5 9.1 3a7 7 0 0 1-3.6 8.8 417.9 417.9 0 0 1-68.9 25.5m5.8 14.1a413 413 0 0 1 66.3-31.7c5.8-1.5 8 1.2 8.9 3.7 1 2.5-.3 7-4.4 8.5a412.8 412.8 0 0 1-70.8 19.5m4.6 15a421 421 0 0 1 69-25.8c5.8-1 7.7 1.8 8.4 4.5a7 7 0 0 1-5 8c-8 2.2-39.9 10.7-72.4 13.2zM522.4 93.1A421.2 421.2 0 0 1 508.9 21c0-6 3.1-7.3 5.8-7.6a7 7 0 0 1 7.1 6.5c.8 8 3.7 41 .6 73.4zm-15.4 2a418.8 418.8 0 0 1-19.7-70.8c-.5-6 2.5-7.6 5.1-8.1a7 7 0 0 1 7.7 5.8c1.4 8 7.2 40.6 6.9 73.1m-15.3 3.4a421.5 421.5 0 0 1-25.9-68.9c-1-5.9 1.9-7.8 4.5-8.5a7 7 0 0 1 8 5.1c2.2 7.9 10.8 39.8 13.4 72.3m-14.4 4.5a420.4 420.4 0 0 1-31.6-66.4c-1.5-5.8 1.2-8 3.7-8.9a7 7 0 0 1 8.5 4.4c2.8 7.7 14.1 38.7 19.4 70.9m-14 5.7A419.8 419.8 0 0 1 426 45.4c-2-5.7.4-8 2.9-9.1a7 7 0 0 1 8.9 3.6c3.4 7.4 17.3 37.4 25.4 69zm-14.2 7.4a420 420 0 0 1-42.8-59.9c-2.5-5.4-.3-8 2-9.3a7 7 0 0 1 9.2 2.8c4.1 7 20.7 35.7 31.6 66.4m-13 8.2a422 422 0 0 1-47.8-56c-3-5.2-1-8 1.3-9.5a7.2 7.2 0 0 1 9.4 2c4.7 6.7 23.6 33.8 37.1 63.5m-12.1 9a419.3 419.3 0 0 1-52.4-51.6c-3.4-4.9-1.6-7.8.5-9.5a7 7 0 0 1 9.5 1.2c5.2 6.2 26.4 31.6 42.4 60zM412.2 144a421.6 421.6 0 0 1-56.8-46.8c-3.8-4.6-2.3-7.7-.4-9.6a7 7 0 0 1 9.6.4c5.8 5.8 29.2 29.1 47.6 56M402 154.9a421 421 0 0 1-60.5-41.8c-4.2-4.2-2.9-7.4-1.1-9.5a7 7 0 0 1 9.5-.4c6.3 5.2 31.5 26.5 52.1 51.7m-9.7 12.5a421.4 421.4 0 0 1-64-36.3c-4.6-3.9-3.6-7.2-2-9.4a7 7 0 0 1 9.5-1.3 423 423 0 0 1 56.5 47m-8.7 13.4a420.5 420.5 0 0 1-67-30.3c-5-3.5-4.3-6.8-2.9-9.2a7 7 0 0 1 9.3-2.1c7.1 4 35.8 20.5 60.6 41.6m-7.3 13.7c-31.5-8-64.2-21.4-69.4-24.4-5.1-3-4.8-6.4-3.6-8.8a7.1 7.1 0 0 1 9.1-3c7.4 3.4 37.4 17.4 64 36.2zm-5.8 13.8a415 415 0 0 1-71.2-18.6c-5.4-2.5-5.3-6-4.4-8.5 1-2.5 4.8-5.2 8.9-3.7 7.6 2.8 38.7 14.2 66.7 30.8"
        />
        <path
          fill="#f31509"
          d="M365.5 223.8c-32.5-2.5-67-9.9-72.6-12-5.6-2-5.9-5.4-5.2-8a7 7 0 0 1 8.5-4.5c7.9 2 39.9 10.5 69.3 24.5"
        />
        <path d="M275.3 214.7H803V234H275.3z" />
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
export class SvgMwIcon {
  readonly class = input('');
}
