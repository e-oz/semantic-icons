import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-glass-gin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-glass-gin"
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
      <path d="M8 21h8" />
      <path d="M12 15v6" />
      <path d="M12 5m-6.5 0a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0" />
      <path
        d="M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5"
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
export class SvgGlassGinIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
