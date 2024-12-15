import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-chef-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chef</title>
      <path
        d="M12.03 0C6.94 0 2.57 3.17.82 7.65l1.91.77a10 10 0 0 1 9.3-6.4c2.24 0 4.32.77 5.96 1.97l1.2-1.64A11.96 11.96 0 0 0 12.03 0zm0 2.3a9.76 9.76 0 0 0-9.08 6.23l1.91.7a7.62 7.62 0 0 1 7.17-4.91zm3.55.7l-.76 1.92a7.47 7.47 0 0 1 4.75 5.63h2.08a9.7 9.7 0 0 0-6.07-7.54zm-3.55 1.6a7.44 7.44 0 1 0 7.32 8.9h-2.08a5.5 5.5 0 0 1-5.24 3.94 5.39 5.39 0 0 1-5.42-5.41 5.39 5.39 0 0 1 5.42-5.41 5.4 5.4 0 0 1 5.2 3.93h2.07a7.35 7.35 0 0 0-7.27-5.96zm10.22 1.09L20.5 6.78a9.5 9.5 0 0 1 1.42 3.77H24a11.56 11.56 0 0 0-1.75-4.86zM11.97 6.83a5.22 5.22 0 0 0-4.7 7.27l1.97-.87a2.97 2.97 0 0 1-.27-1.2c0-1.64 1.36-3.01 3-3.01zm1.92.39l-.77 2.02c.66.27 1.15.7 1.53 1.31h2.3a5.04 5.04 0 0 0-3.06-3.33zM0 12.02c0 1.65.33 3.29 1.04 4.87l1.8-.82a10.49 10.49 0 0 1-.82-4.04zm2.3 0c0 4.1 2.51 7.6 6.12 9.03l.76-1.92a7.63 7.63 0 0 1-4.86-7.1zm12.3 1.48c-.33.6-.82 1.1-1.48 1.31l.77 2.03a5.04 5.04 0 0 0 3.06-3.34zm4.97 0a7.73 7.73 0 0 1-7.54 6.24v2.02a9.71 9.71 0 0 0 9.62-8.26zm2.35 0a10.1 10.1 0 0 1-9.9 8.53c-2.73 0-5.24-1.15-7.04-2.95L3.55 20.5c2.19 2.19 5.2 3.5 8.53 3.5A12 12 0 0 0 24 13.5zm-12.02.66l-1.53 1.53a5.21 5.21 0 0 0 3.66 1.53v-2.19a3.02 3.02 0 0 1-2.13-.87z"
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
export class SvgChefIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
