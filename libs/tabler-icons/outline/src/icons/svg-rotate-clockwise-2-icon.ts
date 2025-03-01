import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rotate-clockwise-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise-2"
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
      <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
      <path d="M5.63 7.16l0 .01" />
      <path d="M4.06 11l0 .01" />
      <path d="M4.63 15.1l0 .01" />
      <path d="M7.16 18.37l0 .01" />
      <path d="M11 19.94l0 .01" />
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
export class SvgRotateClockwise2Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
