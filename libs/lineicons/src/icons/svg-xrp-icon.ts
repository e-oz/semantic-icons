import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-xrp-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7196 22C15.0363 22 13.4189 21.1418 12.5277 19.6235C11.8016 18.4022 11.6695 16.9829 12.1646 15.6626C12.2967 15.2666 12.2637 14.7384 11.9666 14.5404C11.6365 14.3423 11.1414 14.5734 10.8774 14.9035C9.95316 15.9267 8.63286 16.5208 7.24659 16.5208C4.573 16.5208 2.39453 14.3754 2.39453 11.7678C2.39453 9.16024 4.53999 7.01478 7.21357 7.01478C8.73189 7.01478 10.1842 7.74092 11.1084 8.9292C11.2735 9.16024 11.6035 9.3583 11.8676 9.25927C12.1646 9.12722 12.2637 8.63212 12.1316 8.23605C11.7026 6.94877 11.8676 5.56247 12.5607 4.3742C13.881 2.09671 16.8517 1.33755 19.1622 2.62483C20.2844 3.25196 21.1096 4.30819 21.4396 5.52945C21.7697 6.75072 21.6047 8.038 20.9445 9.12722C20.1854 10.4145 18.8981 11.2397 17.4128 11.4377C17.0827 11.5367 16.7526 11.7678 16.7526 12.0318C16.7526 12.2959 17.0827 12.527 17.3798 12.56C18.8651 12.758 20.1524 13.6162 20.9115 14.8705C21.5717 15.9597 21.7367 17.247 21.4066 18.4682C21.0765 19.7225 20.2844 20.7457 19.1291 21.3729C18.37 21.802 17.5448 22 16.7196 22ZM11.7026 12.9891C12.0656 12.9891 12.3957 13.0881 12.7258 13.2861C13.716 13.9132 13.914 15.2005 13.5509 16.1577C13.2209 17.0489 13.3199 18.0391 13.815 18.8643C14.7392 20.4487 16.8186 20.9768 18.403 20.0526C19.1951 19.6235 19.7233 18.8973 19.9543 18.0391C20.1854 17.214 20.0533 16.3228 19.6242 15.5966C19.0962 14.7054 18.2049 14.1113 17.1817 13.9793C16.0925 13.8472 15.2673 12.9891 15.2673 11.9989C15.2673 11.0086 16.0925 10.1504 17.1817 10.0184C18.2049 9.88638 19.1291 9.29225 19.6242 8.40108C20.0533 7.64192 20.1854 6.78374 19.9543 5.95854C19.7233 5.10036 19.1622 4.40721 18.403 3.94511C16.7856 3.05392 14.7392 3.61504 13.815 5.16636C13.3529 5.95854 13.2539 6.91575 13.5179 7.80696C13.848 8.86316 13.5509 10.2165 12.4287 10.6786C11.5705 11.0416 10.5473 10.6786 9.92014 9.85339C9.29303 9.0282 8.26981 8.5331 7.21357 8.5331C5.36519 8.5331 3.84685 9.98541 3.84685 11.8008C3.84685 13.6162 5.36519 15.0685 7.21357 15.0685C8.17078 15.0685 9.09498 14.6724 9.75511 13.9463C10.2172 13.3852 10.9434 12.9891 11.7026 12.9891Z"
        fill="#323544"
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
export class SvgXrpIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
