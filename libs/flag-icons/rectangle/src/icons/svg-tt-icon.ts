import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tt-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-tt"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path
        fill="#e00000"
        fill-rule="evenodd"
        d="M463.7 480 0 1v478.8zM176.3 0 640 479V.2z"
      />
      <path
        fill="#000001"
        fill-rule="evenodd"
        d="M27.7.2h118.6l468.2 479.3H492.2z"
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
export class SvgTtIcon {
  readonly class = input('');
}