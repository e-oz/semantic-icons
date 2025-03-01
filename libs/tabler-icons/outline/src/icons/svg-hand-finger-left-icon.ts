import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-finger-left-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hand-finger-left"
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
      <path d="M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5" />
      <path d="M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5" />
      <path d="M9.5 14a1.5 1.5 0 0 0 0 3h1.5" />
      <path
        d="M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v.208a6 6 0 0 0 -2.7 -5.012l-.3 -.196q -.718 -.468 -5.728 -3.286a1.5 1.5 0 0 0 -2.022 .536a1.87 1.87 0 0 0 .28 2.28l1.47 1.47"
      />
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
export class SvgHandFingerLeftIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
