import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ch-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ch"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="red" d="M0 0h640v480H0z" />
        <g fill="#fff">
          <path d="M170 195h300v90H170z" />
          <path d="M275 90h90v300h-90z" />
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
export class SvgChIcon {
  readonly class = input('');
}
