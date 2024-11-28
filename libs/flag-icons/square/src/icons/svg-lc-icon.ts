import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lc-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-lc"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h512v512H0z" />
        <path fill="#fff" d="m254.8 44.8 173.5 421.6-344 1L254.7 44.8z" />
        <path fill="#000001" d="m255 103 150 362.6-297.5.8z" />
        <path fill="#ffce00" d="m254.8 256.1 173.5 210.8-344 .5z" />
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
export class SvgLcIcon {
  readonly class = input('');
}