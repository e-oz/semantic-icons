import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cash-app-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4125 3.30938C17.4281 3 16.5281 3 14.7281 3H9.27187C7.47187 3 6.57187 3 5.5875 3.30938C5.06492 3.50054 4.59035 3.80342 4.19688 4.19688C3.80342 4.59035 3.50054 5.06492 3.30938 5.5875C3 6.56063 3 7.46625 3 9.27187V14.7253C3 16.5281 3 17.4281 3.30938 18.4125C3.50054 18.9351 3.80342 19.4097 4.19688 19.8031C4.59035 20.1966 5.06492 20.4995 5.5875 20.6906C6.56063 21 7.46625 21 9.27187 21H14.7281C16.5281 21 17.4281 21 18.4125 20.685C18.9351 20.4938 19.4097 20.191 19.8031 19.7975C20.1966 19.404 20.4995 18.9295 20.6906 18.4069C21 17.4337 21 16.5281 21 14.7225V9.27469C21 7.47187 21 6.57187 20.6906 5.5875C20.4995 5.06492 20.1966 4.59035 19.8031 4.19688C19.4097 3.80342 18.9351 3.50054 18.4125 3.30938ZM15.4505 9.69387C15.3183 9.83448 15.0849 9.83449 14.9443 9.69389L14.9499 9.69949C14.3564 9.16512 13.448 8.77418 12.503 8.77418C11.7605 8.77418 11.0208 9.04418 11.0208 9.7248C11.0208 10.3725 11.6992 10.6208 12.5264 10.9237C12.5936 10.9483 12.6619 10.9733 12.7308 10.9989C14.3339 11.5529 15.6558 12.2336 15.6558 13.8479C15.6558 15.6001 14.3283 16.8011 12.1492 16.9473L11.9523 17.9007C11.9354 17.9851 11.8896 18.061 11.823 18.1153C11.7563 18.1697 11.6727 18.1992 11.5867 18.1989L10.2226 18.1876C9.9892 18.1848 9.81763 17.9682 9.86545 17.7348L10.0736 16.7307C9.22082 16.4973 8.4727 16.0754 7.88207 15.4932C7.81063 15.4215 7.77051 15.3245 7.77051 15.2232C7.77051 15.122 7.81063 15.0249 7.88207 14.9532L8.64145 14.1939C8.67541 14.1599 8.71574 14.1329 8.76014 14.1145C8.80454 14.096 8.85213 14.0866 8.9002 14.0866C8.94826 14.0866 8.99586 14.096 9.04026 14.1145C9.08465 14.1329 9.12499 14.1599 9.15895 14.1939C9.8902 14.9279 10.8352 15.2289 11.7352 15.2289C12.7252 15.2289 13.3946 14.8182 13.3946 14.1179C13.3946 13.5027 12.8453 13.2965 11.8027 12.9052C11.692 12.8636 11.5757 12.82 11.4539 12.7736C10.1124 12.2926 8.84395 11.5923 8.84395 9.96105C8.84395 8.07668 10.3796 7.15699 12.1908 7.06418L12.3877 6.11355C12.4045 6.03013 12.4494 5.955 12.5149 5.90072C12.5804 5.84645 12.6626 5.81634 12.7477 5.81543H14.1089C14.3424 5.81543 14.5168 6.0348 14.4689 6.26824L14.2468 7.33699C14.9419 7.56868 15.5842 7.93574 16.1368 8.41699C16.2943 8.56887 16.3027 8.82199 16.1536 8.96262L15.4505 9.69387Z"
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
export class SvgCashAppIcon {
  readonly class = input('');
}