import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-educative-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Educative</title>
      <path
        d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 3.998 4h16A4 4 0 0 0 24 20V4a4 4 0 0 0-4-4ZM5.397 19.576l-1.828-1.673a.316.316 0 0 1-.018-.445l4.004-4.376a.314.314 0 0 0 .009-.415L3.82 8.217a.315.315 0 0 1 .038-.443l1.893-1.595a.315.315 0 0 1 .443.038l5.495 6.537a.316.316 0 0 1-.008.417L5.84 19.559a.315.315 0 0 1-.442.018zm15.147-.102c0 .174-.141.315-.315.315H11.74a.315.315 0 0 1-.314-.315v-2.332c0-.174.14-.315.314-.315h8.488c.174 0 .315.14.315.315z"
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
export class SvgEducativeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
