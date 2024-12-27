import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mediapipe-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MediaPipe</title>
      <path
        d="M2.182 0C1 0 .037.94.002 2.114L0 2.182v6.545a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 2.182 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v13.09a2.182 2.182 0 0 0 4.364 0V2.183A2.182 2.182 0 0 0 8.727 0Zm6.546 0a2.182 2.182 0 0 0-2.182 2.182 2.182 2.182 0 0 0 2.182 2.182 2.182 2.182 0 0 0 2.182-2.182A2.182 2.182 0 0 0 15.273 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v19.636a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 21.818 0Zm-6.545 6.545c-1.183 0-2.145.94-2.181 2.114l-.001.068v13.091a2.182 2.182 0 0 0 4.364 0V8.728a2.182 2.182 0 0 0-2.182-2.183zM2.182 13.091c-1.182 0-2.145.94-2.18 2.114L0 15.273v6.545a2.182 2.182 0 0 0 4.364 0v-6.545a2.182 2.182 0 0 0-2.182-2.182zm6.545 6.545a2.182 2.182 0 0 0-2.182 2.182A2.182 2.182 0 0 0 8.727 24a2.182 2.182 0 0 0 2.182-2.182 2.182 2.182 0 0 0-2.182-2.182Z"
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
export class SvgMediapipeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
