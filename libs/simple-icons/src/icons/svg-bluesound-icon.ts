import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bluesound-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bluesound</title>
      <path
        d="m14.327 14.893-8.396.003a4.549 4.549 0 0 0-4.546 4.543c0 2.05.007 3.737.007 3.737V24h12.955l.191-.002c4.678-.099 8.077-3.577 8.077-8.273a8.733 8.733 0 0 0-.805-3.721 8.77 8.77 0 0 0 .805-3.724c0-4.695-3.399-8.173-8.084-8.275L1.392 0v.833s-.007 1.681-.007 3.733a4.548 4.548 0 0 0 4.546 4.541l8.399.013c2.375 0 4.392 1.048 5.567 2.884-1.178 1.838-3.197 2.889-5.57 2.889m.219-7.452-8.615.002a2.88 2.88 0 0 1-2.879-2.877V1.665H14.33c3.835 0 6.62 2.782 6.62 6.615 0 .681-.092 1.339-.271 1.97-1.47-1.726-3.669-2.75-6.133-2.809m6.133 6.314c.179.629.271 1.29.271 1.97 0 3.831-2.785 6.611-6.62 6.611l-11.278.002v-2.899a2.882 2.882 0 0 1 2.879-2.879h8.446l.288-.015c2.412-.084 4.564-1.088 6.014-2.79"
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
export class SvgBluesoundIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
