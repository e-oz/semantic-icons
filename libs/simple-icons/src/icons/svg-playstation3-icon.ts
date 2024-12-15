import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-playstation3-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PlayStation 3</title>
      <path
        d="M15.362 9.433h-3.148c-.97 0-1.446.6-1.446 1.38v2.365c0 .483-.228.83-.71.83H7.304a.035.035 0 00-.035.035v.47c0 .02.01.032.03.032h3.11c.97 0 1.45-.597 1.45-1.377v-2.363c0-.484.224-.832.71-.832h2.781c.02 0 .04-.014.04-.033v-.475c0-.02-.02-.035-.04-.035zm-9.266 0H.038c-.022 0-.038.017-.038.035v.477c0 .02.016.036.038.036h5.694c.48 0 .71.347.71.83s-.228.83-.71.83H1.228c-.7 0-1.227.586-1.227 1.365v1.513c0 .02.02.037.04.037h1.03c.02 0 .04-.016.04-.037v-1.513c0-.48.28-.82.68-.82H6.1c.97 0 1.444-.594 1.444-1.374 0-.778-.473-1.38-1.442-1.38zm17.453 2.498a.04.04 0 010-.056c.3-.25.45-.627.45-1.062 0-.778-.474-1.38-1.446-1.38h-6.057c-.02 0-.036.018-.036.038v.475c0 .02.02.04.04.04h5.7c.48 0 .715.35.715.83s-.23.83-.712.83h-5.7c-.02 0-.036.02-.036.04v.48c0 .02.016.033.037.033h5.7c.63.007.71.62.71.93v.06c0 .485-.23.833-.71.833h-5.7c-.02 0-.036.015-.036.034v.477c0 .02.015.037.036.037h6.05c.973 0 1.446-.645 1.446-1.38v-.057c0-.47-.15-.916-.45-1.19z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlaystation3Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
