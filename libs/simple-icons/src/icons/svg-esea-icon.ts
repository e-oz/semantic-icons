import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-esea-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ESEA</title>
      <path
        d="M14.054 2.767L8.95 9.511 0 9.65l5.832 4.47L1.042 21l8.491-4.088 5.711 4.322V14.12L24 9.796l-17.255 4.02a12.575 12.575 0 001.589-1.955 5.475 5.475 0 00.617-1.786l5.593-.15z"
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
export class SvgEseaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
