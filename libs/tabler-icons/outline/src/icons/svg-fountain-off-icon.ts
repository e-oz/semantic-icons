import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fountain-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-fountain-off"
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
      <path d="M9 16v-5a2 2 0 1 0 -4 0" />
      <path d="M15 16v-1m0 -4a2 2 0 1 1 4 0" />
      <path d="M12 16v-4m0 -4v-2a3 3 0 0 1 6 0" />
      <path d="M7.451 3.43a3 3 0 0 1 4.549 2.57" />
      <path
        d="M20 16h1v1m-.871 3.114a2.99 2.99 0 0 1 -2.129 .886h-12a3 3 0 0 1 -3 -3v-2h13"
      />
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
export class SvgFountainOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
