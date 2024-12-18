import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-literal-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Literal</title>
      <path
        d="m11.148 5.719.128-1.798 3.234.223-1.52-2.902 1.63-.836L16.176 3.4l1.966-2.75 1.495 1.05-1.916 2.665 3.212.221-.128 1.797-3.167-.217 1.498 2.878-1.628.836-1.578-3.017-1.99 2.771-1.495-1.05L14.36 5.94zm-8.129 9.513L5.197 0l2.569.355-1.817 12.708 5.978.825-.361 2.525zM20.981 21.7 4.328 24l-.36-2.524 16.652-2.3z"
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
export class SvgLiteralIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
