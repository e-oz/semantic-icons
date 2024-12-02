import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-knife-fork-1-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.5 5.75C4.5 3.67893 6.17893 2 8.25 2H9C9.41421 2 9.75 2.33579 9.75 2.75L9.75 21.25C9.75 21.6642 9.41421 22 9 22C8.58579 22 8.25 21.6642 8.25 21.25L8.25 14.75H6.75C5.50736 14.75 4.5 13.7426 4.5 12.5V5.75ZM8.25 3.5C7.00736 3.5 6 4.50736 6 5.75V12.5C6 12.9142 6.33579 13.25 6.75 13.25H8.25V3.5Z"
        fill="#323544"
      />
      <path
        d="M13.5 2.75C13.5 2.33579 13.1642 2 12.75 2C12.3358 2 12 2.33579 12 2.75V7.75C12 9.56422 13.2883 11.0775 15 11.425V21.25C15 21.6642 15.3358 22 15.75 22C16.1642 22 16.5 21.6642 16.5 21.25V11.425C18.2117 11.0775 19.5 9.56422 19.5 7.75V2.75C19.5 2.33579 19.1642 2 18.75 2C18.3358 2 18 2.33579 18 2.75V7.75C18 8.99264 16.9926 10 15.75 10C14.5074 10 13.5 8.99264 13.5 7.75V2.75Z"
        fill="#323544"
      />
      <path
        d="M15.75 2C16.1642 2 16.5 2.33579 16.5 2.75V7.75C16.5 8.16421 16.1642 8.5 15.75 8.5C15.3358 8.5 15 8.16421 15 7.75V2.75C15 2.33579 15.3358 2 15.75 2Z"
        fill="#323544"
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
export class SvgKnifeFork1Icon {
  readonly class = input('');
}