import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-argos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Argos</title>
      <path
        d="M0 1.738v20.524h24V1.738zm5.93 5.546c.178 0 .434 0 .638.026.23 0 .307.077.333.281.051.792.23 4.217.256 4.907 0 .18-.103.23-.23.23H6.21c-.179 0-.256-.102-.256-.23 0-.255-.026-.92-.026-.92H3.987c-.204.358-.434.767-.537.946-.076.153-.178.179-.306.179h-.818c-.18 0-.23-.128-.153-.281C3.272 10.428 4.677 8.255 5.29 7.54c.178-.23.383-.23.638-.256zM5.831 8.48a.095.095 0 0 0-.03.032c-.46.562-1.048 1.483-1.38 2.122h1.507S5.88 9.15 5.853 8.51c0 0 0-.043-.021-.032zm14.666.237c.614 0 1.125.28 1.355.664.102.154.076.255-.077.332a3.512 3.512 0 0 1-.434.205c-.128.025-.23.025-.333-.102-.434-.512-1.047-.333-1.073-.051-.026.255.256.357.639.46.588.178 1.252.485 1.048 1.277-.205.818-.997 1.227-1.917 1.227-.588 0-1.253-.178-1.508-.792-.051-.128-.026-.23.077-.28.153-.103.307-.18.46-.231.128-.026.23 0 .306.102.18.256.384.384.716.384.307 0 .639-.129.613-.41-.025-.255-.408-.357-.613-.409-.383-.102-1.176-.28-1.176-.92 0-.792.741-1.38 1.917-1.456zm-3.834.076c1.227 0 1.79.818 1.534 1.994-.23 1.176-1.15 1.993-2.377 1.993-1.227 0-1.789-.817-1.533-1.993.255-1.176 1.15-1.994 2.376-1.994zm-4.421.026c.562 0 .869.332.945.46 0 .025.026.025.026 0 .025-.077.051-.128.051-.153.026-.128.128-.23.307-.23h.51c.154 0 .282.102.231.306a96.306 96.306 0 0 1-.741 3.067c-.384 1.482-1.15 2.224-2.3 2.224-.46 0-1.227-.128-1.56-.664-.076-.103-.102-.205.077-.333.154-.102.332-.153.486-.205.153-.05.204-.05.357.052a.906.906 0 0 0 .563.179c.409 0 .946-.23 1.201-1.1.026-.05 0-.05-.025-.025-.18.23-.563.383-.997.383-.537-.025-.869-.204-1.074-.536-.23-.358-.204-.997-.025-1.56.28-.894.971-1.865 1.968-1.865zm-3.86.026h.614c.127 0 .179.101.153.204-.025.102-.051.179-.051.204 0 .026.025.026.025.026.46-.41 1.049-.409 1.688-.409.102 0 .153.102.076.179-.23.23-.358.409-.511.639-.102.153-.18.204-.358.204-.409.026-.613.102-.767.205-.153.102-.307.434-.383.818a48.306 48.306 0 0 1-.332 1.61.224.224 0 0 1-.23.179h-.742c-.102 0-.178-.077-.153-.18.128-.715.64-3.117.716-3.475.026-.154.128-.204.256-.204zm8.205.792c-.69 0-.971.562-1.15 1.15-.154.588-.23 1.15.46 1.15.69 0 .97-.562 1.15-1.15.179-.588.23-1.15-.46-1.15zm-4.217.025c-.512-.025-.87.384-1.1 1.15-.127.41-.153 1.023.384 1.1.537.025.895-.358 1.099-1.1.128-.485.256-1.124-.383-1.15zM2.338 13.958a.32.32 0 0 1 .09.023c3.68 1.508 6.058 2.07 9.406 2.07 3.348 0 5.725-.562 9.43-2.07.256-.102.41.153.155.306-1.457.92-4.805 2.812-9.585 2.812-4.78 0-8.153-1.892-9.56-2.812-.223-.134-.133-.346.064-.329z"
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
export class SvgArgosIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
