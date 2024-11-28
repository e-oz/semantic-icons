import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bj-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-bj"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="bj-a">
          <path fill="gray" d="M67.6-154h666v666h-666z" />
        </clipPath>
      </defs>
      <g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#319400" d="M0-154h333v666H0z" />
          <path fill="#ffd600" d="M333-154h666v333H333z" />
          <path fill="#de2110" d="M333 179h666v333H333z" />
        </g>
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
export class SvgBjIcon {
  readonly class = input('');
}
