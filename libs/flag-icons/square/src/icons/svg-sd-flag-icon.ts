import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sd-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sd"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="sd-a">
          <path fill-opacity=".7" d="M0 0h496v496H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#sd-a)"
        transform="scale(1.0321)"
      >
        <path fill="#000001" d="M0 330.7h992.1v165.4H0z" />
        <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
        <path fill="red" d="M0 0h992.9v165.4H0z" />
        <path fill="#009a00" d="M0 0v496l330.7-248z" />
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
export class SvgSdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
