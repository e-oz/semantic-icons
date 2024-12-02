import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gemini-icon',
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
        d="M21.9956 12.0175C16.6323 12.3419 12.3399 16.6343 12.0156 21.9975H11.9756C11.6556 16.6343 7.36325 12.3419 2 12.0175V11.9775C7.36325 11.6576 11.6556 7.36521 11.98 2.00195H12.02C12.3444 7.36521 16.6367 11.6576 22 11.982V12.0175H21.9956Z"
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
export class SvgGeminiIcon {
  readonly class = input('');
}