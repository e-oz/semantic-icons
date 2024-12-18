import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mxlinux-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MX Linux</title>
      <path
        d="M12.001 13.301l3.277 3.819-.75.9-2.133-2.521-1.131-1.338.737-.86zM24 2.41v19.182c0 .655-.531 1.186-1.186 1.186H1.186A1.186 1.186 0 0 1 0 21.591V2.409c0-.655.531-1.186 1.186-1.186h21.628c.655 0 1.186.53 1.186 1.186zm-2.241 17.09l-2.116-2.542-2.115-2.541-.586.704-3.25-3.788 4.913-5.73-1.175-1.008-4.76 5.549-4.743-5.527-1.947 1.67 5 5.827-.73.851-1.24-1.465-3.384 4-3.385 4h19.518z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMxlinuxIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
