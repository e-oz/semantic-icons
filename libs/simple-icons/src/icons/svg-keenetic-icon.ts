import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-keenetic-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Keenetic</title>
      <path
        d="M15.718 10.188 24 2.376h-6.588L9.788 9.812H4.33V2.376H0v19.248h4.33V14.14h7.623c3.2 0 5.412.706 6.588 2.07.706.8 1.035 1.883 1.035 3.248v2.165h4.33v-2.165c0-2.353-.706-4.424-2.07-6.024-1.46-1.647-3.483-2.776-6.118-3.247"
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
export class SvgKeeneticIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
