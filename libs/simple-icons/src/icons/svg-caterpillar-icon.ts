import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-caterpillar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Caterpillar</title>
      <path
        d="M11.901 11.554l.802-4.1.798 4.1zm2.869-6.52h-4.15L8.2 15.884l4.503-3.635 4.695 3.934zm-2.067 8.156l-7.509 6.072H19.95zM24 5.02v2.77h-2.066v11.45h-.882l-2.436-2.04V7.79h-2.057V5.02zM6.872 16.864c.548-.458.642-1.024.642-1.532V13.2h-2.98v2.894a.75.75 0 0 1-.748.751c-.414 0-.722-.336-.722-.75V7.893c0-.414.308-.75.722-.75a.75.75 0 0 1 .749.75v2.913H7.51V7.785c0-1.67-1.092-3.044-3.75-3.047-2.728 0-3.76 1.38-3.76 3.05v8.563c0 1.655 1.314 2.907 2.995 2.907h.922Z"
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
export class SvgCaterpillarIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
