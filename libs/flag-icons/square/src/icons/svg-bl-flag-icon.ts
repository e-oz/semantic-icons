import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bl-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bl"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#00267f" d="M0 0h170.7v512H0z" />
        <path fill="#f31830" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBlFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
