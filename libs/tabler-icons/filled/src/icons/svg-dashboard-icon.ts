import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dashboard-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-dashboard"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2.954a10 10 0 0 1 6.222 17.829a1 1 0 0 1 -.622 .217h-11.2a1 1 0 0 1 -.622 -.217a10 10 0 0 1 6.222 -17.829m4.207 5.839a1 1 0 0 0 -1.414 0l-2.276 2.274a2.003 2.003 0 0 0 -2.514 1.815l-.003 .118a2 2 0 1 0 3.933 -.517l2.274 -2.276a1 1 0 0 0 0 -1.414"
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
export class SvgDashboardIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
