import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-deer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-deer"
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
      <path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
      <path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
      <path
        d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6"
      />
      <path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
      <path d="M17 3c0 1.333 -.333 2.333 -1 3" />
      <path d="M7 3c0 1.333 .333 2.333 1 3" />
      <path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
      <path d="M17 6c2.667 .667 4.333 1.667 5 3" />
      <path d="M8.5 10l-1.5 -1" />
      <path d="M15.5 10l1.5 -1" />
      <path d="M12 15h.01" />
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
export class SvgDeerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
