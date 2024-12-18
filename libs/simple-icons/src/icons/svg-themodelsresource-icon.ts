import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-themodelsresource-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>The Models Resource</title>
      <path
        d="M1.25 0C.557 0 0 .557 0 1.25v21.5C0 23.442.557 24 1.25 24h21.5c.692 0 1.25-.558 1.25-1.25V1.25C24 .557 23.442 0 22.75 0h-2.734c1.667 1.037 1.521 11.428 1.68 18.734.023 1.1.616 3.805.616 3.805s-1.702.913-3.15 1.373c-.652-2.478-.633-3.488-.633-3.488l-.181-10.67-.4-4.62c-2.156 3.08-3.445 6.123-3.987 8.007-1.442.915-1.92 1.09-2.957 1.384-1.056-.552-3.91-3.216-4.961-3.921 2.096 6.826 2.238 9.642 2.238 9.642s-2.231 1.759-2.797 1.606c-.232-.064-.495-.275-.507-.516-.183-3.672-.76-5.902-1.508-8.773C2.576 9.13.32 4.07.32 4.07c.948-.641 1.52-.883 2.836-1.265L11.61 11S16.073 3.616 17.104.906c0 0 2.244-.748 2.71-.906H1.25z"
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
export class SvgThemodelsresourceIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
