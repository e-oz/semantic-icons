import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-t-shirt-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5h-.16667c-.86548 0-1.70761.28071-2.4.8L3.5 8l2 3.5L8 10v9h8v-9l2.5 1.5 2-3.5-2.9333-2.2c-.6924-.51929-1.5346-.8-2.4-.8H15M9 5c0 1.5 1.5 3 3 3s3-1.5 3-3M9 5h6"
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
export class SvgTShirtIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
