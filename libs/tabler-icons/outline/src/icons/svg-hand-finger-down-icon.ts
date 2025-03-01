import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-finger-down-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hand-finger-down"
      [class]="svgClass()"
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
      <path d="M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5" />
      <path d="M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5" />
      <path d="M14 14.5a1.5 1.5 0 0 0 3 0v-1.5" />
      <path
        d="M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHandFingerDownIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
