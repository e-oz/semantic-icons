import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-asciidoctor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Asciidoctor</title>
      <path
        d="M18.0685 0H5.9318C2.6579 0 0 2.6578 0 5.9316v12.1367C0 21.3421 2.658 24 5.9318 24h12.1367C21.3423 24 24 21.3421 24 18.0683V5.9316C24 2.6578 21.3423 0 18.0685 0zM10.708 15.4038H8.8102c-.0018.0045-.0031.009-.005.0135L7.1986 19.282a.5058.5058 0 11-.934-.3883l1.4507-3.49H4.8677a.5058.5058 0 110-1.0113h5.8403a.5058.5058 0 110 1.0113zm7.9189 4.1647a.5058.5058 0 01-.6545-.2886L12.6206 6.2306l-2.395 5.761h1.551a.5058.5058 0 110 1.0113H5.9369a.5058.5058 0 110-1.0113h3.194c.0015-.0038.0026-.0075.0042-.0112l3.0223-7.2693a.5058.5058 0 01.457-.3112.5058.5058 0 01.4774.3137L18.908 18.896a.5058.5058 0 01-.2812.6725z"
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
export class SvgAsciidoctorIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
