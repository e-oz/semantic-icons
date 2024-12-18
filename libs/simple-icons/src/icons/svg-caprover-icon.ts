import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-caprover-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CapRover</title>
      <path
        d="M11.9999 0C5.3755 0 0 5.3758 0 12.0003S5.3755 24 11.9999 24 24 18.6247 24 12.0002 18.6243 0 11.9999 0m0 .5072c6.3503 0 11.493 5.1427 11.493 11.493 0 6.3502-5.1427 11.4927-11.493 11.4927S.5071 18.3504.5071 12.0002C.5071 5.6499 5.6496.5072 12 .5072m-1.4425 1.5094c-.0504-.0034-.0758-.0027-.0693.0034.011.0103.3087.1672.6616.3489 1.0473.539 1.69 1.024 1.6578 1.251-.0297.2092-.0944.2159-2.1189.2177-2.0152.0018-2.2017.0166-3.0473.2406-1.095.2902-1.7084.8807-1.9024 1.8313-.0788.3865-.079.5708-.0013 1.0164.0809.4637.2153.8594.4794 1.4111.664 1.387 1.8457 3.0225 3.354 4.642 1.3542 1.4542 2.1135 2.7242 2.3388 3.912.115.6058.066 1.573-.119 2.3522-.1849.7788-.3972 1.208-1.0334 2.089-.148.205-.269.3825-.2691.3946.0003.0118.1218-.0734.2705-.1895 1.8675-1.4584 2.9028-2.7748 3.2631-4.1496.0843-.3216.094-.4466.0947-1.2205.0008-.9341-.0274-1.161-.2265-1.8246-.1398-.4662-.338-.9269-.569-1.3234-.415-.7118-1.4992-2.2216-2.1825-3.039-.4463-.5338-.7032-.9027-.9684-1.391-.6563-1.2077-.6871-2.4202-.072-2.835.2383-.1606.4886-.214 1.0035-.2138.693.0002 1.3311.1554 3.2162.7822 1.0735.357 2.094.5804 2.6547.5808.5397.0005.8497-.1352 1.007-.4411.139-.2703.1142-.6903-.0617-1.0432-.2352-.4719-.8798-1.1326-1.5147-1.5525-.9685-.6404-2.3945-1.2551-3.4646-1.4935-.4526-.1008-2.0288-.3324-2.3812-.3565m1.6478 4.3122c-.3793-.0015-.5496.0601-.7557.2493-.334.3067-.3976.5975-.2537 1.1599.1899.7426.5648 1.266 1.8453 2.5772.3877.397.815.8571.9494 1.0226.5445.6698.9385 1.3935 1.128 2.0718.107.3824.1102.4239.1067 1.357-.0032.8757-.0132 1.0095-.1102 1.486-.1552.762-.2614 1.0578-.748 2.083l-.2472.5213c-.0208.044.0182.017.0866-.0602.2214-.2498 1.053-1.5314 1.2879-1.985.4156-.8022.7215-1.7813.922-2.9512.128-.7467.1287-1.799.0018-2.3781-.385-1.7558-1.6052-3.7315-2.8936-4.6853-.507-.3753-.6783-.445-1.143-.464a5 5 0 0 0-.1762-.0043zm3.9252 1.0813c-.0339.0028-.068.0153-.117.0358-.0809.0337-.1678.1114-.2047.1828-.1153.2228.0095.4969.5758 1.2657.3845.522.7752 1.2765.893 1.7244.065.2471.0844.4406.0844.8421 0 .4593-.0802 1.2348-.1545 1.4939-.0478.1668.0272.092.1207-.1203.1094-.2485.5073-1.4214.6089-1.7946.1001-.3683.1007-1.1238.0012-1.5239-.0924-.3711-.3643-.9614-.5937-1.2884-.1835-.2616-.573-.5576-.9775-.7428-.1243-.057-.1802-.0793-.2367-.0747z"
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
export class SvgCaproverIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
