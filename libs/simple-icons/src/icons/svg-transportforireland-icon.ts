import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-transportforireland-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Transport for Ireland</title>
      <path
        d="M0 0v12c0 6.62 5.38 12 12 12h12V11.978h-.022c0-6.62-5.38-11.978-12-11.978zm3.376 8.145h6.337v1.546h-2.33v6.12H5.706v-6.12h-2.33zm8.014 0h5.837V9.67h-4.138v1.633h3.659v1.546h-3.659v2.962H11.39zm7.535 0h1.678v7.666h-1.678Z"
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
export class SvgTransportforirelandIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
