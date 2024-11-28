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
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#000001" d="M0 0h213.3v480H0z" />
        <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
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
