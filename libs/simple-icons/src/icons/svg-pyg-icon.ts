import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pyg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PyG</title>
      <path
        d="m15.649 8.066-2.65 2.724a1.142 1.142 0 0 0-.531-.18l-.288-2.611a1.15 1.15 0 0 0 .804-.893l2.464.36c0 .053.004.106.013.158.03.159.095.31.188.442Zm-4.413 3.465H8.67a1.135 1.135 0 0 0-.337-.58l2.806-3.148c.172.135.38.218.597.24l.286 2.616a1.148 1.148 0 0 0-.787.872Zm-6.715-.427 1.886.596c-.01.103-.006.207.011.31a1.154 1.154 0 0 0 1.347.919c.062-.012.122-.03.18-.053l2.46 3.033a1.141 1.141 0 0 0-.23.837l-2.73.904a1.148 1.148 0 0 0-1.143-.583l-2.168-5.542a1.14 1.14 0 0 0 .387-.42Zm3.064 7.07c0-.034-.008-.068-.008-.103l2.732-.907a1.15 1.15 0 0 0 2.067-1.002l2.589-1.664c.139.174.326.305.538.374l-.319 3.825c-.03.008-.06.002-.09.008a1.152 1.152 0 0 0-.856.708l-6.653-1.238ZM9.464 4.729l1.487 1.456c-.212.26-.298.6-.237.93.025.124.07.244.135.354l-2.9 3.255a1.135 1.135 0 0 0-1.42.555l-1.872-.592a1.153 1.153 0 0 0-.008-.341 1.135 1.135 0 0 0-.258-.53l3.883-4.88a1.135 1.135 0 0 0 1.19-.206Zm7.212 3.827a.974.974 0 0 0 .54-.175l3.208 3.35a1.144 1.144 0 0 0-.206.703l-3.359.783a1.152 1.152 0 0 0-.69-.538l.504-4.123h.003Zm1.175-4.003-.929 1.754a1.135 1.135 0 0 0-1.415.723l-2.532-.373a1.135 1.135 0 0 0-1.681-.763L9.735 4.375c.052-.105.087-.218.103-.334l7.613-.134c.056.254.197.482.4.645Zm-3.058 8.815a1.135 1.135 0 0 0-.064.637c.007.033.022.067.032.103l-2.63 1.692a1.154 1.154 0 0 0-.397-.258l.597-2.633a1.135 1.135 0 0 0 .91-.41l1.552.87Zm.858-.719a1.135 1.135 0 0 0-.62.337l-1.574-.879a1.124 1.124 0 0 0-.146-1.011l2.65-2.725c.084.056.176.1.273.131l-.505 4.143c-.027.003-.053.002-.078.004Zm-7.325.001a1.15 1.15 0 0 0 .36-.676h2.548c.071.37.32.683.665.835l-.6 2.65a1.19 1.19 0 0 0-.2.018 1.143 1.143 0 0 0-.364.14L8.326 12.65ZM13.9 23.927l-8.674-1.816 1.068-2.767c.119.017.24.016.357-.005a1.15 1.15 0 0 0 .863-.73l6.642 1.237c-.002.43.241.822.627 1.012l-.883 3.07Zm-9.041-2.09-4.82-7.372 2.852-2.947c.246.16.544.22.833.168l2.151 5.52a1.144 1.144 0 0 0 0 2L4.86 21.838Zm16.61-2.668-7.068 4.62.804-2.804c.105.011.212.008.316-.01.523-.1.91-.546.935-1.078l5.013-.728Zm.07-18.79L24 12.717l-1.483-.31a1.15 1.15 0 0 0-1.285-1.159l-2.104-6.58a1.15 1.15 0 0 0 .58-1.22 1.129 1.129 0 0 0-.25-.515L21.54.379Zm2.432 12.783-1.977 5.48-5.604.814a1.126 1.126 0 0 0-.201-.352l4.639-5.697c.594.322 1.338.06 1.598-.565l1.545.32ZM0 13.87 1.773 5.4l5.86-1.105c.06.15.152.287.268.4L4.046 9.54a1.135 1.135 0 0 0-.742-.115 1.154 1.154 0 0 0-.92 1.342c.03.16.095.312.189.445L0 13.869Zm20.737-2.444-3.212-3.35a1.135 1.135 0 0 0-.215-1.556l.93-1.755c.15.047.31.061.468.043l2.104 6.581-.075.037ZM21.199.1l-2.08 2.557a1.135 1.135 0 0 0-1.51.385L10.21.073 21.2.099ZM2.306 4.848 9.387.218l8.059 3.233v.014L9.822 3.6a1.15 1.15 0 0 0-2.27.26l-5.246.989Zm13.536 13.976a1.18 1.18 0 0 0-.225-.091l.32-3.808a1.01 1.01 0 0 0 .135-.012 1.15 1.15 0 0 0 .929-1.28l3.316-.768c.043.095.1.183.167.263l-4.642 5.696Z"
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
export class SvgPygIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
