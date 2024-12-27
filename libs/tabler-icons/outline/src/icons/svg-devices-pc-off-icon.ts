import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-devices-pc-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-devices-pc-off"
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
      <path d="M9 9v10h-6v-14h2" />
      <path d="M13 9h9v7h-2m-4 0h-4v-4" />
      <path d="M14 19h5" />
      <path d="M17 17v2" />
      <path d="M6 13v.01" />
      <path d="M6 16v.01" />
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
export class SvgDevicesPcOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
