import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-shopping-cart-down-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-down"
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
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12.5 17h-6.5v-14h-2" />
      <path d="M6 5l14 1l-.859 6.011m-2.641 .989h-10.5" />
      <path d="M19 16v6" />
      <path d="M22 19l-3 3l-3 -3" />
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
export class SvgShoppingCartDownIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
