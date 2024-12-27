import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-devexpress-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DevExpress</title>
      <path
        d="M1.4 0h21.2c.8 0 1.4.6 1.4 1.4v1.1c0 .8-.6 1-.9 1C11.7 4.9 4.2 9.7 0 14.1V1.4C0 .6.6 0 1.4 0zm.022 19.567L1.7 19.2C5.3 14.6 12.4 8.3 24 6.3v16.3c0 .8-.6 1.4-1.4 1.4H1.4C.6 24 0 23.4 0 22.6v-.4c0-.3.2-.8.3-.9.252-.589.646-1.107 1.122-1.733z"
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
export class SvgDevexpressIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
