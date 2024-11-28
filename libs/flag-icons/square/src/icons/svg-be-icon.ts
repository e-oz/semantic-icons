import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-be-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-be"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#000001" d="M0 0h170.7v512H0z" />
        <path fill="#ffd90c" d="M170.7 0h170.6v512H170.7z" />
        <path fill="#f31830" d="M341.3 0H512v512H341.3z" />
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
export class SvgBeIcon {
  readonly class = input('');
}