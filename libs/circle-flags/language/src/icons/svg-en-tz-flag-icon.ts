import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-en-tz-flag-icon',
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
        <path
          fill="#ffda44"
          d="M399 0 268 68l-68 132 24 88 89 25 131-68 68-132V68L444 0Z"
        />
        <path fill="#333" d="M444 0 222 222l2 66 66 2L512 68V0Z" />
        <path fill="#338af3" d="M512 113 313 313l67 131 132 68Z" />
        <path fill="#6da544" d="m0 0 68 132 132 68L399 0Z" />
        <path
          fill="#eee"
          d="M512 512 0 0l8 23-8 22v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32z"
        />
        <path
          fill="#d80027"
          d="m304 304-96-96H0v96h208v208h96zM176 176 0 0v45l131 131Zm0 160L0 512h45l131-131Z"
        />
        <path
          fill="#0052b4"
          d="M444 512 336 404v108ZM176 404 68 512h108Zm-68-228L0 68v108zm0 160H0v108z"
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
export class SvgEnTzFlagIcon {
  readonly class = input('');
}