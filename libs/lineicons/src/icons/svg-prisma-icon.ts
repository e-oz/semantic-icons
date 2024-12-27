import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-prisma-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00341 15.7279C3.79994 15.4069 3.79686 14.9982 3.99548 14.6741L11.4738 2.47545C11.8898 1.79696 12.8941 1.85628 13.2273 2.57901L20.0591 17.3988C20.3126 17.9487 20.0208 18.5957 19.4408 18.7697L8.81343 21.9579C8.38584 22.0862 7.92513 21.9143 7.68611 21.5372L4.00341 15.7279ZM12.3367 6.04224L9.70642 19.1386C9.65096 19.4147 9.9095 19.6506 10.1794 19.57L17.5221 17.3781C17.7364 17.3142 17.8468 17.0774 17.7581 16.8721L13.0456 5.96762C12.9004 5.63163 12.4087 5.68338 12.3367 6.04224Z"
        fill="#323544"
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
export class SvgPrismaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
