import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-user-round-cog-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-user-round-cog"
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
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="18" cy="18" r="3" />
      <path d="m19.5 14.3-.4.9" />
      <path d="m16.9 20.8-.4.9" />
      <path d="m21.7 19.5-.9-.4" />
      <path d="m15.2 16.9-.9-.4" />
      <path d="m21.7 16.5-.9.4" />
      <path d="m15.2 19.1-.9.4" />
      <path d="m19.5 21.7-.4-.9" />
      <path d="m16.9 15.2-.4-.9" />
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
export class SvgUserRoundCogIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
