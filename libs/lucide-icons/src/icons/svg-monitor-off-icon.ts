import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-monitor-off-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <!-- @license lucide-static v0.462.0 - ISC -->
    <svg
      class="lucide lucide-monitor-off"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
      <path d="M22 15V5a2 2 0 0 0-2-2H9" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m2 2 20 20" />
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
export class SvgMonitorOffIcon {
  readonly class = input('');
}
