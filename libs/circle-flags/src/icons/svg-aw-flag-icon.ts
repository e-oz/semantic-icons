import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-aw-flag-icon',
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
          fill="#ffda44"
          d="m0 322.8 253.6-18.4L512 322.8v33.4l-258 15.3L0 356.2zm0 66.8 257.2-13.8L512 389.6V423l-253 16.9L0 423z"
        />
        <path
          fill="#338af3"
          d="M0 0h512v322.8H0zm0 356.2h512v33.4H0zM0 423h512v89H0z"
        />
        <path
          fill="#eee"
          d="m117.3 161.5-50-22.1 50-22 22-50.1 22.2 50 50 22-50 22.2-22.1 50z"
        />
        <path
          fill="#d80027"
          d="m139.4 94.9 13.6 30.9 31 13.6-31 13.6-13.6 31-13.6-31-31-13.6 31-13.6z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAwFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
