import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-enter-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5781 2.5C10.3355 2.5 9.32812 3.50736 9.32812 4.75V6.6285C9.44877 6.70925 9.56333 6.80292 9.66985 6.90952L10.8281 8.06853V4.75C10.8281 4.33579 11.1639 4 11.5781 4H17.5781C17.9923 4 18.3281 4.33579 18.3281 4.75V20.25C18.3281 20.6642 17.9923 21 17.5781 21H11.5781C11.1639 21 10.8281 20.6642 10.8281 20.25V16.9314L9.6699 18.0904C9.56336 18.197 9.44879 18.2907 9.32812 18.3715V20.25C9.32812 21.4926 10.3355 22.5 11.5781 22.5H17.5781C18.8208 22.5 19.8281 21.4926 19.8281 20.25V4.75C19.8281 3.50736 18.8208 2.5 17.5781 2.5H11.5781Z"
        fill="#323544"
      />
      <path
        d="M7.54784 15.9699L10.2658 13.25L4.32813 13.25C3.91391 13.25 3.57812 12.9142 3.57812 12.5C3.57812 12.0858 3.91391 11.75 4.32812 11.75L10.266 11.75L7.54786 9.03016C7.25506 8.73718 7.25521 8.2623 7.54819 7.9695C7.84118 7.6767 8.31605 7.67685 8.60885 7.96984L12.5724 11.9359C12.7291 12.0733 12.8281 12.2751 12.8281 12.5C12.8281 12.7259 12.7283 12.9284 12.5703 13.0659L8.60887 17.0301C8.31608 17.3231 7.84121 17.3233 7.54821 17.0305C7.25521 16.7377 7.25505 16.2629 7.54784 15.9699Z"
        fill="#323544"
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
export class SvgEnterIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
