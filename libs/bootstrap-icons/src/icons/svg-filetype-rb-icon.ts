import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-filetype-rb-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-filetype-rb"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.597q.446 0 .758.158.315.155.478.44.167.284.167.668a1.18 1.18 0 0 1-.727 1.122l.803 1.611h-.885l-.7-1.491H.782v1.491H0zm.782.621v1.292h.689q.327 0 .518-.158.195-.159.194-.475 0-.32-.194-.489a.74.74 0 0 0-.507-.17zm4.426 3.378H3.544V11.85h1.67q.536 0 .858.26.322.262.322.724a.94.94 0 0 1-.09.422.8.8 0 0 1-.244.293 1 1 0 0 1-.351.161v.035q.243.024.445.141a.85.85 0 0 1 .322.325 1 1 0 0 1 .123.51q0 .357-.178.61-.18.25-.492.386a1.9 1.9 0 0 1-.721.132m-.179-3.404h-.7v1.07h.521q.267 0 .434-.065a.5.5 0 0 0 .249-.185.5.5 0 0 0 .082-.296.49.49 0 0 0-.155-.384q-.153-.14-.43-.14Zm.05 1.62h-.75v1.19h.589q.466 0 .67-.147a.5.5 0 0 0 .206-.434.6.6 0 0 0-.082-.325.5.5 0 0 0-.24-.21.95.95 0 0 0-.393-.074"
      />
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
export class SvgFiletypeRbIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
