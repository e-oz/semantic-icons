import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lemon-2-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-lemon-2"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18 3a3 3 0 0 1 2.443 4.742l-.06 .076l.037 .087c1.269 3.187 .428 7.084 -2.203 9.872l-.217 .223c-2.8 2.8 -6.823 3.723 -10.095 2.42l-.087 -.036l-.133 .098a3 3 0 0 1 -2.11 .488l-.205 -.036a3 3 0 0 1 -1.852 -4.62l.098 -.134l-.036 -.085c-1.269 -3.187 -.428 -7.084 2.203 -9.872l.217 -.223c2.8 -2.8 6.823 -3.723 10.095 -2.42l.085 .037l.124 -.091a3 3 0 0 1 1.493 -.52z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLemon2Icon {
  readonly class = input('');
}