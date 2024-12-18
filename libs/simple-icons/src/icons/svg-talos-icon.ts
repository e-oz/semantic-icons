import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-talos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Talos</title>
      <path
        d="M9.678 11.98c0-2.664-1.13-6.896-2.867-10.804a12 12 0 0 0-1.585.917c1.608 3.668 2.647 7.553 2.647 9.886 0 2.254-1.08 6.145-2.735 9.865a12 12 0 0 0 1.576.93c1.79-3.976 2.964-8.229 2.964-10.795m6.442 0c0-2.336 1.042-6.22 2.646-9.89a12 12 0 0 0-1.608-.922c-1.756 3.957-2.843 8.166-2.843 10.816 0 2.564 1.177 6.819 2.965 10.797a12 12 0 0 0 1.575-.931c-1.655-3.723-2.735-7.616-2.735-9.87m5.45 6.525.31.307a12 12 0 0 0 .936-1.612c-1.866-1.893-3.457-3.938-3.47-5.233-.012-1.264 1.57-3.308 3.446-5.222a12 12 0 0 0-.945-1.603l-.259.258c-2.739 2.766-4.063 4.92-4.047 6.583.016 1.662 1.332 3.81 4.028 6.522M2.411 5.405l-.26-.259a12 12 0 0 0-.946 1.608c3.123 3.173 3.452 4.704 3.448 5.217-.012 1.3-1.603 3.34-3.47 5.229a12 12 0 0 0 .939 1.608c.106-.106.207-.204.31-.308 2.694-2.711 4.01-4.842 4.026-6.516s-1.308-3.809-4.047-6.58M12.002 24c.303 0 .602-.016.898-.037V.037A12 12 0 0 0 12 0c-.304 0-.605.015-.905.037v23.925q.448.035.903.038z"
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
export class SvgTalosIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
