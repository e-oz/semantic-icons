import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-openhab-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>openHAB</title>
      <path
        d="m12 9.103-9.76 9.768c-.376-.553-.725-1.123-.998-1.738l9.39-9.397L12 6.368l1.368 1.368 6.931 6.931-.01.035-.136.403-.156.393-.174.384-.192.374-.175.304L12 9.103zM12 0C5.39 0 0 5.39 0 12c0 1.306.211 2.563.6 3.741l.893-.893.668-.67A10.039 10.039 0 0 1 1.922 12C1.922 6.45 6.45 1.922 12 1.922S22.078 6.449 22.078 12c0 5.55-4.527 10.078-10.078 10.078a10.06 10.06 0 0 1-7.698-3.588l-.012.012-.309.309-.308.309-.308.308-.424.425C5.144 22.39 8.39 24 12.001 24 18.61 24 24 18.61 24 12S18.61 0 12 0z"
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
export class SvgOpenhabIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}