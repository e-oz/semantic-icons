import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-unpkg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>unpkg</title>
      <path
        d="M0 0v24h24V0H0zm4.322 2.977 4.37.002a.043.043 0 0 1 .044.04 9542.6 9542.6 0 0 1 0 9.165c0 .75.029 1.403.09 1.957.038.336.134.68.287 1.03.336.769.907 1.237 1.715 1.405.626.13 1.258.127 1.893-.008 1.166-.248 1.813-1.268 1.96-2.404.067-.513.1-1.186.1-2.018-.001-3.15-.001-6.188.002-9.119 0-.033.017-.05.049-.05h4.338a.033.033 0 0 1 .033.033v9.869c0 1.465-.17 2.918-.746 4.234-.777 1.775-2.323 2.836-4.195 3.211-1.7.341-3.39.338-5.07-.013-2.226-.465-3.808-1.828-4.46-4.03-.249-.846-.389-1.708-.416-2.586a65.217 65.217 0 0 1-.029-1.88c-.002-3.037-.002-5.97 0-8.801 0-.024.011-.037.035-.037z"
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
export class SvgUnpkgIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}