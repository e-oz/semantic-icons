import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jpeg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JPEG</title>
      <path
        d="M8.559 20.407c-.63 0-1.08-.026-1.08-.026V17.22h1.073c1.19 0 1.95.33 1.95 1.426 0 .93-.329 1.76-1.943 1.76m.028-3.965H6.61V24h.87v-2.797h1.275c1.783 0 2.634-1.096 2.634-2.483 0-1.413-.871-2.279-2.8-2.279M13.37 20.571h3.063v-.812H13.37v-2.55h3.548v-.768H12.5v7.42h4.566v-.768H13.37zM21.485 19.938v.753h1.289v1.866c-.395.587-1.452.587-1.452.587-.805 0-1.454-.277-1.927-.838-.47-.558-.707-1.158-.707-2.06 0-.947.235-1.675.711-2.257.482-.583 1.15-.905 1.982-.905.427 0 .884.131 1.33.405l.538-.602c-.482-.396-1.096-.593-1.84-.593-1.11 0-2.005.361-2.656 1.08-.657.715-.99 1.668-.99 2.832s.305 2.043.9 2.745c.591.692 1.42 1.047 2.44 1.047.46 0 .932-.043 1.423-.197.378-.12.508-.216 1.075-.216v-3.647zM3.856 16.441h-.584v.768h.584v3.571c0 1.101.033 1.746-.345 2.124a1.267 1.267 0 01-.865.367c-1.362 0-1.412-1.091-1.412-1.091H.4c.08 1.942 2.362 1.813 2.362 1.813.607-.033 1.087-.233 1.462-.609.495-.499.507-1.422.507-2.192v-4.75zM17.352 0H3.063v14.282h8.266V8.271h6.023zM18.038 9.067h5.213v5.216h-5.213z"
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
export class SvgJpegIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
