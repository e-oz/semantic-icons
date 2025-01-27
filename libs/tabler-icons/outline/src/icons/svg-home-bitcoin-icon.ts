import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-home-bitcoin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-home-bitcoin"
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
        d="M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"
      />
      <path d="M19.5 10.5l-7.5 -7.5l-9 9h2v7a2 2 0 0 0 2 2h6" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3" />
      <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
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
export class SvgHomeBitcoinIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
