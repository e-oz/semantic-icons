import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-adjustments-alt-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
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
      <path d="M4 8h4v4h-4z" />
      <path d="M6 4l0 4" />
      <path d="M6 12l0 8" />
      <path d="M10 14h4v4h-4z" />
      <path d="M12 4l0 10" />
      <path d="M12 18l0 2" />
      <path d="M16 5h4v4h-4z" />
      <path d="M18 4l0 1" />
      <path d="M18 9l0 11" />
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
export class SvgAdjustmentsAltIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
