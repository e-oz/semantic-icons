import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-adjustments-vertical-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"
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
export class SvgAdjustmentsVerticalIcon {
  readonly class = input('');
}
