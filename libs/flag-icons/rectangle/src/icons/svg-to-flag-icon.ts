import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-to-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-to"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#c10000" d="M0 0h640v480H0z" />
        <path fill="#fff" d="M0 0h250v200.3H0z" />
        <g fill="#c10000">
          <path d="M102.8 31.2h39.9v139.6h-39.8z" />
          <path d="M192.6 81v40H53V81z" />
        </g>
      </g>
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
export class SvgToFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
