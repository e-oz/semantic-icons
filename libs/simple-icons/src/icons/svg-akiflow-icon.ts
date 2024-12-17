import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-akiflow-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Akiflow</title>
      <path
        d="M9.425 5.2 5.457 18h5.795l.948-2.99.947 2.99h5.795L14.974 5.2Zm.836.8h4.124l3.472 11.2h-4.124l-1.152-3.632Zm-.543.957 2.063 6.728-1.113 3.515H6.543ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0 .8C18.186.8 23.2 5.813 23.2 12c0 6.186-5.014 11.2-11.2 11.2C5.814 23.2.8 18.186.8 12 .8 5.814 5.814.8 12 .8Z"
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
export class SvgAkiflowIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}