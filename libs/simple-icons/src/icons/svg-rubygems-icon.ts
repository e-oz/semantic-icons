import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rubygems-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RubyGems</title>
      <path
        d="M7.81 7.9l-2.97 2.95 7.19 7.18 2.96-2.95 4.22-4.23-2.96-2.96v-.01H7.8zM12 0L1.53 6v12L12 24l10.47-6V6L12 0zm8.47 16.85L12 21.73l-8.47-4.88V7.12L12 2.24l8.47 4.88v9.73z"
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
export class SvgRubygemsIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
