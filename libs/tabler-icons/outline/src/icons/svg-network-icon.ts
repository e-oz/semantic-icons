import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-network-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-network"
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
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
      <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
      <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
      <path d="M6 9h12" />
      <path d="M3 20h7" />
      <path d="M14 20h7" />
      <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 15v3" />
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
export class SvgNetworkIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
