import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hexagon-number-7-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hexagon-number-7"
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
        d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728 -.395 1.4 -1.032 1.753l-6.017 3.844a2 2 0 0 1 -1.948 0l-6.016 -3.844a2 2 0 0 1 -1.032 -1.752v-6.556c0 -.728 .395 -1.4 1.032 -1.753l6.017 -3.582a2.062 2.062 0 0 1 2 0l6.017 3.583h-.029z"
      />
      <path d="M10 8h4l-2 8" />
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
export class SvgHexagonNumber7Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
