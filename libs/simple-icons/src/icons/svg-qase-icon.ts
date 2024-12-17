import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-qase-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Qase</title>
      <path
        d="M23.85 18.994s-.802.46-1.795.28c-.19-.03-.37-.1-.551-.19a11.768 11.768 0 0 0 2.367-7.088C23.87 5.428 18.525.1 11.935.1S0 5.428 0 11.996c0 6.568 5.346 11.897 11.935 11.897 2.087 0 4.042-.54 5.747-1.47.562.59 1.344 1.21 2.297 1.4 1.796.34 3.1-.48 3.631-1.58.451-.96.482-2.1.24-3.249m-11.925-.13c-3.79 0-6.88-3.079-6.88-6.858 0-3.779 3.09-6.858 6.88-6.858 3.792 0 6.89 3.07 6.89 6.848 0 1.16-.29 2.26-.812 3.22-.15-.19-.28-.37-.37-.49-.352-.48-.713-.97-1.064-1.47-.461-.65-1.524-1.95-2.989-2.23-1.795-.34-3.099.48-3.63 1.58-.452.96-.482 2.1-.251 3.239 0 0 .802-.46 1.795-.28.722.13 1.404.68 2.277 1.76.07.09.371.49.772 1.01-.802.34-1.685.53-2.618.53"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgQaseIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}