import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kinopoisk-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kinopoisk</title>
      <path
        d="M12.049 0C5.45 0 .104 5.373.104 12S5.45 24 12.049 24c3.928 0 7.414-1.904 9.592-4.844l-9.803-5.174 6.256 6.418h-3.559l-4.373-6.086V20.4h-2.89V3.6h2.89v6.095L14.535 3.6h3.559l-6.422 6.627 9.98-5.368C19.476 1.911 15.984 0 12.05 0zm10.924 7.133-9.994 4.027 10.917-.713a11.963 11.963 0 0 0-.923-3.314zm-10.065 5.68 10.065 4.054c.458-1.036.774-2.149.923-3.314l-10.988-.74z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgKinopoiskIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}