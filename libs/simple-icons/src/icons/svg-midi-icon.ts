import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-midi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MIDI</title>
      <path
        d="M21.775 7.517H24v8.966h-2.225zm-8.562 0h6.506c.66 0 1.045.57 1.045 1.247v6.607c0 .84-.35 1.112-1.112 1.112h-6.439v-5.696h2.225v3.505h3.135V9.54h-5.36zm-3.235 0h2.19v8.966h-2.19zM0 7.517h7.854c.66 0 1.045.57 1.045 1.247v7.72H6.708V9.774H5.427v6.708H3.438V9.775H2.191v6.708H0Z"
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
export class SvgMidiIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
