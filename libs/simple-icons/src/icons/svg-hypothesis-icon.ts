import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hypothesis-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hypothesis</title>
      <path
        d="M3.425 0c-.93 0-1.71.768-1.71 1.72v17.14c0 .94.78 1.71 1.71 1.71h5.95l2.62 3.43 2.62-3.43h5.95c.93 0 1.72-.77 1.72-1.71V1.72c0-.95-.79-1.72-1.72-1.72H3.425m1.71 3.43h2.58v6s.86-1.71 2.56-1.71c1.72 0 3.46.85 3.46 3.52v5.9h-2.58V12c0-1.39-.88-1.93-1.73-1.71-.86.21-1.71 1.12-1.71 3v3.85h-2.58V3.43m12.86 10.29c.95 0 1.72.78 1.72 1.7a1.71 1.71 0 01-1.72 1.71 1.71 1.71 0 01-1.71-1.71c0-.92.76-1.71 1.71-1.71z"
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
export class SvgHypothesisIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
