import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-play-card-7-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-play-card-7"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.612l-1.56 4.684a1 1 0 1 0 1.897 .632l2 -6a1 1 0 0 0 -.949 -1.316m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2"
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
export class SvgPlayCard7Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
