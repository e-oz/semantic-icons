import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-calendar-cog-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <!-- @license lucide-static v0.462.0 - ISC -->
    <svg
      class="lucide lucide-calendar-cog"
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
      <path d="m15.2 16.9-.9-.4" />
      <path d="m15.2 19.1-.9.4" />
      <path d="M16 2v4" />
      <path d="m16.9 15.2-.4-.9" />
      <path d="m16.9 20.8-.4.9" />
      <path d="m19.5 14.3-.4.9" />
      <path d="m19.5 21.7-.4-.9" />
      <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="m21.7 16.5-.9.4" />
      <path d="m21.7 19.5-.9-.4" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
      <circle cx="18" cy="18" r="3" />
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
export class SvgCalendarCogIcon {
  readonly class = input('');
}
