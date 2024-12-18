import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-roboflow-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Roboflow</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m.512 3.6a9.6 9.6 0 0 1 2.594.39c1.764.52 3.511 1.747 3.823 3.68.066.41.065.829.007 1.24-.208 1.466-1.09 2.777-2.09 3.83-1.063 1.122-2.417 1.854-3.54 2.898-.657.611-.925 1.36-.132 1.995 1.084.553 1.986.266 2.97-.332.582-.353 1.08-.823 1.511-1.345.219-.264.422-.542.617-.825.164-.24.317-.517.537-.716a.8.8 0 0 1 .502-.267.69.69 0 0 1 .7.406c.118.28.013.64-.113.9-.652 1.346-1.368 2.25-1.867 2.78-1.486 1.653-3.809 2.736-5.955 1.846-1.234-.51-2.198-1.658-2.37-2.998-.32-2.502 2.588-3.95 4.12-5.368.937-.868 1.965-2.203 1.486-3.562-.459-1.302-1.988-1.868-3.246-2-1.24-.128-2.5.128-3.624.654-.882.412-1.625 1.038-2.32 1.711-.23.223-.45.46-.688.673-.206.184-.453.352-.732.39-.417.056-.813-.248-.76-.688.086-.712.592-1.332 1.036-1.862q.412-.493.884-.928a9.3 9.3 0 0 1 2.397-1.6 9.9 9.9 0 0 1 4.253-.901m-2.22 5.264c1.558-.055 1.92 1.034.882 1.843-1.763 1.372-3.997 2.745-4.224 4.95-.092.887.352 2.293.89 3.24.04.07.061.153.058.24-.01.231-.19.42-.428.409-.162-.008-.311-.09-.45-.176-.639-.395-1.238-.89-1.705-1.481a5 5 0 0 1-.665-1.116 4.6 4.6 0 0 1-.323-1.196 4.6 4.6 0 0 1 .011-1.238q.045-.315.128-.62c.673-2.49 3.377-4.564 5.498-4.828q.172-.021.328-.027"
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
export class SvgRoboflowIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
