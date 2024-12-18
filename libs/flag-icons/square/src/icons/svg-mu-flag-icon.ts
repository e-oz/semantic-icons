import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mu"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#009f4d" d="M0 384h512v128H0z" />
        <path fill="#151f6d" d="M0 128h512v128H0z" />
        <path fill="#ee2737" d="M0 0h512v128H0z" />
        <path fill="#ffcd00" d="M0 256h512v128H0z" />
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
export class SvgMuFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
