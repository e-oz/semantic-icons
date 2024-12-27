import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-medium-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 11.9998C22 6.48075 17.5193 2 12.0003 2H11.9998C6.48075 2 2 6.48075 2 11.9998C2 17.5188 6.48075 21.9995 11.9998 21.9995H12.0003C17.5193 21.9995 22 17.5188 22 11.9998ZM13.0041 11.9998C13.0041 14.458 11.0249 16.4506 8.58363 16.4506C6.14231 16.4506 4.16301 14.4575 4.16301 11.9998C4.16301 9.54216 6.14216 7.54891 8.58363 7.54891C11.0251 7.54891 13.0041 9.54172 13.0041 11.9998ZM17.8535 11.9998C17.8535 14.3136 16.8639 16.1901 15.6432 16.1901C14.4224 16.1901 13.4329 14.3136 13.4329 11.9998C13.4329 9.68606 14.4223 7.80959 15.643 7.80959C16.8637 7.80959 17.8535 9.68547 17.8535 11.9998ZM19.837 11.9998C19.837 14.0724 19.489 15.7536 19.0596 15.7536C18.6303 15.7536 18.2824 14.0729 18.2824 11.9998C18.2824 9.92681 18.6304 8.24609 19.0596 8.24609C19.4889 8.24609 19.837 9.92666 19.837 11.9998Z"
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
export class SvgMediumIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
