import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-marko-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Marko</title>
      <path
        d="M15.4 5.46h-3.39l-2.3 3.77L7.4 5.46H4l-4 6.55 4 6.53h3.39l-4-6.54L5.7 8.23 8.01 12h3.39l2.31-3.78L16.03 12l-4.01 6.54h3.39l4-6.54zm4.6 0h-3.39l4 6.54-4.01 6.54h3.39L24 12z"
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
export class SvgMarkoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
