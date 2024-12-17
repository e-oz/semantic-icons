import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ethers-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ethers</title>
      <path
        d="M24 17.443c-12.547 1.64-21.503 3.61-21.636-4.474 0 0 .274-3.133 4.116-3.33 0 0 .13-2.782 3.065-3.097 1.578-.171 3.37 1.454 3.565 3.165 0 0 3.883-.719 4.051 3.067.059 1.32-.238 3.563-3.983 3.465 0 0-2.167-.294-2.461-3.644-.61 6.485 8.767 6.108 8.902.218.06-2.547-1.572-5.167-5.246-4.676-2.014-5.066-7.375-4.775-9.37-.076-2.854 0-5.035 2.196-5.003 5.064.11 9.23 12.954 6.447 24 4.318Z"
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
export class SvgEthersIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}