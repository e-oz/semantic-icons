import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-topbuzz-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-topbuzz"
      [class]="svgClass()"
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
      <path
        d="M4.417 8.655a.524 .524 0 0 1 -.405 -.622l.986 -4.617a.524 .524 0 0 1 .626 -.404l14.958 3.162c.285 .06 .467 .339 .406 .622l-.987 4.618a.524 .524 0 0 1 -.625 .404l-4.345 -.92c-.198 -.04 -.315 .024 -.353 .197l-2.028 9.49a.527 .527 0 0 1 -.625 .404l-4.642 -.982a.527 .527 0 0 1 -.406 -.622l2.028 -9.493c.037 -.17 -.031 -.274 -.204 -.31l-4.384 -.927z"
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
export class SvgBrandTopbuzzIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
