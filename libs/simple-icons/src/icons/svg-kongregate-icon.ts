import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kongregate-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kongregate</title>
      <path
        d="M2.667 0A2.667 2.667 0 0 0 0 2.667v18.666A2.667 2.667 0 0 0 2.667 24h18.666A2.667 2.667 0 0 0 24 21.333V2.667A2.667 2.667 0 0 0 21.333 0ZM5.6 5.333h2.667v5.334H13.6v2.666H8.267v5.334H5.6Zm8 8h1.678a1.6 1.6 0 0 1 1.43.885L17.6 16h1.333v2.667h-2.666zm0-2.666 2.667-5.334h2.666V8H17.6l-.891 1.782a1.6 1.6 0 0 1-1.431.885z"
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
export class SvgKongregateIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
