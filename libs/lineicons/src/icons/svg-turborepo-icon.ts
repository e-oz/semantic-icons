import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-turborepo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.992 5.50179C8.40875 5.50179 5.49352 8.41702 5.49352 12.0002C5.49352 15.5835 8.40875 18.4987 11.992 18.4987C15.5752 18.4987 18.4904 15.5835 18.4904 12.0002C18.4904 8.41702 15.5752 5.50179 11.992 5.50179ZM11.992 15.3632C10.1344 15.3632 8.62899 13.8578 8.62899 12.0002C8.62899 10.1427 10.1344 8.63726 11.992 8.63726C13.8495 8.63726 15.355 10.1427 15.355 12.0002C15.355 13.8578 13.8495 15.3632 11.992 15.3632Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5367 4.43414V2.00781C17.8105 2.28978 22 6.65596 22 11.9999C22 17.3439 17.8105 21.7089 12.5367 21.9921V19.5657C16.4672 19.285 19.5797 16.0007 19.5797 11.9999C19.5797 7.99922 16.4672 4.7149 12.5367 4.43414ZM6.26091 16.9615C5.21897 15.7586 4.54735 14.2266 4.42754 12.5445H2C2.12585 14.8982 3.06734 17.0341 4.54251 18.6787L6.2597 16.9615H6.26091ZM11.4476 21.9921V19.5657C9.76431 19.4459 8.23227 18.7755 7.02939 17.7324L5.3122 19.4496C6.95799 20.9259 9.09389 21.8662 11.4464 21.9921H11.4476Z"
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
export class SvgTurborepoIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
