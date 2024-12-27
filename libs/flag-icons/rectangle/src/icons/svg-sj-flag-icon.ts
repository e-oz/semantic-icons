import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sj-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sj"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#ef2b2d" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M180 0h120v480H180z" />
      <path fill="#fff" d="M0 180h640v120H0z" />
      <path fill="#002868" d="M210 0h60v480h-60z" />
      <path fill="#002868" d="M0 210h640v60H0z" />
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
export class SvgSjFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
