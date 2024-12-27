import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pw-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-pw"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="pw-a">
          <path fill-opacity=".7" d="M-70.3 0h640v480h-640z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#pw-a)"
        transform="translate(70.3)"
      >
        <path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z" />
        <path
          fill="#ffde00"
          d="M335.6 232.1a135.9 130.1 0 1 1-271.7 0 135.9 130.1 0 1 1 271.7 0"
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
export class SvgPwFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
