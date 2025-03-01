import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mood-cog-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-mood-cog"
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
      <path d="M21 12a9 9 0 1 0 -8.983 9" />
      <path d="M18.001 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18.001 14.5v1.5" />
      <path d="M18.001 20v1.5" />
      <path d="M21.032 16.25l-1.299 .75" />
      <path d="M16.27 19l-1.3 .75" />
      <path d="M14.97 16.25l1.3 .75" />
      <path d="M19.733 19l1.3 .75" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
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
export class SvgMoodCogIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
