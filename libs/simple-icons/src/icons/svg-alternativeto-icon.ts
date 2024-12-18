import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-alternativeto-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>AlternativeTo</title>
      <path
        d="M12 .416C18.398.416 23.584 5.602 23.584 12S18.398 23.584 12 23.584.416 18.397.416 12 5.602.416 12 .416M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.616 0 12 0m6.509 18.136-.056.012q.051.177.094.345l.202.812q.688-.639 1.249-1.394c-.305.036-.618.074-.923.117-.188.026-.372.066-.567.108zm.931-4.295c-3.783-.612-7.762.613-10.989 2.561-.757.457-1.59.91-2.129 1.632-.368.494-.561 1.081-.679 1.68q.464.381.975.704l.002-.099c.013-.41.064-.827.229-1.206.182-.42.478-.679.843-.938.756-.538 1.598-.967 2.412-1.392.055-.03.134-.029.202-.043.015.062.048.125.043.185-.02.283-.014.567-.007.85.022 1.016.088 2.032.157 3.047q.035.525.072 1.049.693.096 1.391.097a9.94 9.94 0 0 0 6.093-2.074l-.425-1.471q-.009-.032-.02-.063l-.064.017c-1.237.343-2.495.826-3.845 1.476l-.036.018c-.059.031-.14.074-.237.074h-.002c-.118 0-.278-.065-.34-.189-.064-.128-.017-.305.064-.398.066-.075.152-.121.22-.158l.038-.02a18.3 18.3 0 0 1 3.913-1.63l-.07-.179c-.101-.26-.205-.53-.32-.789-.148-.333-.317-.666-.48-.988l-.084-.167c-.054-.107-.109-.248-.055-.388a.34.34 0 0 1 .205-.192c.175-.064.436.065.511.214.415.816.77 1.546 1.087 2.23l.029.056.047-.008a9 9 0 0 1 2.342-.229 10 10 0 0 0 .886-1.91c-.545-.699-1.194-1.231-1.98-1.358zm2.428-2.827a8 8 0 0 0-.098-.649q-.046-.24-.096-.478c-.036-.171-.066-.344-.109-.514a9.2 9.2 0 0 0-1.158-2.73 9 9 0 0 0-.867-1.165 10 10 0 0 0-1.026-1.015 10.2 10.2 0 0 0-5.943-2.409 10 10 0 0 0-1.47.013 9.8 9.8 0 0 0-2.922.716 9 9 0 0 0-.709.33q-.164.085-.325.175a10.1 10.1 0 0 0-5.017 7.83c-.05.942.017 1.886.194 2.813h-.001s.191 1.124.298 1.334c.526 1.989 1.443 3.744 2.648 3.419a.167.167 0 0 0 .111-.208q-.003-.011-.008-.021a.95.95 0 0 1-.523-.377c-.666-1.117 2.723-3.509 7.351-5.269 4.252-1.619 8.091-2.144 8.965-1.285.173.141.24.376.168.588a3.03 3.03 0 0 1-.934 1.43.19.19 0 0 0 0 .269.18.18 0 0 0 .244.011 3.54 3.54 0 0 0 1.17-1.682c.028-.085.034-.187.045-.276a3.8 3.8 0 0 0 .011-.851zM6.253 14.668c-.566.402-1.553 1.122-1.967 1.925-.161.31-.312.069-.406-.107a10 10 0 0 1-.541-1.518l-.001-.003c-.066-.241-.282-1.04-.303-1.277l.001-.001a10.8 10.8 0 0 1-.187-2.638 9.35 9.35 0 0 1 4.635-7.227 10 10 0 0 1 .715-.362c.236-.107 1.191-.463.246.375a8.4 8.4 0 0 0-2.727 5.482c-.092 1.076.221 3.091.773 4.57.173.463.031.592-.238.782zM17.46 9.7a.44.44 0 0 1-.296.193c-1.068.149-2.12.398-3.14.745a.45.45 0 0 1-.356-.044.44.44 0 0 1-.203-.295l-.08-.369a.2.2 0 0 1 .114-.227 12.6 12.6 0 0 1 3.736-.863.19.19 0 0 1 .198.157l.084.354c.03.119.01.246-.057.349m2.032-1.876a.166.166 0 0 1-.183.106c-2.948-.438-7.069 1.073-7.069 1.073a17.7 17.7 0 0 0-4.049 1.912.493.493 0 0 1-.754-.319 8 8 0 0 1-.131-1.14 5.8 5.8 0 0 1 .575-3.012q.04-.078.087-.154a.1.1 0 0 1 .018-.037l.015-.025.035-.06.017-.027c1.429-2.34 4.636-3.273 7.197-2.511a7.43 7.43 0 0 1 3.335 2.123c.141.165 1.09 1.485.907 2.071m-1.533-1.599-.002.005a4 4 0 0 0-1.907-1.67 5.84 5.84 0 0 0-2.824-.43 3.8 3.8 0 0 0-1 .22.14.14 0 0 0-.097.148.135.135 0 0 0 .132.117 8.3 8.3 0 0 1 2.177.058c2.651.53 3.5 1.806 3.593 1.856.027.013.058-.013.045-.039a3 3 0 0 0-.117-.265"
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
export class SvgAlternativetoIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
