import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-devrant-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>devRant</title>
      <path
        d="M11.72 0C5.482-.015 1.592 4.046 1.701 10.322c-.074 3.907 1.437 7.002 4.127 8.734.663.405 1.364.737 2.137.995l2.174 3.353c.333.848.7.774.848-.11l.59-2.69h.442c2.469.073 4.57-.517 6.228-1.585 2.616-1.733 4.126-4.791 4.053-8.697C22.41 3.948 18.431-.144 12.019.004c-.1-.002-.2-.004-.299-.004zm4.571 4.636c.258 0 .516.092.7.276h.001c.185.185.295.442.295.737 0 .148 0 .295-.074.406l-3.722 9.25c-.258.441-.627.552-.885.552a1.007 1.007 0 0 1-.994-.995c0-.148.037-.258.073-.406l3.685-9.212c.073-.147.148-.258.221-.332a.989.989 0 0 1 .7-.276zM9.456 7.5c.313 0 .626.12.866.359h.001c.221.221.368.516.331.848 0 .332-.147.589-.368.848-.222.258-.517.369-.848.369-.332 0-.59-.148-.848-.37-.259-.22-.37-.515-.37-.847s.149-.627.37-.848c.24-.24.552-.36.866-.36zm0 4.974c.313 0 .626.12.866.36h.001c.221.258.368.553.331.848a1.2 1.2 0 0 1-.368.848c-.221.258-.516.368-.848.368a1.2 1.2 0 0 1-.848-.368c-.259-.222-.37-.516-.37-.848s.149-.627.37-.848c.24-.24.552-.36.866-.36z"
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
export class SvgDevrantIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
