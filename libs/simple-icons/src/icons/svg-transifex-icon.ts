import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-transifex-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Transifex</title>
      <path
        d="m20.073 12.851-2.758-2.757 3.722-3.659a.33.33 0 0 1 .467.003l2.27 2.309a.33.33 0 0 1-.004.468zm0 0h-.001zm-9.04-6.433 12.87 12.869c.129.13.129.34 0 .469l-2.289 2.289a.331.331 0 0 1-.468 0l-5.168-5.168-2.863 2.815c-.604.593-1.244 1.159-1.975 1.591a7.037 7.037 0 0 1-2.248.83c-2.191.42-4.557-.047-6.303-1.468A7.065 7.065 0 0 1 0 15.207V2.069a.33.33 0 0 1 .331-.33h3.237a.33.33 0 0 1 .331.33v4.125H6.65c.178 0 .323.145.323.323v3.617a.323.323 0 0 1-.323.323H3.899v4.75c0 1.272.808 2.429 1.988 2.893.753.295 1.617.321 2.397.131.852-.206 1.484-.717 2.097-1.319l2.839-2.792-4.945-4.945a.331.331 0 0 1 0-.468l2.289-2.289a.333.333 0 0 1 .469 0"
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
export class SvgTransifexIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
