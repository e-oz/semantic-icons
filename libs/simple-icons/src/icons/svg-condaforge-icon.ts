import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-condaforge-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Conda-Forge</title>
      <path
        d="M8.206 5.866l.005.396H6.754l.006.655v.005l-6.758.002v.211L0 7.973l.02.041c.212.467.663.901 1.257 1.313.594.411 1.335.796 2.145 1.13 1.62.664 3.502 1.12 5.006 1.1.746-.01 1.265.228 1.62.672.341.426.51 1.092.524 1.92L7.94 16.239l.008 1.896H20.29l-.004-1.76-2.63-2.22c.055-2.013.708-3.443 1.777-4.405 1.087-.979 2.61-1.49 4.37-1.616l.195-.015L24 5.872zm.425.422l14.946.006-.004 1.457c-1.737.155-3.29.666-4.424 1.685-.912.822-1.433 2.062-1.691 3.534l-1.617.004.002.422 1.535-.004c-.027.226-.113.4-.123.64l-.893-.003-.002.422.995.004 2.138 1.802-2.941.002c-.724-.675-1.552-1.116-2.416-1.158-.817-.04-1.638.324-2.387 1.04l-2.978-.024 2.248-1.781v-.102c.002-.943-.2-1.72-.64-2.269-.396-.496-1.007-.749-1.741-.79l-.008-4.49h.008zm-1.45.396h1.026l.008 4.404c-1.387-.02-3.125-.404-4.631-1.023-.787-.324-1.507-.698-2.066-1.086C.968 8.6.587 8.203.424 7.86v-.514l6.336-.002v2.16h.422v-2.16h.004l-.004-.435v-.226zm6.935 8.839c.75.037 1.503.436 2.18 1.078l-.002 1.112h-4.345l-.006-1.2c.706-.717 1.443-1.026 2.173-.99zM8.36 16.537l3.16.023.006 1.153h-3.16zm11.5.142l.002 1.034h-3.148V16.68z"
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
export class SvgCondaforgeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
