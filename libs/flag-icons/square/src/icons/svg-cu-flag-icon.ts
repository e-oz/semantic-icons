import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cu"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="cu-a">
          <path fill-opacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#cu-a)">
        <path fill="#002a8f" d="M-32 0h768v512H-32z" />
        <path
          fill="#fff"
          d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
        />
        <path fill="#cb1515" d="m-32 0 440.7 255.7L-32 511z" />
        <path
          fill="#fff"
          d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3z"
        />
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
export class SvgCuFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
