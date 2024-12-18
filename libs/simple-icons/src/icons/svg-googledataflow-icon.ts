import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-googledataflow-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google Dataflow</title>
      <path
        d="M5.856 9.6 3.72 9.564l.036-2.46 6.312-3.516L5.94 1.14 8.028 0l4.092 2.436h.012L16.284.108h.06l1.992 1.188-4.188 2.352 6.168 3.684v2.46l-2.124-.036.012-1.284L13.116 5.4l-.024 2.076-1.224-.012v-.0022l-.84-.0098.024-2.076-5.172 2.94L5.856 9.6zm12.252 6.072-5.16 2.94.024-2.064-2.064-.024-.024 2.064-5.1-3.072.012-1.248H3.684v2.4l6.168 3.684 2.0111 1.1971.005.0149L15.972 24h.06l2.028-1.14-4.128-2.448-.02.0111.008-.0231 6.324-3.516.036-2.508-2.148-.024-.024 1.32zM5.664 22.704l1.992 1.188h.06l4.152-2.328-2.016-1.212-4.188 2.352zm13.68-12.024c-.7555 0-1.368.6125-1.368 1.368 0 .7555.6125 1.368 1.368 1.368.7556 0 1.368-.6125 1.368-1.368 0-.7555-.6124-1.368-1.368-1.368zM4.656 13.224c.7555 0 1.368-.6125 1.368-1.368 0-.7556-.6125-1.368-1.368-1.368-.7556 0-1.368.6124-1.368 1.368 0 .7555.6124 1.368 1.368 1.368zm7.416-5.004c-.7555 0-1.368.6125-1.368 1.368 0 .7556.6125 1.368 1.368 1.368s1.368-.6124 1.368-1.368c0-.7555-.6125-1.368-1.368-1.368zm-.108 4.812c-.7555 0-1.368.6125-1.368 1.368s.6125 1.368 1.368 1.368c.7555 0 1.368-.6125 1.368-1.368s-.6125-1.368-1.368-1.368z"
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
export class SvgGoogledataflowIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
