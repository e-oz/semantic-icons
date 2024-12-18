import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dm-flag-icon',
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
        <path
          fill="#496e2d"
          d="M0 0h208l48 32 48-32h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304l32-48-32-48Z"
        />
        <path fill="#333" d="M512 240v32l-256 32L0 272v-32l256-32z" />
        <path fill="#ffda44" d="M512 208v32H0v-32z" />
        <path fill="#333" d="M240 0h32l32 256-32 256h-32l-32-256Z" />
        <path fill="#ffda44" d="M208 0h32v512h-32z" />
        <path fill="#eee" d="M272 0h32v512h-32z" />
        <path fill="#eee" d="M512 272v32H0v-32z" />
        <circle cx="256" cy="256" r="122.4" fill="#d80027" />
        <path
          fill="#496e2d"
          d="M284 270c-9-19-21-37-21-37v-13a14 14 0 0 0-27-2 11 11 0 0 0-4 21 16 16 0 0 1 9-9 14 14 0 0 0 2 2h2s-7 19-7 29c0 27 19 36 19 36l-10 9h19v-18l9 9s17-11 9-27zm-28-114 4 13h14l-11 8 4 12-11-8-11 8 4-12-11-8h14Zm-59 19 11 8 11-8-4 13 11 8h-14l-4 12-4-12h-14l11-8zm-36 50h13l4-13 4 13h14l-11 8 4 13-11-8-11 8 5-13zm0 62 11-8-5-13 11 8 11-8-4 13 11 8h-14l-4 13-4-13Zm36 50 4-13-11-8h14l4-12 4 12h13l-10 8 4 13-11-8zm59 19-4-13h-14l11-8-4-12 11 8 11-8-4 12 11 9h-14Zm59-19-11-8-11 8 4-13-10-8h13l4-12 4 12h14l-11 8zm36-50h-13l-4 13-4-13h-14l11-8-4-13 11 8 11-8-5 13zm0-62-11 8 5 13-11-8-11 8 4-13-11-8h14l4-13 4 13zm-36-50-4 13 11 8h-14l-4 12-4-12h-14l11-8-4-13 11 8z"
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
export class SvgDmFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
