import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-polygon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Polygon</title>
      <path
        d="m17.82 16.342 5.692-3.287A.98.98 0 0 0 24 12.21V5.635a.98.98 0 0 0-.488-.846l-5.693-3.286a.98.98 0 0 0-.977 0L11.15 4.789a.98.98 0 0 0-.489.846v11.747L6.67 19.686l-3.992-2.304v-4.61l3.992-2.304 2.633 1.52V8.896L7.158 7.658a.98.98 0 0 0-.977 0L.488 10.945a.98.98 0 0 0-.488.846v6.573a.98.98 0 0 0 .488.847l5.693 3.286a.981.981 0 0 0 .977 0l5.692-3.286a.98.98 0 0 0 .489-.846V6.618l.072-.041 3.92-2.263 3.99 2.305v4.609l-3.99 2.304-2.63-1.517v3.092l2.14 1.236a.981.981 0 0 0 .978 0v-.001Z"
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
export class SvgPolygonIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}