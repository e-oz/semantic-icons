import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-folder-1-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 6C2 4.75736 3.00736 3.75 4.25 3.75H8.5C9.2082 3.75 9.87508 4.08344 10.3 4.65L11.65 6.45C11.7916 6.63885 12.0139 6.75 12.25 6.75H19.75C20.9926 6.75 22 7.75736 22 9V18C22 19.2426 20.9926 20.25 19.75 20.25H4.25C3.00736 20.25 2 19.2426 2 18V6ZM4.25 5.25C3.83579 5.25 3.5 5.58579 3.5 6V18C3.5 18.4142 3.83579 18.75 4.25 18.75H19.75C20.1642 18.75 20.5 18.4142 20.5 18V9C20.5 8.58579 20.1642 8.25 19.75 8.25H12.25C11.5418 8.25 10.8749 7.91656 10.45 7.35L9.1 5.55C8.95836 5.36115 8.73607 5.25 8.5 5.25H4.25Z"
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
export class SvgFolder1Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
