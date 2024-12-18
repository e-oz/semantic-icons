import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-facepunch-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facepunch</title>
      <path
        d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.629 0 12 0zm0 21.314c-5.133 0-9.297-4.164-9.297-9.297S6.867 2.72 12 2.72s9.297 4.164 9.297 9.297-4.164 9.297-9.297 9.297zM10.028 12l1.48 1.479-1.922 1.92-1.478-1.478-1.428 1.444-1.92-1.92L6.203 12l-1.377-1.377 1.92-1.904 1.36 1.377 1.411-1.41 1.921 1.903L10.03 12zm9.162-1.462-1.411 1.411 1.479 1.479-1.92 1.904-1.48-1.48-1.444 1.446-1.904-1.921 1.445-1.428-1.377-1.377 1.904-1.92 1.376 1.376 1.411-1.41 1.92 1.92z"
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
export class SvgFacepunchIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
