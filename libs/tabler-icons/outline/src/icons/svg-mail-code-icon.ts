import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mail-code-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-mail-code"
      [class]="_svgClass()"
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
        d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"
      />
      <path d="M3 7l9 6l9 -6" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMailCodeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
