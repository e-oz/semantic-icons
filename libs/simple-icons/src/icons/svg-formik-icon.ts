import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-formik-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Formik</title>
      <path
        d="M20.545 10.2945 17.792 8.712l.0011-3.3004 2.7531 1.5824Zm-.001 3.5897-2.7522-1.582.0011-3.1528 2.7522 1.5819zm.0263 3.6317-2.786-1.6013.0012-3.1529 2.786 1.6013zm-7.152-6.5068 3.9973-2.2977.0003-3.1523-3.9973 2.2978zm-2.4754 4.9833 6.4574-3.7118.0003-3.1522-6.4574 3.7118zm-4.3424 6.1423 10.8226-6.2208.0003-3.1522L6.601 18.9825zM9.5898 24l-2.7697-1.5927 10.7837-6.2013 2.7697 1.5927ZM3.455 13.7775 6.208 15.36l-.0011 3.3609-2.7531-1.5825Zm.0012-3.5897 2.7522 1.582-.001 3.1528-2.7523-1.5819zm-.0265-3.6114 2.786 1.6013-.001 3.1529-2.786-1.6013Zm7.1517 6.4856L6.584 15.3598l-.0004 3.1523 3.9973-2.2978zm2.4754-4.9832-6.4574 3.7117-.0004 3.1523 6.4574-3.7118zm4.3586-6.1516L6.5765 8.1573l-.0004 3.1522L17.415 5.0793ZM14.534 0l2.7697 1.5927L6.3961 7.8652 3.6264 6.2725Z"
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
export class SvgFormikIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
