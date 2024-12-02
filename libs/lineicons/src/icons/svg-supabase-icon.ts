import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-supabase-icon',
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
        d="M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"
        fill="#323544"
      />
      <path
        d="M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"
        fill="#323544"
      />
      <path
        d="M10.3574 2.33232C10.8684 1.68882 11.9044 2.04141 11.9167 2.86299L11.9956 14.8794H4.01686C2.55334 14.8794 1.73711 13.189 2.64717 12.0429L10.3574 2.33232Z"
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
export class SvgSupabaseIcon {
  readonly class = input('');
}