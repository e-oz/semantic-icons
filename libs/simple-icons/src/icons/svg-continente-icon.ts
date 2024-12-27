import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-continente-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Continente</title>
      <path
        d="M11.9922 0C5.3736 0 .0078 5.3814.0078 12c0 6.6334 5.3509 12 11.9844 12s12-5.3666 12-12-5.3814-12-12-12m0 2.504c5.2472 0 9.5117 4.2637 9.5117 9.496 0 5.232-4.2645 9.5098-9.5117 9.5098S2.496 17.2618 2.496 12c0-5.2472 4.249-9.496 9.496-9.496m-.0586 2.3847c-3.9354 0-7.127 3.1766-7.127 7.127s3.1916 7.1406 7.127 7.1406c1.9677 0 3.7551-.7908 5.0371-2.088a1.89 1.89 0 0 0 0-2.6835c-.7304-.7455-1.9226-.7455-2.668 0-.6111.6113-1.4449.9843-2.3691.9843-1.8484 0-3.3398-1.52-3.3398-3.3535s1.4914-3.3398 3.3398-3.3398v-.0156c.9242 0 1.758.3731 2.3691.9843.7305.7305 1.9227.7305 2.668 0s.7453-1.9233 0-2.6836c-1.282-1.282-3.0694-2.0722-5.0371-2.0722m.0586 5.7539c-.7602 0-1.3711.6128-1.3711 1.373s.6109 1.3711 1.371 1.3711c.7604 0 1.3712-.6258 1.3712-1.371 0-.7454-.6108-1.3731-1.3711-1.3731"
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
export class SvgContinenteIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
