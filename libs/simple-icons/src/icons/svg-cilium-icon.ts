import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cilium-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cilium</title>
      <path
        d="M13.607 14.583h-3.215l-1.626-2.764 1.626-2.802h3.215l1.626 2.802-1.626 2.764ZM14.186 8H9.799l-2.2 3.813 2.2 3.787h4.387l2.213-3.787L14.186 8Zm-4.387 8.4-2.2 3.813L9.799 24h4.387l2.213-3.787-2.213-3.813H9.799Zm-1.034 3.819 1.627-2.802h3.215l1.626 2.802-1.626 2.765h-3.215l-1.627-2.765ZM9.799 0l-2.2 3.813 2.2 3.787h4.387l2.213-3.787L14.186 0H9.799ZM8.765 3.819l1.627-2.802h3.215l1.626 2.802-1.626 2.764h-3.215L8.765 3.819Zm8.234 8.581-2.2 3.813 2.2 3.787h4.388l2.213-3.787-2.213-3.813h-4.388Zm-1.034 3.819 1.627-2.802h3.215l1.626 2.802-1.626 2.765h-3.215l-1.627-2.765ZM16.999 4l-2.2 3.813 2.2 3.787h4.388L23.6 7.813 21.387 4h-4.388Zm-1.034 3.819 1.627-2.802h3.215l1.626 2.802-1.626 2.764h-3.215l-1.627-2.764ZM2.599 12.4l-2.2 3.813L2.599 20h4.387l2.213-3.787L6.986 12.4H2.599Zm-1.034 3.819 1.627-2.802h3.214l1.627 2.802-1.627 2.765H3.192l-1.627-2.765ZM2.599 4l-2.2 3.813 2.2 3.787h4.387l2.213-3.787L6.986 4H2.599ZM1.565 7.819l1.627-2.802h3.214l1.627 2.802-1.627 2.764H3.192L1.565 7.819Z"
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
export class SvgCiliumIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
