import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-puzzle-piece-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        d="M9 3.889c0-.273.188-.502.417-.65.355-.229.583-.587.583-.989C10 1.56 9.328 1 8.5 1S7 1.56 7 2.25c0 .41.237.774.603 1.002.22.137.397.355.397.613 0 .331-.275.596-.605.579-.744-.04-1.482-.1-2.214-.18a.75.75 0 0 0-.83.81c.067.764.111 1.535.133 2.312A.6.6 0 0 1 3.882 8c-.268 0-.495-.185-.64-.412C3.015 7.231 2.655 7 2.25 7 1.56 7 1 7.672 1 8.5S1.56 10 2.25 10c.404 0 .764-.23.993-.588.144-.227.37-.412.64-.412a.6.6 0 0 1 .601.614 39.338 39.338 0 0 1-.231 3.3.75.75 0 0 0 .661.829c.826.093 1.66.161 2.5.204A.56.56 0 0 0 8 13.386c0-.271-.187-.499-.415-.645C7.23 12.512 7 12.153 7 11.75c0-.69.672-1.25 1.5-1.25s1.5.56 1.5 1.25c0 .403-.23.762-.585.99-.228.147-.415.375-.415.646v.11c0 .278.223.504.5.504 1.196 0 2.381-.052 3.552-.154a.75.75 0 0 0 .68-.661c.135-1.177.22-2.37.253-3.574a.597.597 0 0 0-.6-.611c-.27 0-.498.187-.644.415-.229.356-.588.585-.991.585-.69 0-1.25-.672-1.25-1.5S11.06 7 11.75 7c.403 0 .762.23.99.585.147.228.375.415.646.415a.597.597 0 0 0 .599-.61 40.914 40.914 0 0 0-.132-2.365.75.75 0 0 0-.815-.684A39.51 39.51 0 0 1 9.5 4.5a.501.501 0 0 1-.5-.503v-.108Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPuzzlePieceIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
