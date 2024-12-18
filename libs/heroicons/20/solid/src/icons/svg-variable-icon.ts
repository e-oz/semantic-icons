import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-variable-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M15.212 2.079a.75.75 0 0 1 1.006.336A16.932 16.932 0 0 1 18 10c0 2.724-.641 5.3-1.782 7.585a.75.75 0 1 1-1.342-.67A15.432 15.432 0 0 0 16.5 10c0-2.486-.585-4.834-1.624-6.915a.75.75 0 0 1 .336-1.006Zm-10.424 0a.75.75 0 0 1 .336 1.006A15.433 15.433 0 0 0 3.5 10c0 2.486.585 4.834 1.624 6.915a.75.75 0 1 1-1.342.67A16.933 16.933 0 0 1 2 10c0-2.724.641-5.3 1.782-7.585a.75.75 0 0 1 1.006-.336Zm2.285 3.554a1.5 1.5 0 0 1 2.219.677l.856 2.08 1.146-1.77a2.25 2.25 0 0 1 3.137-.65l.235.156a.75.75 0 1 1-.832 1.248l-.235-.156a.75.75 0 0 0-1.045.216l-1.71 2.644 1.251 3.04.739-.492a.75.75 0 1 1 .832 1.248l-.739.493a1.5 1.5 0 0 1-2.219-.677l-.856-2.08-1.146 1.77a2.25 2.25 0 0 1-3.137.65l-.235-.156a.75.75 0 0 1 .832-1.248l.235.157a.75.75 0 0 0 1.045-.217l1.71-2.644-1.251-3.04-.739.492a.75.75 0 0 1-.832-1.248l.739-.493Z"
        clip-rule="evenodd"
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
export class SvgVariableIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
