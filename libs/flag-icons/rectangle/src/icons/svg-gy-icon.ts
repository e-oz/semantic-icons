import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gy-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-gy"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#399408" d="M2.4 0H640v480H2.4z" />
        <path fill="#fff" d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8z" />
        <path
          fill="#ffde08"
          d="M.3 20.2c3.4 0 559 217.9 555.9 220L1.9 463.2.3 20.3z"
        />
        <path
          fill="#000001"
          d="M1.9.8c1.8 0 290.9 240.9 290.9 240.9L1.8 477z"
        />
        <path
          fill="#de2110"
          d="M.3 33.9c1.6-15 260.9 208.4 260.9 208.4L.2 451.7V33.9z"
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
export class SvgGyIcon {
  readonly class = input('');
}