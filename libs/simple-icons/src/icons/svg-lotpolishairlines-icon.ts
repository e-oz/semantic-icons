import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lotpolishairlines-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LOT Polish Airlines</title>
      <path
        d="M12 0C5.3754 0 0 5.3754 0 12s5.3754 12 12 12 12-5.3754 12-12S18.6246 0 12 0zM.7445 12C.7445 5.7792 5.7792.7445 12 .7445c1.2871 0 2.511.2271 3.6593.6183L9.388 13.9306 1.2745 15.407A11.256 11.256 0 0 1 .7445 12zM12 23.2555c-4.9968 0-9.2366-3.2682-10.7003-7.7728h7.836l7.0788 6.9526c-1.2997.5174-2.7256.8202-4.2145.8202zm4.2271-.8328a2.246 2.246 0 0 0 .6309-1.5647c0-.7066-.328-1.3501-.8454-1.7539l-4.7319-3.6214h11.4195c-1.0346 3.1545-3.4194 5.7034-6.4731 6.94zm5.1609-8.0883h-2.7003l.2019.2902h.9211l.4669.5678h-5.0851c0-1.0094-.8202-1.8422-1.8423-1.8422-.101 0-.2019.0126-.2902.0252l-1.8297.2776 5.4006-8.9842c.2146-.3533.3281-.7571.3281-1.1861 0-.9085-.5047-1.7161-1.2492-2.0946C20.1009 2.9148 23.2555 7.0788 23.2555 12c0 1.1104-.164 2.1829-.4669 3.1924a1.7505 1.7505 0 0 1-1.4006-.858z"
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
export class SvgLotpolishairlinesIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
