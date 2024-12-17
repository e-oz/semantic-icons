import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vivino-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vivino</title>
      <path
        d="M12.476 18.034c0-1.087.889-1.989 1.988-1.989 1.1 0 1.989.902 1.989 1.989 0 1.1-.89 1.989-1.989 1.989-1.1 0-1.988-.89-1.988-1.99M12.043 24c-1.1 0-1.988-.902-1.988-1.989 0-1.099.889-1.988 1.988-1.988 1.087 0 1.989.889 1.989 1.988A2.003 2.003 0 0112.043 24M5.2 14.007c0-1.087.89-1.988 1.989-1.988 1.087 0 1.989.901 1.989 1.988 0 1.1-.902 1.989-1.99 1.989-1.098 0-1.988-.89-1.988-1.989m4.385-5.892c1.1 0 1.989.902 1.989 1.989 0 1.1-.89 1.976-1.989 1.976-1.1 0-1.988-.877-1.988-1.976 0-1.087.889-1.989 1.988-1.989m2.384-4.187c1.1 0 1.989.89 1.989 1.989 0 1.087-.89 1.988-1.989 1.988A2.003 2.003 0 019.98 5.917c0-1.1.902-1.99 1.99-1.99M14.401 0c1.1 0 1.99.89 1.99 1.989 0 1.087-.89 1.988-1.99 1.988a2.003 2.003 0 01-1.988-1.988c0-1.1.901-1.989 1.988-1.989M11.6 18.034c0 1.1-.89 1.989-1.99 1.989a1.995 1.995 0 01-1.988-1.99c0-1.086.902-1.988 1.989-1.988 1.1 0 1.989.902 1.989 1.989m-1.544-4.027c0-1.087.889-1.988 1.988-1.988 1.087 0 1.989.901 1.989 1.988 0 1.1-.902 1.989-1.989 1.989-1.1 0-1.988-.89-1.988-1.989m4.385-1.927c-1.1 0-1.99-.877-1.99-1.976 0-1.087.89-1.989 1.99-1.989 1.099 0 1.988.902 1.988 1.989 0 1.1-.89 1.976-1.988 1.976m4.36 1.927c0 1.1-.89 1.989-1.989 1.989-1.1 0-1.989-.89-1.989-1.989 0-1.087.89-1.988 1.99-1.988 1.098 0 1.988.901 1.988 1.988Z"
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
export class SvgVivinoIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}