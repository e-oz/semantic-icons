import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-primevue-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PrimeVue</title>
      <path
        d="m6.4101 0-2.565 2.565 3.8487.3664L8.8776.226l2.6637 6.8825v.0012l.3498.903.3843-.9291v-.0013L14.75 1.0898v-.0012l.2748-.6663 1.0993 2.5091 3.8487-.3664L17.4066 0H8.9763Zm2.3913 1.7191L8.071 3.455l-2.8863-.2213-3.7226-.3022 1.0993 4.5804L7.8437 9.476l.0143.0262 2.5579.9446h.2439l-.0012-.0048h.8827V8.7967Zm6.2817.1606L12.2754 8.679v1.7632h1.0053l-.0012.0048.2439-.0048h.0345l.0024-.0012h.0238l2.3758-.878.0107-.0179 5.468-2.0332 1.0993-4.5803-4.0415.3188-2.7494.2058zM2.7446 8.2447v6.2281l4.3984 3.6643v-5.6797l1.2837-1.8321-1.6501.3664-2.0154-2.0142Zm18.3275 0-2.0166.7328-2.0153 2.0142-1.6501-.3664 1.2837 1.8321v5.6797l4.3983-3.6643zM9.137 10.599l-.3045.4866.0095.0167-1.148 1.7215v8.2447l1.0992 1.6489L10.0756 24h3.6655l1.2825-1.2825 1.1005-1.649V12.824l-1.1492-1.7227.0095-.0155-.1797-.2391-.1475-.2213-.0131.0071-.025-.0333-.7911.4866h-3.6548zm-4.3757 6.2555v2.3818l2.3818 2.3818V18.87zm14.2943 0L16.6739 18.87v2.7482l2.3818-2.3818z"
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
export class SvgPrimevueIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
