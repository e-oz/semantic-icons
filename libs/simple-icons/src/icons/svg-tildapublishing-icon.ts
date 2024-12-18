import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tildapublishing-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tilda Publishing</title>
      <path
        d="M12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0zm0 .775C18.192.775 23.225 5.808 23.225 12c0 6.192-5.033 11.225-11.225 11.225C5.808 23.225.775 18.192.775 12 .775 5.808 5.808.775 12 .775zM8.904 6.584c-1.36 0-2.52 1.16-2.52 3.287l1.352.193c.192-1.352.576-1.935 1.352-1.935.776 0 1.167.19 2.52.967 1.351.776 1.735.968 3.095.968s2.714-.969 2.522-3.289H15.87c0 1.16-.382 1.745-1.158 1.745-.776 0-1.169-.191-2.713-.967s-1.736-.969-3.096-.969zm2.127 3.48v8.905h1.553v-8.32l-1.553-.585z"
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
export class SvgTildapublishingIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
