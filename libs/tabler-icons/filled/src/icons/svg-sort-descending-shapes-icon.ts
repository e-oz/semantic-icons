import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sort-descending-shapes-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-sort-descending-shapes"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M7 5a1 1 0 0 1 1 1v9.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-9.586a1 1 0 0 1 1 -1m12 8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm-1.136 -9.504l3.5 6a1 1 0 0 1 -.864 1.504h-7a1 1 0 0 1 -.864 -1.504l3.5 -6a1 1 0 0 1 1.728 0"
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
export class SvgSortDescendingShapesIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
