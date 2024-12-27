import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-exoscale-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Exoscale</title>
      <path
        d="M12 1.608 0 22.392h1.665L12 4.593v2.929l-8.612 14.87H5.11L12 10.507v2.986l-5.167 8.9h1.722L12 16.477v2.929l-1.722 2.985H24Z"
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
export class SvgExoscaleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
