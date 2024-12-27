import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-stackoverflow-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8728 20.2264H5.39283V14.8732H3.55469V22H19.6142V14.8732H17.8728V20.2264Z"
        fill="#323544"
      />
      <path
        d="M15.1426 2L13.7182 3.05673L19.0211 10.2047L20.4455 9.14793L15.1426 2Z"
        fill="#323544"
      />
      <path
        d="M11.8616 4.86859L10.7275 6.23233L17.5711 11.9233L18.7052 10.5595L11.8616 4.86859Z"
        fill="#323544"
      />
      <path
        d="M16.0667 16.6468H7.1663V18.4205H16.0667V16.6468Z"
        fill="#323544"
      />
      <path
        d="M17.2925 12.3578L9.26273 8.55249L8.48878 10.1971L16.5508 13.9701L17.2925 12.3578Z"
        fill="#323544"
      />
      <path
        d="M16.4211 14.4539L7.71421 12.5835L7.29498 14.3571L16.0664 16.1953L16.4211 14.4539Z"
        fill="#323544"
      />
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
export class SvgStackoverflowIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
