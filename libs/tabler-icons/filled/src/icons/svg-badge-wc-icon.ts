import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-badge-wc-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-badge-wc"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-7.534 4a1 1 0 0 0 -.963 .917l-.204 2.445l-.405 -.81l-.063 -.11a1 1 0 0 0 -1.725 .11l-.406 .81l-.203 -2.445a1 1 0 0 0 -.963 -.917l-.117 .003a1 1 0 0 0 -.914 1.08l.5 6l.016 .117c.175 .91 1.441 1.115 1.875 .247l1.106 -2.211l1.106 2.211c.452 .904 1.807 .643 1.89 -.364l.5 -6a1 1 0 0 0 -.913 -1.08zm4.034 0a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5"
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
export class SvgBadgeWcIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
