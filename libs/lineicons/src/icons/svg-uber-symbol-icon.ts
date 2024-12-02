import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-uber-symbol-icon',
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
        d="M4.36364 3H19.6364C20.3895 3 21 3.61052 21 4.36364V19.6364C21 20.3895 20.3895 21 19.6364 21H4.36364C3.61052 21 3 20.3895 3 19.6364V4.36364C3 3.61052 3.61052 3 4.36364 3ZM6.57315 11.4545H10.3641V10.6364C10.3641 10.4857 10.4862 10.3636 10.6368 10.3636H13.3641C13.5147 10.3636 13.6368 10.4857 13.6368 10.6364V13.3636C13.6368 13.5143 13.5147 13.6364 13.3641 13.6364H10.6368C10.4862 13.6364 10.3641 13.5143 10.3641 13.3636V12.5455H6.57315C6.86731 15.4723 9.42929 17.6387 12.3643 17.4424C15.2993 17.2461 17.55 14.7579 17.4519 11.818C17.3537 8.87802 14.942 6.54549 12.0004 6.54545C9.19916 6.54542 6.85328 8.66732 6.57315 11.4545Z"
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
export class SvgUberSymbolIcon {
  readonly class = input('');
}