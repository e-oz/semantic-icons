import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-file-clone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M8 12.732A1.99 1.99 0 0 1 7 13H3v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.268ZM7 11V7.054a2 2 0 0 0-1.059.644l-2.46 2.87A2 2 0 0 0 3.2 11H7Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M14 3.054V7h-3.8c.074-.154.168-.3.282-.432l2.46-2.87A2 2 0 0 1 14 3.054ZM16 3v4a2 2 0 0 1-2 2h-4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
        clip-rule="evenodd"
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
export class SvgFileCloneIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
