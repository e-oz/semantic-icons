import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-test-pipe-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-test-pipe-off"
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
        d="M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4"
      />
      <path d="M7 13h6" />
      <path d="M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608" />
      <path d="M15 3l6 6" />
      <path d="M3 3l18 18" />
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
export class SvgTestPipeOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
