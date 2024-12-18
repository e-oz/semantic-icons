import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-qwik-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Qwik</title>
      <path
        d="M7.5469 0a2.957 2.957 0 0 0-2.5606 1.4785L.5332 9.1915a2.957 2.957 0 0 0 0 2.957l4.4531 7.7128A2.955 2.955 0 0 0 7.547 21.338H12l8.5938 2.6484c.2409.0742.4512-.1782.3359-.4023l-1.916-3.7227 4.4531-7.7129a2.957 2.957 0 0 0 0-2.957l-4.4531-7.7129A2.957 2.957 0 0 0 16.453 0zm0 .7656L17.7324 10.67l-1.8965 1.8985.5782 7.5332L6.2676 10.67l2.371-2.373z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgQwikIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
