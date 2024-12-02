import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-previous-step-2-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.91406 4.5C5.91406 4.08579 6.24985 3.75 6.66406 3.75C7.07828 3.75 7.41406 4.08579 7.41406 4.5V9.83812L15.567 4.27346C17.0605 3.2541 19.0854 4.32365 19.0854 6.13185L19.0854 17.868C19.0854 19.6762 17.0605 20.7457 15.567 19.7264L7.41406 14.1617V19.4999C7.41406 19.9142 7.07828 20.25 6.66406 20.25C6.24985 20.25 5.91406 19.9142 5.91406 19.4999V4.5ZM7.81514 12.6194L16.4126 18.4875C16.9104 18.8272 17.5854 18.4707 17.5854 17.868L17.5854 6.13185C17.5854 5.52912 16.9104 5.1726 16.4126 5.51238L7.81514 11.3805C7.37888 11.6782 7.37888 12.3216 7.81514 12.6194Z"
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
export class SvgPreviousStep2Icon {
  readonly class = input('');
}