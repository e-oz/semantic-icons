import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-surfshark-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Surfshark</title>
      <path
        d="M11.47 0C7.815.2 6.3 2.293 5.872 3.43c-1.615 4.866-3.127 14.325-3.33 15.662-.201 1.31-.228 2.119-.228 2.119 0 .328.026.705.102 1.059.454 1.286 1.792 2.37 4.768 1.287a192.353 192.353 0 0 0 9.533-4.44c1.387-.807 3.227-2.32 4.236-4.312.404-.807.682-1.716.733-2.65v-.452c-.026-2.295-.052-4.692-.204-7.013 0 0-.125-1.488-.2-2.017-.076-.53-.177-.733-.177-.733C20.626.906 19.693.38 18.71.126 18.23.026 17.7.024 17.095 0Zm4.692 4.44h.252c.277 0 .48.2.48.452V6.53c0 .252-.203.455-.48.455h-.252c-1.589 0-2.875 1.26-2.875 2.8v2.498c0 2.976-2.472 5.37-5.498 5.37h-.254c-.277 0-.478-.2-.478-.452v-1.64c0-.253.226-.454.478-.454h.254c1.589 0 2.875-1.262 2.875-2.8V9.81c0-2.977 2.472-5.373 5.498-5.373z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSurfsharkIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}