import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mo-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#496e2d" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="M300.5 245.3c-6.3 0-12.2 1.3-17.8 3.3 3-6.8 5.1-14.3 5.1-22.4 0-31.8-31.8-55.6-31.8-55.6s-31.8 23.8-31.8 55.6c0 8 2 15.6 5 22.4-5.5-2-11.4-3.3-17.7-3.3-31.8 0-55.7 31.8-55.7 31.8s23.9 31.8 55.7 31.8C230 309 246 298 256 289c10 9.1 25.9 20 44.5 20 31.8 0 55.7-31.8 55.7-31.8s-23.9-31.8-55.7-31.8z"
        />
        <path
          fill="#ffda44"
          d="m256 100.2 6.6 20.2h21.2l-17.2 12.5 6.6 20.2-17.2-12.5-17.2 12.5 6.6-20.2-17.2-12.5h21.2zm-80.8 35.3 12.6 11.4 14.7-8.5-6.9 15.5 12.7 11.4-17-1.8-6.9 15.6-3.5-16.7-17-1.7 14.8-8.5zM116 194.7l16.6 3.5 8.5-14.7 1.8 17 16.6 3.5-15.5 6.9 1.8 16.9-11.4-12.6-15.5 6.9 8.5-14.8zm220.8-59.2L324.2 147l-14.7-8.5 6.9 15.5-12.7 11.4 17-1.8 6.9 15.6 3.5-16.7 17-1.7-14.8-8.5zm59.2 59.2-16.6 3.5-8.5-14.7-1.8 17-16.6 3.5 15.5 6.9-1.8 16.9 11.4-12.6 15.5 6.9-8.5-14.8z"
        />
        <path
          fill="#eee"
          d="M256 398c25.3 0 48.5-8.5 67.2-22.6H188.8c18.7 14.1 42 22.6 67.2 22.6zm-102-66.8a111.3 111.3 0 0 0 13.2 22.6h177.6a111.3 111.3 0 0 0 13.2-22.6z"
        />
      </g>
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
export class SvgMoFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
