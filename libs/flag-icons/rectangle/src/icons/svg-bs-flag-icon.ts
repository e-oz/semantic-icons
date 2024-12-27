import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bs-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bs"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="bs-a">
          <path fill-opacity=".7" d="M-12 0h640v480H-12z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#bs-a)" transform="translate(12)">
        <path fill="#fff" d="M968.5 480h-979V1.8h979z" />
        <path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
        <path
          fill="#08ced6"
          d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
        />
        <path
          fill="#000001"
          d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2z"
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
export class SvgBsFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
