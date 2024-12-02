import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-shield-2-check-icon',
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
        d="M15.507 9.77587C15.7999 9.48297 15.7999 9.0081 15.507 8.71521C15.2141 8.42231 14.7393 8.42231 14.4464 8.71521L10.9648 12.1967L9.55353 10.7854C9.26063 10.4925 8.78576 10.4926 8.49287 10.7854C8.19998 11.0783 8.19998 11.5532 8.49287 11.8461L10.4345 13.7877C10.7274 14.0806 11.2023 14.0806 11.4952 13.7877L15.507 9.77587Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8608 2.29633C12.3094 2.06789 11.6899 2.06789 11.1385 2.29633L4.59034 5.00922C3.81392 5.33089 3.2534 6.07287 3.22752 6.95318C3.09402 11.4935 4.43153 17.7707 10.9353 21.5237C11.5955 21.9047 12.4101 21.9012 13.067 21.5139C19.4296 17.7631 20.8871 11.5013 20.7701 6.95597C20.7473 6.07313 20.1849 5.33068 19.409 5.00923L12.8608 2.29633ZM11.7126 3.68211C11.8964 3.60596 12.1029 3.60596 12.2867 3.68211L18.8349 6.39501C19.1038 6.50643 19.2642 6.74684 19.2706 6.99458C19.3795 11.223 18.0304 16.8467 12.3052 20.2218C12.1143 20.3343 11.8771 20.3354 11.685 20.2245C5.84237 16.853 4.60224 11.2358 4.72687 6.99727C4.73423 6.74708 4.89602 6.50622 5.16447 6.395L11.7126 3.68211Z"
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
export class SvgShield2CheckIcon {
  readonly class = input('');
}