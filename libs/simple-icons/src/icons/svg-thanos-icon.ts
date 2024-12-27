import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-thanos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Thanos</title>
      <path
        d="M0 0v24h16.998A7.002 7.002 0 0 0 24 16.998V0Zm18.707 15.129h.896v.895h-.896zm-.281-3.857h1.455v1.456h-1.455Zm-.224-3.801h1.903v1.905h-1.903Zm-3.073 11.234h.895v.896h-.896zm-.28-3.902h1.456v1.457h-1.456zm-.224-3.755h1.906v1.904h-1.904Zm.224-1.897V7.696h1.456V9.15Zm-6.874 9.554h.896v.896h-.896Zm-.28-3.856h1.456v1.454H7.695Zm.28-2.401v-.896h.896v.896zm-.28-4.752h1.456V9.15H7.695ZM4.4 18.706h.897v.895h-.897Zm0-3.577h.897v.895h-.897Zm-.28-3.857h1.455v1.456H4.12Zm-.224-3.801h1.904v1.905H3.895Zm-.837-4.413H20.94v3.577h-7.153v14.307h-3.576V6.635H3.058Z"
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
export class SvgThanosIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
