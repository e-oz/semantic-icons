import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-viewport-tall-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-tall"
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
      <path d="M12 10v-7l3 3" />
      <path d="M9 6l3 -3" />
      <path d="M12 14v7l3 -3" />
      <path d="M9 18l3 3" />
      <path d="M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1" />
      <path d="M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1" />
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
export class SvgViewportTallIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
