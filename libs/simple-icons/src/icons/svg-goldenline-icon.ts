import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-goldenline-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GoldenLine</title>
      <path
        d="M11.997 24a11.995 11.995 0 0 0 11.949-13.04h-6.781v2.943h1.226a6.667 6.667 0 1 1-.114-4.156h5.509A11.995 11.995 0 1 0 12 23.991z"
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
export class SvgGoldenlineIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
