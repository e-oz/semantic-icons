import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-srgssr-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SRG SSR</title>
      <path
        d="M0 7.861v8.278h24V7.86Zm2.979 2.135c.494 0 .883.032 1.06.057.08.012.122.047.11.138l-.073.457c-.024.135-.068.153-.226.141a11.818 11.818 0 0 0-.914-.043c-.281 0-.575.062-.575.379 0 .226.14.323.446.402l.45.116c.806.207 1.038.604 1.038 1.134 0 .903-.706 1.221-1.676 1.221-.433 0-.878-.032-1.055-.057-.079-.012-.123-.047-.11-.138l.073-.471c.025-.134.067-.153.225-.14.152.012.597.048.853.048.561 0 .793-.06.793-.402 0-.232-.157-.34-.529-.438l-.451-.117c-.592-.152-.934-.524-.934-1.152 0-.695.489-1.135 1.495-1.135zm7.275 0c.628 0 .903.037.945.043.128.012.151.068.133.19l-.072.439c-.025.134-.068.15-.227.139-.177-.012-.487-.03-.719-.03-.768 0-1.123.239-1.123 1.172 0 .738.214 1.274 1.043 1.274.14 0 .263-.006.3-.012v-.854h-.286c-.122 0-.16-.044-.16-.166v-.42c0-.121.038-.164.16-.164h1c.122 0 .158.043.158.164v1.958c0 .134-.038.184-.166.214s-.376.06-1.04.06c-1.483 0-1.96-.853-1.96-2.054 0-1.214.58-1.953 2.014-1.953zm4.129 0c.494 0 .885.03 1.062.055.08.012.122.049.11.14l-.075.457c-.024.135-.065.153-.224.141a11.818 11.818 0 0 0-.914-.043c-.28 0-.574.062-.574.379 0 .226.14.323.445.402l.451.116c.805.207 1.037.604 1.037 1.134 0 .903-.708 1.22-1.678 1.22a9.58 9.58 0 0 1-1.054-.056c-.08-.012-.122-.047-.11-.138l.075-.471c.024-.134.066-.153.224-.14.152.012.598.048.854.048.56 0 .793-.06.793-.402 0-.232-.16-.342-.532-.44l-.45-.115c-.592-.152-.932-.524-.932-1.152 0-.695.486-1.135 1.492-1.135zm3.154 0c.494 0 .884.03 1.06.055.08.012.122.049.11.14l-.072.457c-.024.135-.068.153-.227.141a11.813 11.813 0 0 0-.914-.043c-.28 0-.574.062-.574.379 0 .226.14.323.445.402l.451.116c.805.207 1.038.604 1.038 1.134 0 .903-.707 1.22-1.676 1.22-.433 0-.88-.031-1.057-.056-.08-.012-.122-.047-.11-.138l.075-.471c.024-.134.066-.153.225-.14.152.012.597.048.853.048.561 0 .793-.06.793-.402 0-.232-.157-.342-.53-.44l-.452-.115c-.592-.152-.932-.524-.932-1.152 0-.695.488-1.135 1.494-1.135zM4.98 10.04h1.359c.94 0 1.367.427 1.367 1.19 0 .591-.336.86-.635 1.048l.89 1.477c.099.152-.006.207-.09.207h-.665c-.146 0-.197-.043-.258-.147l-.724-1.304c-.075-.128-.071-.183-.037-.319l.06-.255c.055-.232.116-.152.293-.225.14-.061.281-.16.281-.47 0-.342-.177-.475-.543-.475h-.58v3.03c0 .123-.036.165-.158.165h-.56c-.122 0-.159-.042-.159-.164v-3.594c0-.122.037-.164.159-.164zm14.558 0h1.36c.939 0 1.365.427 1.365 1.19 0 .591-.334.86-.633 1.048l.89 1.477c.098.152-.006.207-.091.207h-.666c-.147 0-.195-.043-.256-.147l-.725-1.304c-.08-.14-.07-.184-.037-.319l.06-.255c.055-.232.117-.152.294-.225.14-.061.28-.16.28-.47 0-.342-.176-.475-.542-.475h-.58v3.029c0 .122-.036.166-.158.166h-.56c-.123 0-.16-.044-.16-.166v-3.592c0-.122.037-.164.16-.164z"
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
export class SvgSrgssrIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
