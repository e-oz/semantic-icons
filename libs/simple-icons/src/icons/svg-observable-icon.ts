import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-observable-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Observable</title>
      <path
        d="M12 20c-1.065 0-1.988-.232-2.77-.696a4.7 4.7 0 0 1-1.794-1.89 9.97 9.97 0 0 1-.916-2.53A13.613 13.613 0 0 1 6.23 12c0-.766.05-1.499.152-2.2.1-.699.285-1.41.556-2.132A6.803 6.803 0 0 1 7.98 5.79a4.725 4.725 0 0 1 1.668-1.293C10.337 4.165 11.12 4 12 4c1.065 0 1.988.232 2.77.696a4.7 4.7 0 0 1 1.794 1.89c.418.795.723 1.639.916 2.53.192.891.29 1.853.29 2.884 0 .766-.05 1.499-.152 2.2a9.812 9.812 0 0 1-.567 2.132 7.226 7.226 0 0 1-1.042 1.878c-.418.53-.97.962-1.657 1.293-.688.332-1.471.497-2.352.497zm2.037-5.882c.551-.554.858-1.32.848-2.118 0-.824-.276-1.53-.827-2.118C13.506 9.294 12.82 9 12 9c-.82 0-1.506.294-2.058.882A2.987 2.987 0 0 0 9.115 12c0 .824.276 1.53.827 2.118.552.588 1.238.882 2.058.882.82 0 1.5-.294 2.037-.882zM12 24c6.372 0 11.538-5.373 11.538-12S18.372 0 12 0 .462 5.373.462 12 5.628 24 12 24Z"
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
export class SvgObservableIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
