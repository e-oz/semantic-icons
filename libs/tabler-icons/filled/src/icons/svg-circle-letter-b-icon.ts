import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-circle-letter-b-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-circle-letter-b"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3 -3l-.005 -.176a3 3 0 0 0 -.654 -1.7l-.106 -.124l.106 -.124a3 3 0 0 0 -2.341 -4.876m0 6a1 1 0 0 1 0 2h-1v-2zm0 -4a1 1 0 0 1 0 2h-1v-2z"
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
export class SvgCircleLetterBIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
