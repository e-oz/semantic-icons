import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ag-flag-icon',
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
        <path fill="#333" d="M0 .4h512l-34 229H36z" />
        <path
          fill="#ffda44"
          d="m367.3 205.3-109.7 19.4-112.9-19.4 45.5-21.3-24.2-44 49.3 9.4 6.3-49.9 34.4 36.7 34.4-36.6 6.3 50L346 140l-24.2 44z"
        />
        <path fill="#0052b4" d="M25.6 205.3h466.8L257 439.5z" />
        <path fill="#eee" d="M34 307.4h446L256 511.6z" />
        <path fill="#a2001d" d="m0 511.6 256 .4L0 .4zm256 .4 256-.4V0z" />
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
export class SvgAgFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
