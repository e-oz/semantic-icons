import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-conekta-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Conekta</title>
      <path
        d="M12.2914 17.8831a11.7327 11.7327 0 0 1-6.1742 3.0338 2.4598 2.4598 0 0 1-2.1647-.7461c-4.2466-4.6258-4.2466-11.7322 0-16.358a2.4599 2.4599 0 0 1 2.1729-.7461 11.668 11.668 0 0 1 6.289 3.1404 27.1655 27.1655 0 0 0-.6969 6.1004 27.7762 27.7762 0 0 0 .5739 5.5756zm9.8962-3.9376a1.394 1.394 0 0 0-1.5244.5266 24.6804 24.6804 0 0 1-11.9139 8.9375 35.4417 35.4417 0 0 0 6.4284.5903 36.2857 36.2857 0 0 0 4.4605-.2788 3.5997 3.5997 0 0 0 3.0338-2.6977c.4692-1.884.6453-3.8838.5166-5.8134a1.394 1.394 0 0 0-1.001-1.2645zm-1.5245-4.3356a1.394 1.394 0 0 0 2.5255-.7462c.1354-1.9699-.0438-3.9689-.5166-5.8872A3.5997 3.5997 0 0 0 19.6382.2789 36.2678 36.2678 0 0 0 15.1776 0a35.4337 35.4337 0 0 0-6.4284.5904 24.6396 24.6396 0 0 1 11.9139 9.0195z"
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
export class SvgConektaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
