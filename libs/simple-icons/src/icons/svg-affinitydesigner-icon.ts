import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-affinitydesigner-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Affinity Designer</title>
      <path
        d="M24 2.344v19.312A2.345 2.345 0 0 1 21.656 24H2.344A2.345 2.345 0 0 1 0 21.656V2.344A2.345 2.345 0 0 1 2.344 0h19.312A2.345 2.345 0 0 1 24 2.344ZM1.758 21.305c0 .517.42.937.938.937h8.226l-4.299-7.445 7.528-13.039h-3.482L1.758 17.192v4.113Zm11.418-6.866-2.712-4.698-1.761 3.051a1.098 1.098 0 0 0 .952 1.647h3.521Zm9.066 6.873v-6.075H7.799l4.044 7.005h9.462a.937.937 0 0 0 .937-.93Zm-.937-19.554h-6.232l-4.148 7.185 3.173 5.496h8.144V2.688a.937.937 0 0 0-.937-.93Z"
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
export class SvgAffinitydesignerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
