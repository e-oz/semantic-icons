import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jetpack-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-jetpack"
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
      <path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" />
      <path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" />
      <path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
      <path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
      <path d="M10 8h4" />
      <path d="M10 11h4" />
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
export class SvgJetpackIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
