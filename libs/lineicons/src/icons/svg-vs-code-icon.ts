import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vs-code-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.95 4.90294C21.9344 4.84668 21.9156 4.79042 21.8906 4.73728C21.8687 4.68101 21.8406 4.62788 21.8094 4.57786C21.7781 4.52785 21.7437 4.48096 21.7063 4.4372C21.6687 4.39344 21.625 4.34968 21.5813 4.31217C21.5375 4.27154 21.4937 4.23715 21.4437 4.20277C21.3937 4.16839 21.3437 4.14025 21.2906 4.11525L17.1719 2.12101C16.9375 2.01161 16.675 1.9741 16.4219 2.01786C16.2031 2.05537 16 2.15227 15.8313 2.29293C15.8031 2.31481 15.775 2.33981 15.75 2.36482L9.10626 9.751L5.22813 6.55335L4.89063 6.27203C4.77187 6.172 4.63125 6.10323 4.47813 6.08135C4.45625 6.07823 4.43437 6.0751 4.4125 6.0751C4.39375 6.07197 4.37187 6.07197 4.35313 6.07197C4.32187 6.07197 4.29375 6.07197 4.2625 6.0751C4.23437 6.0751 4.20937 6.08135 4.18437 6.08761C4.13125 6.097 4.07813 6.11261 4.02813 6.13448L2.5125 6.76277C2.3625 6.82842 2.23125 6.93468 2.14063 7.0691C2.05 7.20664 2 7.36916 2 7.53171V16.4683C2 16.6308 2.05 16.7934 2.14063 16.9309C2.23125 17.0653 2.3625 17.1716 2.5125 17.2372L4.02813 17.8749C4.16875 17.9343 4.325 17.953 4.47813 17.9312C4.63125 17.9061 4.77187 17.8405 4.89063 17.7405L5.22813 17.4466L9.10626 14.249L15.75 21.6352C15.7719 21.6571 15.7969 21.6789 15.8219 21.7008C15.825 21.7039 15.8281 21.7071 15.8313 21.7071C16 21.8477 16.2031 21.9446 16.4219 21.9821C16.675 22.0259 16.9375 21.9884 17.1719 21.879L21.2906 19.8847C21.3437 19.8597 21.3937 19.8316 21.4437 19.7972C21.5406 19.7316 21.6313 19.6503 21.7063 19.5659C21.7437 19.519 21.7781 19.4722 21.8094 19.4221C21.9344 19.2221 22 18.9908 22 18.7532V5.24677C22 5.13113 21.9844 5.01548 21.95 4.90294ZM4.5 14.8741V9.12587L7.08439 12.0015L4.5 14.8741ZM11.8344 12.0015L17 7.74113V16.2589L11.8344 12.0015Z"
        fill="#323544"
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
export class SvgVsCodeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
