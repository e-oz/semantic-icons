import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sofa-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sofa"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z"
      />
      <path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" />
      <path d="M12 5v9" />
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
export class SvgSofaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
