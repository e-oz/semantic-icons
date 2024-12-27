import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-twitter-old-icon',
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
        d="M8.22581 20.1937C15.8387 20.1937 19.9677 13.9034 19.9677 8.4518C19.9677 8.32277 19.9677 8.09696 19.9355 7.90341C20.7419 7.32277 21.4516 6.58083 22 5.77438C21.2258 6.12922 20.4516 6.32277 19.6452 6.41954C20.5161 5.90341 21.1613 5.09696 21.4516 4.12922C20.6452 4.58083 19.8065 4.93567 18.8065 5.12922C18.0323 4.32277 17 3.80664 15.8065 3.80664C13.5161 3.80664 11.6452 5.67761 11.6452 7.96793C11.6452 8.29051 11.6774 8.61309 11.7419 8.93567C8.41935 8.70986 5.3871 7.0647 3.32258 4.58083C2.96774 5.22599 2.77419 5.90341 2.77419 6.64535C2.77419 8.09696 3.51613 9.32277 4.64516 10.0647C3.96774 10.0324 3.32258 9.8389 2.77419 9.54857C2.77419 9.58083 2.77419 9.58083 2.77419 9.58083C2.77419 11.5486 4.19355 13.2583 6.06452 13.6453C5.70968 13.7421 5.32258 13.7744 5.03226 13.7744C4.77419 13.7744 4.48387 13.7421 4.25806 13.6776C4.80645 15.3228 6.32258 16.5163 8.12903 16.5486C6.70968 17.6453 4.93548 18.3228 3.03226 18.3228C2.64516 18.3873 2.32258 18.3228 2 18.2905C3.74194 19.5163 5.90323 20.1937 8.22581 20.1937Z"
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
export class SvgTwitterOldIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
