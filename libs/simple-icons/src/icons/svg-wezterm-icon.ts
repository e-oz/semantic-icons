import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wezterm-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WezTerm</title>
      <path
        d="M3.27 8.524c0-.623.62-1.007 2.123-1.007l-.5 2.757c-.931-.623-1.624-1.199-1.624-1.75zm4.008 6.807c0 .647-.644 1.079-2.123 1.15l.524-2.924c.931.624 1.6 1.175 1.6 1.774zm-2.625 5.992.454-2.708c3.603-.336 5.01-1.798 5.01-3.404 0-1.653-2.004-2.948-3.841-4.074l.668-3.548c.764.072 1.67.216 2.744.432l.31-2.469c-.81-.12-1.575-.168-2.29-.216L8.257 2.7l-2.363-.024-.453 2.684C1.838 5.648.43 7.158.43 8.764c0 1.63 2.004 2.876 3.841 3.954l-.668 3.716c-.859-.048-1.908-.192-3.125-.408L0 18.495c1.026.12 1.98.192 2.84.216l-.525 2.588zm15.553-1.894h2.673c.334-2.804.81-8.46 1.121-14.86h-2.553c-.071 1.51-.334 10.498-.43 11.241h-.071c-.644-2.42-1.169-4.386-1.813-6.782h-1.456c-.62 2.396-1.05 4.194-1.694 6.782h-.096c-.071-.743-.477-9.73-.525-11.24h-2.648c.31 6.399.763 12.055 1.097 14.86h2.625l1.838-7.12z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWeztermIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}