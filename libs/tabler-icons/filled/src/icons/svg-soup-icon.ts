import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-soup-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-soup"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z"
      />
      <path
        d="M11.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
      />
      <path
        d="M15.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
      />
      <path
        d="M7.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
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
export class SvgSoupIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
