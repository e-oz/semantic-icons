import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-virtualbox-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>VirtualBox</title>
      <path
        d="M0 1.758 5.182 20c.129.455.25.691.421.945.063.092.13.179.202.264.173.204.37.378.59.525.243.163.49.286.763.371.324.1.61.137.99.137h4.327l1.918-6.615h6.798v3.699a.11.11 0 0 1-.109.11h-4.88l-.813 2.806h5.654a2.92 2.92 0 0 0 1.95-.725A2.903 2.903 0 0 0 24 19.285v-6.47H12.28l-1.919 6.614H7.937L3.715 4.564h2.922l1.546 5.444H11.1l-2.343-8.25zm15.496 0-2.4 8.25H24v-5.29a2.962 2.962 0 0 0-1.825-2.741 3.044 3.044 0 0 0-1.129-.22zm2.11 2.806h3.476a.11.11 0 0 1 .11.112V7.2h-4.354z"
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
export class SvgVirtualboxIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
