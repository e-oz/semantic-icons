import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nbc-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>NBC</title>
      <path
        d="M14.8281 4.6055c-1.4058.0067-2.5666 1.2083-2.416 2.7851h1.08s.5026-.0062.6485.338c0 0-1.594.6128-1.4668 1.6093l.9922 7.3281 3.4727-8.4316c.5296-1.279-.0616-3.1668-1.6973-3.5567a2.5497 2.5497 0 0 0-.6133-.0722zm-5.6426.002a2.5551 2.5551 0 0 0-.627.0722c-1.6356.3878-2.2268 2.2757-1.6972 3.5566l3.4727 8.4317 1.2422-9.1582c.2194-1.629-.9564-2.8876-2.3907-2.9024zM4.293 8.3104c-.5719.0213-1.1298.2465-1.5586.6583-.803.7737-1.4275 2.8792.371 4.1562l6.9532 4.9258-3.334-8.0762c-.4878-1.1698-1.4785-1.6994-2.4316-1.664zm15.2715 0c-.9075.0203-1.8246.5528-2.2891 1.6641l-3.332 8.0762 6.953-4.9258c1.7987-1.275 1.172-3.3825.3692-4.1563-.4638-.446-1.0802-.672-1.7011-.6582zm1.9394 5.7872c-.4523.0075-.9351.1573-1.42.502l-6.7694 4.7948h8.0253c1.8734 0 3.0648-1.5828 2.5332-3.4843-.2595-.9264-1.2131-1.8318-2.369-1.8125zm-19.0078.002C1.3405 14.081.3879 14.9851.127 15.9101c-.5316 1.9015.6597 3.4843 2.5332 3.4843h8.0253L3.916 14.5996c-.4848-.344-.9677-.4927-1.42-.5z"
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
export class SvgNbcIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
