import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vyond-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vyond</title>
      <path
        d="M1.55 16.382 0 7.616h1.328l.928 6.18.932-6.18h1.328l-1.55 8.766H1.55zm5.486-7.61H6.022l1.166 3.776v2.68h.924v-2.68L9.28 8.772H8.262L7.65 11.35l-.614-2.58v.002zm5.12 1.92c0-.324-.128-.482-.372-.482s-.37.16-.37.482v2.616c0 .324.126.492.37.492s.372-.166.372-.492v-2.616zm-.344-1.256c.69 0 1.144.468 1.144 1.262v2.52c0 .872-.432 1.346-1.172 1.346s-1.162-.468-1.162-1.376v-2.52c0-.766.44-1.24 1.19-1.24m5.032-.656v4.2l-1.344-4.2h-.896v6.456h.924v-3.944l1.316 3.944h.936V8.772h-.936zm5.07 6.32c.508 0 .706-.322.706-.92v-4.22c0-.72-.336-1.044-1.08-1.044h-.31v6.184h.684zM19.89 7.616h1.924c1.504 0 2.186.784 2.186 2.408v3.912c0 1.678-.62 2.448-2.122 2.448H19.89V7.616z"
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
export class SvgVyondIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
