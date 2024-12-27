import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-compass-drafting-2-icon',
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
        d="M12.7492 2.75C12.7492 2.33579 12.4134 2 11.9992 2C11.585 2 11.2492 2.33579 11.2492 2.75V4.03111C10.1851 4.20964 9.37423 5.13513 9.37423 6.25V8.5C9.37423 8.96324 9.51422 9.39378 9.7542 9.75163L8.47197 12.9839C7.27522 12.2299 6.33645 11.1033 5.81874 9.76629C5.66917 9.38002 5.23478 9.18814 4.84852 9.33771C4.46225 9.48729 4.27037 9.92167 4.41995 10.3079C5.08832 12.034 6.32964 13.4753 7.91103 14.3979L5.30228 20.9742C5.14954 21.3592 5.33785 21.7952 5.72287 21.9479C6.1079 22.1006 6.54384 21.9123 6.69657 21.5273L9.27347 15.0314C10.1254 15.3347 11.0429 15.4999 11.9992 15.4999C12.9556 15.4999 13.8733 15.3347 14.7253 15.0312L17.3023 21.5273C17.455 21.9123 17.891 22.1006 18.276 21.9479C18.661 21.7952 18.8493 21.3592 18.6966 20.9742L16.0877 14.3977C17.6689 13.4751 18.9101 12.0339 19.5785 10.3079C19.728 9.92167 19.5361 9.48729 19.1499 9.33771C18.7636 9.18814 18.3292 9.38002 18.1797 9.76629C17.662 11.1031 16.7234 12.2296 15.5268 12.9837L14.2445 9.75125C14.4843 9.39348 14.6242 8.96308 14.6242 8.5V6.25C14.6242 5.13513 13.8134 4.20964 12.7492 4.03111L12.7492 2.75ZM14.1716 13.6355C13.491 13.8716 12.76 13.9999 11.9992 13.9999C11.2385 13.9999 10.5077 13.8717 9.82716 13.6356L11.006 10.664C11.2024 10.72 11.4098 10.75 11.6242 10.75H12.3742C12.5888 10.75 12.7963 10.72 12.9928 10.6639L14.1716 13.6355ZM11.6242 5.5H12.3742C12.7884 5.5 13.1242 5.83579 13.1242 6.25V8.5C13.1242 8.91421 12.7884 9.25 12.3742 9.25H11.6242C11.21 9.25 10.8742 8.91421 10.8742 8.5V6.25C10.8742 5.83579 11.21 5.5 11.6242 5.5Z"
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
export class SvgCompassDrafting2Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
