import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloudron-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cloudron</title>
      <path
        d="M12.016.86c-2.676-.004-5.353.182-6.002.562C4.714 2.182.002 10.46 0 11.984c-.002 1.525 4.69 9.813 5.986 10.577 1.297.764 10.701.778 12 .017 1.3-.76 6.012-9.038 6.014-10.562.002-1.525-4.69-9.813-5.986-10.577-.649-.382-3.323-.576-5.998-.58zm-.268 4.363h2.38c.85 0 1.534.682 1.534 1.53V9.23a1.53 1.53 0 0 1-1.533 1.533h-2.381c-.127 0-.25-.018-.367-.047l.002.047v2.476l-.002.047c.117-.029.24-.047.367-.047h2.38a1.53 1.53 0 0 1 1.534 1.533v2.475c0 .849-.684 1.531-1.533 1.531h-2.381a1.529 1.529 0 0 1-1.533-1.53V14.77l.002-.046a1.538 1.538 0 0 1-.365.045H7.469a1.527 1.527 0 0 1-1.532-1.532v-2.476c0-.849.683-1.532 1.532-1.532h2.383c.126 0 .248.017.365.045l-.002-.046V6.754c0-.849.684-1.531 1.533-1.531z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCloudronIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}