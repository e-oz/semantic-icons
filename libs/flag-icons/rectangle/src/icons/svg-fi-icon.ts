import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fi-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-fi"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#002f6c" d="M0 174.5h640v131H0z" />
      <path fill="#002f6c" d="M175.5 0h130.9v480h-131z" />
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
export class SvgFiIcon {
  readonly class = input('');
}