import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-at-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-at"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#c8102e" d="M0 0h640v160H0zm0 320h640v160H0z" />
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
export class SvgAtIcon {
  readonly class = input('');
}
