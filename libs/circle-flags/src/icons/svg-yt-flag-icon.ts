import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-yt-flag-icon',
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
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#acabb1"
          d="M113 139c-4 0-11 2-23 8a59 59 0 0 0-13 9c-28 27-20 68-11 79 3 4 16 23 32 30 22 8 36 28 37 51 0 24-15 44-34 46h-4c-19 0-36-19-37-43v2c1 29 20 52 43 52s44-12 55-32l5-8a43 43 0 0 0 4-14c4-19 6-70-47-95-40-20-45-36-40-43a4 4 0 0 1 3-1 19 19 0 0 0 18 19 15 15 0 0 0 10-4s18 18 24 11 0-7-6-14c-5-7 0-21-11-28-12-7-18-7-12-15a16 16 0 0 1 12-7s0-3-5-3zm287 0c-5 0-5 3-5 3 5 1 9 3 12 7 5 8 0 8-12 15s-6 21-12 28c-5 7-11 7-5 14 5 7 24-11 24-11a15 15 0 0 0 10 4 19 19 0 0 0 18-19 4 4 0 0 1 2 1c6 7 1 23-40 43-52 25-50 76-47 95l5 14a189 189 0 0 0 5 8c10 20 32 33 54 32 24 0 43-23 44-52v-2c-2 24-18 43-38 43h-4c-19-2-33-22-33-46 1-23 15-43 36-51 16-7 29-26 33-30 8-11 17-52-11-79a59 59 0 0 0-14-9c-12-6-18-8-22-8zM26 199c-1 0-2 1-2 3-2 16-1 52 33 64a2 2 0 0 0 3-1l6-8v-4c-5-7-22-31-22-44l-2-2a19 19 0 0 1-15-7l-1-1zm460 0-1 1a19 19 0 0 1-15 7l-2 2c0 13-17 37-21 44v4l5 8a2 2 0 0 0 3 1c34-12 35-48 34-64l-3-3z"
        />
        <path
          fill="#0052b4"
          d="M211 147a22.5 22.5 0 0 0 0 45 22.5 22.5 0 0 0 0 45l45 32 45-32a22.5 22.5 0 0 0 0-45 22.5 22.5 0 1 0-22.5-22.5 22.5 22.5 0 0 0-45 0A22.5 22.5 0 0 0 211 147z"
        />
        <path
          fill="#d80027"
          d="M211 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 282a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 237h90a22.5 22.5 0 0 1 22.5 22.5A22.5 22.5 0 0 1 301 282a22.5 22.5 0 0 1 22.5 22.5A22.5 22.5 0 0 1 301 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 256 327a22.5 22.5 0 0 1-22.5-22.5A22.5 22.5 0 0 1 211 327z"
        />
        <path
          fill="#eee"
          d="M232 188a25 25 0 0 0-1 5 25 25 0 0 0 25 25 25 25 0 0 0 25-25 25 25 0 0 0-1-5 25 25 0 0 1-24 19 25 25 0 0 1-24-19z"
        />
        <path
          fill="#ffda44"
          d="M283 254a4 4 0 0 0-4 4v8l-7-4a4 4 0 0 0-2-1 4 4 0 0 0-3 2 4 4 0 0 0 1 6l7 4-7 3a4 4 0 0 0-1 6 4 4 0 0 0 5 1l7-3v7a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-7l7 3a4 4 0 0 0 5-1 4 4 0 0 0-1-6l-7-3 7-4a4 4 0 0 0 1-6 4 4 0 0 0-3-2 4 4 0 0 0-2 1l-7 4v-8a4 4 0 0 0-4-4zm-54 0a4 4 0 0 0-4 4v8l-7-4a4 4 0 0 0-2-1 4 4 0 0 0-3 2 4 4 0 0 0 1 6l7 4-7 3a4 4 0 0 0-1 6 4 4 0 0 0 5 1l7-3v7a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-7l7 3a4 4 0 0 0 5-1 4 4 0 0 0-1-6l-7-3 7-4a4 4 0 0 0 1-6 4 4 0 0 0-3-2 4 4 0 0 0-2 1l-7 4v-8a4 4 0 0 0-4-4z"
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
export class SvgYtFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
