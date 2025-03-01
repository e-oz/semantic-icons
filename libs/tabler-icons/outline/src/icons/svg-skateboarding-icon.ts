import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-skateboarding-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-skateboarding"
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
      <path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M5.5 15h3.5l.75 -1.5" />
      <path d="M14 19v-5l-2.5 -3l2.5 -4" />
      <path d="M8 8l3 -1h4l1 3h3" />
      <path
        d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
        fill="currentColor"
      />
      <path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
      <path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
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
export class SvgSkateboardingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
