import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-1001tracklists-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>1001Tracklists</title>
      <path
        d="M8.0957 1.334v1.3457H6.7461v1.3457H5.3984V5.371H4.0488v1.3457H2.6992v6.6816H1.3496v1.3477H0v2.4512h1.3496v1.3457h1.3496v1.3457h2.457v-7.836H3.8067V7.8223h1.3497V6.4766h1.3496V5.1309h1.3496V3.7852h8.289v1.3457h1.3496v1.3457h1.3496v1.3457h1.3497v4.2304h-1.3497v7.836h2.457V18.543h1.3497v-1.3457H24V14.746h-1.3496v-1.3477h-1.3496V6.7168h-1.3496V5.3711h-1.3496V4.0254h-1.3477V2.6797h-1.3496V1.334Zm1.3711 8v1.3515H8.1113v3.8165h2.4688v-4.0567h2.9512v4.3477h-1.3555v1.3515h-1.3535v2.4649h2.4668v-2.7051H16v-5.2188h-1.3555V9.334Zm1.3555 10.8691v2.463h2.4668v-2.463z"
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
export class Svg1001tracklistsIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}