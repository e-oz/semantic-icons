import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-runkit-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RunKit</title>
      <path
        d="M23.97 14.797a3 3 0 01-1.47 3.02l-9 5.2a3 3 0 01-3 0l-9-5.2a3 3 0 01-1.47-3.02l1.32-7.2a3 3 0 01.98-1.82 2.96 2.96 0 01.49-.35l7.55-4.37a3.01 3.01 0 013.28.02l7.53 4.35c.1.05.19.1.28.17a3 3 0 011.19 2zm-9.54-10.77l-7.72 1.59c-.43.08-.51.64-.14.86l5.6 3.23c.23.13.5.07.63-.19l1.58-3.6.53-1.22c.16-.35-.11-.75-.5-.67z"
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
export class SvgRunkitIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
