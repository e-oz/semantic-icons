import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-bandlab-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bandlab"
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
        d="M6.885 7l-2.536 4.907c-2.021 3.845 -2.499 8.775 3.821 9.093h6.808c4.86 -.207 7.989 -2.975 4.607 -9.093l-2.988 -4.907"
      />
      <path
        d="M15.078 4h-5.136l3.678 8.768c.547 1.14 .847 1.822 .162 2.676c-.053 .093 -1.332 1.907 -3.053 1.495c-.825 -.187 -1.384 -.926 -1.32 -1.74c.04 -.91 .62 -1.717 1.488 -2.074a4.463 4.463 0 0 1 2.723 -.358"
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
export class SvgBrandBandlabIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
