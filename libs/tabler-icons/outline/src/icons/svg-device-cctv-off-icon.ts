import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-cctv-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-cctv-off"
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
      <path
        d="M7 7h-3a1 1 0 0 1 -1 -1v-2c0 -.275 .11 -.523 .29 -.704m3.71 -.296h13a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-9"
      />
      <path d="M10.36 10.35a4 4 0 1 0 5.285 5.3" />
      <path
        d="M19 7v7c0 .321 -.022 .637 -.064 .947m-1.095 2.913a7 7 0 0 1 -12.841 -3.86l0 -7"
      />
      <path d="M12 14h.01" />
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
export class SvgDeviceCctvOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
