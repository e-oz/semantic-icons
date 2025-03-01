import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-topology-star-ring-3-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-star-ring-3"
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
      <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12h4" />
      <path d="M14 12h4" />
      <path d="M15 7l-2 3" />
      <path d="M9 7l2 3" />
      <path d="M11 14l-2 3" />
      <path d="M13 14l2 3" />
      <path d="M10 5h4" />
      <path d="M10 19h4" />
      <path d="M17 17l2 -3" />
      <path d="M19 10l-2 -3" />
      <path d="M7 7l-2 3" />
      <path d="M5 14l2 3" />
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
export class SvgTopologyStarRing3Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
