import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ge-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ge"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="red" d="M272 0h96v480h-96z" />
      <path fill="red" d="M0 192h640v96H0z" />
      <path
        fill="red"
        fill-rule="evenodd"
        d="M146.8 373.1c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.1 4zm368-288c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.1c-16.9-1-31.2-3.9-31.2-3.9s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.1c16.9 1 31.2 4 31.2 4s-1-10-1-14.9 1-14.8 1-14.8-14.3 3-31.2 4zm-368 0c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.1 4zm368 288c1-16.8 4-31.1 4-31.1s-9.8 1-14.8 1c-4.9 0-14.8-1-14.8-1s3 14.3 4 31.2c-16.9-1-31.2-4-31.2-4s1 7.4 1 14.8-1 14.8-1 14.8 14.3-3 31.2-4c-1 16.9-4 31.2-4 31.2s7.4-1 14.8-1 14.8 1 14.8 1-3-14.3-4-31.2c16.9 1 31.2 4 31.2 4s-1-9.8-1-14.8c0-4.9 1-14.8 1-14.8s-14.3 3-31.2 4z"
      />
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
export class SvgGeFlagIcon {
  readonly class = input('');
}