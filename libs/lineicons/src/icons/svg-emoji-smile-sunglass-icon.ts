import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-emoji-smile-sunglass-icon',
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
        d="M8.17625 14.5688C8.5003 14.3108 8.97215 14.3643 9.23014 14.6884C9.87961 15.5041 10.8788 16.0248 12 16.0248C13.1213 16.0248 14.1205 15.5041 14.7699 14.6884C15.0279 14.3643 15.4998 14.3108 15.8238 14.5688C16.1479 14.8268 16.2014 15.2986 15.9434 15.6226C15.0216 16.7805 13.5975 17.5248 12 17.5248C10.4026 17.5248 8.97846 16.7805 8.05665 15.6226C7.79865 15.2986 7.8522 14.8268 8.17625 14.5688Z"
        fill="#323544"
      />
      <path
        d="M6.95349 8.15698C6.53927 8.15698 6.20349 8.49276 6.20349 8.90698V10.8605C6.20349 11.6343 6.83081 12.2616 7.60465 12.2616H9.38884C10.1627 12.2616 10.79 11.6343 10.79 10.8605V9.65698H13.21V10.8605C13.21 11.6343 13.8373 12.2616 14.6112 12.2616H16.3953C17.1692 12.2616 17.7965 11.6343 17.7965 10.8605V8.90698C17.7965 8.49276 17.4607 8.15698 17.0465 8.15698H6.95349Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z"
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
export class SvgEmojiSmileSunglassIcon {
  readonly class = input('');
}