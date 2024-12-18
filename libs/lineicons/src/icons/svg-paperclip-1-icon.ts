import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-paperclip-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3507 14.4422C13.3507 14.452 13.3509 14.4618 13.3513 14.4714V15.7696C13.3513 16.5024 12.7572 17.0965 12.0243 17.0965C11.2915 17.0965 10.6974 16.5024 10.6974 15.7696V7.65429C10.6974 7.24008 10.3616 6.90429 9.9474 6.90429C9.53319 6.90429 9.1974 7.24008 9.1974 7.65429V15.7696C9.1974 17.3309 10.4631 18.5965 12.0243 18.5965C13.5856 18.5965 14.8513 17.3309 14.8513 15.7696V6.15429C14.8513 6.14353 14.8511 6.13283 14.8506 6.12217C14.8336 3.84265 12.9804 2 10.6968 2C8.40272 2 6.54297 3.85976 6.54297 6.15388V14.4422C6.54297 14.4492 6.54306 14.456 6.54325 14.4629V16.5192C6.54325 19.5462 8.99709 22 12.0241 22C15.051 22 17.5049 19.5461 17.5049 16.5192V9.55775C17.5049 9.14354 17.1691 8.80775 16.7549 8.80775C16.3407 8.80775 16.0049 9.14354 16.0049 9.55775V16.5192C16.0049 18.7177 14.2226 20.5 12.0241 20.5C9.82552 20.5 8.04325 18.7177 8.04325 16.5192V9.55775C8.04325 9.55085 8.04315 9.54397 8.04297 9.53711L8.04297 6.15388C8.04297 4.68818 9.23115 3.5 10.6968 3.5C12.1625 3.5 13.3507 4.68818 13.3507 6.15388L13.3507 14.4422Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPaperclip1Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
