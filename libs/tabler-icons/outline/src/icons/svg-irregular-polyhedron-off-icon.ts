import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-irregular-polyhedron-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-irregular-polyhedron-off"
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
      <path
        d="M4.706 4.73a1 1 0 0 0 -.458 1.14l1.752 6.13l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282 -2.503c.04 -.016 .079 -.035 .116 -.055m-.474 -4.474l-.802 -2.806l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-3.544 1.412"
      />
      <path
        d="M4.5 5.5c.661 .214 1.161 .38 1.5 .5m6 2c.29 -.003 .603 -.06 .878 -.17l6.622 -2.33"
      />
      <path
        d="M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l.742 -.265m2.956 -1.057c.312 -.11 .816 -.291 1.512 -.54"
      />
      <path d="M12 22v-10" />
      <path d="M3 3l18 18" />
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
export class SvgIrregularPolyhedronOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
