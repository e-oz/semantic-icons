import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ke-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="m0 144.7 253.4-28.2L512 144.7V178l-36 76.4 36 79.6v33.3L254.7 400 0 367.3V334l39-78-39-78z"
        />
        <path fill="#333" d="M0 0h512v144.7H0z" />
        <path fill="#a2001d" d="M0 178h512v156H0z" />
        <path fill="#496e2d" d="M0 367.3h512V512H0z" />
        <path
          fill="#eee"
          d="m335.9 118.3-30.3-14-49.4 111.9-49.4-111.9-30.3 14L237.8 256l-61.3 137.7 30.3 14 49.4-111.9 49.4 111.9 30.3-14L274.6 256z"
        />
        <path
          fill="#eee"
          d="M256.2 111.3s-7 5.8-16.7 16l-16 127.6 16 129.8c9.7 10.2 16.7 16 16.7 16s7-5.8 16.7-16l15-130.7-15-126.7c-9.7-10.2-16.7-16-16.7-16z"
        />
        <path
          fill="#333"
          d="m311.9 179.2-10 75.5 10 78.1A158.6 158.6 0 0 0 334 256c0-28.2-9.7-54.5-22.2-76.8zm-111.4 0 8.9 74.3-9 79.3a158.6 158.6 0 0 1-22.1-76.8c0-28.2 9.7-54.5 22.2-76.8z"
        />
        <path
          fill="#a2001d"
          d="M200.5 179.2v153.6a269 269 0 0 0 39 51.9V127.3c-11.4 12-26.6 30-39 52zm111.4 0a269 269 0 0 0-39-51.9v257.4c11.4-12 26.5-30 39-52V179.3z"
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
export class SvgKeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
