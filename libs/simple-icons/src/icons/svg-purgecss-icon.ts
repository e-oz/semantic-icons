import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-purgecss-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PurgeCSS</title>
      <path
        d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 9.764 11.791c.048-1.003.052-2.55.047-9.967 0-5.484.003-9.995.013-10.023.028-.08 2.26-.042 2.678.047a4.903 4.903 0 0 1 3.078 2.08 4.834 4.834 0 0 1-.7 6.164c-.924.878-2.041 1.334-3.29 1.334-.225 0-.29.012-.305.068-.01.043-.02 2.418-.014 5.287v5.196A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.691 4.31c-.013.004-.017.023-.02.063-.018.245-.023 8.358-.004 8.39.01.02.075-.014.145-.07 2.673-1.952 3.467-2.792 3.738-3.939.14-.746-.174-1.466-1.01-2.3-.699-.72-1.692-1.358-2.779-2.099-.038-.033-.058-.047-.07-.044z"
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
export class SvgPurgecssIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
