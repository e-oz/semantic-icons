import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-md-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#333" d="M0 0h512v512H0Z" />
        <path
          fill="#ff9811"
          d="M64 0v128l64 64V64Zm64 64 64 64V0h-64zm64 64v128l64 64V192Zm64 64 64 64V0h-64zm64 64v128l64 64V320Zm64 64 64 64V0h-64zm64 64v128h64v-64zm0 128-64-64v64zM320 384l-64-64v192h64zM192 256l-64-64v320h64zM64 128 0 64v448h64z"
        />
        <path fill="#eee" d="M256 0v256h256V0H256zm0 256H0v256h256V256z" />
        <path
          fill="#a2001d"
          d="M384 0v32h32v64h64v32h32V0H384zm96 128h-96v96h32v-64h64v-32zm-96 96h-32v-64h-64v-32h-32v128h128v-32zm-128 32H128v32h32v64h64v32h32V256zm-32 128h-96v96h32v-64h64v-32zm-96 96H96v-64H32v-32H0v128h128v-32zm-96-96h96v-96H96v64H32v32zm256-256h96V32h-32v64h-64v32z"
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
export class SvgUsMdFlagIcon {
  readonly class = input('');
}