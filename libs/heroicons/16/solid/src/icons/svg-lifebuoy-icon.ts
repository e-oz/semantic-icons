import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lifebuoy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M12.95 3.05a7 7 0 1 0-9.9 9.9 7 7 0 0 0 9.9-9.9Zm-7.262-.042a5.516 5.516 0 0 1 4.624 0L8.698 5.082a3.016 3.016 0 0 0-1.396 0L5.688 3.008Zm-2.68 2.68a5.516 5.516 0 0 0 0 4.624l2.074-1.614a3.015 3.015 0 0 1 0-1.396L3.008 5.688Zm2.68 7.304 1.614-2.074c.458.11.938.11 1.396 0l1.614 2.074a5.516 5.516 0 0 1-4.624 0Zm7.304-2.68a5.516 5.516 0 0 0 0-4.624l-2.074 1.614c.11.458.11.938 0 1.396l2.074 1.614ZM6.94 6.939a1.5 1.5 0 1 1 2.122 2.122 1.5 1.5 0 0 1-2.122-2.122Z"
        clip-rule="evenodd"
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
export class SvgLifebuoyIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
