import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-iconify-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Iconify</title>
      <path
        d="M12 19.5c3.75 0 7.159-3.379 6.768-4.125-.393-.75-2.268 1.875-6.768 1.875s-6-2.625-6.375-1.875S8.25 19.5 12 19.5zm4.125-12c.623 0 1.125.502 1.125 1.125v1.5c0 .623-.502 1.125-1.125 1.125A1.123 1.123 0 0115 10.125v-1.5c0-.623.502-1.125 1.125-1.125zm-8.25 0C8.498 7.5 9 8.002 9 8.625v1.5c0 .623-.502 1.125-1.125 1.125a1.123 1.123 0 01-1.125-1.125v-1.5c0-.623.502-1.125 1.125-1.125zM12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 1.5c5.808 0 10.5 4.692 10.5 10.5S17.808 22.5 12 22.5 1.5 17.808 1.5 12 6.192 1.5 12 1.5Z"
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
export class SvgIconifyIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
