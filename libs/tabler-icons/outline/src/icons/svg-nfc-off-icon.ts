import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nfc-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-nfc-off"
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
      <path d="M11 20a3 3 0 0 1 -3 -3v-9" />
      <path d="M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5" />
      <path
        d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125"
      />
      <path d="M3 3l18 18" />
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
export class SvgNfcOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
