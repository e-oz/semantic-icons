import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wish-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wish</title>
      <path
        d="M18.864 19.826h-4.107l-3.227-9.393-2.28 9.39H5.143L0 4.65h4.217l4.354 13.128c1.558-4.4 2.534-8.5 1.021-13.128H13.7ZM20.57 4.174a15.705 15.705 0 0 1-3.425 4.171 17.095 17.095 0 0 1 3.425 5.56A17.116 17.116 0 0 1 24 8.345a15.734 15.734 0 0 1-3.43-4.17Z"
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
export class SvgWishIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
