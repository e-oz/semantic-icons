import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-windows-icon',
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
        d="M21.9676 11.516C21.9676 8.38701 21.9676 5.16123 21.9676 2.03223C18.3225 2.51609 14.7096 3.03222 11.0322 3.61286C11.0322 6.29025 11.0322 8.96765 11.0322 11.5805C14.7096 11.5483 18.3225 11.5483 21.9676 11.516Z"
        fill="#323544"
      />
      <path
        d="M2 4.9676V11.6772C4.6774 11.6772 7.45157 11.645 10.129 11.645C10.129 8.99983 10.129 6.48372 10.129 3.83859C7.45157 4.19342 4.6774 4.54826 2 4.9676Z"
        fill="#323544"
      />
      <path
        d="M2 12.4515V19.1611C4.6774 19.5159 7.45157 19.8708 10.129 20.2579C10.129 17.6772 10.129 15.0966 10.129 12.516C7.45157 12.4515 4.6774 12.4515 2 12.4515Z"
        fill="#323544"
      />
      <path
        d="M11.1291 12.5806C11.1614 15.2257 11.1614 17.8063 11.1614 20.4192C14.7742 20.9031 18.3871 21.4192 22 21.9676C22 18.8386 22 15.7096 22 12.5806C18.3226 12.5806 14.7097 12.5806 11.1291 12.5806Z"
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
export class SvgWindowsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
