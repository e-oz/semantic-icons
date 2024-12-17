import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-htcvive-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>HTC Vive</title>
      <path
        d="M16.225 19.046a14.3 14.3 0 0 1-4.222.642 14.3 14.3 0 0 1-4.223-.642c-1.56-.505-2.525-2.066-2.203-3.672.596-2.938 2.111-5.508 4.268-7.482a3.19 3.19 0 0 1 4.36 0c2.112 1.928 3.627 4.544 4.27 7.482.275 1.606-.643 3.213-2.25 3.672m7.574-1.47L14.894 2.2a1.49 1.49 0 0 0-1.33-.78h-3.076a1.49 1.49 0 0 0-1.331.78L.207 17.577c-.276.505-.276 1.101 0 1.56l1.56 2.663c.276.504.78.78 1.331.78h17.763c.551 0 1.056-.276 1.331-.78l1.561-2.663c.321-.505.321-1.101.046-1.56"
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
export class SvgHtcviveIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}