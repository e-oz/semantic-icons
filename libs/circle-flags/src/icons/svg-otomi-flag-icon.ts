import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-otomi-flag-icon',
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
        <path fill="#ff9811" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
        <path fill="#eee" d="m0 160 256-32 256 32v32H0Z" />
        <path fill="#338af3" d="M0 0h512v160H0Z" />
        <path fill="#eee" d="m0 352 256 32 256-32v-32H0Z" />
        <path fill="#6da544" d="M0 352h512v160H0Z" />
        <circle cx="256" cy="256" r="160" fill="#eee" />
        <circle cx="256" cy="256" r="128" fill="#338af3" />
        <path
          fill="#ff9811"
          d="M207 139v68h-68l49 49-49 49h68v68l49-49 49 49v-68h68l-49-49 49-49h-68v-68l-49 49z"
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
export class SvgOtomiFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
