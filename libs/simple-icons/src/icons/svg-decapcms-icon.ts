import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-decapcms-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Decap CMS</title>
      <path
        d="M18.947 13.177c0 3.263-2 5.649-4.736 5.649h-2.773v-5.65H6.282v10.387h7.93c5.403 0 9.788-4.668 9.788-10.386h-5.052ZM7.894.476 0 1.212l.948 10.352 5.157-.456-.526-5.615 2.737-.245c2.737-.246 4.91 1.93 5.227 5.193l5.052-.458c-.49-5.752-5.297-9.998-10.7-9.507Z"
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
export class SvgDecapcmsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
