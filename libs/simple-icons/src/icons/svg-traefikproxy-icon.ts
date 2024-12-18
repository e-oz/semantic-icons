import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-traefikproxy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Traefik Proxy</title>
      <path
        d="M12 1.19c1.088 0 2.056.768 2.056 1.714 0 .947-.921 1.715-2.056 1.715-.13 0-.3-.022-.509-.064a.685.685 0 0 0-.475.076l-7.37 4.195a.344.344 0 0 0 .001.597l7.99 4.49c.208.116.461.116.669 0l8.034-4.468a.343.343 0 0 0 .003-.598l-2.507-1.424a.683.683 0 0 0-.67-.003l-2.647 1.468a.234.234 0 0 0-.119.18l-.001.025c0 .946-.921 1.714-2.056 1.714s-2.056-.768-2.056-1.714c0-.947.921-1.715 2.056-1.715.042 0 .09.002.145.007l.087.008.096.013a.685.685 0 0 0 .425-.08l3.913-2.173c.3-.166.662-.171.965-.017l.04.023 5.465 3.104c.686.39.693 1.368.03 1.773l-.037.021-3.656 2.033a.343.343 0 0 0 .007.604l3.62 1.906c.72.378.736 1.402.03 1.804l-10.995 6.272a1.03 1.03 0 0 1-1.019 0L.526 16.43a1.03 1.03 0 0 1 .034-1.806l3.66-1.911a.343.343 0 0 0 .01-.603L.524 10.029a1.03 1.03 0 0 1-.041-1.77l.036-.021L9.618 3.06a.688.688 0 0 0 .308-.369l.011-.036c.32-.952 1.046-1.466 2.063-1.466Zm5.076 12.63-4.492 2.586-.041.022c-.306.158-.671.152-.973-.018l-4.478-2.527a.682.682 0 0 0-.65-.01L3.86 15.224a.343.343 0 0 0-.012.602l7.887 4.515c.21.12.467.121.677 0l7.956-4.547a.343.343 0 0 0-.01-.602l-2.623-1.384a.683.683 0 0 0-.659.012z"
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
export class SvgTraefikproxyIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
