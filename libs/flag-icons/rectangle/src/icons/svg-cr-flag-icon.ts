import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cr"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#0000b4" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 75.4h640v322.3H0z" />
        <path fill="#d90000" d="M0 157.7h640v157.7H0z" />
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
export class SvgCrFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
