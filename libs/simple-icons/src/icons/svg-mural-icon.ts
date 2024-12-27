import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mural-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mural</title>
      <path
        d="M20.53 8.118H24v13.258h-3.47V8.118zM5.497 6.094A2.03 2.03 0 0 1 7.524 8.12h3.47a5.503 5.503 0 0 0-5.497-5.497A5.503 5.503 0 0 0 0 8.121h3.47a2.03 2.03 0 0 1 2.027-2.027zm2.027 15.285 3.47-.002V8.12h-3.47v13.258zm8.952-.005v-3.468h-3.47l-2.013.001v3.47l5.483-.003zm0-13.256a2.03 2.03 0 0 1 2.027-2.027V2.62a5.503 5.503 0 0 0-5.497 5.497v9.788h3.47V8.118zm4.055 0H24a5.503 5.503 0 0 0-5.497-5.497v3.47a2.03 2.03 0 0 1 2.027 2.027zM0 21.378h3.47V8.122H0V21.38z"
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
export class SvgMuralIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
