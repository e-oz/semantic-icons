import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-haze-moon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-haze-moon"
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
      <path d="M3 16h18" />
      <path d="M3 20h18" />
      <path
        d="M8.296 16c-2.268 -1.4 -3.598 -4.087 -3.237 -6.916c.443 -3.48 3.308 -6.083 6.698 -6.084v.006h.296c-1.991 1.916 -2.377 5.03 -.918 7.405c1.459 2.374 4.346 3.33 6.865 2.275a6.888 6.888 0 0 1 -2.777 3.314"
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
export class SvgHazeMoonIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
