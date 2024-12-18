import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-id-jt-flag-icon',
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
        <path fill="#ffda44" d="M0 0h512v512H0Z" />
        <path
          fill="#d80027"
          d="m256 114-6 2-95 78c-4 3-4 9-1 13l102-33 102 33c3-4 3-10-1-13l-95-78-6-2z"
        />
        <path fill="#eee" d="M278 231h-1zm-43 0z" />
        <path
          fill="#6da544"
          d="m256 134-99 72 6 22 51-32 42 25 42-25 51 32 6-22z"
        />
        <path
          fill="#333"
          d="m256 191-28 60-9-21-10 21-7-16-10 21-7-16-13 27 14 23h140l14-23-12-27-8 16-10-21-7 16-10-21-9 21zm-62 134zm124 0z"
        />
        <path fill="#338af3" d="m183 290 11 32h124l11-32h-73z" />
        <path
          fill="#eee"
          d="M256 129a4 4 0 0 0-2 1l-100 73a4 4 0 0 0-2 4l38 117a4 4 0 0 0 4 3h124a4 4 0 0 0 4-3l38-117a4 4 0 0 0-2-4l-100-73a4 4 0 0 0-2-1zm0 9 95 70-36 111H197l-36-111 95-70z"
        />
        <rect
          width="9"
          height="142"
          x="252"
          y="170"
          fill="#ff9811"
          rx="4.5"
          ry="4.5"
        />
        <rect
          width="128"
          height="24"
          x="192"
          y="338"
          fill="#d80027"
          rx="12"
          ry="12"
        />
        <rect
          width="160"
          height="24"
          x="176"
          y="350"
          fill="#eee"
          rx="12"
          ry="12"
        />
        <path fill="#ffda44" d="m242 191 14-42 14 42-36-26h44z" />
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
export class SvgIdJtFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
