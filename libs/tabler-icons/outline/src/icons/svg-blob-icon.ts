import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-blob-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-blob"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M5.897 20.188c1.67 .752 3.896 .812 6.103 .812s4.434 -.059 6.104 -.812c.868 -.392 1.614 -.982 2.133 -1.856c.514 -.865 .763 -1.94 .763 -3.234c0 -2.577 -.983 -5.315 -2.557 -7.416c-1.57 -2.094 -3.833 -3.682 -6.443 -3.682s-4.873 1.588 -6.443 3.682c-1.574 2.101 -2.557 4.84 -2.557 7.416c0 1.295 .249 2.369 .763 3.234c.519 .874 1.265 1.464 2.134 1.856"
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
export class SvgBlobIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
