import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mediafire-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MediaFire</title>
      <path
        d="M11.13 7.171c-.496.42 2.943-.458 2.6 1.239-.332 1.633-3.62-.343-7.223-.176-1.594.073-3.054.53-3.985 1.668.973-1.108 2.901-.844 2.398-.081-1.172 1.776-3.376.497-4.92 3.975.185-.4.685-1.196 2.843-1.526 1.586-.242 4.214-.016 5.054 1.297.924 1.444-3.759 1.28-1.167 1.573 3.593.406 6.299 3.31 9.813 3.311 4.55 0 7.422-2.324 7.457-6.146.063-6.923-9.101-8.318-12.87-5.134zm6.768 7.554c-1.195-.033-2.404-.512-3.364-.98-2.365-1.155-3.338-1.553-3.338-1.608 0-.067 1.42.484 3.813-.789 1.383-.735 1.432-1.377 2.89-1.505 1.73-.152 2.962 1.13 2.962 2.478 0 1.349-1.222 2.453-2.963 2.404z"
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
export class SvgMediafireIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
