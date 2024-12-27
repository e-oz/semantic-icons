import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lubuntu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lubuntu</title>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m1.287 4.723q.316-.031.63.004a3.17 3.17 0 0 1 2.41 1.642l5.665.781h-6.458a2.58 2.58 0 0 0-1.66-.955 2.57 2.57 0 0 0-1.371.192c-.43.19-.8.495-1.068.88-.268.387-.424.84-.451 1.31-.026.468.078.935.3 1.349a3.13 3.13 0 0 1-.795-1.68 3.13 3.13 0 0 1 .305-1.832 3.14 3.14 0 0 1 1.299-1.332 3.1 3.1 0 0 1 1.195-.36m-9.88 1.09 8.673 6.232-7.154-4.012a3.6 3.6 0 0 0-.072 2.022 3.57 3.57 0 0 0 1.998 2.34l4.748 1.334-6.002-.983c.061.58.275 1.133.619 1.604a3.33 3.33 0 0 0 2.652 1.33 3.95 3.95 0 0 1-3.062-.451 3.9 3.9 0 0 1-1.432-1.563 3.9 3.9 0 0 1-.398-2.08l1.32.371a4.7 4.7 0 0 1-1.246-.986 4.7 4.7 0 0 1-1.111-2.48 4.67 4.67 0 0 1 .466-2.678m11.667 3.132q-.01.138-.008.278c.007 1.143.535 2.21 1.057 3.226.523 1.017 1.064 2.076 1.094 3.22.024.95-.32 1.895-.899 2.651-.578.756-1.377 1.328-2.255 1.696a6.5 6.5 0 0 1-3.91.338l-1 2.373v-3.327a6.23 6.23 0 0 0 3.665-.31c.7-.285 1.352-.707 1.862-1.264s.875-1.255.986-2.002c.15-1-.151-2.007-.447-2.974s-.595-1.977-.436-2.975a3.3 3.3 0 0 1 .291-.93"
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
export class SvgLubuntuIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
