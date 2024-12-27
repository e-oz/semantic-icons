import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ic-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ic"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#0768a9" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 0h213.3v480H0z" />
        <path fill="#fc0" d="M426.7 0H640v480H426.7z" />
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
export class SvgIcFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
