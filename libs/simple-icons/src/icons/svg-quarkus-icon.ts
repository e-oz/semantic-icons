import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quarkus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Quarkus</title>
      <path
        d="M3.981 0A3.993 3.993 0 0 0 0 3.981V20.02A3.993 3.993 0 0 0 3.981 24h10.983L12 16.8l-2.15 4.546H3.98c-.72 0-1.327-.608-1.327-1.327V3.98c0-.72.608-1.327 1.327-1.327h16.04c.72 0 1.327.608 1.327 1.327v16.04c0 .72-.608 1.327-1.327 1.327h-3.48L17.63 24h2.388A3.993 3.993 0 0 0 24 20.019V3.98A3.993 3.993 0 0 0 20.019 0zm4.324 4.217v3.858l3.341-1.93zm7.39 0l-3.341 1.929 3.34 1.929zM12 6.35L8.305 8.483 12 10.617l3.695-2.134zM8.104 8.832v4.266l3.695 2.133v-4.266zm7.792 0L12.2 10.965v4.266l3.695-2.133zm-8.146.204l-3.34 1.93 3.34 1.928zm8.5 0v3.858l3.34-1.929zm-8.146 4.47v3.859l3.341-1.93zm7.792 0l-3.341 1.93 3.34 1.929z"
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
export class SvgQuarkusIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
