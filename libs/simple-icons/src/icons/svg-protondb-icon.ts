import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-protondb-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ProtonDB</title>
      <path
        d="M1.744 0C.781 0 0 .781 0 1.744v20.512C0 23.219.781 24 1.744 24h20.512c.963 0 1.744-.782 1.744-1.74V1.744C24 .781 23.218 0 22.26 0zm14.729 2.205v.004c.37 0 .704.08.996.25 1.26.728 1.55 2.996.904 5.846 2.8.855 4.625 2.238 4.625 3.695 0 1.457-1.813 2.836-4.6 3.691.65 2.84.367 5.102-.894 5.83a2.03 2.03 0 01-1.012.25c-1.232 0-2.846-.869-4.478-2.384-1.633 1.525-3.245 2.404-4.477 2.404-.376 0-.712-.079-1.006-.25-1.26-.728-1.55-2.996-.904-5.846-2.8-.855-4.625-2.238-4.625-3.695 0-1.452 1.814-2.83 4.605-3.69-.65-2.84-.366-5.103.895-5.831a2.03 2.03 0 011.012-.25V3.23c-.206 0-.377.035-.514.118-.606.352-.866 1.687-.656 3.398.054.416.133.85.236 1.299.875-.22 1.838-.385 2.85-.492a21.401 21.401 0 011.851-2.24C9.82 3.962 8.446 3.227 7.518 3.227V2.225c1.231 0 2.846.87 4.478 2.384 1.633-1.525 3.245-2.404 4.477-2.404zm-.006 1.002c-.929.003-2.3.745-3.758 2.102.635.66 1.261 1.413 1.867 2.244 1.007.107 1.964.273 2.844.488.098-.455.181-.9.23-1.32.206-1.711-.059-3.04-.67-3.393a1.037 1.037 0 00-.513-.117zm-4.483 2.81c-.41.43-.824.91-1.23 1.438a26.105 26.105 0 012.478 0 17.822 17.822 0 00-1.248-1.437zM12 8.428c-.684 0-1.36.03-2.03.089a24.514 24.514 0 00-1.08 1.71c-.337.587-.648 1.188-.927 1.79.283.6.591 1.196.933 1.783.352.601.713 1.172 1.084 1.705.665.054 1.34.084 2.02.084.684 0 1.36-.03 2.03-.088a24.51 24.51 0 001.08-1.71c.332-.592.644-1.194.927-1.79a23.03 23.03 0 00-.933-1.785 25.587 25.587 0 00-1.086-1.705A25.016 25.016 0 0012 8.428zm-3.334.23c-.64.092-1.256.214-1.848.35.171.582.377 1.185.621 1.786a25.469 25.469 0 011.227-2.137zm6.658 0a23.32 23.32 0 011.23 2.127c.235-.597.442-1.194.608-1.77a18.82 18.82 0 00-1.838-.358zm2.81.62a22.088 22.088 0 01-.997 2.72c.415.938.753 1.85 1.008 2.73.435-.142.854-.287 1.24-.454 1.583-.674 2.61-1.57 2.625-2.27 0-.703-1.027-1.587-2.615-2.267a13.533 13.533 0 00-1.26-.459zm-12.282.006c-.435.142-.856.287-1.243.453-1.588.67-2.615 1.566-2.615 2.27s1.027 1.588 2.615 2.267c.391.167.812.318 1.252.46a22.04 22.04 0 01.996-2.717 21.563 21.563 0 01-1.005-2.733zm6.142.668A2.048 2.048 0 0114.043 12a2.048 2.048 0 01-2.049 2.049A2.048 2.048 0 019.947 12a2.048 2.048 0 012.047-2.049zm4.56 3.252c-.185.362-.374.723-.58 1.08a25.52 25.52 0 01-.646 1.06c.64-.092 1.261-.215 1.848-.357a18.93 18.93 0 00-.621-1.783zm-9.115.024c-.234.596-.439 1.192-.605 1.77.587.14 1.202.258 1.838.35a37.4 37.4 0 01-.647-1.044c-.21-.357-.4-.72-.586-1.076zm9.99 2.728c-.874.22-1.837.385-2.849.492a21.402 21.402 0 01-1.851 2.24c1.461 1.35 2.834 2.086 3.763 2.086.205 0 .377-.034.514-.117.606-.352.864-1.685.654-3.396-.054-.416-.133-.85-.23-1.305zm-10.845.01c-.098.454-.182.9-.23 1.32-.206 1.711.058 3.039.67 3.39.131.079.304.119.51.124.928 0 2.301-.743 3.763-2.102a21.53 21.53 0 01-1.867-2.244 21.806 21.806 0 01-2.846-.488zm4.18.586c.41.528.83 1.007 1.246 1.437.41-.43.831-.91 1.232-1.437a26.056 26.056 0 01-2.478 0z"
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
export class SvgProtondbIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
