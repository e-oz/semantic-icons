import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ly-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ly"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="ly-a">
          <path d="M250 12h500v500H250z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ly-a)" transform="translate(-256 -12.3)scale(1.024)">
        <path fill="#239e46" d="M0 12h1000v500H0z" />
        <path fill="#000001" d="M0 12h1000v375H0z" />
        <path fill="#e70013" d="M0 12h1000v125H0z" />
        <path
          fill="#fff"
          d="M544.2 217.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 262l84.1-27.3-52 71.5v-88.4l52 71.5z"
        />
      </g>
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
export class SvgLyIcon {
  readonly class = input('');
}
