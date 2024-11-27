import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-old-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-old"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 21l-1 -4l-2 -3v-6" />
      <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
      <path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M7 17l-2 4" />
      <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
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
export class SvgOldIcon {
  readonly class = input('');
}
