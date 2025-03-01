import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-drone-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-drone-off"
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
      <path d="M14 14h-4v-4" />
      <path d="M10 10l-3.5 -3.5" />
      <path
        d="M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936"
      />
      <path d="M14 10l3.5 -3.5" />
      <path d="M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965" />
      <path d="M14 14l3.5 3.5" />
      <path
        d="M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913"
      />
      <path d="M10 14l-3.5 3.5" />
      <path d="M6 14.035a3.5 3.5 0 1 0 3.966 3.965" />
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
export class SvgDroneOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
