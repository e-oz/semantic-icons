import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-hn"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#18c3df" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <g id="hn-c" fill="#18c3df" transform="translate(256 256)scale(28.44446)">
        <g id="hn-b">
          <path id="hn-a" d="m0-1-.3 1 .5.1z" />
          <use
            xlink:href="#hn-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
      </g>
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(142.2 -45.5)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(142.2 39.8)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(-142.2 -45.5)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(-142.2 39.8)"
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
export class SvgHnFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
