import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-il-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-il"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="il-a">
          <path fill-opacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#il-a)">
        <path fill="#fff" d="M619.4 512H-112V0h731.4z" />
        <path
          fill="#0038b8"
          d="M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275 110.1 191.6L359 191.6z"
        />
        <path fill="#fff" d="m225.8 317.8 20.9 35.5 21.4-35.3z" />
        <path fill="#0038b8" d="M136 320.6 246.2 129l112.4 190.8z" />
        <path
          fill="#fff"
          d="m225.8 191.6 20.9-35.5 21.4 35.4zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5 41.2.3-19.8 36.3zm151.2 67 20.9 35.5-41.7-.5zm20.5-67-41.2.3 19.8 36.3zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIlFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
