import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-shredder-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-shredder"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4 10m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"
      />
      <path
        d="M17 10v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4m5 5v5m4 -5v2m-8 -2v3"
      />
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
export class SvgShredderIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
