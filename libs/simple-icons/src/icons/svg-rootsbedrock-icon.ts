import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rootsbedrock-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Roots Bedrock</title>
      <path
        d="M.4 0L0 .4v5.2l.343.343 11.314-1.886L12 4.4V8l11.52-1.92.48-.48V.4l-.4-.4zm.08 9.92L0 10.4v3.2l.343.343L12 12V8zM12 12v4l11.52-1.92.48-.48v-3.2l-.343-.343zM.48 17.92L0 18.4v5.2l.4.4h23.2l.4-.4v-5.2l-.343-.343-11.314 1.886L12 19.6V16L.48 17.92z"
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
export class SvgRootsbedrockIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
