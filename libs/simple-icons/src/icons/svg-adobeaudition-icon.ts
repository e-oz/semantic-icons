import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-adobeaudition-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Adobe Audition</title>
      <path
        d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM12.5 16.8h-2.09c-.07.011-.14-.04-.16-.11l-.82-2.39H5.71l-.76 2.36c-.02.09-.1.15-.19.14H2.88c-.11 0-.14-.06-.11-.18l3.22-9.24c.03-.1.06-.21.1-.33.05-.21.08-.42.08-.64-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.63 10.261c.03.109 0 .159-.1.159zm7.75.011h-1.721c-.079.01-.159-.041-.189-.11-.02-.08-.04-.171-.061-.25-.02-.07-.02-.14-.02-.21-.32.289-.71.5-1.13.619-.36.101-.739.15-1.11.15-.369 0-.74-.05-1.09-.17-.32-.109-.619-.3-.85-.55-.26-.28-.45-.61-.561-.97-.14-.461-.209-.94-.199-1.42V8.94c-.01-.06.029-.12.1-.13h1.939c.061-.01.121.03.131.1v4.731c0 .439.1.789.289 1.039.191.25.58.381 1.031.381.229 0 .459-.041.68-.121.23-.08.439-.189.63-.33V8.92c0-.07.05-.11.14-.11h1.91c.051-.01.109.03.109.08v6.16c0 .271 0 .511.011.72.01.211.021.391.03.551.02.16.029.25.039.359.012.09-.028.131-.108.131zM8.33 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86z"
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
export class SvgAdobeauditionIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
