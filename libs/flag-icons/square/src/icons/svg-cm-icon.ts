import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cm-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-cm"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#007a5e" d="M0 0h170.7v512H0z" />
      <path fill="#ce1126" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#fcd116" d="M341.3 0H512v512H341.3z" />
      <g fill="#fcd116" transform="translate(256 256)scale(5.6889)">
        <g id="cm-b">
          <path id="cm-a" d="M0-8-2.5-.4 1.3.9z" />
          <use
            xlink:href="#cm-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
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
export class SvgCmIcon {
  readonly class = input('');
}