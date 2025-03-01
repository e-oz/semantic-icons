import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-password-fingerprint-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-password-fingerprint"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 8c.788 1 1 2 1 3v1" />
      <path d="M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2" />
      <path d="M12 11v2" />
      <path
        d="M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005"
      />
      <path d="M12 17v4" />
      <path d="M10 20l4 -2" />
      <path d="M10 18l4 2" />
      <path d="M5 17v4" />
      <path d="M3 20l4 -2" />
      <path d="M3 18l4 2" />
      <path d="M19 17v4" />
      <path d="M17 20l4 -2" />
      <path d="M17 18l4 2" />
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
export class SvgPasswordFingerprintIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
