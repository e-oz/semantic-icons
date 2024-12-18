import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-filetype-woff-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-filetype-woff"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-5.464 9.688v-.522q0-.386-.117-.641a.86.86 0 0 0-.323-.387.86.86 0 0 0-.468-.129.87.87 0 0 0-.472.13.87.87 0 0 0-.32.386q-.116.255-.116.641v.522q0 .384.117.641a.87.87 0 0 0 .319.387.9.9 0 0 0 .472.126.9.9 0 0 0 .468-.126.86.86 0 0 0 .323-.386 1.55 1.55 0 0 0 .117-.642m.803-.516v.513q0 .563-.205.973-.205.406-.59.627-.38.216-.916.216-.534 0-.92-.216a1.46 1.46 0 0 1-.59-.627 2.15 2.15 0 0 1-.204-.973v-.513q0-.569.205-.975.205-.411.589-.627.386-.22.92-.22.536 0 .917.22.384.219.589.63.204.406.205.972m-6.064-.536-.74 2.79h-.73l-1.055-4h.855l.601 2.903h.038l.706-2.903h.683l.706 2.903h.04l.596-2.903h.858l-1.055 4h-.73l-.74-2.79zm7.398 2.79v-1.592h1.606v-.638h-1.606v-1.117h1.758v-.653H9.882v4zm2.988-1.592v1.591h-.791v-3.999h2.548v.653h-1.757v1.117h1.605v.638z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFiletypeWoffIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
