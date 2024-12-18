import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-document-currency-bangladeshi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm1.97 4.53a.75.75 0 0 0 .78.178V8h-1.5a.75.75 0 1 0 0 1.5h1.5v3.098c0 .98.571 2.18 1.837 2.356a4.751 4.751 0 0 0 5.066-2.92.75.75 0 0 0-.695-1.031H11.75a.75.75 0 0 0 0 1.5h.343a3.241 3.241 0 0 1-2.798.966c-.25-.035-.545-.322-.545-.87V9.5h5.5a.75.75 0 0 0 0-1.5h-5.5V6.415c0-1.19-1.439-1.786-2.28-.945a.75.75 0 0 0 0 1.06Z"
        clip-rule="evenodd"
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
export class SvgDocumentCurrencyBangladeshiIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
