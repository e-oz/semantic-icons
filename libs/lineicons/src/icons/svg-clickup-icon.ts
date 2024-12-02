import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-clickup-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.67188 17.3799L6.74178 15.0091C8.38312 17.1368 10.1156 18.1398 12.0305 18.1398C13.9454 18.1398 15.6476 17.1672 17.1977 15.0395L20.3284 17.3495C18.0792 20.3891 15.2828 22 12.0305 22C8.80865 22 5.98191 20.3891 3.67188 17.3799Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8482 7.13678L6.37704 11.848L3.85425 8.8997L11.8482 2L19.8117 8.8997L17.2585 11.8176L11.8482 7.13678Z"
        fill="#323544"
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
export class SvgClickupIcon {
  readonly class = input('');
}