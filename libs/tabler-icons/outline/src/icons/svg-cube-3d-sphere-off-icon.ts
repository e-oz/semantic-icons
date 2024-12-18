import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cube-3d-sphere-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-cube-3d-sphere-off"
      [class]="_svgClass()"
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
      <path d="M6 17.6l-2 -1.1v-2.5" />
      <path d="M4 10v-2.5l2 -1.1" />
      <path d="M10 4.1l2 -1.1l2 1.1" />
      <path d="M18 6.4l2 1.1v2.5" />
      <path d="M20 14v2" />
      <path d="M14 19.9l-2 1.1l-2 -1.1" />
      <path d="M18 8.6l2 -1.1" />
      <path d="M12 12v2.5" />
      <path d="M12 18.5v2.5" />
      <path d="M12 12l-2 -1.12" />
      <path d="M6 8.6l-2 -1.1" />
      <path d="M3 3l18 18" />
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
export class SvgCube3dSphereOffIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
