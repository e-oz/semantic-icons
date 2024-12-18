import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-logitech-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Logitech</title>
      <path
        d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35 1.35 1.35 0 0 1-1.352-1.35 1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.289 2.289 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0v11.483zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124zm0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.289 2.289 0 0 1 2.322-2.322 2.289 2.289 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364zm13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253-2.449 0-4.348 1.858-4.348 4.306 0 2.449 1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.289 2.289 0 0 1 2.322-2.322 2.289 2.289 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364Z"
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
export class SvgLogitechIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
