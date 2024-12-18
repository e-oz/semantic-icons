import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-file-multiple-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8923 16.7332V4.25C16.8923 3.00736 15.885 2 14.6423 2H10.6929C10.0959 2 9.52341 2.23725 9.10142 2.65951L4.75226 7.01138C4.33061 7.4333 4.09375 8.00538 4.09375 8.60187V16.7332C4.09375 17.9759 5.10111 18.9832 6.34375 18.9832H14.6423C15.885 18.9832 16.8923 17.9759 16.8923 16.7332ZM14.6423 17.4832H6.34375C5.92954 17.4832 5.59375 17.1475 5.59375 16.7332V8.73129H8.57486C9.81813 8.73129 10.8257 7.72296 10.8249 6.47969L10.8227 3.5H14.6423C15.0565 3.5 15.3923 3.83579 15.3923 4.25V16.7332C15.3923 17.1475 15.0566 17.4832 14.6423 17.4832ZM6.65314 7.23129L9.32349 4.55928L9.32486 6.48076C9.32516 6.89518 8.98928 7.23129 8.57486 7.23129H6.65314Z"
        fill="#323544"
      />
      <path
        d="M18.4065 5.68442C18.4065 5.27021 18.7423 4.93442 19.1565 4.93442C19.5707 4.93442 19.9065 5.27021 19.9065 5.68442V17.2514C19.9065 19.8747 17.7799 22.0014 15.1565 22.0014H7.79765C7.38344 22.0014 7.04765 21.6656 7.04765 21.2514C7.04765 20.8371 7.38344 20.5014 7.79765 20.5014H15.1565C16.9514 20.5014 18.4065 19.0463 18.4065 17.2514V5.68442Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFileMultipleIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
