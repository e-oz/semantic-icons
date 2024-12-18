import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-car-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-car"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 14a3 3 0 0 1 2.685 4.34l-.067 .126l-.1 .165l-.141 .2l-.116 .141l-.116 .126a3 3 0 0 1 -.388 .334l-.149 .1l-.089 .055q -.052 .032 -.107 .06l-.17 .085l-.175 .073l-.104 .037l-.17 .052l-.172 .042l-.183 .032l-.075 .01q -.09 .011 -.18 .016l-.183 .006l-.183 -.006l-.18 -.016l-.192 -.03l-.17 -.036l-.18 -.051l-.058 -.019a3 3 0 0 1 -.174 -.065l-.161 -.072l-.168 -.087l-.053 -.03q -.122 -.072 -.237 -.156l-.16 -.124l-.15 -.134l-.129 -.129l-.066 -.073l-.1 -.12l-.12 -.165l-.074 -.113l-.063 -.108l-.067 -.126a3 3 0 0 1 -.315 -1.34a3 3 0 0 1 3 -3m-10 0a3 3 0 0 1 2.685 4.34l-.067 .126l-.1 .165l-.141 .2l-.116 .141l-.116 .126a3 3 0 0 1 -.388 .334l-.149 .1l-.089 .055q -.052 .032 -.107 .06l-.17 .085l-.175 .073l-.104 .037l-.17 .052l-.172 .042l-.183 .032l-.075 .01q -.09 .011 -.18 .016l-.183 .006l-.183 -.006l-.18 -.016l-.192 -.03l-.17 -.036l-.18 -.051l-.058 -.019a3 3 0 0 1 -.174 -.065l-.161 -.072l-.168 -.087l-.053 -.03q -.122 -.072 -.237 -.156l-.16 -.124l-.15 -.134l-.129 -.129l-.066 -.073l-.1 -.12l-.12 -.165l-.074 -.113l-.063 -.108l-.067 -.126a3 3 0 0 1 -.315 -1.34a3 3 0 0 1 3 -3m7 -9a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-.126q .125 -.48 .126 -1a4 4 0 1 0 -7.874 1h-2.252q .124 -.48 .126 -1a4 4 0 1 0 -7.874 1h-.126a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-3.48 -9h-.52v3h2.92z"
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
export class SvgCarIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
