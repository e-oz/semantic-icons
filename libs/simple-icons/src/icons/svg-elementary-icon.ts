import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-elementary-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>elementary</title>
      <path
        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 1a11 11 0 0 1 10.59 8.01 19.09 19.09 0 0 1-4.66 6.08c-.94.81-1.96 1.53-3.08 2.04-1.13.5-2.37.8-3.6.72a6.23 6.23 0 0 1-2.66-.76 20.02 20.02 0 0 0 5.68-4.58 9.97 9.97 0 0 0 2.31-4.17c.18-.79.2-1.6.04-2.4a4.42 4.42 0 0 0-1.08-2.11 4.33 4.33 0 0 0-2-1.19 5.25 5.25 0 0 0-2.33-.08A7.8 7.8 0 0 0 7.2 4.85a9.77 9.77 0 0 0-2.94 7.49 7.88 7.88 0 0 0 1.95 4.59 18 18 0 0 1-3.56.85A11 11 0 0 1 12 1zm.07 2.22c.77 0 1.55.24 2.17.7.55.42.97 1.02 1.2 1.68.23.65.3 1.37.21 2.06a7.85 7.85 0 0 1-1.7 3.76 16.22 16.22 0 0 1-6.37 4.96c-.48-.42-.9-.92-1.2-1.48a6.61 6.61 0 0 1-.75-3.87c.12-1.32.58-2.6 1.2-3.79a7.92 7.92 0 0 1 3.02-3.42c.68-.37 1.45-.6 2.22-.6zm10.83 7.3A11 11 0 0 1 3.52 19a19.8 19.8 0 0 0 3.63-1.2c.51.4 1.08.71 1.67.94a8 8 0 0 0 5.44-.04 13.3 13.3 0 0 0 4.64-2.95 20 20 0 0 0 4-5.22z"
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
export class SvgElementaryIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
