import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-iberia-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Iberia</title>
      <path
        d="M9.356 11.563c4.53-3.254 9.047-5.217 13.547-5.723L24 2.978c-6.662 0-7.57 1.457-9.873 3.752M0 21.021c14.719 0 18.189-3.46 20.213-8.17l1.7-4.434c-4.958.143-12.441 3.066-17.673 8.324"
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
export class SvgIberiaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
