import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-circle-number-0-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-circle-number-0"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 5a3 3 0 0 0 -2.995 2.824l-.005 .176v4l.005 .176a3 3 0 0 0 5.99 0l.005 -.176v-4l-.005 -.176a3 3 0 0 0 -2.995 -2.824zm0 2a1 1 0 0 1 .993 .883l.007 .117v4l-.007 .117a1 1 0 0 1 -1.986 0l-.007 -.117v-4l.007 -.117a1 1 0 0 1 .993 -.883z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCircleNumber0Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
