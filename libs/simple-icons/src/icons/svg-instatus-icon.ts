import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-instatus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instatus</title>
      <path
        d="m16.994 21.028c3.5843-1.91 5.471-5.759 5.0561-9.5637-1.3206 1.0851-2.6237 2.3203-3.8709 3.6906-2.0656 2.2694-3.7476 4.6559-4.9953 6.9817 1.2946-0.09715 2.5907-0.45868 3.8101-1.1086zm-13.394-2.5626c-1.3408 1.8191-2.3771 4.4991-1.3032 5.3066 1.5151 1.1394 8.404-2.0133 13.908-8.8051 5.504-6.7918 7.3265-13.796 4.879-14.873-1.1283-0.49644-3.486 1.083-4.8394 2.3943l0.58412 0.31415c1.332-0.85276 3.5528-1.7338 1.4995 1.9758-0.0097 0.01768-0.01962 0.03541-0.02949 0.05317-2.9067-2.2075-6.9471-2.662-10.379-0.8328-4.7026 2.506-6.4831 8.3499-3.9771 13.052 0.58979 1.1067 1.3644 2.0516 2.2655 2.8168-3.5586 2.7493-2.6905 0.35965-2.1925-0.8162z"
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
export class SvgInstatusIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
