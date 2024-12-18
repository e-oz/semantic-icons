import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-i18next-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>i18next</title>
      <path
        d="M14.93646 2.48699v4.51684l5.0758 13.03647s1.5495 3.1839-2.8824 3.9597H7.01922s-4.13084-.4311-3.14053-3.7019L9.21276 7.00401V2.48699h5.7237Zm2.0894 13.10781c-4.4301-1.3742-8.15457-.6365-9.97498-.0788l-1.83572 4.4186c-.78296 2.499 2.27302 2.9417 2.59687 2.9813l.02755.0032h8.44448c3.5407-.5982 2.511-2.972 2.4147-3.1773l-.0068-.0142-1.6661-4.1328Zm-7.81345.7772c.78905.0004 1.42905.3862 1.42905.8646 0 .4764-.6404.864-1.42905.864-.7887 0-1.42711-.3878-1.42711-.864 0-.4784.6384-.8646 1.4271-.8646Zm5.08375 0c.7871.0004 1.4271.3862 1.4271.8646 0 .4764-.6403.864-1.4271.864-.791 0-1.429-.3878-1.429-.864 0-.4784.638-.8646 1.429-.8646Zm-4.5001-5.2131c-.55227 0-.99993.5395-.99993 1.2051 0 .6656.44766 1.2051.99993 1.2051.5522 0 .9998-.5395.9998-1.2051 0-.6656-.4476-1.2051-.9998-1.2051Zm3.6413-1.29686c-.6549 0-1.1862.63806-1.1862 1.42906 0 .7871.5313 1.4271 1.1862 1.4271.653 0 1.1862-.64 1.1862-1.4271 0-.7907-.5328-1.42906-1.1862-1.42906Zm6.0363-2.73783s-2.1219 1.54591-4.0858-.41975V4.55615s2.7243-.60065 4.0858 2.56806Zm-14.84367 0C5.9908 3.9555 8.71543 4.55615 8.71543 4.55615v2.14831c-1.96566 1.96566-4.08544.41975-4.08544.41975ZM15.04366 0c.4954 0 .8958.4387.8958.98109 0 .54203-.4006.98074-.8958.98074H8.95478c-.49315 0-.89428-.43871-.89428-.98074C8.0605.43871 8.46146 0 8.95478 0h6.08888Z"
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
export class SvgI18nextIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
