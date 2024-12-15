import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bukalapak-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bukalapak</title>
      <path
        d="M10.976 23.845a3.158 3.158 0 1 1-1.95-6.008 3.158 3.158 0 0 1 1.95 6.008Zm6.554-2.883c4.047-1.315 7.315-5.981 5.689-10.984-1.626-5.003-7.012-6.856-11.058-5.541a1.89 1.89 0 0 0-1.252 2.249l.414 1.682a1.892 1.892 0 0 0 2.42 1.348l.162-.053c1.861-.606 3.592.504 4.071 2.019.505 1.507-.244 3.422-2.106 4.027l-.162.054a1.891 1.891 0 0 0-1.166 2.512l.653 1.604a1.89 1.89 0 0 0 2.335 1.083Zm-6.962-7.982L7.841 1.752A2.3 2.3 0 0 0 4.897.113l-2.952.959A2.3 2.3 0 0 0 .526 4.128L4.92 14.815a2.3 2.3 0 0 0 2.841 1.318l1.285-.417a2.298 2.298 0 0 0 1.522-2.736Z"
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
export class SvgBukalapakIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
