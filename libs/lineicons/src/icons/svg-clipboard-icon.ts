import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-clipboard-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1864 3.75C15.9591 2.74801 15.063 2 13.9922 2H10.0547C8.98389 2 8.08781 2.74801 7.86044 3.75H6.77344C5.5308 3.75 4.52344 4.75736 4.52344 6V19.75C4.52344 20.9926 5.5308 22 6.77344 22H17.2734C18.5161 22 19.5234 20.9926 19.5234 19.75L19.5234 6C19.5234 4.75736 18.5161 3.75 17.2734 3.75H16.1864ZM9.30469 4.25C9.30469 3.83579 9.64047 3.5 10.0547 3.5H13.9922C14.4064 3.5 14.7422 3.83578 14.7422 4.25L14.7422 4.71875C14.7422 5.13296 14.4064 5.46875 13.9922 5.46875H10.0547C9.64047 5.46875 9.30469 5.13296 9.30469 4.71875V4.25ZM7.86777 5.25C8.10651 6.23626 8.99506 6.96875 10.0547 6.96875H13.9922C15.0518 6.96875 15.9404 6.23626 16.1791 5.25H17.2734C17.6876 5.25 18.0234 5.58579 18.0234 6L18.0234 19.75C18.0234 20.1642 17.6877 20.5 17.2734 20.5H6.77344C6.35922 20.5 6.02344 20.1642 6.02344 19.75V6C6.02344 5.58579 6.35922 5.25 6.77344 5.25H7.86777Z"
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
export class SvgClipboardIcon {
  readonly class = input('');
}