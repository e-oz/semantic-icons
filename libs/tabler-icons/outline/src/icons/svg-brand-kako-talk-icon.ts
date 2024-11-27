import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-kako-talk-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-kako-talk"
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
      <path d="M10 8v7" />
      <path d="M14 10l-2 2.5l2 2.5" />
      <path
        d="M12 4c4.97 0 9 3.358 9 7.5c0 4.142 -4.03 7.5 -9 7.5c-.67 0 -1.323 -.061 -1.95 -.177l-3.05 2.177l.592 -2.962c-2.741 -1.284 -4.592 -3.73 -4.592 -6.538c0 -4.142 4.03 -7.5 9 -7.5z"
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
export class SvgBrandKakoTalkIcon {
  readonly class = input('');
}
