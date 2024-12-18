import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-typst-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Typst</title>
      <path
        d="M12.654 17.846c0 1.114.16 1.861.479 2.242.32.381.901.572 1.743.572.872 0 1.99-.44 3.356-1.319l.871 1.45C16.547 22.931 14.44 24 12.785 24c-1.656 0-2.964-.395-3.922-1.187-.959-.82-1.438-2.256-1.438-4.307V6.989H5.246l-.349-1.626 2.528-.791V2.418L12.654 0v4.835l5.142-.395-.48 2.857-4.662-.176v10.725Z"
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
export class SvgTypstIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
