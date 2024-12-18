import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-builtbybit-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>BuiltByBit</title>
      <path
        d="M11.877.032 1.252 5.885a.253.253 0 0 0 .003.446l5.679 3.02c.077.041.17.04.246-.004l4.694-2.697a.254.254 0 0 1 .253 0l4.692 2.697a.253.253 0 0 0 .246.004l5.682-3.021a.253.253 0 0 0 .003-.446L12.122.031a.254.254 0 0 0-.245 0ZM6.924 10.898l-5.71-3.036a.254.254 0 0 0-.373.224V18.25c0 .093.05.178.131.222l9.976 5.495a.254.254 0 0 0 .376-.222v-6.053a.255.255 0 0 0-.127-.22l-4.012-2.305a.252.252 0 0 1-.127-.22v-3.825a.253.253 0 0 0-.135-.224Zm10.152 0 5.71-3.035a.254.254 0 0 1 .373.224v10.164c0 .093-.05.178-.131.222l-9.976 5.495a.254.254 0 0 1-.376-.222v-6.053c0-.091.049-.175.127-.22l4.012-2.305a.252.252 0 0 0 .127-.22v-3.825c0-.094.052-.18.135-.224Z"
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
export class SvgBuiltbybitIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
