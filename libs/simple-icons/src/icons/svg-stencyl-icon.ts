import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-stencyl-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Stencyl</title>
      <path
        d="M14.36,2.675c-0.959,0.12-1.901,0.366-2.783,0.759L9.389,1.622l0.433,2.835 c-0.758,0.567-1.41,1.25-1.935,2.038L4.982,6l1.951,2.352c-0.31,0.817-0.502,1.677-0.589,2.548L3.374,12l2.952,1.099 c0.083,0.883,0.258,1.763,0.565,2.597l-1.894,2.283l2.819-0.426c0.541,0.811,1.229,1.518,2.025,2.08l-0.47,2.751l2.247-1.806 c0.864,0.333,1.78,0.523,2.705,0.597L15.372,24l1.059-2.846c1.418-0.144,2.841-0.46,4.103-1.144 c-0.229-1.019-0.468-2.035-0.692-3.055c-2.042,1.044-4.605,1.442-6.736,0.403c-1.763-0.896-2.773-2.842-2.911-4.785 c-0.152-2.15,0.502-4.51,2.314-5.801c1.724-1.192,4.024-1.208,5.964-0.586c0.428,0.149,0.836,0.353,1.224,0.603 c0.306-1.052,0.616-2.104,0.93-3.154c-1.32-0.674-2.811-0.98-4.291-1.044L15.372,0L14.36,2.675z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgStencylIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}