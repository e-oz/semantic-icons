import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ms-flag-icon',
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
        <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
        <path
          fill="#eee"
          d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
        />
        <path
          fill="#d80027"
          d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
        />
        <path
          fill="#338af3"
          d="M289.4 133.6V256l78 40.4 77.9-40.4V133.6h-156z"
        />
        <path
          fill="#a2001d"
          d="M289.4 256c0 59.6 77.9 78 77.9 78s78-18.4 78-78h-156z"
        />
        <path
          fill="#333"
          d="M400.7 189.2h-22.3V167h-22.2v22.2h-22.3v22.3h22.3v66.8h22.2v-66.8h22.3z"
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
export class SvgMsFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
