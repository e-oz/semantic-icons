import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-or-flag-icon',
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
        <path fill="#0052b4" d="M0 0h512v512H0Z" />
        <path
          fill="#ffda44"
          d="M167 230v37c0 68 89 89 89 89s89-21 89-89v-37zm9 170h160v48H176ZM112 64h288v48H112Z"
        />
        <path
          fill="#ffda44"
          d="M256 146a28 28 0 0 0-28 28h-84a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h56a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"
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
export class SvgUsOrFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
