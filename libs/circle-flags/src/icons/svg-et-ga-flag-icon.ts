import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-et-ga-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v128l-256 64L0 128Z" />
        <path fill="#eee" d="M0 128h512v128l-256 64L0 256Z" />
        <path fill="#496e2d" d="M0 256h512v128l-256 64L0 384Z" />
        <path
          fill="#333"
          d="M0 384h512v128H0Zm221-139 91-65H200l91 65-35-106z"
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
export class SvgEtGaFlagIcon {
  readonly class = input('');
}