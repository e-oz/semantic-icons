import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-usb-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-usb-fill"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1.75 1.5h11.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 7.75v-1a.25.25 0 0 1 .25-.25"
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
export class SvgUsbFillIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
