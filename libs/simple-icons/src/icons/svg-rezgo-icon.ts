import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rezgo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Rezgo</title>
      <path
        d="M10.147 16.705c-.015-3.076.004-6.175-.024-9.238 0-2.052.836-3.917 2.193-5.274A7.438 7.438 0 0 1 17.59 0c1.482.015 2.999.008 4.493.008v3.728c-1.494 0-3.012-.005-4.493.006a3.713 3.713 0 0 0-3.725 3.725c-.01 3.063.004 6.162.01 9.238zm-5.4-.633l-3.61.965c.845 3.15 3.287 5.236 6.274 6.253a13.74 13.74 0 0 0 4.026.704c1.385.039 2.78-.117 4.092-.469 3.31-.886 6.186-3 7.334-6.371l-3.538-1.199c-.699 2.053-2.574 3.374-4.76 3.96-.982.263-2.013.38-3.025.352a10 10 0 0 1-2.93-.514c-1.868-.636-3.378-1.87-3.862-3.681zM6.986 3.354a2.887 2.887 0 1 1-5.775 0 2.887 2.887 0 0 1 5.775 0Z"
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
export class SvgRezgoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
