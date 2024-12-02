import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-question-mark-circle-icon',
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
        d="M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z"
        fill="#323544"
      />
      <path
        d="M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
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
export class SvgQuestionMarkCircleIcon {
  readonly class = input('');
}