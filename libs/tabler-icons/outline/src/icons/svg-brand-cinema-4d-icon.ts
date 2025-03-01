import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-cinema-4d-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-cinema-4d"
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
      <path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M17.7 12.137a5.738 5.738 0 1 1 -5.737 -5.737" />
      <path
        d="M17.7 12.338v-1.175c0 -.47 .171 -.92 .476 -1.253a1.56 1.56 0 0 1 1.149 -.52c.827 0 1.523 .676 1.62 1.573c.037 .344 .055 .69 .055 1.037"
      />
      <path
        d="M11.662 6.4h1.175c.47 0 .92 -.176 1.253 -.49c.333 -.314 .52 -.74 .52 -1.184c0 -.852 -.676 -1.57 -1.573 -1.67a9.496 9.496 0 0 0 -1.037 -.056"
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
export class SvgBrandCinema4dIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
