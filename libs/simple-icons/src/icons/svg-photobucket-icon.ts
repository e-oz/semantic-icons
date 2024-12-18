import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-photobucket-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Photobucket</title>
      <path
        d="M23.9916 11.4983C23.7324 5.0509 18.4725 0 12.0083 0c-6.6146.0084-12 5.3854-12 12s5.3854 12 12 12c6.414 0 11.6488-4.984 11.975-11.3728 0-.0335 0-.0586.0084-.092zm-6.0125-7.1248c.0752.0251.1505.0586.2341.1004a7.8226 7.8226 0 0 0-1.9902-.2593c-3.9972 0-7.4007 3.1108-7.752 7.0913-.0078.131-.0167.262-.025.393 0 .1004-.0085.2008-.0085.3095 0 .1003 0 .2007.0084.2927 0 .0935.0252.12.0252.418.3512 3.9722 3.7547 7.0746 7.7519 7.0746.6857 0 1.3547-.092 1.9902-.2592-.0213 0-.1057.0492-.2341.092-.0787.0197-.0313.0141-.1088.0334-.195.078-.3957.1394-.5937.209-.3658.1046-.53.1442-.6188.159-.2014.0533-.962.2007-1.731.2007-4.524 0-8.2118-3.6795-8.2118-8.2119s3.6794-8.2119 8.2118-8.2119c.2592 0 .5185.0168.7944.0419.2059.0137.4498.0572.7694.117.1421.0303.2843.0614.4264.092.229.056.4517.1338.6774.2007.2886.105.2882.1128.3512.1338zm-8.6802 7.476v-.1004c.1255-2.1156 1.89-3.7798 4.014-3.7798 2.216 0 4.0223 1.8063 4.0223 4.0223s-1.8063 4.0223-4.0223 4.0223c-2.124 0-3.8885-1.6557-4.014-3.7547v-.0418c-.0183-.164 0-.2535 0-.368zm4.0224 5.0341c2.6926 0 4.8836-2.191 4.8836-4.8836 0-2.6927-2.191-4.8836-4.8836-4.8836-.1171 0-.2258.0083-.343.0167a5.06 5.06 0 0 1 1.3882-.1923c2.793 0 5.0593 2.2745 5.0593 5.0592 0 2.7847-2.2746 5.0592-5.0593 5.0592a5.105 5.105 0 0 1-1.3881-.1923c.1139.0129.2286.0112.3429.0167zM20.287 12c0-3.2279-2.6007-5.862-5.8119-5.9205a6.269 6.269 0 0 1 .8028-.0502c3.2948 0 5.9791 2.6843 5.9791 5.979 0 3.2949-2.6843 5.9792-5.979 5.9792-.276 0-.5436-.0168-.8029-.0502 3.2112-.0753 5.8119-2.7094 5.8119-5.9373zm-5.009 6.832c3.7714 0 6.8403-3.069 6.8403-6.8404s-3.069-6.8404-6.8404-6.8404h-.0752c.3345-.0502.669-.0836 1.0118-.0836 3.6711 0 6.6983 2.86 6.9073 6.5226v.8028c-.2007 3.6627-3.2362 6.5227-6.9073 6.5227 0-.0043-.3691.0152-1.0118-.0836h.0752zm-3.2698 4.2983C5.8703 23.1303.878 18.138.878 12S5.8704.8697 12.0083.8697c1.9401 0 3.7548.485 5.3436 1.3547-.1547-.0773-1.0103-.3596-1.1206-.3596-.1254-.0334-.2508-.0669-.368-.092-.2798-.0646-1.2458-.2676-2.3748-.2676C7.6934 1.4885 2.9854 6.205 2.9854 12s4.7163 10.5115 10.5115 10.5115c1.2478 0 2.2205-.2353 2.2829-.2509.2278-.0439.4826-.1254.5352-.1254.2102-.0418.8923-.2789 1.0536-.3595-1.5888.8613-3.4202 1.3547-5.3603 1.3547zm4.9339-2.124c-.2474.0927-.6369.2302-.9283.2927-.117.0334-.2341.0585-.3763.092-.027.0099-.056.0111-.0836.0167a3.5193 3.5193 0 0 1-.4098.0752 10.0077 10.0077 0 0 1-1.664.1422c-5.3186 0-9.6502-4.3317-9.6502-9.6502s4.34-9.6251 9.6585-9.6251c1.8086 0 3.0386.4746 3.671.7275l.3513.1505c.1505.067.2927.1422.4348.2175-.1375-.0525-.2787-.0948-.418-.1422-.3346-.1045-.7668-.1896-.8781-.2174-.4264-.0753-.6721-.107-.8446-.117-.2927-.0252-.5854-.0419-.8697-.0419-5.009 0-9.0816 4.0725-9.0816 9.0732s4.0725 9.0732 9.0732 9.0732c.2843 0 .577-.0168.8613-.0419.1548-.0085.792-.09 1.062-.1672.092-.0167.1757-.0418.2677-.0585.7113-.1779.7506-.2426.8195-.2426-.1422.0753-.2844.1505-.4349.2174-.2868.1119-.2934.1259-.5602.2259z"
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
export class SvgPhotobucketIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
