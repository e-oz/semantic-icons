import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sencha-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sencha</title>
      <path
        d="M15.287,24c0.458-1.221,0.917-1.532,0.917-2.442c0-1.452-0.878-2.8-2.237-3.434 l-5.831-2.813C5.211,13.85,3.392,10.97,3.392,7.797c0-3.23,1.867-6.133,4.871-7.576L8.712,0C8.129,0.674,7.796,1.532,7.796,2.44 c0,1.453,0.878,2.801,2.237,3.435l5.831,2.813c2.926,1.462,4.744,4.342,4.744,7.514c0,3.23-1.867,6.133-4.871,7.577L15.287,24"
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
export class SvgSenchaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
