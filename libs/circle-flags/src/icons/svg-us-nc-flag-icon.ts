import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-nc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M0 0h232l64 256-64 256H0Z" />
        <path fill="#d80027" d="M232 0h280v256l-140 64-140-64Z" />
        <path fill="#eee" d="M232 256h280v256H232Z" />
        <path fill="#0052b4" d="M0 0h232v512H0z" />
        <path fill="#eee" d="m91 294 65-47H76l65 47-25-76z" />
        <path
          fill="#ffda44"
          d="M24 224h40v64H24zm144 0h40v64h-40zM64 92v16H24v32h40v-16h104v16h40v-32h-40V92H64zm0 328v-16H24v-32h40v16h104v-16h40v32h-40v16z"
        />
      </g>
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
export class SvgUsNcFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
