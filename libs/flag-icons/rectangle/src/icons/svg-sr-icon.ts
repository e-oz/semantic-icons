import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sr-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-sr"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#377e3f" d="M.1 0h640v480H.1z" />
      <path fill="#fff" d="M.1 96h640v288H.1z" />
      <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
      <path
        fill="#ecc81d"
        d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
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
export class SvgSrIcon {
  readonly class = input('');
}
