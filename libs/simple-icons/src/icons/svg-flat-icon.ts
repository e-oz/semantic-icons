import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-flat-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flat</title>
      <path
        d="M6.5455 17.4545v3.2728C6.5455 22.5348 5.0802 24 3.2727 24S0 22.5348 0 20.7273c0-1.8075 1.4652-3.2728 3.2727-3.2728Zm8.7272-8.7272V12c0 1.8075-1.4652 3.2727-3.2727 3.2727H5.4545c-1.8074 0-3.2727-1.4652-3.2727-3.2727 0-1.8075 1.4653-3.2727 3.2727-3.2727zM24 0v3.2727c0 1.8075-1.4652 3.2728-3.2727 3.2728H7.6363c-1.8074 0-3.2727-1.4653-3.2727-3.2728S5.829 0 7.6364 0Z"
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
export class SvgFlatIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}