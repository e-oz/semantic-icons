import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-badge-vo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-badge-vo"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0v-3a2.5 2.5 0 0 0 -2.5 -2.5m-4.184 .051a1 1 0 0 0 -1.265 .633l-1.051 3.154l-1.051 -3.154a1 1 0 0 0 -1.898 .632l2 6c.304 .912 1.594 .912 1.898 0l2 -6a1 1 0 0 0 -.633 -1.265m4.184 1.949a.5 .5 0 0 1 .5 .5v3a.5 .5 0 1 1 -1 0v-3a.5 .5 0 0 1 .5 -.5"
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
export class SvgBadgeVoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
