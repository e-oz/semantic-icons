import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-music-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.25 4.00001C21.25 3.77689 21.1507 3.56536 20.979 3.42287C20.8073 3.28039 20.5811 3.22173 20.3618 3.26285L8.36178 5.51285C8.00705 5.57936 7.75 5.88909 7.75 6.25001V9.98484C7.74982 9.99437 7.74982 10.0039 7.75 10.0135V14.4585C7.20497 14.1636 6.55664 14 5.875 14C5.00075 14 4.18131 14.2691 3.56431 14.7392C2.9467 15.2098 2.5 15.9138 2.5 16.75C2.5 17.5862 2.9467 18.2902 3.56431 18.7608C4.18131 19.2309 5.00075 19.5 5.875 19.5C6.74925 19.5 7.56869 19.2309 8.18569 18.7608C8.79111 18.2995 9.2323 17.6139 9.24948 16.7993C9.24983 16.79 9.25 16.7806 9.25 16.7712V10.62L19.75 8.60938V12.2085C19.205 11.9136 18.5566 11.75 17.875 11.75C17.0008 11.75 16.1813 12.0191 15.5643 12.4892C14.9467 12.9598 14.5 13.6638 14.5 14.5C14.5 15.3362 14.9467 16.0402 15.5643 16.5108C16.1813 16.9809 17.0008 17.25 17.875 17.25C18.7492 17.25 19.5687 16.9809 20.1857 16.5108C20.7911 16.0495 21.2323 15.3639 21.2495 14.5493C21.2498 14.54 21.25 14.5306 21.25 14.5212V4.00001ZM19.75 14.5C19.75 14.7684 19.6091 15.0643 19.2766 15.3176C18.9436 15.5714 18.4505 15.75 17.875 15.75C17.2995 15.75 16.8064 15.5714 16.4734 15.3176C16.1409 15.0643 16 14.7684 16 14.5C16 14.2316 16.1409 13.9357 16.4734 13.6824C16.8064 13.4286 17.2995 13.25 17.875 13.25C18.4505 13.25 18.9436 13.4286 19.2766 13.6824C19.6091 13.9357 19.75 14.2316 19.75 14.5ZM7.27662 15.9324C7.60908 16.1857 7.75 16.4816 7.75 16.75C7.75 17.0184 7.60908 17.3143 7.27662 17.5676C6.94356 17.8214 6.4505 18 5.875 18C5.2995 18 4.80644 17.8214 4.47338 17.5676C4.14092 17.3143 4 17.0184 4 16.75C4 16.4816 4.14092 16.1857 4.47338 15.9324C4.80644 15.6786 5.2995 15.5 5.875 15.5C6.4505 15.5 6.94356 15.6786 7.27662 15.9324ZM19.75 7.08212L9.25 9.09276V6.87245L19.75 4.9037V7.08212Z"
        fill="#323544"
      />
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
export class SvgMusicIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
