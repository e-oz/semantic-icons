import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-leaf-6-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0235 2.73828L12.3714 2.07385C12.1535 1.95976 11.8935 1.95976 11.6756 2.07385L12.0235 2.73828Z"
        fill="#323544"
      />
      <path
        d="M12.7734 19.4635C16.5635 19.0873 19.5236 15.8896 19.5236 12.0005C19.5236 8.83308 17.6616 6.33309 15.9145 4.67708C15.0317 3.84034 14.1519 3.19333 13.4935 2.7555C13.1636 2.53611 12.8875 2.36801 12.6919 2.25374C12.594 2.19658 12.5162 2.1528 12.4617 2.12273C12.4344 2.10769 12.413 2.09607 12.3978 2.08791L12.3798 2.07827L12.3744 2.07541L12.3726 2.07446C12.3723 2.07432 12.3714 2.07385 12.0235 2.73828C11.6756 2.07385 11.6759 2.07371 11.6756 2.07385L11.6744 2.07446L11.6726 2.07541L11.6672 2.07827L11.6492 2.08791C11.634 2.09607 11.6126 2.10769 11.5853 2.12273C11.5308 2.1528 11.453 2.19658 11.3551 2.25374C11.1595 2.36801 10.8834 2.53611 10.5535 2.7555C9.89511 3.19333 9.01526 3.84034 8.13251 4.67708C6.38544 6.33309 4.52344 8.83308 4.52344 12.0005C4.52344 15.8895 7.48344 19.0872 11.2734 19.4635V21.2492C11.2734 21.6634 11.6092 21.9992 12.0234 21.9992C12.4377 21.9992 12.7734 21.6634 12.7734 21.2492V19.4635ZM12.7734 17.9541V15.7824L15.6697 13.7854C16.0107 13.5503 16.0965 13.0832 15.8614 12.7422C15.6263 12.4012 15.1592 12.3154 14.8182 12.5505L12.7734 13.9604V11.0615L15.0568 9.35239C15.3884 9.10418 15.456 8.63414 15.2078 8.30253C14.9596 7.97092 14.4896 7.90331 14.158 8.15152L12.7734 9.18782V6.98438C12.7734 6.57016 12.4377 6.23438 12.0234 6.23438C11.6092 6.23438 11.2734 6.57016 11.2734 6.98438V9.1879L9.88889 8.15153C9.55728 7.90331 9.08724 7.97092 8.83903 8.30252C8.59081 8.63413 8.65842 9.10416 8.99002 9.35238L11.2734 11.0616V13.9606L9.22848 12.5505C8.88748 12.3154 8.42042 12.4012 8.18529 12.7422C7.95016 13.0832 8.03598 13.5503 8.37699 13.7854L11.2734 15.7826V17.9541C8.3137 17.585 6.02344 15.0602 6.02344 12.0005C6.02344 9.43995 7.53647 7.30883 9.16442 5.76573C9.96919 5.00291 10.7769 4.40836 11.3841 4.00452C11.639 3.83501 11.8573 3.69996 12.0235 3.601C12.1897 3.69996 12.408 3.83501 12.6629 4.00452C13.2701 4.40836 14.0778 5.00291 14.8826 5.76573C16.5105 7.30883 18.0236 9.43995 18.0236 12.0005C18.0236 15.0603 15.7332 17.5851 12.7734 17.9541Z"
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
export class SvgLeaf6Icon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
