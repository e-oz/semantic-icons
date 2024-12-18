import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-iq-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
        />
        <path fill="#a2001d" d="M0 0h512v167H0z" />
        <path fill="#333" d="M0 345h512v167H0z" />
        <path
          fill="#496e2d"
          d="M194.8 239.3h-49.4a22.3 22.3 0 0 1 21.6-16.7v-33.4c-30.7 0-55.7 25-55.7 55.7v27.8h83.5a5.6 5.6 0 0 1 5.5 5.6v11H89v33.5h144.7v-44.5a39 39 0 0 0-39-39zm83.5 50v-100h-33.4v133.5h55.6v-33.4zm111.3 0v-100h-33.4v100H345V256h-33.3v66.8h100.1v-33.4z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIqFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
