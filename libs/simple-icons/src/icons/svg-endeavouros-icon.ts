import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-endeavouros-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>EndeavourOS</title>
      <path
        d="M14.03 2.036v.002C13.303 2.138 0 18.46 0 18.46s.957.272 3.135.588c0 0 10.435-17.061 10.904-17.008-.001 0-.01-.006-.01-.004zM3.135 19.048c-.95 1.562-1.71 2.818-1.71 2.818s10.218.46 18.165-.606c11.308-1.516-2.324-15.96-5.537-19.214 2.542 3.36 13.473 17.751 2.459 17.937-3.89.066-13.377-.935-13.377-.935zm10.906-17.01v.002c.022.01 0 .002 0-.002zm-.037.797c-.055.073-.09.112-.156.205a61.39 61.39 0 0 0-1.285 1.9 356.805 356.805 0 0 0-3.723 5.842c-2.448 3.908-4.467 7.208-4.846 7.826 1.034.107 8.948.935 12.508.875 1.322-.022 2.274-.26 2.926-.623.652-.363 1.022-.839 1.228-1.447.413-1.217.063-3.047-.753-5.018-1.537-3.711-4.485-7.686-5.899-9.56z"
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
export class SvgEndeavourosIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}