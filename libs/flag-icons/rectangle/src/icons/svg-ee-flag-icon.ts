import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ee-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ee"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#1791ff" d="M0 0h640v160H0z" />
      <path fill="#000001" d="M0 160h640v160H0z" />
      <path fill="#fff" d="M0 320h640v160H0z" />
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
export class SvgEeFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
