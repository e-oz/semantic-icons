import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gw-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gw"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#ce1126" d="M0 0h220v480H0z" />
      <path fill="#fcd116" d="M220 0h420v240H220z" />
      <path fill="#009e49" d="M220 240h420v240H220z" />
      <g id="gw-b" transform="matrix(80 0 0 80 110 240)">
        <path
          id="gw-a"
          fill="#000001"
          d="M0-1v1h.5"
          transform="rotate(18 0 -1)"
        />
        <use
          xlink:href="#gw-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(72 110 240)"
      />
      <use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(144 110 240)"
      />
      <use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-144 110 240)"
      />
      <use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-72 110 240)"
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
export class SvgGwFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
