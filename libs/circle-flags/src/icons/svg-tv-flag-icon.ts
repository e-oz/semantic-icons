import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#338af3" d="M0 256 256 0h256v512H0z" />
        <path
          fill="#eee"
          d="M0 0h33.4l32 16.9L100.3 0H256v33.4l-14.8 33.5 14.8 33.3v33.4l-9.3 33.7 9.3 41.5v15.7l-6.2 11.6L256 256h-47.2l-39.3-7-35.9 7.1-33.4-.1-32.6-16.6L33.4 256H0V100.2l14.2-35.8L0 33.4z"
        />
        <path fill="#d80027" d="m256 224.5-91-91h-31.4L256 256z" />
        <path
          fill="#d80027"
          d="M33.4 0v33.4H0v66.8h33.4V256h66.8V100.2H256V33.4H100.2V0z"
        />
        <path
          fill="#ffda44"
          d="m279.4 423 5.5 17h18l-14.6 10.5 5.6 17-14.5-10.5-14.5 10.5 5.6-17L256 440h17.9zm142.4-111.3 5.5 17h18l-14.5 10.5 5.5 17-14.5-10.5-14.5 10.5 5.6-17-14.5-10.5h17.9zm35.7-167 5.5 17h18l-14.5 10.5 5.6 17-14.5-10.5-14.5 10.5 5.6-17-14.5-10.5H452zm8.8 122.4 5.6 17h17.8l-14.4 10.5 5.5 17-14.5-10.5-14.4 10.6 5.5-17-14.5-10.6h18zM305 383l16 8 12.6-12.6-2.8 17.7 16 8.1L329 407l-2.8 17.7-8.1-16-17.7 2.8 12.7-12.6zm0-66.8 16 8.1 12.6-12.6-2.8 17.6 16 8.1-17.7 2.8-2.8 17.7-8.1-16-17.7 2.9 12.7-12.7zm55.7 42.8 16 8.1 12.6-12.6-2.8 17.6 16 8.1-17.8 2.8-2.7 17.7-8.2-16-17.6 2.9 12.6-12.7zm0-143 16 8.1 12.6-12.6-2.8 17.6 16 8.2-17.8 2.8-2.7 17.6-8.2-16-17.6 2.9 12.6-12.7zm54-1.7 15.9 8.1 12.6-12.6-2.8 17.6 16 8.1-17.7 2.8-2.8 17.7-8.1-16-17.8 3 12.7-12.7z"
        />
        <path
          fill="#0052b4"
          d="M180.8 133.6H256v75.2zm-47.2 47.2v75.3l75.2-.1z"
        />
      </g>
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
export class SvgTvFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
