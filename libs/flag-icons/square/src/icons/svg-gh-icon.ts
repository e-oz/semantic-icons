import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gh-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-gh"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#006b3f" d="M0 0h512v512H0z" />
      <path fill="#fcd116" d="M0 0h512v341.3H0z" />
      <path fill="#ce1126" d="M0 0h512v170.7H0z" />
      <path
        fill="#000001"
        d="m256 170.7 55.5 170.6L166.3 236h179.4L200.6 341.3z"
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
export class SvgGhIcon {
  readonly class = input('');
}
