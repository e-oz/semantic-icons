import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-distrokid-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Distrokid</title>
      <path
        d="M0 10.505h1.165c.94 0 1.589.645 1.589 1.486V12c0 .841-.65 1.495-1.59 1.495H0v-2.99zM1.165 12.9c.538 0 .901-.363.901-.892V12c.002-.53-.361-.903-.901-.903H.658v1.804h.507zm2.205-2.396h.658v2.99H3.37v-2.99zm1.201 2.554.389-.466c.269.222.55.363.892.363.27 0 .431-.107.431-.282v-.008c0-.167-.102-.252-.602-.38-.602-.154-.99-.32-.99-.914v-.009c0-.542.433-.9 1.046-.9a1.73 1.73 0 0 1 1.111.38l-.342.495c-.264-.184-.525-.295-.776-.295-.25 0-.384.116-.384.26v.01c0 .196.128.26.644.392.606.158.949.376.949.897v.009c0 .593-.453.927-1.098.927a1.903 1.903 0 0 1-1.27-.479zm3.57-1.948h-.909v-.605h2.477v.605H8.8v2.384h-.657V11.11zm2.072-.606h1.367c.38 0 .675.107.871.303.167.167.257.402.257.684v.008c0 .483-.26.786-.64.927l.73 1.068h-.77l-.64-.957h-.517v.957h-.658v-2.99zm1.324 1.452c.32 0 .504-.171.504-.423v-.008c0-.282-.196-.427-.516-.427h-.652v.858h.664zm1.632.052V12c0-.85.671-1.546 1.594-1.546s1.583.688 1.583 1.537V12c0 .85-.67 1.546-1.593 1.546s-1.584-.688-1.584-1.537zm2.49 0V12c0-.512-.375-.94-.905-.94s-.897.42-.897.932v.009c0 .512.376.94.906.94s.897-.42.897-.932zm1.4-1.504h.337v1.785l1.718-1.785h.435l-1.281 1.307 1.337 1.683h-.423l-1.15-1.448-.636.645v.803h-.337v-2.99zm3.1 0h.339v2.99h-.338v-2.99zm1.214 0h1.038c.94 0 1.589.645 1.589 1.486V12c0 .841-.65 1.495-1.589 1.495h-1.038v-2.99zm1.038 2.678c.756 0 1.239-.512 1.239-1.174V12c0-.662-.483-1.182-1.239-1.182h-.702v2.366l.702-.001z"
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
export class SvgDistrokidIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
