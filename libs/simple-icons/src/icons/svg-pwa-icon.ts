import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pwa-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PWA</title>
      <path
        d="M20.5967 7.482L24 16.518h-2.5098l-.5816-1.6184h-3.2452l.6933-1.7532h2.0019l-.95-2.6597 1.1881-3.0047zm-8.111 0l1.7722 5.8393L16.75 7.482h2.4154l-3.6433 9.036h-2.3833l-1.6395-5.2366-1.7196 5.2366h-2.377l-1.233-2.1161 1.2144-3.7415 1.342 2.6609 1.9029-5.8393h1.8566zm-8.7453 0c1.0635 0 1.8713.3055 2.4234.9166a2.647 2.647 0 01.2806.3684l-1.0753 3.3128-.3847 1.1854c-.352.1006-.7533.1509-1.204.1509H2.2928v3.102H0V7.482zm-.5816 1.7532h-.866v2.4276h.8597c.5577 0 .9406-.1194 1.1485-.3582.1896-.215.2845-.5058.2845-.8724 0-.364-.1079-.6544-.3235-.8714-.2157-.217-.5834-.3256-1.1032-.3256z"
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
export class SvgPwaIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}