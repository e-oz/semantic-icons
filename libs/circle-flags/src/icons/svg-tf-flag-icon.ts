import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tf-flag-icon',
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
        <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
        <path fill="#eee" d="M0 0h256v256H0z" />
        <path fill="#0052b4" d="M0 0h75v224H0z" />
        <path fill="#d80027" d="M149 0h75v224h-75z" />
        <path
          fill="#eee"
          d="m323 158 13 21h36v71l-27-43-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27 43v-39h16l12-20h-28v-12h36l13-21zm43 88h-40v14h40zm76 0h-40v14h40z"
        />
        <path
          fill="#eee"
          d="m301 181 13 38-34-23h42l-34 23zm166 0 13 38-34-23h42l-34 23zM339 282l13 38-34-23h42l-34 23zm90 0 13 38-34-23h42l-34 23zm-45 34 13 38-34-23h42l-34 23z"
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
export class SvgTfFlagIcon {
  readonly class = input('');
}