import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tilt-shift-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-tilt-shift"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8.178 2.766a1 1 0 1 1 .764 1.848a8 8 0 0 0 -2.595 1.733a1 1 0 1 1 -1.414 -1.414a10 10 0 0 1 3.245 -2.167"
      />
      <path
        d="M2.767 8.176a1 1 0 1 1 1.846 .768a8 8 0 0 0 -.613 3.058a1 1 0 0 1 -2 -.004a10 10 0 0 1 .767 -3.822"
      />
      <path
        d="M3.308 14.516a1 1 0 0 1 1.306 .542a8 8 0 0 0 1.733 2.595a1 1 0 1 1 -1.414 1.414a10 10 0 0 1 -2.167 -3.245a1 1 0 0 1 .542 -1.306"
      />
      <path
        d="M7.637 19.926a1 1 0 0 1 1.307 -.54a8 8 0 0 0 3.058 .614a1 1 0 0 1 -.004 2a10 10 0 0 1 -3.822 -.767a1 1 0 0 1 -.54 -1.307"
      />
      <path
        d="M17.653 17.653a1 1 0 1 1 1.414 1.414a10 10 0 0 1 -3.245 2.167a1 1 0 1 1 -.764 -1.848a8 8 0 0 0 2.595 -1.733"
      />
      <path
        d="M21.002 11a1 1 0 0 1 .998 1.002a10 10 0 0 1 -.767 3.822a1 1 0 1 1 -1.846 -.768a8 8 0 0 0 .613 -3.058a1 1 0 0 1 1.002 -.998"
      />
      <path
        d="M17.653 4.933a1 1 0 0 1 1.414 0a10 10 0 0 1 2.167 3.245a1 1 0 1 1 -1.848 .764a8 8 0 0 0 -1.733 -2.595a1 1 0 0 1 0 -1.414"
      />
      <path
        d="M12.002 2a10 10 0 0 1 3.822 .767a1 1 0 1 1 -.768 1.846a8 8 0 0 0 -3.058 -.613a1 1 0 0 1 .004 -2"
      />
      <path d="M12 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
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
export class SvgTiltShiftIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
