import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-unocss-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>UnoCSS</title>
      <path
        d="M12.8602 18.3991c0-3.0761 2.4938-5.5699 5.5699-5.5699S24 15.323 24 18.3991c0 3.0762-2.4938 5.5699-5.5699 5.5699s-5.5699-2.4937-5.5699-5.5699ZM12.8602 5.6009c0-3.0762 2.4938-5.57 5.5699-5.57S24 2.5248 24 5.601v5.0129a.557.557 0 0 1-.557.5569H13.4172a.557.557 0 0 1-.557-.5569v-5.013ZM11.1398 18.3991c0 3.0762-2.4937 5.5699-5.5699 5.5699C2.4937 23.969 0 21.4753 0 18.3991v-5.0129a.557.557 0 0 1 .557-.557h10.0258a.557.557 0 0 1 .557.557v5.0129Z"
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
export class SvgUnocssIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
