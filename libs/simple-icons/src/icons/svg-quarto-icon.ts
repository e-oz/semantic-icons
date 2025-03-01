import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quarto-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Quarto</title>
      <path
        d="M12.65 12.854V24c6.042-.325 10.923-5.105 11.33-11.125H12.65Zm-1.504 0H.02c.427 5.94 5.166 10.699 11.105 11.105V12.854Zm1.505-1.505H24C23.675 5.247 18.753.325 12.65 0Zm-1.505 0V0C5.106.427.326 5.308 0 11.35Z"
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
export class SvgQuartoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
