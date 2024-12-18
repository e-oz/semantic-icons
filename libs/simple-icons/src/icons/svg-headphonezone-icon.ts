import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-headphonezone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Headphone Zone</title>
      <path
        d="M17.63 4.702 17.96 0 9.086 2.484c-.463 1.754-.694 4.139.133 6.655.232-.067.463-.1.695-.133a4.724 4.724 0 0 1 5.133 4.305 4.724 4.724 0 0 1-4.305 5.133 4.724 4.724 0 0 1-5.132-4.305 4.618 4.618 0 0 1 1.159-3.543c-.86-1.325-1.987-3.609-1.954-6.49C1.107 6.623-.847 11.258.378 15.86c1.49 5.828 7.45 9.305 13.245 7.782 4.603-1.192 7.748-5.198 8.113-9.702l2.251-1.622-6.358-7.616Z"
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
export class SvgHeadphonezoneIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
