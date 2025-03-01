import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-square-letter-m-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-square-letter-m"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-3 6c0 -1.014 -1.336 -1.384 -1.857 -.514l-2.143 3.57l-2.143 -3.57c-.521 -.87 -1.857 -.5 -1.857 .514v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-4.39l1.143 1.904l.074 .108a1 1 0 0 0 1.64 -.108l1.143 -1.904v4.39a1 1 0 0 0 2 0z"
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
export class SvgSquareLetterMIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
