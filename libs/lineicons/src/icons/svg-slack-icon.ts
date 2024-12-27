import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-slack-icon',
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
        d="M9.35499 12.5484C8.22596 12.5484 7.25822 13.5162 7.25822 14.6452V19.871C7.25822 21 8.22596 21.9678 9.35499 21.9678C10.484 21.9678 11.4518 21 11.4518 19.871V14.6452C11.4518 13.4517 10.5485 12.5484 9.35499 12.5484Z"
        fill="#323544"
      />
      <path
        d="M2 14.6452C2 15.7742 2.96774 16.742 4.09677 16.742C5.22581 16.742 6.19355 15.7742 6.19355 14.6452V12.5484H4.12903C2.96774 12.5484 2 13.4517 2 14.6452Z"
        fill="#323544"
      />
      <path
        d="M9.35499 2C8.22596 2 7.25822 2.96774 7.25822 4.09677C7.25822 5.22581 8.22596 6.19355 9.35499 6.19355H11.4518C11.4518 5 11.4518 5.29032 11.4518 4.09677C11.4518 2.96774 10.5485 2 9.35499 2Z"
        fill="#323544"
      />
      <path
        d="M4.09677 11.4516H9.35484C10.4839 11.4516 11.4516 10.4838 11.4516 9.3548C11.4516 8.22577 10.4839 7.25803 9.35484 7.25803H4.09677C2.96774 7.25803 2 8.22577 2 9.3548C2 10.4838 2.90323 11.4516 4.09677 11.4516Z"
        fill="#323544"
      />
      <path
        d="M19.8707 7.25803C18.7416 7.25803 17.7739 8.22577 17.7739 9.3548V11.4516H19.8707C20.9997 11.4516 21.9674 10.4838 21.9674 9.3548C21.9674 8.22577 21.0319 7.25803 19.8707 7.25803Z"
        fill="#323544"
      />
      <path
        d="M12.5482 4.09677V9.35484C12.5482 10.4839 13.516 11.4516 14.645 11.4516C15.774 11.4516 16.7418 10.4839 16.7418 9.35484V4.09677C16.7418 2.96774 15.774 2 14.645 2C13.4515 2 12.5482 2.96774 12.5482 4.09677Z"
        fill="#323544"
      />
      <path
        d="M16.7418 19.9032C16.7418 18.7742 15.774 17.8065 14.645 17.8065H12.5482V19.9032C12.5482 21.0323 13.516 22 14.645 22C15.774 22 16.7418 21.0323 16.7418 19.9032Z"
        fill="#323544"
      />
      <path
        d="M19.9031 12.5484H14.645C13.516 12.5484 12.5482 13.5162 12.5482 14.6452C12.5482 15.7742 13.516 16.742 14.645 16.742H19.9031C21.0321 16.742 21.9998 15.7742 21.9998 14.6452C21.9998 13.4517 21.0321 12.5484 19.9031 12.5484Z"
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
export class SvgSlackIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
