import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pk-jk-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#ff9811" d="M0 0h224l32 88-32 88-96 32L0 176Z" />
        <path
          fill="#eee"
          d="m0 224 256-32 256 32v48l-32 24 32 24v48l-32 24 32 24v48l-256 32L0 464v-48l32-24-32-24v-48l32-24-32-24Z"
        />
        <path
          fill="#496e2d"
          d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"
        />
        <circle cx="355.6" cy="110.2" r="80.5" fill="#eee" />
        <circle cx="376.2" cy="91.9" r="73.8" fill="#496e2d" />
        <path fill="#eee" d="m370 76 47-20-27 44-4-50 34 38z" />
      </g>
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
export class SvgPkJkFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
