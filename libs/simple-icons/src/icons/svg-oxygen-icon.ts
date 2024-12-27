import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-oxygen-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Oxygen</title>
      <path
        d="M23.89 12c0-6.627-5.324-12-11.89-12S.109 5.373.109 12 5.433 24 12 24c2.014 0 3.91-.508 5.573-1.4.62.354 1.338.558 2.105.558 2.326 0 4.212-1.865 4.212-4.165 0-.946-.319-1.818-.857-2.517.552-1.383.857-2.894.857-4.476zm-21.402.005c0-5.448 4.269-9.864 9.535-9.864s9.535 4.416 9.535 9.864c0 1.07-.166 2.099-.471 3.063a4.23 4.23 0 0 0-1.408-.239c-2.326 0-4.212 1.865-4.212 4.165 0 .72.185 1.397.51 1.988a9.21 9.21 0 0 1-3.953.888c-5.267-.001-9.536-4.418-9.536-9.865zm17.191 9.864c-1.514.021-2.84-1.267-2.819-2.788 0-1.54 1.262-2.788 2.819-2.788 1.507-.025 2.843 1.27 2.819 2.788 0 1.54-1.263 2.788-2.819 2.788z"
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
export class SvgOxygenIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
