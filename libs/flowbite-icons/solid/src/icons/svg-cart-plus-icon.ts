import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cart-plus-icon',
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
        fill-rule="evenodd"
        d="M5 3a1 1 0 0 0 0 2h.687L7.82 15.24A3 3 0 1 0 11.83 17h2.34A3 3 0 1 0 17 15H9.813l-.208-1h8.145a1 1 0 0 0 .979-.796l1.25-6A1 1 0 0 0 19 6h-2.268A2 2 0 0 1 15 9a2 2 0 1 1-4 0 2 2 0 0 1-1.732-3h-1.33L7.48 3.796A1 1 0 0 0 6.5 3H5Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M14 5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2h-1V5Z"
        clip-rule="evenodd"
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
export class SvgCartPlusIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
