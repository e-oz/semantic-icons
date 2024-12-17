import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-karlsruherverkehrsverbund-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Karlsruher Verkehrsverbund</title>
      <path
        d="M12.91 6.089c-2.491 2.4-6.153 4.238-11.265 4.3l-.397 1.745h22.316L24 10.388H9.309c2.984-1.01 4.688-2.676 6.56-4.3zm10.45 6.721c-5.723.013-8.441 2.712-10.095 5.101h2.49c2.6-3.296 5.827-3.428 7.196-3.442zm-22.307.475L0 17.887h1.236l.488-2.173 1.097 2.173H4.27l-1.34-2.368 2.23-2.234H3.575l-1.723 1.869.436-1.87zm4.237 0l.509 4.602h1.517l2.63-4.602h-1.32l-1.852 3.463-.265-3.463zm4.89 0l.503 4.602h1.54l2.62-4.602h-1.32l-1.852 3.463-.268-3.463Z"
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
export class SvgKarlsruherverkehrsverbundIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}