import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ariakit-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ariakit</title>
      <path
        d="M18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4Zm-6 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Zm0-6a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Zm6-12H6C2.69 0 0 2.69 0 6v12c0 3.31 2.69 6 6 6h12c3.31 0 6-2.69 6-6V6c0-3.31-2.69-6-6-6Zm5 18c0 2.76-2.24 5-5 5H6c-2.76 0-5-2.24-5-5V6c0-2.76 2.24-5 5-5h12c2.76 0 5 2.24 5 5v12ZM18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4Zm-6 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Zm0-6a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Zm2.5-2.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4Zm-6 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Zm0-6a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Zm2.5-2.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5Z"
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
export class SvgAriakitIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
