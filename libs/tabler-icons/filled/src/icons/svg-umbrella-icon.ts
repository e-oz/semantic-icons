import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-umbrella-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-umbrella"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1 -.883 .993l-.117 .007h-7v5a1 1 0 0 0 1.993 .117l.007 -.117a1 1 0 0 1 2 0a3 3 0 0 1 -5.995 .176l-.005 -.176v-5h-7a1 1 0 0 1 -.993 -.883l-.007 -.117a9 9 0 0 1 9 -9z"
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
export class SvgUmbrellaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
