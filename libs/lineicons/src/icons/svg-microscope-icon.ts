import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-microscope-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4611 2.29987C14.385 1.67855 13.0089 2.04726 12.3876 3.12342L9.57665 7.99212C8.95533 9.06828 9.32404 10.4444 10.4002 11.0657L11.2662 11.5657C12.3424 12.187 13.7185 11.8183 14.3398 10.7421L16.0821 7.72441C17.0628 8.73997 17.6649 10.1211 17.6649 11.6431C17.6649 14.7569 15.1425 17.2815 12.0296 17.2852L12.0234 17.2852L12.0168 17.2852C10.5164 17.2831 9.28435 16.5033 8.42469 15.2638H10.6621C11.0763 15.2638 11.4121 14.9281 11.4121 14.5138C11.4121 14.0996 11.0763 13.7638 10.6621 13.7638H3.66211C3.2479 13.7638 2.91211 14.0996 2.91211 14.5138C2.91211 14.9281 3.2479 15.2638 3.66211 15.2638H6.67725C7.6079 17.0426 9.17178 18.4622 11.2734 18.737V20.5001H8.02344C7.60922 20.5001 7.27344 20.8359 7.27344 21.2501C7.27344 21.6643 7.60922 22.0001 8.02344 22.0001H11.9873C11.9993 22.0007 12.0113 22.001 12.0234 22.001C12.0355 22.001 12.0476 22.0007 12.0596 22.0001H16.0234C16.4377 22.0001 16.7734 21.6643 16.7734 21.2501C16.7734 20.8359 16.4377 20.5001 16.0234 20.5001H12.7734V18.7462C16.3651 18.3711 19.1649 15.334 19.1649 11.6431C19.1649 9.56216 18.2743 7.68897 16.8557 6.38448L17.1507 5.87342C17.7721 4.79726 17.4033 3.42119 16.3272 2.79987L15.4611 2.29987ZM13.6866 3.87342C13.8937 3.5147 14.3524 3.3918 14.7111 3.5989L15.5772 4.0989C15.9359 4.30601 16.0588 4.7647 15.8517 5.12342L13.0407 9.99212C12.8336 10.3508 12.3749 10.4737 12.0162 10.2666L11.1502 9.76664C10.7915 9.55953 10.6686 9.10084 10.8757 8.74212L13.6866 3.87342Z"
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
export class SvgMicroscopeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
