import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tools-kitchen-2-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2-off"
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
        d="M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941"
      />
      <path d="M19 19v2h-1v-3" />
      <path d="M8 8v13" />
      <path d="M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3" />
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
export class SvgToolsKitchen2OffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
