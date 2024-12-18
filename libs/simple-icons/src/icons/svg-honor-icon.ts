import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-honor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Honor</title>
      <path
        d="M2.601 9.753v1.823H.807V9.753H0v4.498h.807v-1.874h1.794v1.874h.807V9.753h-.807Zm18.671.801h.898c.369 0 .667.297.667.662a.665.665 0 0 1-.667.663h-.898v-1.325Zm-.806-.801v4.498h.806v-2.002l1.68 2.002H24l-1.376-1.64a1.462 1.462 0 0 0-.444-2.858h-1.716.002Zm-7.63-.014v2.807l-1.959-2.807h-.644v4.498h.807v-2.82l1.968 2.82h.633V9.739h-.805Zm-7.532 2.26c0-.832.68-1.506 1.517-1.506A1.51 1.51 0 0 1 8.337 12c0 .832-.679 1.506-1.516 1.506-.403 0-.789-.159-1.073-.441A1.504 1.504 0 0 1 5.304 12v-.001ZM4.497 12c0 .933.566 1.774 1.434 2.132.869.357 1.868.16 2.533-.5.664-.66.863-1.653.503-2.515a2.324 2.324 0 0 0-2.146-1.425 2.316 2.316 0 0 0-2.323 2.307L4.497 12Zm11.04-.001a1.513 1.513 0 0 1 1.518-1.506c.838 0 1.516.675 1.516 1.507a1.513 1.513 0 0 1-1.518 1.506c-.402 0-.788-.159-1.072-.441a1.5 1.5 0 0 1-.444-1.066ZM14.73 12c0 .933.566 1.774 1.434 2.132.868.357 1.868.16 2.532-.5.665-.66.864-1.653.504-2.515a2.325 2.325 0 0 0-2.147-1.425 2.316 2.316 0 0 0-2.323 2.307V12Z"
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
export class SvgHonorIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
