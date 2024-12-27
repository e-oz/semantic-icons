import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vi-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-vi"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path
        fill="#369443"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="M163.5 316s-.4-2.9 4.9-5c5.3-2 5.7-9.7 4.7-14.8 0 0-2.8 4.9-6.2 6.5 0 0-5.5 2.9-5.8 8.4 0 0 0 2-.4 3.5-.2.9-2.7-6.8 2-12.6 4.7-5.9 6-10.7 2.3-20 0 0-.4 5.6-4.1 8.9-3.8 3.2-4.2 3.5-4.2 11.2 0 0 0 2.7-1.3 3.6 0 0-3-4.3-3.7-7-.8-2.9-1.1-4 2.2-7.3 0 0 10.6-6.9 3-22 0 0-.3 5.3-4 8.3-3.6 3-3.3 5.1-3.5 10.4-.2 5.3-.6 5-1 5.7 0 0-6.7-12.4-1.5-19s8.1-8 2.4-20.3c0 0 .2 6.3-4.4 9.4s-3.5 10.5-3.5 10.5.3 2.7-.7 4.7c0 0-6.5-12.7-.3-19.5 5.3-5.8 5.7-9.9 2.8-18.1 0 0-.3 3.8-3.2 5.9-3 2-5.2 4-4.7 12 0 0 .2 5.5-.5 7 0 0-2.7-5-3.5-8.3-.7-3.3-1-5.2 1-8.5s10-12.8.4-26.4c0 0-.3 4.4-2.7 8.4-2.4 4-1.3 8.7-.8 12.3.6 3.6-1.2 7.1-1.2 7.1s-4.1-7.6-3.3-16.3c1-8.7-2.6-16-10.7-21 0 0-5.8 13.5 2.2 20.4 0 0 6.8 6.8 8.5 15 0 0-5.2-.6-9.8-9.7-4.7-9-14.4-7.6-15-7.7 0 0 1.5 14 16.4 18 0 0 9.6 1.7 11.3 8.7 0 0 1.6 4.8 2.3 7.4 0 0-3-1.2-5.8-5.3-2.8-4.2-2.4-4.7-11.8-5.6 0 0-3.8-.4-5.8-3.1 0 0 4 14.9 14.1 14.8 0 0 9.3-1 14.5 11.2l-2.4-1.6c-1.3-1-4.8-2.7-11.6-1.8s-8.7-.4-10.4-1c0 0 6.9 12.7 16.6 9 9.7-3.8 14.4 9.8 14.5 10.1 0 0-1.3-1-3-2.7-1.7-1.7-5.3-3.7-12-1.6 0 0-4.9 1.9-9.8.4 0 0 4.7 9.1 15.8 7.6 11-1.6 13.9 8.2 13.9 8.2l-2.5-1.7c-1-.8-4.8-3-12.8-.6s-10.9-.4-10.9-.4 4.5 8.1 13 9c0 0 4.7 0 6.8-.7a9 9 0 0 1 11 3.3s-1 .2-2.6-.5c0 0-5.7-2-10 1.6 0 0-3.8 4-9.3 3.2 0 0 7 6.8 18.3 1 0 0 3.8-2.7 6.5-.6 2.8 2.1 9.3-2 9.3-2z"
      />
      <g
        fill="#f4c53d"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
      >
        <path
          d="M225.8 147s-1.3-11.7 8-12.8c9.6-1.1 14.4.9 14.4.9l4.3 8.5-1.5 5.8-6 2.7s1-8.8-7-9c-2 0-3.3.8-6.5.3-3.3-.6-5 3-5.7 3.5z"
        />
        <path
          d="M291 175.7c-1.4 1.8-6.9 2.4-6.9 2.4s5.7 4.3 8.1 10.6c2.5 6.2-65.8 0-65.8 0s3-2.1 5-6c0 0-3 1-6.1-2 0 0 2.3.8 5.2-3.7 0 0 4.4-5.6 7.5-7.1 0 0-1.5.9-4.9-1 0 0 6-.8 8-10.9 0 0 .4-2.2 2.7-5.5 2.2-3.2 1.7.7 5.9-4.3 0 0 1.9-3.6.2-5.7s-3.4-1.4-6.9-3.5-5-3.2-3.8-6.4c1.2-3.2 4.2-2.7 4.7-2.7.4 0 .7-2.8 4.4-4.7a29 29 0 0 1 15.4-.3c1.5.9 7.6 2.7 11.1 11.6 3.6 9-1 12.4 8.8 26 0 0-4 .8-6.4 0 0 0 5 9 13.8 13.2z"
        />
        <path fill="none" d="M248.7 137.8c-7.8-.4-4.8-7.9-4.8-7.9" />
        <path
          d="M262.4 138.8s-1.4-.7-2.5-2.2c-1.7-2.2-5.4-3.2-7.4-1.2 0 0-2 2.3-3.8 2.4 0 0 2 .6 3.4 1.9 1.4 1.3 2.9 2.2 5 2 2-.4 2.4-1.5 3.3-2.1 1-.7 2-.8 2-.8z"
        />
      </g>
      <path
        fill="#369443"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="M162.3 333.2s-.2-5 6.2-5.5l18.8 26.2s-.7 1.7-9.2 1.5c0 0-1 0-1.4 1-.7 1.6-14.4-23.2-14.4-23.2z"
      />
      <g
        id="vi-a"
        fill="#f4c53d"
        stroke="#010002"
        stroke-width="10"
        transform="translate(2.9 85)scale(.12044)"
      >
        <path
          d="M1495 1807.9s-49.9 85.6-110.2 87c0 0-103.7-12.6-133 14.5-20.5 18.9-41.4 34.5-50 82.8-8.4 48.3 16.5 58.7 22.4 60.8 0 0 4.6 34.5 38.7 25.5 0 0 2 36 62.2 18.7 60.3-17.3 85.3-11.8 97-71.8 11.9-60.1 22.8-59.1 33.5-66.3 14.4-9.7 41.5-18.8 61.6-30.4 18-10.4 87.2-45.6 110.8-48.3 23.6-2.8 18.4-82.2 18.4-82.2h-61l-29.5-43.5zm192-429.4s-61 49.7-112.2 0c0 0-20.6 24.8-62 17.6-41.2-7.3-48.1-29-52-41.4 0 0-35.8 20.8-66 4.3-30-16.4-30-41.3-30-41.3s-52.5 10.4-79.4-25.2c-26.9-35.5-10.5-70.7 4-74.9 0 0-56.7 14.9-72.2-33.8a56 56 0 0 1 16.4-62.8s-119.4-.6-168.4-38c0 0-40.7-25.6-16.4-52.5 0 0-107.5-17.2-134.4-60 0 0-11.8-11.8-7.9-32.5 0 0 .7-11.7 12.5-12.4 0 0-122.6-19-158-59.4 0 0-17-18.6-8.5-43.5 0 0 1.8-6.5 4.7-11 0 0-111.6-23.5-166.6-73.2 0 0-31.8-28.3-15.4-66.3 0 0-186.5-51-143.3-133.2 0 0-87.2-28.3-59.6-107 0 0-72.1-36.6-40.7-94.6 30.1-55.5 122.6 9.7 232 40 0 0 296.4 93.2 442.3 118l414.6 617.3 241.9 93.2z"
        />
        <path
          d="M1689.9 923.9s-38.9-29.2-108.2 5.1c0 0-23.3 16.1-41.7-1.5a37.3 37.3 0 0 1 4.3-57.5c51.7-38.3 70.8-153.2-7.8-200.9 0 0-114-67.6-532.3-174 0 0-35-9.8-53.8-5.1a52 52 0 0 0-37.6 37.8S894 581.1 957 611.6c0 0 28.4 13 57.7 21.4 0 0-32.2-7-46 24.8-13 30.4 6 61.5 65 81.5 0 0 16 6.2 38.7 11.7 0 0-50.5 14.5-26.2 55.3 0 0 21.6 42.8 98 50.4 0 0-57 6.2-16.8 60.4 0 0 17.7 29.7 73.4 40.7 0 0-42.2 1.4-21 39.3 21.4 38 71.5 59.4 120.9 62.9 0 0 26.7 1.4 45.4-2.8 0 0-47 23.5-19.4 62.8 0 0 20.3 28 71.1 26.6 0 0-13.1 44 24.1 60.6 29 13 53.1-7.8 53.1-7.8s-9.8 47.1 32.5 63.7c0 0 21.1 10.9 52.6 0 0 0 24 53.9 109.6 16 85.6-37.7 20.2-355.1 20.2-355.1zm5 489.4s-12.5 67.4-112 152.2c0 0-76.8 67.7-74.9 145.7 2 79.5-13.7 88.4-43.9 115.3 0 0 62.3 4.9 92.4-36.6 0 0-1.3 69-10.5 75.3 0 0 19.6 1.2 47.9-29.7 0 0 17-18 32.8-24.9 0 0-18.4 47.7-4 91.9 0 0 4.6-17.3 28.9-24.9 0 0 44-9 61-72.5 0 0 11.1-42 80-79.4 0 0 78-29.4 76-67.8-2-38.5-173.6-244.6-173.6-244.6z"
        />
        <path
          stroke-miterlimit="10"
          d="M2056.5 2282.2s-17.9 78.8-80 72.5c0 0-43.9-4.2-40.6-77.4 0 0-64.9 34.6-75.4-51 0 0-59 13.7-58.3-66.3 0 0-55 9.6-48.5-61.5 0 0-59.7 16-59.7-51 0 0-139.6-23.2 151.4-288.6l259.6 154.6z"
        />
        <path
          d="M2085.4 1928.3s-43.3 38.4-74.1-19c0 0-42-2-48.5-33.8 0 0-34.1-3.4-40.7-35.9 0 0-46.5-4.8-45.2-44.1 0 0-84.6-6.6 0-102.4 84.6-95.8 228.1 159 228.1 159zm48.2-23.8c42 0 89.5 262 77.2 419.9-4.5 57.3-35.2 104.1-77.2 104.1s-72.6-46.8-77-104.1c-12.4-157.9 35.1-419.9 77-419.9"
        />
        <ellipse cx="2133.6" cy="1902.5" rx="58" ry="86" />
        <path
          fill="none"
          stroke-miterlimit="10"
          d="M1935.9 2277.3s6.6-138.7 126.8-337.6m-202.2 286.6s-18.7-80.1 150.8-317c0 0-19.7-56.5 40.6-92.8M1802.2 2160s-5.3-86.7 160.6-284.5c0 0-14.7-51 45.4-91.8m-254.5 314.8s6.2-87.6 168.4-258.9c0 0-8-52.4 50-84.9m-278 292.8s11.7-100.1 182.8-252c0 0-5.9-39.4 51.1-79.4"
        />
        <path
          fill="none"
          d="M372.3 432s134.3 77.8 552.9 155.6M431.9 539S795.6 657.6 965 672.2m-389.9 0s213.4 67 463.3 109.3m-281.2 30.3s241 57.9 356.2 67.5M919 925.6s203.9 42.5 255.5 47.6m-125.7 57.3s148.8 22.6 208 21.4m-23.2 69s60.2-2.8 89.1-7.6m-33.4 104.3s51.2-13.8 81.3-33.1m-5.9 133.2s39.4-15.2 58.4-56.6m37.7 93.6s30.4-27.3 32.4-57.7m81.6 81.5s-11.4-9.9-3.6-52.7m-11.1-62.8s-6-12.2-4-31.6m-211-581.3s68.8 27.6 91.7 65.6c23 38 7.9 74.9 0 96-3.9 10.7-52.4 104.2 4.6 171.9M1346 1057s.4-.3 24.6-8m-169.8-91.4s41 8.2 81.3 8.6m-138-109.8s48.2 4.9 93.5 4.2m-165.2-109.8s69.5 13.8 106.8 14.5M1014.7 633s85.7 24.4 149.4 33.1m141.6 50.4s-61.6 57.3 12.5 110.5c0 0-30.8 48.3 30.8 98.7m-16.4 23.8s-9.2 92.2 103.6 92.2c0 0-21.7 82.1 87.2 79.4 0 0 12.4 65.6 91 52.4M1441.3 1895s-17.9 4-56.6 0m-108.8 48.3s-54.4-8.3-51.8 109.8m84.6-82.9s-49.2-6.2-46 108.4m520.7-384.5s-23.6 4.8-40 23.5c-16.3 18.6-47.8 15.1-47.8 15.1s17-13.8 23-48.3c5.8-34.5 24.9-44.9 24.9-44.9m-56.3-32.6s-23.6 4.8-40 23.4c-16.4 18.7-47.9 15.2-47.9 15.2s17-13.8 23-48.3c5.9-34.5 24.9-44.9 24.9-44.9m23.7 188.5s-20.6 4.3-34.9 20.5c-14.3 16.3-41.8 13.3-41.8 13.3s15-12 20-42.2c5.2-30.1 21.8-39.2 21.8-39.2"
        />
      </g>
      <use
        xlink:href="#vi-a"
        width="100%"
        height="100%"
        stroke="#010002"
        stroke-width="10"
        transform="matrix(-1 0 0 1 517.8 0)"
      />
      <path
        fill="#0081c6"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="m379.7 272.7-6.9-4-11.4 49.5-4.7-3.4 11.1-47.4-7.8.2 18.5-33.8 1.2 39zm27 13.4-4.3-7-34.4 40.7-3.7-4.2 34.3-40-7-3.8 31.4-20.7z"
      />
      <path
        fill="#0081c6"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="m399.8 263.4-5.7-5.8-30.8 59.2-4.7-2.8 31-59-7.6-2 26.1-27.6zm-44.1 71.5-2.3 9.4 6.3 6.3-9 37.6-7.9-10.6-11.7 5.5 9-37.7 8.2-2.3 2.1-9.4s2.5-1 5.3 1.2z"
      />
      <path
        fill="#0081c6"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="m357.8 328.6-4.5 8.5 4.5 7.8-17.9 34-5-12.5-12.7 2.1 17.9-34h8.5l4.4-8.4s3.2 0 4.8 2.5z"
      />
      <path
        fill="#0081c6"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="m358.6 331.1-12.1 15.4 2.8 8.6-24.7 28.9-2.3-13.3-12.8-1 24.7-28.9 8.3 2 12.8-16.2s3.5 1.7 3.3 4.5zm-306.2-36c2.9-1.2 5-2.3 5-5.4 0-.7-.4-2.3-1.3-4.8l-19.3-59.1a50.8 50.8 0 0 0-2.4-6.4c-.9-1.7-2.6-2.4-4.9-3.3h24.6c-2.7 1.2-5.1 2.2-5 5 0 1.2.2 2.7.8 4.7L64.8 272l14.8-46.3c.6-2 1-3.5 1-4.6-.1-3-2.7-4-5.2-5.1h23.9c-2.2.9-4 1.5-4.9 3.3-.4.8-1.3 2.8-2.4 6.4l-19.3 59a30.2 30.2 0 0 0-1.3 5s-.9 3.7 5 5.3zm412.2-6v-67a5.1 5.1 0 0 0-.6-2.6c-.3-.7-2-2.4-4.4-3.4h22.2a9.2 9.2 0 0 0-4.4 3.3 5.3 5.3 0 0 0-.6 2.7v67c0 1.1.2 2 .6 2.7.4.6 2 2.2 4.4 3.3h-22.2c2.4-1 4-2.7 4.4-3.3.4-.7.6-1.6.6-2.8z"
      />
      <path
        fill="#fff"
        stroke="#010002"
        stroke-width="1.2"
        d="M259.9 311.8s59.2-26.3 59.4-87H200.4c.2 60.7 59.5 87 59.5 87z"
      />
      <path
        fill="#a60032"
        stroke="#010002"
        stroke-width="1.2"
        d="M209.6 224.8v38.8s4.5 9 9.1 14.7v-53.5zm18.3 0v64s5.7 5.6 9.1 8.3v-72.3zm18.2 0v79s6.6 4.3 9.2 5.7v-84.7zm64 0v38.8s-4.5 9-9.1 14.7v-53.5zm-18.3 0v64s-5.7 5.6-9 8.3v-72.3zm-18.2 0v79s-6.6 4.3-9.2 5.7v-84.7z"
      />
      <path
        fill="#162667"
        stroke="#010002"
        stroke-miterlimit="10"
        stroke-width="1.2"
        d="M319.3 180.6s-29.1 15.2-59.4-1.2c-30.4 16.4-59.5 1.2-59.5 1.2v44.2h118.9z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgViFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
