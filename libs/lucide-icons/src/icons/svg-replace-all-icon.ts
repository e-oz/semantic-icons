import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-replace-all-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.468.0 - ISC -->
    <svg
      class="lucide lucide-replace-all"
      [class]="_svgClass()"
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
      <path d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
      <path d="M14 4a2 2 0 0 1 2-2" />
      <path d="M16 10a2 2 0 0 1-2-2" />
      <path d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
      <path d="M20 2a2 2 0 0 1 2 2" />
      <path d="M22 8a2 2 0 0 1-2 2" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5a 3 3 0 0 1 3-3h1" />
      <rect x="2" y="14" width="8" height="8" rx="2" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgReplaceAllIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
