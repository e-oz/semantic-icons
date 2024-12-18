import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-swr-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SWR</title>
      <path
        d="M0 12.187a2.659 2.659 0 0 0 2.648 2.647 2.662 2.662 0 0 0 2.647-2.646v-.376a1.097 1.097 0 0 1 1.092-1.086c.326 0 .636.147.844.399h1.712a2.66 2.66 0 0 0-2.558-1.959 2.664 2.664 0 0 0-2.647 2.647v.374c0 .598-.493 1.09-1.091 1.09a1.096 1.096 0 0 1-1.09-1.09.314.314 0 0 0-.312-.312H.311a.313.313 0 0 0-.311.312Zm10.131 2.647a2.664 2.664 0 0 1-2.555-1.96h1.71a1.088 1.088 0 0 0 1.935-.683v-.379a2.663 2.663 0 0 1 2.648-2.646 2.65 2.65 0 0 1 2.647 2.591l.008.43a1.097 1.097 0 0 0 1.092 1.086c.326 0 .636-.146.843-.399h1.712a2.657 2.657 0 0 1-2.556 1.96 2.66 2.66 0 0 1-2.648-2.646l-.008-.389v-.017a1.096 1.096 0 0 0-1.09-1.059 1.096 1.096 0 0 0-1.09 1.09v.374a2.663 2.663 0 0 1-2.648 2.647Zm10.376-3.708a1.09 1.09 0 0 1 1.936.683v.004c0 .171.14.312.311.312h.935a.313.313 0 0 0 .311-.312 2.663 2.663 0 0 0-2.648-2.647 2.659 2.659 0 0 0-2.557 1.96h1.712Z"
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
export class SvgSwrIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
