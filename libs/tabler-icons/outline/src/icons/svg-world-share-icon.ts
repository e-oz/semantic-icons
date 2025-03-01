import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-world-share-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-world-share"
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
      <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h9.4" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
      <path d="M16 22l5 -5" />
      <path d="M21 21.5v-4.5h-4.5" />
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
export class SvgWorldShareIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
