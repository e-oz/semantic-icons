import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-4chan-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-4chan"
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
        d="M14 11s6.054 -1.05 6 -4.5c-.038 -2.324 -2.485 -3.19 -3.016 -1.5c0 0 -.502 -2 -2.01 -2c-1.508 0 -2.984 3 -.974 8z"
      />
      <path
        d="M13.98 11s6.075 -1.05 6.02 -4.5c-.038 -2.324 -2.493 -3.19 -3.025 -1.5c0 0 -.505 -2 -2.017 -2c-1.513 0 -3 3 -.977 8z"
      />
      <path
        d="M13 13.98l.062 .309l.081 .35l.075 .29l.092 .328l.11 .358l.061 .188l.139 .392c.64 1.73 1.841 3.837 3.88 3.805c2.324 -.038 3.19 -2.493 1.5 -3.025l.148 -.045l.165 -.058a4.13 4.13 0 0 0 .098 -.039l.222 -.098c.586 -.28 1.367 -.832 1.367 -1.777c0 -1.513 -3 -3 -8 -.977z"
      />
      <path
        d="M10.02 13l-.309 .062l-.35 .081l-.29 .075l-.328 .092l-.358 .11l-.188 .061l-.392 .139c-1.73 .64 -3.837 1.84 -3.805 3.88c.038 2.324 2.493 3.19 3.025 1.5l.045 .148l.058 .165l.039 .098l.098 .222c.28 .586 .832 1.367 1.777 1.367c1.513 0 3 -3 .977 -8z"
      />
      <path
        d="M11 10.02l-.062 -.309l-.081 -.35l-.075 -.29l-.092 -.328l-.11 -.358l-.128 -.382l-.148 -.399c-.658 -1.687 -1.844 -3.634 -3.804 -3.604c-2.324 .038 -3.19 2.493 -1.5 3.025l-.148 .045l-.164 .058a4.13 4.13 0 0 0 -.1 .039l-.22 .098c-.588 .28 -1.368 .832 -1.368 1.777c0 1.513 3 3 8 .977z"
      />
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
export class SvgBrand4chanIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
