import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bi-flag-icon',
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
          fill="#eee"
          d="M0 0h47.2l207.5 30L464.8 0H512v47.2L477.4 256 512 464.8V512h-47.2l-209.1-35.8L47.2 512H0v-47.2l32.8-202.7L0 47.2z"
        />
        <path
          fill="#d80027"
          d="M47.2 0 256 208.8 464.8 0H47.2zM256 303.2 47.2 512h417.6L256 303.2z"
        />
        <path
          fill="#6da544"
          d="M0 47.2v417.6L208.8 256 0 47.2zm512 0L303.2 256 512 464.8V47.2z"
        />
        <circle cx="256" cy="256" r="111.3" fill="#eee" />
        <path
          fill="#d80027"
          d="m256 178 9.6 16.8H285l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H227l9.6-16.7-9.6-16.7h19.3zm-49 78 9.6 16.7H236l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H178l9.6-16.7-9.6-16.7h19.3zm98 0 9.6 16.7H334l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.6-16.7H276l9.6-16.7-9.6-16.7h19.3z"
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
export class SvgBiFlagIcon {
  readonly class = input('');
}