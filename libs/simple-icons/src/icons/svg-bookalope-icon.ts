import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bookalope-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bookalope</title>
      <path
        d="M1.41816 24v-1.1842c.80965-.02052 1.45921-.08312 1.94767-.18676.48845-.10364.86198-.28014 1.12262-.5295.25962-.24936.43612-.60339.5295-1.06003.0934-.45767.1406-1.04977.1406-1.77732V4.7378c0-.72755-.03694-1.31452-.1098-1.76192-.07287-.44639-.21755-.79939-.43612-1.05901-.21859-.26065-.53464-.43715-.95024-.53053-.4156-.09338-.95638-.1611-1.62134-.20215V0h9.31966c2.80554 0 4.98717.49872 6.54592 1.49615 1.55874.99744 2.3376 2.39918 2.3376 4.20729 0 1.37198-.431 2.49358-1.29298 3.36685-.863.87225-2.22883 1.58954-4.09953 2.15085v.12417c.64443.0626 1.20574.13545 1.68394.21857.47717.08312.90303.18163 1.27758.29554.37353.11493.72243.25449 1.04464.42072.3212.16624.63828.35403.95023.56132 1.84916 1.30939 2.77373 2.95125 2.77373 4.92457 0 1.1021-.3058 2.1252-.91944 3.0703-.61262.94612-1.46947 1.68907-2.57158 2.22883-.353.18676-.71626.33761-1.09081.45254-.37353.1139-.81067.20729-1.3094.28014-.49871.07286-1.07542.12417-1.72908.15598-.6547.03079-1.42947.04618-2.32222.04618H1.41817Zm11.31452-1.34017c3.7609 0 5.64187-1.61006 5.64187-4.8312 0-2.34787-.96664-3.98974-2.89892-4.92458-.33247-.14571-.6547-.26988-.96664-.37455-.31196-.10364-.67522-.18163-1.09082-.23294-.4156-.05233-.90918-.08927-1.48076-.1098-.57158-.02052-1.27245-.03078-2.10364-.03078H8.431v6.95125c0 1.26732.33248 2.1765.99743 2.72653.66496.55105 1.76604.82607 3.30426.82607zm-2.55618-12.0626c.64443 0 1.1842-.01026 1.62134-.03079.43612-.02155.80965-.05746 1.1216-.1098.31196-.0513.58697-.12416.82607-.21754.2391-.09338.48332-.2237.73268-.38995.66496-.4156 1.137-.91431 1.41816-1.49615.28015-.58183.42073-1.34017.42073-2.27501 0-1.64187-.4002-2.82093-1.2006-3.53823-.7994-.71729-2.05131-1.07542-3.75577-1.07542H8.9605c-.353 0-.5295.1765-.5295.53053v8.60236z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBookalopeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
