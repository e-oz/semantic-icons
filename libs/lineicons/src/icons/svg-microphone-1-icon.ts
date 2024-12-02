import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-microphone-1-icon',
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
        d="M12 2C9.37669 2 7.25006 4.12663 7.25006 6.74997V11.25C7.25006 13.8734 9.37669 16 12 16C14.6234 16 16.75 13.8734 16.75 11.25V6.74997C16.75 4.12663 14.6234 2 12 2ZM8.75006 6.74997C8.75006 4.95506 10.2051 3.5 12 3.5C13.7949 3.5 15.25 4.95506 15.25 6.74997V11.25C15.25 13.0449 13.7949 14.5 12 14.5C10.2051 14.5 8.75006 13.0449 8.75006 11.25V6.74997Z"
        fill="#323544"
      />
      <path
        d="M5.75 11.25C5.75 10.8358 5.41421 10.5 5 10.5C4.58579 10.5 4.25 10.8358 4.25 11.25C4.25 15.2772 7.3217 18.587 11.25 18.9642V20.5H10C9.58579 20.5 9.25 20.8358 9.25 21.25C9.25 21.6642 9.58579 22 10 22H14C14.4142 22 14.75 21.6642 14.75 21.25C14.75 20.8358 14.4142 20.5 14 20.5H12.75V18.9642C16.6783 18.587 19.75 15.2772 19.75 11.25C19.75 10.8358 19.4142 10.5 19 10.5C18.5858 10.5 18.25 10.8358 18.25 11.25C18.25 14.7018 15.4518 17.5 12 17.5C8.54822 17.5 5.75 14.7018 5.75 11.25Z"
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
export class SvgMicrophone1Icon {
  readonly class = input('');
}