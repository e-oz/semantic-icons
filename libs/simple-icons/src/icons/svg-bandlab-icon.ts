import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bandlab-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>BandLab</title>
      <path
        d="m19.32 6.076 3.567 6.164A8.835 8.835 0 0 1 24 16.255C24 20.76 20.455 24 15.425 24h-6.85C3.545 24 0 20.76 0 16.255a8.925 8.925 0 0 1 1.102-4.015l3.567-6.164h3.349L3.84 13.342a6.033 6.033 0 0 0-.829 2.869c0 2.869 1.964 4.909 5.651 4.909h6.654c3.709 0 5.662-2.04 5.662-4.909a6.043 6.043 0 0 0-.829-2.869l-4.167-7.266h3.338Zm-8.444 11.509c-1.581 0-2.531-.927-2.531-2.236 0-1.789 1.822-3.349 3.819-3.785L7.473 0h8.182l1.505 2.891h-5.727l3.414 8.345c.295.655.448 1.364.448 2.073 0 2.476-2.455 4.276-4.419 4.276Z"
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
export class SvgBandlabIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}