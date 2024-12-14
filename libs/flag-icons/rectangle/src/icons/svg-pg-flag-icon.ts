import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-pg"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#000001" d="m1.6 0-.5 480h640z" />
        <path fill="red" d="m640.6 480 .5-480H1.1z" />
      </g>
      <path
        fill="#fc0"
        stroke="#fc0"
        stroke-width="1.1"
        d="m178 54-3.8-.2c-1.2-2.8-4.5-3.8-6.6-2.6A333 333 0 0 1 156 51l7.1 3.1C165 59 171 60 171 60c-.6 8.8-8.9-1.1-15.9 3.9-5 3-5 6.5-7.7 12.3-.9 1.6-4.4 5.8-4.4 5.8l5.9-.5L147 84l7-1-1.5 1.4c1 .2 8-1.7 8-1.7L160 85l8-2.9s1.6 1.3 3 1.9l1-4 4 1 1-4c6 8 8 16 19 18l-1-4a262.2 262.2 0 0 1 8.7 4l.9-1.7c4.8 3.4 8.7 3.3 11.4 3.7l-2-5 2 1-3-8 3 1-4-6 1.5-1-.5-3c6 2 14 5 15 12 1 11-11 14-19 13 6 5 17 3 22-2 2-2 3-5 4-8 1 3 3 7 3 11-1 9-13 12-21 13 9 5 25-1 26-14 0-11-7-16-10-21l-1-5.4 3 1.4s-1.8-3.3-2-4c0 0-3.1-8.5-4.2-10.4l2.2.4-8.2-10.3 2.3-.2S215.6 44 213 43l3-1c-6-3-13-1-19 3l1-3-1.8.2v-3.5L198 36l-3-1 2-5-3 1 1-5s-2.2 1-3.6.9a51.7 51.7 0 0 0 1.6-3.4c-1-1.5 0-4.5 0-4.5-7 1-8 2-12 8-6 11-4 16-3 27z"
        transform="matrix(2.21989 0 0 2.21194 1.1 0)"
      />
      <path
        fill="red"
        fill-rule="evenodd"
        stroke="red"
        stroke-width="1.4"
        d="M215.8 70.4c.5.9 6.2 3.6 10.4 6-1.1-4.6-9.4-5.6-10.4-6z"
        transform="matrix(2.21989 0 0 2.21194 1.1 0)"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="m175 399-14.2-9-19 9.1 4.3-16.2-14.5-15.1 16.7-1 10-18.4 6.1 15.5 20.7 3.8-13 10.6zm36.2-79-6.6-3-6.3 3.6 1-7.2-5.4-4.9 7.1-1.3 3-6.6 3.5 6.4 7.2.8-5 5.2zm32-45.2-14.5-7-13.9 7.8 2.3-15.7-11.8-10.8 15.7-2.8 6.6-14.4 7.6 14 15.8 1.8-11 11.5zm-65.8-63-17-8.5-16.5 9.1 2.8-18.6-13.8-13 18.7-3 8-17 8.7 16.7 18.8 2.3-13.3 13.4zm-60.8 65.4-17-10-17 10.3 4.3-19.3-15.1-13 19.7-1.8 7.7-18.3 7.9 18.2 19.8 1.6-14.9 13z"
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
export class SvgPgFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
