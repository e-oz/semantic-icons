import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-star-half-stroke-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="m13.001 19.927 2.896 1.773c1.52.93 3.405-.442 2.992-2.179l-1.06-4.452 3.468-2.978c1.353-1.162.633-3.382-1.142-3.525L15.603 8.2l-1.754-4.226A1.973 1.973 0 0 0 13 3v16.927ZM10.999 3c-.36.205-.663.53-.848.974L8.397 8.2l-4.552.366c-1.775.143-2.495 2.363-1.142 3.525l3.468 2.978-1.06 4.452c-.413 1.737 1.472 3.11 2.992 2.178l2.896-1.773V3Z"
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
export class SvgStarHalfStrokeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
