import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-virus-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-virus-off"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3l18 18" />
      <path d="M8.469 8.46a5 5 0 0 0 7.058 7.084" />
      <path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853" />
      <path d="M12 7v-4" />
      <path d="M11 3h2" />
      <path d="M15.536 8.464l2.828 -2.828" />
      <path d="M17.657 4.929l1.414 1.414" />
      <path d="M17 12h4" />
      <path d="M21 11v2" />
      <path d="M18.364 18.363l-.707 .707" />
      <path d="M12 17v4" />
      <path d="M13 21h-2" />
      <path d="M8.465 15.536l-2.829 2.828" />
      <path d="M6.343 19.071l-1.413 -1.414" />
      <path d="M7 12h-4" />
      <path d="M3 13v-2" />
      <path d="M5.636 5.637l-.707 .707" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVirusOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
