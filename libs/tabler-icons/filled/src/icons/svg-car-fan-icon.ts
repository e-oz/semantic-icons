import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-car-fan-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-car-fan"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12.363 2.068l4.912 1.914a2.7 2.7 0 0 1 .68 4.646l-3.045 2.371l6.09 .001a1 1 0 0 1 .932 1.363l-1.914 4.912a2.7 2.7 0 0 1 -4.646 .68l-2.372 -3.047v6.092a1 1 0 0 1 -1.363 .932l-4.912 -1.914a2.7 2.7 0 0 1 -.68 -4.646l3.045 -2.372h-6.09a1 1 0 0 1 -.932 -1.363l1.914 -4.912a2.7 2.7 0 0 1 4.646 -.68l2.371 3.044l.001 -6.089a1 1 0 0 1 1.363 -.932"
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
export class SvgCarFanIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
