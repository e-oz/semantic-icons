import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-message-3-text-icon',
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
        d="M6.25 9.77344C6.25 9.35922 6.58579 9.02344 7 9.02344H17C17.4142 9.02344 17.75 9.35922 17.75 9.77344C17.75 10.1877 17.4142 10.5234 17 10.5234H7C6.58579 10.5234 6.25 10.1877 6.25 9.77344Z"
        fill="#323544"
      />
      <path
        d="M7 12.0234C6.58579 12.0234 6.25 12.3592 6.25 12.7734C6.25 13.1877 6.58579 13.5234 7 13.5234H12C12.4142 13.5234 12.75 13.1877 12.75 12.7734C12.75 12.3592 12.4142 12.0234 12 12.0234H7Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 5.53125C2.5 4.28861 3.50736 3.28125 4.75 3.28125H19.25C20.4926 3.28125 21.5 4.28861 21.5 5.53125V16.0796C21.5 17.3223 20.4926 18.3296 19.25 18.3296H15.1014L12.6025 21.6956C12.461 21.8861 12.2377 21.9985 12.0003 21.9985C11.763 21.9985 11.5396 21.8861 11.3981 21.6956L8.89931 18.3296H4.75C3.50736 18.3296 2.5 17.3223 2.5 16.0796V5.53125ZM4.75 4.78125C4.33579 4.78125 4 5.11704 4 5.53125V16.0796C4 16.4938 4.33579 16.8296 4.75 16.8296H9.2766C9.51396 16.8296 9.73731 16.942 9.87879 17.1326L12.0003 19.9903L14.1219 17.1326C14.2634 16.942 14.4867 16.8296 14.7241 16.8296H19.25C19.6642 16.8296 20 16.4938 20 16.0796V5.53125C20 5.11704 19.6642 4.78125 19.25 4.78125H4.75Z"
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
export class SvgMessage3TextIcon {
  readonly class = input('');
}