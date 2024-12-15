import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wails-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wails</title>
      <path
        d="m19.67 5.252-7.856 5.039-.369-.459-8.69-.283 1.891 1.904 5.221.106 1.63 1.656-5.878.662 1.77 1.783 5.34-1.185.003-.006.993 1.168-3.079 3.11 7.399.001-1.582-5.002 2.209 3.14H24l-5.385-2.415h4.121l-5.384-2.418h4.117L16.297 9.73l1.088-1.443 4.09-1.076-3.467.248 1.662-2.207zm-3.635 2.322-6.039.43 1.455 1.826 1.813-.476 2.771-1.78zm-.252 2.84-.86 1.145-.001-.002.154-.205.707-.938zM0 12.2l5.615 1.033-1.017-1.027L0 12.2z"
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
export class SvgWailsIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
