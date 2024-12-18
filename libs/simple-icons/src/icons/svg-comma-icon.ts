import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-comma-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>comma</title>
      <path
        d="M6.72682 24c0-.55531-.0434-1.02051.02045-1.46891.0272-.1912.25037-.39595.43237-.51143.88731-.56315 1.85122-1.01275 2.67734-1.65857 2.67584-2.09206 4.26201-4.84612 4.3487-8.42366.02452-1.01583-.34891-1.2696-1.20211-.87389-2.4628 1.1424-5.11119.47263-6.5246-1.65034-1.54137-2.3155-1.32431-5.3984.52253-7.4211 2.359-2.58344 6.24053-2.66074 8.91722-.19346 1.60337 1.47794 2.3652 3.38627 2.5552 5.5569.63691 7.27188-3.01046 13.2657-9.64881 15.89874-.657.26045-1.3307.4744-2.09828.74571"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCommaIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
