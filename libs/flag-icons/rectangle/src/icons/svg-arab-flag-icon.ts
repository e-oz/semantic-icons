import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-arab-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-arab"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.0"
      viewBox="0 0 640 480"
    >
      <path class="arab-fil0 arab-str0" fill="#006233" d="M0 0v480h640V0Z" />
      <g fill="#fff" fill-rule="evenodd" stroke="#fff">
        <path
          stroke-width=".4"
          d="M1071.9 2779.7c-25.9 38.9-7.2 64.2 19.5 66 17.6 1.3 54.2-24.9 54.1-55.7l-10-5.6c5.6 15.8-.2 20.8-12.1 31.6-23.5 21.3-71.5 22.8-51.5-36.3z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="M1277.2 2881.7c145.8 4.1 192.2-137 102.2-257.8l-8.9 13.3c5.8 56.3 14.2 111.8 15 169.5-17.6 20.7-43.2 13-48.3-10 .3-31.2-9.9-57.6-22.8-82.8l-7.2 13.3c8.4 20.7 17.5 44 19.4 69.5-41.6 49.9-87.6 60-70.5-5.6-32.9 57.5 16.9 98 73.3 9.5 12.1 60.4 58.9 22.9 61.7 9.9 5.1-39.6 2.5-103.4-7.8-153.8 40.6 70.3 42 121 20.4 154.9-24 37.7-76.2 55.3-126.5 70.1z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="M1359.9 2722.2c-31.2 2.3-47.2-4.1-30.3-27.2 16.7-22.6 32.3-4.6 36.5 25.6 3.9 28.3-54.8 64.4-75.1 64.4-30.7 0-44.9-39.5-16.6-75-36.4 103.6 78.6 43.5 85.5 12.2zm-21.6-24c-3.8-.2-6.6 6.5-4.7 7.8 5.5 3.8 14.2 1.5 15.1-.4 1.9-4.2-5.1-7.2-10.4-7.4z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="M1190.5 2771.1c-30 59-.1 83.4 38.4 76.6 22.4-4.1 50.8-20 67.2-41.7.3-47.8-.4-95.2-4.6-141.5 15-17.9-1.3-17.8-7-37-2.6 11.2-8.9 23.3-2.8 32 4.3 46.7 6.7 94 6.6 142.2-30.2 24.3-52.9 33.3-69.1 33.1-33.5-.3-40.7-28.5-28.7-63.7z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="M1251.8 2786.7c-.5-44.5-1.2-95-5.2-126.1 15.6-17.3-.8-17.7-5.9-37.1-3 11-9.6 23-3.8 31.9 2.6 47.6 5.1 95.2 5.6 142.8 3.6-2.3 7.7-3.2 9.3-11.5z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          stroke-width=".4"
          d="M1135.4 2784.6c-3.8-4.8-6.5-10.2-9.6-14.9-.5-6.7 4-12.9 4.6-16.3 5.1 7.9 8.1 13.9 12.2 17.8m5.4 3.1c7.5 3 16.7 3 25.2 3.2 32.8.6 67.3-4.8 63.6 39.6a66.2 66.2 0 0 1-65.2 61.9c-41.7-.4-77.3-46.4-13-131.1 6.2-1 14.3.7 21 1.3 11.5.9 23.3-.2 36.8-11-1.6-27.9-1.6-54.3-5-79.5-5.8-8.9.8-20.8 3.8-31.9 5.1 19.4 21.4 19.8 5.9 37.2 3.7 28 4.1 56.5 4.1 73.5-7.8 11.9-13.9 24.5-36.7 29.3-23.3-3.4-33.8-36-58.1-25.2 6.7-29.4 68.4-36.1 74.6-12.9-4.1 24.2-61.7 14.5-77 92.7-4.7 24.1 20.7 46.3 46.8 44.5 25.5-1.7 52.7-19.4 55.4-49.2 2.1-24.9-33-22-47.7-21.7-21.4.5-34.9-2.8-43-7.5m21.9-53.9c3.8-3.6 17.1-6.1 21.9-.3-3.6 2.4-7.1 5-10 8.1-5-2.6-8.3-5.2-11.9-7.8z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="M1194 2650.9a49 49 0 0 1 5.3 21c-2.2 10.4-11.1 20.1-20.3 20.4-5.7.2-12.1-1.4-16.6-10.3-.5-1.1-2.9-3.7-5.2-2.5-10.1 16.6-17.6 23.6-26.7 23.5-18.2-.3-12.8-16.5-29.6-21.5-7-.2-18.5 6.9-24.4 20.8-22.4 63.5-42.8-.2-34.1-29.8 1.3 28.3 8.1 45.1 15.1 44.6 5.1-.5 9.6-12.3 16.1-24.7 5-9.5 17-26.6 29.7-26.6 11.6.3 4.3 21.6 27.5 21.3 11.2-.2 21.5-8.8 31.9-26 2.3-.4 2.9 3.7 3.4 5.1 1.6 5.9 11.8 22.1 25.6 7.3-.7-3.2-.4-8.5-3.9-9.6z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          stroke-width=".4"
          d="M1266.9 2598.3c-12.3 6.1-21.3.5-26.4-4.9 8.9-1.8 15.8-5 17.8-12-4-9-13.5-12.9-26.9-13-17.9.5-27.1 7.7-28.2 17.6 8.3.3 15.8-2 19 6-14.7 7.2-32 9.8-50.8 9.7-30.8 1.6-35.3-12.3-43.4-24.5-.6-.8-3.3-2.1-4.7-1.9-9.5 0-16.5 33.2-27.2 33.1-10.7-1.4-8.3-21.4-11.4-32.8-2.6 17.9 3.3 84.5 36.4 12.2 1-2.4 2.4-1.7 3.3.3 8.9 20.2 27 27.2 46.5 28.2 16.3.9 37.1-6.2 59.4-18.8 5.9 6.5 10.6 13.9 23 15.3 14.5.7 30-9.8 33.5-22.8 1.8-6.7 2.1-19.9-5-20.1-9.9-.3-17.1 23.7-14.8 45.3.2-.3 1.3-5.4 1.3-5.4m-43.8-28.8c6.5-3 12.8-4.4 17.8 2.2a27.4 27.4 0 0 0-8.4 4c-2.8-2.2-6.6-3.3-9.4-6.2zm47.8 14.9c1.6-7.1 2.5-12.8 8.3-16.5 1.2 7.5 1.4 11.7-8.3 16.5zm39 11c-1.9-6.1-3.8-11.4-4.4-18-1.4-13.4 10.1-21 20.5-19.9 10.7 1.1 17.8 5.1 28 8.6 8 2.7 18.8 4.8 29.1 7.7 5.8 2.6 0 9.4-1.5 10.3-25.8 10.1-44.1 26.1-60.5 26.8-9.8.5-18.5-5.9-26.4-19-.5-25.4-1.4-55.2-3.9-73.9 3.8-3.8 4.6-6.6 6.4-9.7 2 24.7 2.8 50.7 3.3 76.9 2.1 4.5 4.7 8.3 9.4 10.2zm16.5 2c-13.8 3.9-12.1-7.8-13.4-15-1.5-8.4-.5-17.9 10.2-15.5 13.9 3.7 26.6 8.6 38.9 13.8z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          stroke-width=".4"
          d="m1314.3 2621.3 1.9 9.3h1.5l-.6-8.7"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="m1094.2 2718.5 7-7.2 8.1 6.9-7.5 6.7zm17.8-2.4 7.1-7.2 8.1 6.9-7.5 6.7zm-49.5-74.6 7.1-7.2 8.1 6.9-7.5 6.7zm3.2 21.2 7.1-7.2 8 6.9-7.5 6.7zm128.5 35.5 6.5-5.3 6 6.5-6.8 4.8zm-85.8-135.7 4.6-4.7 5.3 4.5-4.9 4.4zm11.7-1.5 4.6-4.8 5.3 4.6-4.9 4.3zm245.6 53.7-4.4 3.7-4.2-4.3 4.6-3.4z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          stroke-width=".4"
          d="m1158.7 2747.4-.5 7.9 12.6 1.2 10.1-7.6z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
        <path
          d="m1265.2 2599.8 3.7-.8-.4 10.3-2.3.9z"
          transform="matrix(.36355 0 0 .3308 -130 -670.9)"
        />
      </g>
      <path
        class="arab-fil2"
        fill="#fff"
        d="M320 326.3c51.6 0 93.6-38.2 93.6-85.2a81.9 81.9 0 0 0-32.6-64.4 70.2 70.2 0 0 1 19.2 48c0 40.8-35.9 73.9-80.2 73.9-44.3 0-80.2-33.1-80.2-74 0-18.3 7.2-35.1 19.2-48a81.8 81.8 0 0 0-32.6 64.6c0 46.9 42 85.1 93.6 85.1"
      />
      <g fill="#fff" stroke="#000" stroke-width="8">
        <path
          class="arab-fil2 arab-str2"
          d="M-54 1623c-88 44-198 32-291-28-4-2-6 1-2 12 10 29 18 52-12 95-13 19 2 22 24 20 112-11 222-36 275-57zm-2 52c-35 14-95 31-162 43-27 4-26 21 22 27 49 5 112-30 150-61z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M0 1579c12 0 34-5 56-8 41-7 11 56-56 56v21c68 0 139-74 124-107-21-48-79-7-124-7s-103-41-124 7c-15 33 56 107 124 107v-21c-67 0-97-63-56-56 22 3 44 8 56 8z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M54 1623c88 44 198 32 291-28 4-2 6 1 2 12-10 29-18 52 12 95 13 19-2 22-24 20-112-11-222-36-275-57zm2 52c35 14 94 31 162 43 27 4 26 21-22 27-49 5-112-30-150-61z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M3 1665c2 17 5 54 28 38 31-21 38-37 38-67 0-19-23-47-69-47s-69 28-69 47c0 30 7 46 38 67 23 16 25-21 28-38 1-6 6-4 6 0z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
      </g>
      <g fill="#fff" stroke="#000" stroke-width="8">
        <path
          class="arab-fil2 arab-str2"
          d="M-29 384c-13-74-122-79-139-91-20-13-17 0-10 20 20 52 88 73 119 79 25 4 33 6 30-8z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M4 386c11-76-97-112-110-129-15-18-17-7-10 14 13 45 60 98 88 112 23 12 30 17 32 3z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M93 430c10-91-78-105-101-134-15-18-16-8-11 13 10 46 54 100 81 117 21 13 30 18 31 4z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M66 410c-91-59-155-26-181-29-25-3-33 13 10 37 53 29 127 25 156 14 30-12 21-18 15-22zm137 40c-28-98-93-82-112-94s-21-9-17 13c8 39 75 82 108 95 12 4 27 10 21-14z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M190 467c-78-63-139-16-163-23-18-5-10 7-3 12 50 35 112 54 160 32 19-8 20-10 6-21zm169 64c1-62-127-88-154-126-16-23-30-11-22 26 12 48 100 101 148 111 29 6 28-4 28-11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M355 542c-81-73-149-49-174-56-25-6-35 9 4 39 48 36 122 43 153 36s23-14 17-19zm145 107c-23-106-96-128-114-148-17-20-35-14-20 34 18 57 77 107 108 119 30 13 28 3 26-5z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M499 663c-59-95-136-92-160-105-23-14-39-2-8 39 36 50 110 78 144 80s28-7 24-14z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M575 776c34-108-44-148-52-166-9-18-18-18-23 1-22 77 49 152 60 167 11 14 13 7 15-2z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M559 806c-27-121-98-114-114-131-17-17-19-5-16 17 8 59 79 99 111 119 10 6 22 13 19-5zm68 142c49-114-9-191-27-208-18-16-29-23-23 0 8 35-20 125 23 191 14 22 16 43 27 17z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M601 971c11-70-29-134-72-159-25-15-26-11-26 10 2 65 63 119 81 149 17 28 16 7 17 0z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M590 1153c-36-132 39-208 62-223 22-16 36-22 26 3-15 37 1 140-56 205-18 22-25 45-32 15z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M598 1124c30-115-35-180-55-193-19-13-31-18-22 3 12 32-1 122 49 178 16 19 22 38 28 12z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M561 1070c-54 58-55 143-31 193 15 29 17 27 31 6 38-61 15-149 17-188 1-37-11-17-17-11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M650 1162c0 80-49 145-101 165-30 11-30 8-26-16 14-90 83-123 108-152 24-28 19-5 19 3z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M464 1400c88-80 41-136 45-188 2-28-9-21-19-11-56 55-59 153-47 191 5 17 13 15 21 8z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M582 1348c-29 88-106 142-171 145-38 2-37-1-24-27 49-94 136-105 175-129 36-22 23 2 20 11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M343 1513c114-57 91-152 112-176 15-17-3-15-12-9-67 39-121 101-122 167 0 25 2 28 22 18z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M187 1619c144 23 211-86 253-96 22-5 6-14-5-15-96-11-218 34-255 84-15 20-15 24 7 27z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M333 1448c-29 95-137 173-218 179-38 3-38-1-24-26 65-118 178-138 218-168 34-26 27 6 24 15zM29 384c13-74 122-79 139-91 20-13 17 0 10 20-20 52-88 73-119 79-25 4-33 6-30-8z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-4 386c-11-76 97-112 110-129 15-18 17-7 10 14-13 45-60 98-88 112-23 12-30 17-32 3z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-93 430c-10-91 78-105 101-134 15-18 16-8 11 13-10 46-54 100-81 117-21 13-30 18-31 4z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-66 410c91-59 155-26 181-29 25-3 33 13-10 37-53 29-127 25-156 14-30-12-21-18-15-22zm-137 40c28-98 93-82 112-94s21-9 17 13c-8 39-75 82-108 95-12 4-27 10-21-14z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-190 467c78-63 139-16 163-23 18-5 10 7 3 12-50 35-112 54-160 32-19-8-20-10-6-21zm-169 64c-1-62 127-88 154-126 16-23 30-11 22 26-12 48-100 101-148 111-29 6-28-4-28-11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-355 542c81-73 149-49 174-56 25-6 35 9-4 39-48 36-122 43-153 36s-23-14-17-19zm-145 107c23-106 96-128 114-148 17-20 35-14 20 34-18 57-77 107-108 119-30 13-28 3-26-5z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-499 663c59-95 136-92 160-105 23-14 39-2 8 39-36 50-110 78-144 80s-28-7-24-14z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-575 776c-34-108 44-148 52-166 9-18 18-18 23 1 22 77-49 152-60 167-11 14-13 7-15-2z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-559 806c27-121 98-114 114-131 17-17 19-5 16 17-8 59-79 99-111 119-10 6-22 13-19-5zm-68 142c-49-114 9-191 27-208 18-16 29-23 23 0-8 35 20 125-23 191-14 22-16 43-27 17z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-601 971c-11-70 29-134 72-159 25-15 26-11 26 10-2 65-63 119-81 149-17 28-16 7-17 0z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-590 1153c36-132-39-208-62-223-22-16-36-22-26 3 15 37-1 140 56 205 18 22 24 45 32 15z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-598 1124c-30-115 35-180 55-193 19-13 31-18 22 3-12 32 1 122-49 178-16 19-22 38-28 12z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-561 1070c54 58 55 143 31 193-15 29-17 27-31 6-38-61-15-149-17-188-1-37 11-17 17-11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-650 1162c0 80 49 145 101 165 30 11 30 8 26-16-14-90-83-123-108-152-24-28-19-5-19 3z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-464 1400c-88-80-41-136-45-188-2-28 9-21 19-11 56 55 59 153 47 191-5 17-13 15-21 8z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-582 1348c29 88 106 142 171 145 38 2 37-1 24-27-49-94-136-105-175-129-36-22-23 2-20 11z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-343 1513c-114-57-91-152-112-176-15-17 3-15 12-9 67 39 121 101 122 167 0 25-2 28-22 18z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-187 1619c-144 23-211-86-253-96-22-5-6-14 5-15 96-11 218 34 255 84 15 20 15 24-7 27z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
        <path
          class="arab-fil2 arab-str2"
          d="M-333 1448c29 95 137 173 218 179 38 3 38-1 24-26-65-118-178-138-218-168-34-26-27 6-24 15z"
          transform="matrix(.23458 0 0 .21345 320 27.3)"
        />
      </g>
      <path
        class="arab-fil0"
        fill="#006233"
        d="M359.6 128.9c-4.4-3-20.8-1.3-23.9-3.3 5.9 4.5 19 1.3 24 3.3zm39.7 7.6c-3.5-5.7-24.4-9.6-27.5-14.7 5.5 9.8 21.6 8.5 27.5 14.7m-3 6.6c-7.8-6.8-25.8-4-31.3-8 12.7 10.4 19.7 2.3 31.2 8zM351 112.8c4.9 2.4 11 4.7 14 10.3-3.5-4.3-9.8-6-15-9.6.3 0 .7-.4 1-.7m77 44c-3.1-6.4-14-13.4-14.9-15.8 3 8.3 12 10.3 14.8 15.8zm2.7 11.3c-9.4-13.4-24.1-12-30-17 4.5 4.9 21.4 8 30 17m21.8 20.7c.7-14.3-11-19.6-11.4-27.7-.3 9.6 12 22.6 11.4 27.7m-5.8 7.7c-2.4-12.4-18.3-13.2-21.1-20.5 0 6.8 18.7 13.9 21 20.5zm13.1-7c8.5 9.4 2.6 23.7 6.1 34.1-4.2-7.7-2.1-26.9-6-34.1zm-13.8 40c12.6 12.5 7.5 26.3 12.6 32.3-6.3-8.3-5.4-24.5-12.6-32.2zm26.3 1.8c-10.9 10.9-4.3 27.3-10 35 6.4-6.6 5.5-27 10-35m-13.7 0c-1.4-12.6-14.3-19.2-15.4-26-1.5 6.8 12.4 17.5 15.4 26m-6.5 30c2 8.8-5.7 27.6-3.3 33.4-5.2-10 4.4-29 3.3-33.3zm16.6 20.1c-5.1 15.6-15.5 14.6-18.7 24 2.3-9 16-17.1 18.7-24m-33.5 7.3c-6.8 10.5-1.2 22.4-6.8 29.9 8-7.5 3.7-21.4 6.8-29.9m16.4 28.6c-8.2 13.9-25.1 12.6-31.9 22.6 6.8-12.6 27.7-14.7 32-22.6zm-29.8-1.7c-14.5 9.2-10 18.8-21.1 29 13.8-10.2 12.7-21.5 21.1-29m-6.8 37.2c-14-.5-34.2 16.2-46.4 14.9 12.2 2.4 34.7-12.6 46.4-15zm-22.7-15c-1 13-37.6 21.4-41.5 30.1 4.4-11.5 36.6-20 41.5-30zm-82.8-240c-4.7-3.7-10.4-6.7-12-10.3 1.2 4.7 5.8 8 10.5 11.3.5-.2 1-.9 1.5-1.1zm-8 3.7c-7.3-3.2-15.7-3-19.5-7.4 2.4 4.4 10.3 6.1 17.1 8.5.7-.4 1.7-.9 2.4-1zm-21.1 27.3c4.4-3 20.8-1.2 23.9-3.2-5.9 4.5-19 1.3-24 3.2zm-39.7 7.7c3.5-5.7 24.4-9.6 27.5-14.7-5.4 9.8-21.6 8.5-27.5 14.7m3 6.6c7.8-6.8 25.9-4 31.3-8-12.7 10.4-19.7 2.3-31.2 8zm31.3-20c4.4-8.6 17-9.6 20.4-14.8-5 7.7-15.7 9-20.4 14.8m36-7.5c13-5.5 25.7-.8 31.8-3.4-7.5 3.6-25.4 1.9-31.7 3.4zm-98.9 41.2c3-6.4 13.8-13.5 14.8-15.8-3 8.3-12 10.3-14.8 15.8m-2.8 11.3c9.4-13.4 24.1-12 30-17-4.4 4.9-21.3 8-30 17m-21.8 20.7c-.7-14.3 11-19.6 11.5-27.7.2 9.6-12 22.6-11.5 27.7m5.8 7.7c2.4-12.4 18.3-13.2 21.1-20.5 0 6.8-18.7 13.9-21 20.5zm-13.1-7c-8.4 9.4-2.6 23.6-6 34.1 4.1-7.7 2-26.9 6-34.1m13.8 40c-12.6 12.5-7.5 26.3-12.6 32.3 6.3-8.3 5.4-24.5 12.6-32.2zm-26.2 1.8c10.8 10.9 4.2 27.3 9.8 35-6.3-6.6-5.4-27-9.8-35m13.6 0c1.4-12.6 14.3-19.2 15.4-26 1.5 6.8-12.4 17.5-15.4 26m6.5 30c-2 8.8 5.7 27.6 3.3 33.4 5.2-10-4.4-29-3.3-33.3zm-16.6 20.1c5.2 15.6 15.5 14.6 18.8 24-2.4-9-16-17.1-18.8-24m33.5 7.3c6.8 10.5 1.2 22.4 6.8 29.9-8-7.5-3.7-21.4-6.8-29.9m-16.4 28.6c8.2 13.9 25.1 12.6 32 22.6-6.9-12.6-27.8-14.7-32-22.6m29.8-1.7c14.5 9.2 10.1 18.8 21.1 29-13.8-10.2-12.6-21.5-21.1-29m6.8 37.1c14-.4 34.3 16.3 46.4 15-12.1 2.3-34.7-12.6-46.4-15m22.8-15c.9 13.1 37.5 21.4 41.5 30.2-4.5-11.5-36.6-20-41.6-30.1zM301 116c2.8-11.5 17-13.6 18.8-20.5-.7 7.3-17.4 15.4-18.8 20.5m41.5-28.6c-2 8.8-17.3 13.7-19.4 20.3.7-9 16.4-14 19.4-20.3m-12 20.8c7.3-10.7 22.3-8 27.5-14.1-3.8 7.2-22.3 7.4-27.5 14z"
      />
      <path
        fill="none"
        stroke="#f7c608"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M429.8 240c0 55.5-49.3 100.4-110.3 100.4-60.9 0-110.3-44.9-110.3-100.3 0-55.5 49.4-100.4 110.3-100.4 61 0 110.3 45 110.3 100.4z"
      />
      <path
        fill="#f7c608"
        d="m298 340.5-.5 1.2c-.3.8-1.1 1.3-2.1 1.2l-8-1.9 2.6-7.7 8 1.7c.9.2 1.4 1 1 1.8l-.2 1m-19-4.8.4-1.2c.2-.9 1.1-1.3 2-1a95 95 0 0 0 7.8 2.5l-2.5 7.7c-2.8-.7-5.4-1.4-7.9-2.3-.8-.4-1-2-.7-2.9"
      />
      <path
        fill="#006233"
        d="m296.4 339.8-.3.9c-.2.6-1 .9-1.7.8l-6.6-1.6 1.8-5.6c2.4.7 4.9 1.2 6.6 1.5.8.2 1.2.8 1 1.4l-.2.7m-15.8-4 .3-1c.2-.5.9-.8 1.6-.6 1.9.6 4 1.4 6.5 2l-1.8 5.6a98.9 98.9 0 0 1-6.5-1.9c-.7-.4-1-1.5-.7-2.1"
      />
      <path
        fill="#f7c608"
        d="m267.7 330.8-.7 1c-.5.8-1.5 1-2.4.7-2-1.2-4.7-2.5-7-3.9l4.8-6.8a80.3 80.3 0 0 0 7.1 3.7c.8.4 1 1.3.5 2l-.6 1m-16.7-9.6.7-1c.5-.8 1.5-1 2.3-.5 1.8 1.3 4.1 2.9 6.7 4.4l-4.9 6.8a91.1 91.1 0 0 1-6.7-4.2c-.7-.7-.4-2.3 0-3"
      />
      <path
        fill="#006233"
        d="m266.5 329.7-.6.8c-.3.5-1.1.6-1.9.3-1.6-1-3.8-2-5.8-3.2l3.5-4.9c2 1.3 4.3 2.4 5.9 3.1.6.4.9 1 .5 1.6l-.5.6m-13.8-7.9.5-.8c.4-.5 1.1-.6 1.8-.2a89.5 89.5 0 0 0 5.6 3.6l-3.5 4.9c-2-1.2-4-2.3-5.6-3.5-.6-.5-.5-1.7-.1-2.2"
      />
      <path
        fill="#f7c608"
        d="m241.8 313.7-1 .8c-.8.6-1.8.5-2.6 0-1.5-1.6-3.7-3.5-5.5-5.5l6.7-5.3c2 2.1 4.2 4 5.7 5.4.7.6.6 1.5-.1 2l-.9.8m-13-13.4 1-.9c.7-.5 1.7-.5 2.3.2a73 73 0 0 0 5 6l-6.7 5.2c-1.9-2-3.7-3.9-5.2-5.8-.5-.8.3-2.2 1-2.8"
      />
      <path
        fill="#006233"
        d="m240.9 312.4-.8.6c-.5.4-1.2.3-1.9-.2l-4.6-4.6 4.9-3.8a77 77 0 0 0 4.7 4.5c.5.6.5 1.3 0 1.7l-.7.5m-10.8-11.2.7-.6c.6-.4 1.3-.3 1.8.2 1.2 1.5 2.6 3.2 4.3 5l-4.9 3.7-4.3-4.8c-.4-.6.1-1.7.6-2.1"
      />
      <path
        fill="#f7c608"
        d="m222.2 290.7-1.3.5c-.8.4-1.8 0-2.4-.6l-3.6-6.8 8.1-3.3c1.3 2.5 2.7 5 3.8 6.6.4.8 0 1.6-.8 2l-1 .4m-8.4-16.2 1.2-.6c.9-.3 1.8 0 2.2.8a70.6 70.6 0 0 0 3 7l-8 3.3a60.2 60.2 0 0 1-3.3-6.8c-.2-1 1-2.1 1.9-2.5"
      />
      <path
        fill="#006233"
        d="m221.7 289.2-.9.3c-.6.3-1.3 0-1.8-.6l-3-5.6 5.8-2.4a67.8 67.8 0 0 0 3.2 5.5c.3.7.1 1.4-.5 1.6l-.8.3m-7-13.5 1-.3c.6-.3 1.3 0 1.6.6a77 77 0 0 0 2.5 5.8l-5.7 2.4a58 58 0 0 1-2.7-5.7c-.2-.7.6-1.6 1.2-1.9"
      />
      <path
        fill="#f7c608"
        d="m210.5 263.5-1.4.2a2 2 0 0 1-2-1.2l-1.5-7.4 8.8-1.1a63.7 63.7 0 0 0 1.7 7.3c.1.9-.5 1.6-1.4 1.7l-1.2.2m-3-17.7 1.4-.2c.9-.2 1.7.4 1.8 1.2.1 2.2.3 4.7.7 7.5l-8.8 1.1a75 75 0 0 1-1-7.4c.2-.9 1.7-1.7 2.6-1.8"
      />
      <path
        fill="#006233"
        d="m210.5 262-1 .1c-.6.1-1.2-.3-1.5-1l-1.1-6.2 6.3-.8a64.4 64.4 0 0 0 1.3 6.1c.1.7-.3 1.3-1 1.4l-.8.1m-2.5-14.7 1-.2c.7 0 1.3.4 1.3 1.1.2 1.8.3 4 .7 6.2l-6.3.8c-.4-2-.7-4.2-.8-6.1 0-.7 1.1-1.4 1.8-1.5"
      />
      <path
        fill="#f7c608"
        d="m207.7 234.5-1.4-.2c-1 0-1.5-.8-1.6-1.7.3-2 .5-4.8 1-7.4l8.7 1.2a64.7 64.7 0 0 0-.7 7.4c-.1.9-.9 1.4-1.8 1.3l-1.2-.2m2.6-17.7 1.4.1c.9.2 1.5.9 1.4 1.7a68.7 68.7 0 0 0-1.7 7.4l-8.8-1.2c.4-2.5.8-5 1.4-7.4.4-.8 2.1-1.2 3-1"
      />
      <path
        fill="#006233"
        d="M208.2 233h-1c-.7-.2-1-.8-1.1-1.5l.8-6.1 6.3.8a65 65 0 0 0-.6 6.2c-.1.7-.7 1.1-1.4 1h-.8m2.1-14.9 1 .2c.7 0 1.1.7 1 1.4-.4 1.7-1 3.8-1.3 6l-6.3-.7 1.1-6.2c.3-.7 1.5-1 2.2-1"
      />
      <path
        fill="#f7c608"
        d="m214 206-1.3-.6c-.9-.3-1.2-1.1-1-2 1-2 2-4.6 3.2-6.9l8 3.4a69.8 69.8 0 0 0-3 7c-.3.7-1.2 1-2 .7l-1.2-.5m8-16.4 1.3.6c.8.3 1.2 1.2.8 2a72.5 72.5 0 0 0-3.8 6.6l-8.1-3.4c1.1-2.3 2.3-4.7 3.6-6.7.6-.7 2.4-.7 3.2-.3"
      />
      <path
        fill="#006233"
        d="m215 204.7-1-.4c-.6-.2-.8-1-.6-1.6l2.6-5.7 5.8 2.4a66.3 66.3 0 0 0-2.5 5.8c-.3.6-1 .9-1.6.6l-.8-.3m6.7-13.6.9.4c.6.2.8.9.5 1.6a71.3 71.3 0 0 0-3.2 5.5l-5.7-2.4c1-2 1.9-4 3-5.6.4-.6 1.7-.7 2.3-.4"
      />
      <path
        fill="#f7c608"
        d="m228.9 180.2-1.1-.9c-.7-.5-.8-1.4-.4-2.2 1.6-1.6 3.4-3.9 5.2-5.8l6.8 5.3a72 72 0 0 0-5 6 1.7 1.7 0 0 1-2.4 0l-.9-.6m12.8-13.7 1 .8c.8.6.8 1.5.2 2.2a78.4 78.4 0 0 0-5.7 5.3l-6.8-5.3c1.9-2 3.7-3.9 5.6-5.5.8-.5 2.5 0 3.2.5"
      />
      <path
        fill="#006233"
        d="m230.2 179.2-.8-.6c-.5-.4-.5-1.1-.1-1.7l4.3-4.9 4.8 3.8a71.3 71.3 0 0 0-4.2 5c-.5.5-1.2.6-1.8.2l-.6-.5m10.6-11.4.8.6c.5.4.5 1.1 0 1.6a80 80 0 0 0-4.8 4.6l-4.8-3.8c1.6-1.7 3-3.3 4.6-4.6.7-.5 2-.2 2.4.2"
      />
      <path
        fill="#f7c608"
        d="m251 159.2-.7-1c-.5-.8-.3-1.6.4-2.3 2-1.1 4.4-2.8 6.8-4.2l4.8 6.8a78 78 0 0 0-6.7 4.4 1.7 1.7 0 0 1-2.2-.4l-.7-1m16.5-9.8.7 1c.6.8.3 1.7-.4 2.1-2.2 1-4.6 2.2-7.2 3.7l-4.8-6.8c2.3-1.4 4.7-2.8 7-3.9 1-.2 2.4.7 2.9 1.4"
      />
      <path
        fill="#006233"
        d="m252.7 158.6-.6-.7c-.3-.6-.1-1.2.4-1.7 1.7-1 3.7-2.4 5.7-3.5l3.4 4.8a97 97 0 0 0-5.5 3.7c-.7.4-1.4.3-1.8-.3l-.5-.6m13.7-8.2.6.8c.3.5.1 1.2-.5 1.5a83.3 83.3 0 0 0-6 3.1l-3.4-4.8 5.8-3.3c.8-.2 1.9.4 2.3.9"
      />
      <path
        fill="#f7c608"
        d="m279 144.9-.5-1.3c-.2-.8.2-1.6 1-2l7.9-2.3 2.5 7.7a82.5 82.5 0 0 0-7.8 2.6c-.9.2-1.7-.2-2-1l-.3-1m18.8-5.4.4 1.3c.3.8-.2 1.6-1 1.8a88.9 88.9 0 0 0-8.1 1.7l-2.5-7.7a85 85 0 0 1 8-2c.9 0 2 1.3 2.3 2"
      />
      <path
        fill="#006233"
        d="m280.6 144.7-.3-1c-.1-.5.3-1 1-1.4l6.5-2 1.8 5.6a81.2 81.2 0 0 0-6.5 2c-.7.3-1.4 0-1.6-.6l-.3-.7m15.7-4.4.3.9c.2.6-.2 1.2-1 1.4-1.9.3-4.2.8-6.6 1.4l-1.8-5.5a90 90 0 0 1 6.6-1.6c.8-.1 1.6.8 1.8 1.4"
      />
      <path
        fill="#f7c608"
        d="M310 138.2v-1.3c0-.8.8-1.5 1.7-1.7l8.2-.2v8.1a84 84 0 0 0-8.2.4c-1 0-1.6-.6-1.6-1.5v-1m19.7-.2v1.2c0 .9-.7 1.5-1.7 1.5a90 90 0 0 0-8.2-.4V135c2.8 0 5.7 0 8.2.2 1 .2 1.7 1.7 1.7 2.6"
      />
      <path
        fill="#006233"
        d="M311.8 138.5v-1c0-.6.5-1 1.3-1.2l6.9-.1v5.8c-2.6 0-5.1.1-6.9.3-.7 0-1.3-.5-1.3-1v-.9m16.3-.1v.9c0 .6-.5 1-1.3 1a82.4 82.4 0 0 0-6.8-.2v-5.8l6.8.1c.8.2 1.3 1.2 1.3 1.9"
      />
      <path
        fill="#f7c608"
        d="m340 139.6.3-1.2c.3-.8 1.1-1.2 2.1-1.2l8 1.8-2.5 7.8a84.5 84.5 0 0 0-8-1.6c-.9-.3-1.4-1-1.1-1.9l.3-1m19 4.7-.4 1.2c-.2.9-1.1 1.3-2 1a87.5 87.5 0 0 0-7.8-2.4l2.5-7.8c2.7.7 5.4 1.4 7.8 2.3.8.4 1 2 .8 2.8"
      />
      <path
        fill="#006233"
        d="m341.5 140.3.2-.9c.2-.6 1-.9 1.7-.8l6.6 1.5-1.7 5.6a83.5 83.5 0 0 0-6.7-1.4c-.7-.2-1.1-.8-1-1.4l.3-.7m15.8 4-.3.8c-.2.6-.9 1-1.6.7a86.6 86.6 0 0 0-6.5-2l1.7-5.6c2.3.6 4.6 1.2 6.6 1.9.7.3 1 1.5.7 2"
      />
      <path
        fill="#f7c608"
        d="m370.2 149.1.7-1c.5-.8 1.5-1 2.4-.7 2 1.1 4.7 2.4 7.1 3.8l-4.7 6.9a80.6 80.6 0 0 0-7.3-3.6c-.7-.5-1-1.4-.5-2.1l.7-1m16.8 9.5-.8 1a1.7 1.7 0 0 1-2.2.5 82.3 82.3 0 0 0-6.7-4.3l4.7-6.9c2.4 1.4 4.8 2.7 6.8 4.2.7.6.4 2.2-.1 3"
      />
      <path
        fill="#006233"
        d="m371.5 150.2.5-.8c.4-.5 1.1-.6 1.9-.4 1.6 1 3.8 2 5.8 3.2l-3.4 5a79.3 79.3 0 0 0-6-3.1c-.6-.4-.8-1-.4-1.6l.4-.7m14 7.9-.6.8c-.4.5-1 .6-1.8.2a81.5 81.5 0 0 0-5.6-3.6l3.4-4.9 5.7 3.4c.6.6.5 1.7.1 2.3"
      />
      <path
        fill="#f7c608"
        d="m396.3 166 1-.9c.7-.5 1.7-.5 2.5 0l5.6 5.5-6.6 5.3a74.7 74.7 0 0 0-5.8-5.3c-.6-.6-.6-1.5.1-2l.9-.8m13.2 13.3-1 .9a1.7 1.7 0 0 1-2.4-.2 72 72 0 0 0-5-5.9l6.7-5.3c1.8 2 3.7 3.8 5.2 5.7.4.8-.3 2.3-1 2.8"
      />
      <path
        fill="#006233"
        d="m397.2 167.3.7-.6c.5-.4 1.3-.3 2 .1 1.2 1.4 3 3 4.6 4.6l-4.8 3.8a73.6 73.6 0 0 0-4.8-4.5c-.5-.5-.5-1.2 0-1.6l.7-.5m11 11-.8.7c-.5.4-1.3.3-1.8-.2a75.1 75.1 0 0 0-4.3-4.9l4.8-3.8 4.4 4.7c.4.7-.1 1.8-.6 2.2"
      />
      <path
        fill="#f7c608"
        d="m416.1 188.9 1.3-.6c.8-.3 1.8 0 2.4.7l3.7 6.6-8.1 3.5c-1.3-2.6-2.8-5-4-6.6-.3-.8 0-1.6.9-2l1-.5m8.6 16.2-1.3.5c-.8.4-1.8 0-2.1-.7a70.7 70.7 0 0 0-3.1-7l8-3.4a81.1 81.1 0 0 1 3.3 6.9c.2.9-1 2-1.8 2.4"
      />
      <path
        fill="#006233"
        d="m416.6 190.4.9-.4c.6-.3 1.3 0 1.8.6l3 5.5-5.8 2.5a74.4 74.4 0 0 0-3.2-5.5c-.3-.6-.1-1.3.5-1.6l.8-.3m7 13.5-.8.3c-.7.3-1.3 0-1.7-.6-.7-1.7-1.5-3.7-2.6-5.8l5.8-2.5 2.8 5.7c.1.8-.7 1.7-1.3 2"
      />
      <path
        fill="#f7c608"
        d="m428 215.9 1.4-.2a2 2 0 0 1 2.1 1.2l1.5 7.3-8.8 1.3a65.4 65.4 0 0 0-1.7-7.3c-.1-.9.4-1.6 1.4-1.7l1.1-.2m3.2 17.7-1.4.2c-.9.1-1.7-.4-1.8-1.3a71 71 0 0 0-.8-7.4l8.8-1.3c.4 2.6.8 5.1 1 7.5 0 .9-1.6 1.7-2.5 1.8"
      />
      <path
        fill="#006233"
        d="m428 217.4 1-.1c.7-.1 1.3.4 1.5 1 .3 1.8.9 4 1.2 6.1l-6.3 1a64.5 64.5 0 0 0-1.3-6.2c-.1-.7.2-1.3 1-1.3l.8-.2m2.6 14.7-1 .2c-.7 0-1.3-.4-1.4-1a67.2 67.2 0 0 0-.7-6.3l6.3-.9c.4 2.2.8 4.3.9 6.2 0 .7-1.1 1.4-1.8 1.5"
      />
      <path
        fill="#f7c608"
        d="m431.1 244.9 1.4.1c1 .1 1.6.9 1.7 1.8l-.9 7.4-8.8-1.1c.4-2.7.6-5.5.6-7.5.1-.8 1-1.4 1.9-1.2l1.1.1m-2.4 17.8-1.4-.2c-1 0-1.5-.8-1.4-1.7.6-2 1.2-4.6 1.6-7.3l8.8 1c-.4 2.6-.8 5.2-1.3 7.4-.4.9-2.1 1.3-3 1.2"
      />
      <path
        fill="#006233"
        d="M430.6 246.4h1c.7.2 1.1.8 1.2 1.5l-.8 6.2-6.3-.8.6-6.2c0-.7.6-1.2 1.3-1.1h.9m-2 14.9-1-.1c-.7-.1-1.1-.7-1-1.4.4-1.8.9-3.8 1.2-6.1l6.3.8a76.8 76.8 0 0 1-1 6c-.3.8-1.6 1.2-2.2 1"
      />
      <path
        fill="#f7c608"
        d="m425.1 273.5 1.3.5c.9.4 1.2 1.2 1 2l-3 7-8.2-3.3a66 66 0 0 0 3-7c.3-.8 1.2-1.1 2-.8l1.2.4m-7.9 16.5-1.2-.5c-.9-.4-1.3-1.2-.9-2 1.2-1.8 2.6-4.1 3.8-6.6l8.1 3.3a78.3 78.3 0 0 1-3.5 6.7c-.6.7-2.4.7-3.3.3"
      />
      <path
        fill="#006233"
        d="m424.2 274.8 1 .3c.5.3.7 1 .6 1.7l-2.6 5.7-5.9-2.3a66.2 66.2 0 0 0 2.5-5.8c.3-.7 1-1 1.6-.8l.8.4m-6.5 13.6-1-.3c-.6-.3-.8-1-.4-1.6a71.2 71.2 0 0 0 3-5.5l5.9 2.3a80.7 80.7 0 0 1-3 5.6c-.5.6-1.8.7-2.4.4"
      />
      <path
        fill="#f7c608"
        d="m410.5 299.4 1.1.8c.7.6.8 1.5.4 2.3-1.6 1.6-3.4 3.8-5.2 5.8L400 303c2-2 3.8-4.3 5-6 .6-.6 1.6-.6 2.3-.1l.9.7m-12.6 13.8-1-.8c-.8-.6-.9-1.5-.3-2.1 1.7-1.5 3.7-3.3 5.7-5.5l6.8 5.3a88.2 88.2 0 0 1-5.5 5.6c-.8.5-2.5 0-3.2-.6"
      />
      <path
        fill="#006233"
        d="m409.2 300.4.8.6c.5.4.5 1 .1 1.7l-4.3 4.8-4.9-3.7c1.7-1.8 3.2-3.6 4.2-5 .5-.5 1.3-.6 1.8-.2l.6.5m-10.4 11.5-.8-.6c-.5-.4-.5-1.1 0-1.7a77 77 0 0 0 4.6-4.5l5 3.7c-1.6 1.7-3.1 3.3-4.7 4.7-.6.4-1.8.1-2.4-.3"
      />
      <path
        fill="#f7c608"
        d="m388.5 320.5.7 1c.5.8.3 1.7-.3 2.3l-6.7 4.3-5-6.8a77.9 77.9 0 0 0 6.7-4.4 1.7 1.7 0 0 1 2.2.4l.7.9m-16.4 10-.7-1c-.6-.8-.4-1.7.4-2.2a84.3 84.3 0 0 0 7.2-3.7l4.8 6.8-7 4c-.9.2-2.3-.7-2.9-1.4"
      />
      <path
        fill="#006233"
        d="m386.9 321.1.5.8c.4.5.2 1.2-.4 1.7l-5.6 3.5-3.5-4.8 5.6-3.7c.6-.4 1.4-.3 1.7.2l.5.7m-13.6 8.3-.6-.8c-.3-.5-.1-1.2.5-1.6a83 83 0 0 0 6-3.1l3.4 4.8c-2 1.2-4 2.4-5.8 3.3-.7.3-1.9-.3-2.2-.8"
      />
      <path
        fill="#f7c608"
        d="m360.8 335.1.4 1.2c.3.8-.2 1.7-1 2l-7.8 2.5-2.6-7.8a75.4 75.4 0 0 0 7.7-2.6c.9-.2 1.8.2 2 1l.4 1m-18.8 5.5-.4-1.3c-.3-.8.2-1.6 1-1.8 2.4-.4 5.1-1 8-1.8l2.7 7.8c-2.7.7-5.4 1.5-8 2-1 0-2-1.3-2.3-2"
      />
      <path
        fill="#006233"
        d="m359 335.3.4.9c.2.6-.3 1.2-1 1.5l-6.4 2-1.9-5.6a82.2 82.2 0 0 0 6.4-2c.8-.3 1.5 0 1.7.6l.2.7m-15.6 4.5-.3-.9c-.2-.6.2-1.2 1-1.4a82.4 82.4 0 0 0 6.6-1.5l1.9 5.6a99.4 99.4 0 0 1-6.6 1.6c-.8 0-1.7-.8-2-1.4"
      />
      <path
        fill="#f7c608"
        d="M329.7 342v1.3c0 .9-.7 1.5-1.6 1.7-2.4 0-5.4.3-8.2.3l-.1-8.1a82.2 82.2 0 0 0 8.2-.5c1 0 1.6.6 1.6 1.5v1m-19.6.4v-1.2c0-.9.6-1.5 1.6-1.5 2.3.1 5.1.3 8.2.3v8.1l-8.2-.1c-.9-.2-1.6-1.7-1.6-2.6"
      />
      <path
        fill="#006233"
        d="M328 341.8v.9c0 .6-.6 1-1.4 1.2l-6.8.2v-5.7c2.5 0 5-.3 6.8-.4.8 0 1.3.4 1.4 1v.8m-16.4.3v-1c0-.5.5-1 1.3-1 2 .1 4.3.3 6.9.2v5.8H313c-.8-.2-1.4-1.3-1.4-1.9"
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
export class SvgArabFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
