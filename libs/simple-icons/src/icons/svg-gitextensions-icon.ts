import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gitextensions-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Git Extensions</title>
      <path
        d="M17.504 0l-4.631 4.875 2.533.004c0 2.604-1.327 4.58-3.32 6.16l-6.393 5.065c-2.559 2.027-3.859 4.392-3.859 7.886.01-.009 4.283.026 4.283 0 0-1.91.73-3.581 2.223-4.793l6.723-5.455c2.57-2.085 4.514-4.86 4.517-8.867h2.586zM1.834 4.873c0 3.78 1.833 6.398 4.148 8.518l1.11.88 3.222-2.554-1.078-.858C7.43 9.22 6.117 7.383 6.117 4.873c-1.423-.004-2.856 0-4.283 0zm12.592 10.115l-3.178 2.58.992.787c1.82 1.593 3.166 3.33 3.166 5.635h4.166c-.009-3.633-1.788-6.1-4.066-8.144-.356-.28-.722-.572-1.08-.858Z"
      />
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
export class SvgGitextensionsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
