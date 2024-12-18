import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-es-pv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-es-pv"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#D52B1E" d="M0 0h640v480H0z" />
      <path
        fill="#009B48"
        d="M0 0h53.1l133.4 100.1 133.5 100L586.9 0H640v39.9l-133.4 100L373.2 240 640 440.2V480h-53.1L453.5 380A69411.7 69411.7 0 0 0 320 279.9L53.1 480H0v-39.8l133.4-100.1L266.8 240 0 39.9v-20z"
      />
      <path
        fill="#FFF"
        d="M288.1 0h63.8v208.1H640v63.8H351.9V480h-63.8V271.9H0v-63.8h288.1v-104z"
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
export class SvgEsPvFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
