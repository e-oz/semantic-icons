import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mr-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-mr"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#cd2a3e" d="M0 0h512v512H0z" />
      <path fill="#006233" d="M0 76.8h512v358.4H0z" />
      <path
        class="mr-st1"
        fill="#ffc400"
        d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
      />
      <path
        fill="#ffc400"
        d="m256 100-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
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
export class SvgMrIcon {
  readonly class = input('');
}