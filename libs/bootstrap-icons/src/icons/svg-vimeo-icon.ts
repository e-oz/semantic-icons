import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vimeo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-vimeo"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"
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
export class SvgVimeoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
