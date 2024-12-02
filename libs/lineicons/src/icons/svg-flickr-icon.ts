import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-flickr-icon',
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
        d="M10.6452 12.0003C10.6452 14.3877 8.70992 16.323 6.32261 16.323C3.9353 16.323 2 14.3877 2 12.0003C2 9.61304 3.9353 7.67773 6.32261 7.67773C8.70992 7.67773 10.6452 9.61304 10.6452 12.0003Z"
        fill="#323544"
      />
      <path
        d="M22 12.0003C22 14.3877 20.0647 16.323 17.6774 16.323C15.29 16.323 13.3548 14.3877 13.3548 12.0003C13.3548 9.61304 15.29 7.67773 17.6774 7.67773C20.0647 7.67773 22 9.61304 22 12.0003Z"
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
export class SvgFlickrIcon {
  readonly class = input('');
}