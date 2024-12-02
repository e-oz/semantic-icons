import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-shake-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8253 6.45518C11.8222 6.45304 11.8191 6.45092 11.816 6.44882L11.0226 5.91552C9.90385 5.16349 8.42087 5.25001 7.39716 6.12703L5.44921 7.79585C5.3133 7.91229 5.14023 7.97629 4.96126 7.97629H2.75C2.33579 7.97629 2 8.31207 2 8.72629V14.7558C2 15.17 2.33579 15.5058 2.75 15.5058H4.83766C5.05324 15.5058 5.2584 15.5986 5.40079 15.7604L7.74003 18.4197C8.49372 19.2765 9.76945 19.4335 10.7083 18.7849L11.3925 18.3122L12.1263 18.5611C13.0569 18.8769 14.0847 18.5522 14.665 17.7591L15.135 17.1168L15.4611 17.1608C16.3853 17.2854 17.2905 16.827 17.7371 16.0084L17.7859 15.9188H21.25C21.6642 15.9188 22 15.583 22 15.1688V8.72629C22 8.31207 21.6642 7.97629 21.25 7.97629H19.0388C18.8587 7.97629 18.6846 7.91148 18.5483 7.79371L16.8614 6.3357C15.3979 5.07079 13.2183 5.12952 11.8253 6.45518ZM10.1858 7.16041L10.7469 7.53756L8.78576 9.50962C7.89611 10.4043 7.91585 11.8554 8.82951 12.7255L8.8976 12.7904C9.70712 13.5613 10.9599 13.621 11.839 12.9305L13.918 11.2977L16.5749 13.8527C16.8186 14.0871 16.8754 14.4556 16.7135 14.7524L16.6889 14.7975C16.6841 14.8059 16.6795 14.8144 16.675 14.823L16.4202 15.2901C16.2714 15.563 15.9696 15.7158 15.6616 15.6743L14.8934 15.5707C14.6209 15.534 14.3502 15.6492 14.1879 15.8711L13.4545 16.8733C13.2611 17.1377 12.9185 17.2459 12.6083 17.1407L11.5174 16.7706C11.2928 16.6943 11.0453 16.7289 10.8502 16.8637L9.85573 17.5507C9.54277 17.7669 9.11753 17.7146 8.8663 17.429L6.52706 14.7697C6.09989 14.2841 5.48441 14.0058 4.83766 14.0058H3.5V9.47629H4.96126C5.49817 9.47629 6.01738 9.28429 6.42512 8.93498L8.37306 7.26616C8.88492 6.82765 9.62641 6.78439 10.1858 7.16041ZM18.305 14.4188C18.3116 13.813 18.0737 13.2129 17.6146 12.7715L15.0939 10.3474C15.3032 10.0818 15.3122 9.69806 15.0941 9.42031C14.8383 9.09456 14.3668 9.03789 14.041 9.29373L13.5347 9.69143C13.5144 9.70578 13.4946 9.72126 13.4755 9.73786L10.9125 11.7508C10.6195 11.981 10.2019 11.9611 9.93205 11.7041L9.86396 11.6393C9.5594 11.3493 9.55282 10.8655 9.84938 10.5673L12.8138 7.58629C13.6471 6.74839 14.9865 6.69784 15.8805 7.47056L17.5675 8.92857C17.9762 9.28187 18.4985 9.47629 19.0388 9.47629H20.5V14.4188H18.305Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHandShakeIcon {
  readonly class = input('');
}