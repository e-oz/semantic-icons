import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-indigo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>IndiGo</title>
      <path
        d="M22.99 0c-.25 0-.5.096-.691.287a.983.983 0 0 0 0 1.386.975.975 0 0 0 1.382 0 .983.983 0 0 0 0-1.386A.975.975 0 0 0 22.99 0Zm-2.444 1.959c-.25 0-.5.096-.691.287a.983.983 0 0 0 0 1.386.977.977 0 0 0 1.382 0 .981.981 0 0 0-.691-1.673ZM6.384 4.408a.98.98 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm2.928 0a.979.979 0 0 0 0 1.959.978.978 0 1 0 0-1.959Zm3.42 0a.979.979 0 0 0 0 1.959.98.98 0 0 0 0-1.959Zm2.931 0a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm2.931 0a.978.978 0 1 0-.001 1.961.978.978 0 0 0 .001-1.961Zm-2.931 2.939a.98.98 0 0 0 0 1.958.98.98 0 0 0 0-1.958Zm2.931 0a.98.98 0 0 0 0 1.959.977.977 0 0 0 .976-.979.978.978 0 0 0-.976-.98Zm-5.373 1.959a.97.97 0 0 0-.691.287.979.979 0 0 0 1.382 1.386.981.981 0 0 0-.691-1.673Zm5.373.98a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm-7.327 1.469a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Zm7.327 1.47a.98.98 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm-9.282.489a.981.981 0 0 0-.69 1.673.975.975 0 0 0 1.381 0 .981.981 0 0 0-.691-1.673Zm-8.303 2.45a.978.978 0 1 0 .004 1.956.978.978 0 0 0-.004-1.956Zm2.931 0a.978.978 0 1 0 .004 1.956.978.978 0 0 0-.004-1.956Zm2.931 0a.978.978 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm11.723.489a.98.98 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm-11.723 2.45a.978.978 0 0 0 0 1.958.978.978 0 0 0 0-1.958Zm0 2.938a.979.979 0 0 0 0 1.959.979.979 0 0 0 0-1.959Z"
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
export class SvgIndigoIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
