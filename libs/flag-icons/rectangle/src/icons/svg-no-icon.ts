import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-no-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-no"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#ed2939" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M180 0h120v480H180z" />
      <path fill="#fff" d="M0 180h640v120H0z" />
      <path fill="#002664" d="M210 0h60v480h-60z" />
      <path fill="#002664" d="M0 210h640v60H0z" />
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
export class SvgNoIcon {
  readonly class = input('');
}
