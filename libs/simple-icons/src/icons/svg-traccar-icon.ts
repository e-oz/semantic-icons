import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-traccar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Traccar</title>
      <path
        d="M6.0011 1.6096C.2624 4.9226-1.7038 12.2603 1.6096 17.9989c3.313 5.7387 10.6507 7.7049 16.3893 4.3916 5.7387-3.313 7.7049-10.6507 4.3916-16.3894C19.0775.2624 11.7398-1.704 6.0011 1.6096m.7057 1.2224c5.0637-2.9233 11.538-1.1884 14.4616 3.8748 2.9232 5.0636 1.1884 11.5379-3.8748 14.4616-5.0636 2.9232-11.538 1.1884-14.4616-3.8748C-.0912 12.2299 1.6436 5.7556 6.7068 2.832m3.9141 14.3151a3.7678 3.7678 0 1 1-3.768-6.5262l1.884 3.2631Zm5.7255-11.3953-1.1763 1.495c.6649.5112 1.2792 1.1559 1.7246 1.9274s.6967 1.6258.8069 2.4573l1.8828-.2712c-.1405-1.074-.4828-2.1316-1.0581-3.128-.5753-.9965-1.3201-1.8218-2.1799-2.4805M14.074 8.7632l-1.1763 1.4949c.2745.216.5484.479.7338.8.1853.321.2761.6897.3259 1.0355l1.8828-.2713c-.0802-.5881-.2619-1.1608-.5769-1.7064-.3154-.5455-.7201-.9896-1.1892-1.353Zm-3.8317 3.708a.942.942 0 1 0 1.884 0 .942.942 0 1 0-1.884 0"
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
export class SvgTraccarIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}