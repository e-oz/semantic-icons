import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gsmarenadotcom-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GSMArena.com</title>
      <path
        d="M20.324 22.992c-.905-.454-12.625-5.27-12.625-5.27a1.275 1.275 0 0 0-.389-.122c-.39-.056-.78.091-1.061.444 0 0-2.672 4.354-3.066 4.948C2.782 23.58 3.2 24 3.726 24h16.38c.644 0 .898-.67.218-1.008ZM19.688 0h-7.743c-.868 0-1.49.28-2.042 1.043L4.05 10.497c-.333.457-.14.985.336 1.185.974.412 2.766.977 3.68 1.388.718.326 1.157.204 1.552-.382l4.092-6.507.49-.005v7.405c0 .924.37 1.279.946 1.54.577.246 4.144 1.773 4.689 1.973.644.246 1.143-.05 1.143-.731V1.289c0-.706-.585-1.289-1.29-1.289Z"
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
export class SvgGsmarenadotcomIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}