import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rewind-backward-40-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-rewind-backward-40"
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
      <path d="M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11" />
      <path d="M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
      <path d="M6 14v2a1 1 0 0 0 1 1h1" />
      <path d="M9 14v6" />
      <path d="M7 9l-3 -3l3 -3" />
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
export class SvgRewindBackward40Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
