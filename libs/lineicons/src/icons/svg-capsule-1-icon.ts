import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-capsule-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.39844 7.625C6.39844 4.5184 8.91684 2 12.0234 2C15.13 2 17.6484 4.5184 17.6484 7.625V16.375C17.6484 19.4816 15.13 22 12.0234 22C8.91684 22 6.39844 19.4816 6.39844 16.375V7.625ZM12.0234 3.5C9.74526 3.5 7.89844 5.34683 7.89844 7.625V11.25H16.1484V7.625C16.1484 5.34683 14.3016 3.5 12.0234 3.5ZM16.1484 12.75H7.89844V16.375C7.89844 18.6532 9.74526 20.5 12.0234 20.5C14.3016 20.5 16.1484 18.6532 16.1484 16.375V12.75Z"
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
export class SvgCapsule1Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
