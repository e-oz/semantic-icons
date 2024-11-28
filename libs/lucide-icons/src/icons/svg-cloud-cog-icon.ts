import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloud-cog-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <!-- @license lucide-static v0.462.0 - ISC -->
    <svg
      class="lucide lucide-cloud-cog"
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
      <circle cx="12" cy="17" r="3" />
      <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="m15.7 18.4-.9-.3" />
      <path d="m9.2 15.9-.9-.3" />
      <path d="m10.6 20.7.3-.9" />
      <path d="m13.1 14.2.3-.9" />
      <path d="m13.6 20.7-.4-1" />
      <path d="m10.8 14.3-.4-1" />
      <path d="m8.3 18.6 1-.4" />
      <path d="m14.7 15.8 1-.4" />
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
export class SvgCloudCogIcon {
  readonly class = input('');
}
