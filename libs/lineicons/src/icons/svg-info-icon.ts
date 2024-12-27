import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-info-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3144 6.18984C12.7562 6.18984 13.1144 5.83167 13.1144 5.38984C13.1144 4.94802 12.7562 4.58984 12.3144 4.58984C11.8726 4.58984 11.5134 4.94802 11.5134 5.38984C11.5134 5.83167 11.8716 6.18984 12.3134 6.18984H12.3144Z"
        fill="#323544"
      />
      <path
        d="M11.5625 18.8896C11.5625 19.3039 11.8983 19.6396 12.3125 19.6396C12.7267 19.6396 13.0625 19.3039 13.0625 18.8896L13.0625 8.39014C13.0625 7.97592 12.7267 7.64014 12.3125 7.64014L10.8125 7.64014C10.3983 7.64014 10.0625 7.97592 10.0625 8.39014C10.0625 8.80435 10.3983 9.14014 10.8125 9.14014H11.5625L11.5625 18.8896Z"
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
export class SvgInfoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
