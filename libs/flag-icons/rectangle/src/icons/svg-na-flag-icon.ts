import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-na-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-na"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="na-a">
          <path fill-opacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#na-a)">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#3662a2" d="m-26.4.2.8 345.6L512.5 0z" />
        <path fill="#38a100" d="M666.4 479.6 665 120.3 122.3 479.8l544-.2z" />
        <path
          fill="#c70000"
          d="m-26 371.8.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7z"
        />
        <path
          fill="#ffe700"
          d="m219.6 172-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2L186.3 44l12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6z"
        />
        <path
          fill="#3662a2"
          d="M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3 20.8-46.2 46.6-46.2 46.6 20.7 46.6 46.2"
        />
        <path
          fill="#ffe700"
          d="M222.3 112.4a36.5 36.5 0 1 1-73 0 36.5 36.5 0 0 1 73 0"
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
export class SvgNaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
