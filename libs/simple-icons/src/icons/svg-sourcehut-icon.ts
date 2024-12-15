import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sourcehut-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SourceHut</title>
      <path
        d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0Zm0 21.677A9.675 9.675 0 0 1 2.323 12 9.675 9.675 0 0 1 12 2.323 9.675 9.675 0 0 1 21.677 12 9.675 9.675 0 0 1 12 21.677Z"
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
export class SvgSourcehutIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
