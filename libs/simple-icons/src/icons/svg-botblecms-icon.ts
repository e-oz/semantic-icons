import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-botblecms-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Botble CMS</title>
      <path
        d="M12 9.371c-1.613 0-3.09.54-4.3 1.426V0S5.624.434 4.686 1.313l.036 15.742C4.918 20.918 8.086 24 12 24c.547 0 1.074-.07 1.59-.184v-3.105a4.318 4.318 0 0 1-1.59.312 4.336 4.336 0 0 1 0-8.671 4.321 4.321 0 0 1 4.313 4.109l.09 6.031c1.757-1.332 2.91-3.426 2.91-5.805A7.315 7.315 0 0 0 12 9.372Zm1.523 7.512c0 .84-.683 1.523-1.523 1.523a1.525 1.525 0 0 1 0-3.05c.84 0 1.523.683 1.523 1.527Z"
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
export class SvgBotblecmsIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}