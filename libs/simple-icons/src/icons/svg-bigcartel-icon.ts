import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bigcartel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Big Cartel</title>
      <path
        d="M12 13.068v-1.006c0-.63.252-1.256.88-1.508l7.79-4.9c.503-.252.755-.88.755-1.51V0L12 6.03 2.575 0v12.69c0 3.394 1.51 6.284 4.02 7.917L11.875 24l5.28-3.393c2.513-1.51 4.02-4.398 4.02-7.916V7.036L12 13.068z"
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
export class SvgBigcartelIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
