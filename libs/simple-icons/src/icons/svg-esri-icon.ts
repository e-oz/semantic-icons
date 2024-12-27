import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-esri-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ESRI</title>
      <path
        d="M11.63907.00273c-1.58143.03682-3.04264.4449-4.5349 1.06205-2.07095.87293-4.70641 2.88139-6.3117 6.6711-.37592 1.05578-1.8789 6.09024.79149 10.4125 2.16748 3.50692 4.95741 5.1768 8.37118 5.65348 3.407.47497 5.25533.06419 7.4101-.89245 5.03853-2.2369 8.88662-10.6343 5.03765-16.72016-1.51892-2.81012-5.49826-5.27459-9.85522-5.0841v.00203c-1.0304-.032-1.63648.10168-2.24524.22008-.18288-.04736-.52568.0027-.54516.39978 0 .21344.06847.37913.20393.4765.13463.09665 1.26407.93091 2.0938 1.81316-.39793.04416-.83039.11644-1.27404.20796-.4953-1.07017-2.08625-.09707-3.14374-.0545-.12362.0064-.24269.02388-.36546.03028-.116-.89409-.19886-1.82146-.17768-2.4734C8.46399.95065 11.11512.37795 12.91514.35002l.31498-.00807c.26416-.00253.28524-.21242.03635-.24634-.55902-.0764-1.10025-.10515-1.6274-.09288zm-.19181 1.53048c3.91137-.0172 7.3504 1.64094 8.92442 3.56977-.55965-.2912-1.76629-.7065-2.25735-.81572-.26503-.27008-.59885-.49013-.8884-.6764-.22862-.1456-.51429-.0915-.39575.16355.04487.0992.21919.26655.36142.4341-.83482-.2304-3.05425-.4063-4.11089-.30892-.69003-.77552-1.47719-1.71613-2.42292-2.34013.26453-.01646.5287-.0251.78947-.02625zm-4.85594.42603c-.01343.33869.07398 1.32823.18576 2.28158-.4826.04832-.96112.1076-1.43356.17768a10.2312 10.2312 0 0 0-2.63694 3.46074c-.09908-.89239-.15119-1.63544-.11307-2.09179 1.11167-1.55617 2.62028-3.07211 3.99781-3.82821Zm8.41763 2.64906c.48821.01708.98834.052 1.46587.10095-.85852.3072-1.23689 1.06143-1.65768 1.66172-.0086.0128-.02414.0228-.03432.03433a19.52175 19.52175 0 0 0-1.16503-1.7869c.4263-.02577.90295-.02717 1.39116-.0101zm-2.37446.12114a13.32749 13.32749 0 0 1 1.48 2.15236c-.68157.33021-1.59055.58218-1.96055 1.1105-.15324.22017-.1908.51855-.19585.84197a19.97303 19.97303 0 0 0-3.28305 1.0883c-.38355-1.12775-.71901-2.252-.951-3.25277 1.09728-1.04734 2.38035-1.21677 2.90952-1.6274a15.03184 15.03184 0 0 1 2.00093-.31296zm6.88917.634c.45127.17088 1.02885.40728 1.48606.6562.34713.43687 1.34084 1.41794 1.8717 4.16541.47752 2.47396-.05031 4.35392-.212 4.89834l-.16355.64005c-.116.43603-.50231 1.46609-.70467 1.8818.07706-.56134.14464-2.01894.12519-2.31187.13545.0416.4242-.12255.47246-.28671.04827-.16512-.4765-.41997-.4765-.41997a17.5617 17.5617 0 0 0-.14538-2.28562c.12023-.19489.24217-.38338.36748-.55526a10.22951 10.22951 0 0 0-.1575-1.3326c.10583.03456.20231.06196.27259.06259.23962.0032.23974-.1612.16354-.25239-.04912-.0592-.27844-.20134-.54515-.35536a10.17702 10.17702 0 0 0-2.35427-4.50461ZM1.86865 7.00497s.0517.8962.0949 1.55067c0 0-.66164.75067-.99946 1.34674.13463-1.22175.4228-1.85091.90456-2.89741Zm5.35263.2322c.19812 1.00074.4353 1.8284.7511 2.97817-1.18702.52323-3.28675 1.81816-4.21385 2.5158-.16765-.42503-.34209-1.02781-.49872-1.6476.21082-.62396.64191-1.06046 1.24982-1.1206 1.03971-.104 1.92998-1.65176 2.6632-2.6652.016-.0224.03322-.03914.04845-.06058zm-5.15274 2.2412.01413.11105c-.19472.7366-.31465 1.50207-.3392 2.2937.31328.3302.68222.87924 1.09031 1.44567-.26246.19488-.76785.54326-.88638.62794-.34714.24736-.34214.6363-.0949.85812.13632.12192.41646.07068.5189-.01013.30311-.24129.5554-.43255.90254-.65016.12701.33277.2466.63252.36344.9187-.14816.15904-.25318.3699-.28873.6764-.1143.99228.82833 1.76997 1.62336 1.99688.02976.0096.04997.01378.07874.0202.04233.06431.08029.1245.12519.18979-.41234.32006-.69452.64618-.8884.8985-.11179.1456-.23689.36469-.13529.40786.10413.04224.45398.0005.60977-.02826.39455-.07616.69856-.51352.97119-.67438.32766.45213.86082 1.03223 1.41539 1.59105.02463.10176.04676.20986.0747.29883.10583.34118.24894.67966.41998 1.01156.39877.18625.8147.33987 1.23972.4745a7.06464 7.06464 0 0 0-.52698.60979c-3.42563-1.07271-5.96304-3.96041-6.86898-6.9881a14.79562 14.79562 0 0 1-.55121-5.47984c.04742.0096.15677.06126.32103.01616.1143-.07872.52297-.3635.81168-.61583zm9.89157.18171c-.0066.28193-.03747.5502-.15345.76524-.16595.30976-.09014 1.20842.11307 1.50221.63923.9305 1.70123.41263 2.49964.74707.36661.15328.60998.40762.81572.71072-1.67133.10496-3.31108.49595-4.8317 1.19531C9.6219 12.92116 8.9476 10.7504 8.9476 10.7504v-.0021c.94828-.44874 1.9457-.81904 3.0125-1.0883ZM8.20257 11.0775c.42333 1.2624 1.02859 2.94991 1.44769 3.85244-.05927.0288-.12278.06248-.18374.09287a34.54682 34.54682 0 0 0-2.75607-.66023c-.84244-.1728-.87296-.1278-1.82123.14739-.13545.03904-.26553.075-.3917.11307a30.62419 30.62419 0 0 1-.37555-1.01763c1.21582-.93642 2.4406-1.72272 4.0806-2.5279Zm13.13626 1.9767c.05165.46314.08702.91557.10903 1.32453a7.83681 7.83681 0 0 0-.6562-.24835c.16594-.34458.3499-.71211.54717-1.07618zm-5.61108 1.17512c.16087.27936.34.55903.58554.80966.64093.6553-.372 1.59527-.08077 3.44862h-.0021c-.29971.032-.59767.06936-.86014.10903-.65194.1024-1.49203.32254-2.2735.6138-.44874-.71373-1.6503-2.44857-2.25736-3.75754 1.2209-.6003 2.92566-1.10421 4.88824-1.22357zm4.75498.55525c.35391.09984.68651.20722.97522.32507.03641.52157.03498 2.31123-.06663 3.18412-.1016.21409-.3635.58273-.53708.75717-.26416-.10657-.66046-.22014-1.07618-.31902.06605-.07968.13875-.15432.20393-.23624.22692-1.5206-.28641-2.0062.35536-3.39814zm-9.66947 2.3785c.48175.8111 1.05687 1.69252 1.50221 2.38254-.69342.33613-1.49939.85598-2.26139 1.4275.05248-.87802.07056-1.7466.24835-2.2089.24807-.64768.43971-1.12786.51083-1.60114zm8.54483 2.05342c.46313.05345.92549.13087 1.20742.20191-.62653.79249-1.49164 1.45313-2.41282 2.02718.01952-.34461.0334-.77986.04442-1.18117.41232-.32004.802-.66862 1.16098-1.04792zm-2.95192.01013c.09229.2896.21333.59656.37757.92677.16086.32343.34768.55909.5492.72082.07195-.0448.13884-.09663.20998-.14336-.0051.35559-.0153.71607-.03635 1.06407-.24215.16-1.41046.68857-1.86767.8359a19.83756 19.83756 0 0 1-2.06553-2.70962c.71459-.29985 1.81425-.56757 2.8328-.69458zm-3.62832 1.00148c.34036.5334 1.46049 2.1227 1.91006 2.63492-.81534.14208-1.95564.24903-2.85904.20999 0 0-1.35718-.89952-1.70008-1.24579.67987-.56474 1.78037-1.23506 2.64905-1.59912zM9.62198 22.2815c.39624.2624.81913.56327 1.15695.75716-.5207-.0592-1.13118-.07328-1.585-.22816.13124-.17183.26465-.38337.42805-.529Z"
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
export class SvgEsriIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
