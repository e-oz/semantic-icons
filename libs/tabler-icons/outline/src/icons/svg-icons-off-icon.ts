import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-icons-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-icons-off"
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
        d="M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912"
      />
      <path d="M2.5 21h8l-4 -7z" />
      <path d="M14 3l7 7" />
      <path d="M14 10l7 -7" />
      <path d="M18 14h3v3m0 4h-7v-7" />
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
export class SvgIconsOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
