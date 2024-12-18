import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sonatype-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sonatype</title>
      <path
        d="M2.4568 20.5995c0 .5118-.4275.9032-1.2103.9032-.4938 0-.9454-.1565-1.2465-.4516l.289-.4577c.2048.2109.6082.4095.9876.4095.3794 0 .572-.1385.572-.3553 0-.2528-.307-.3432-.6624-.4215-.4997-.1083-1.0959-.2408-1.0959-.8912 0-.4756.4095-.8851 1.1441-.8851.4938 0 .8672.1745 1.1321.4095l-.265.4455c-.1745-.1987-.4998-.3492-.861-.3492-.3313 0-.542.1204-.542.3251 0 .2228.289.301.6323.3794.5058.1084 1.126.253 1.126.9394zm3.3115-.6263c0 .8371-.566 1.5295-1.4994 1.5295-.9214 0-1.4934-.6924-1.4934-1.5295 0-.831.572-1.5235 1.4934-1.5235.9334 0 1.4994.6926 1.4994 1.5235zm-.6564 0c0-.5118-.3011-.9634-.843-.9634-.536 0-.837.4516-.837.9634 0 .5179.301.9695.837.9695.5419 0 .843-.4516.843-.9695zm2.8117-1.5234c-.4577 0-.831.2408-1.0236.4696v-.3974h-.6323v2.9085H6.9v-2.0294c.1445-.1986.4215-.3913.7467-.3913.3553 0 .584.1505.584.6021v1.8186h.6323v-2.0474c0-.5962-.313-.9333-.9394-.9333zm4.0744 1.0537v1.927h-.6323v-.3132c-.2168.247-.554.3855-.9393.3855-.4757 0-1.0117-.3192-1.0117-.9635 0-.6685.536-.9454 1.0117-.9454.3913 0 .7286.1264.9393.3733v-.4336c0-.3371-.2769-.5419-.6804-.5419-.3251 0-.6082.1204-.861.3673l-.259-.4396c.3372-.3192.7587-.4697 1.2224-.4697.6443 0 1.2103.271 1.2103 1.0538zm-.6323.825c-.1444-.1987-.4154-.3011-.6924-.3011-.3553 0-.6203.2048-.6203.524 0 .313.265.5178.6203.5178.277 0 .548-.1024.6924-.3011v-.4395zm2.487.6142c-.1806 0-.277-.1445-.277-.3432V19.076h.5902v-.554h-.5902v-.7949h-.6322v.7949h-.4817v.554h.4817v1.68c0 .4817.259.7468.7467.7468.295 0 .4817-.0783.5961-.1867l-.1505-.4757c-.0482.0541-.1626.1023-.283.1023zm2.1175-.2409-.8491-2.1798h-.6744l1.1923 2.9446-.1445.3313c-.0843.1926-.2169.2528-.4155.2528-.0722 0-.1746-.018-.241-.0481l-.0962.566c.0903.0241.265.0422.3552.0422.4517-.006.801-.1626.9997-.6564l1.403-3.4324h-.6804l-.849 2.1798zm4.6887-.7286c0 .9575-.536 1.5295-1.2887 1.5295-.3674 0-.6986-.1626-.9334-.4757v1.5115h-.6323V18.522h.6323v.3974c.2168-.289.554-.4697.9334-.4697.7527 0 1.2887.566 1.2887 1.5235zm-.6565 0c0-.56-.3191-.9634-.819-.9634-.295 0-.608.1746-.7466.3913v1.1502c.1385.2108.4516.3914.7467.3914.4998 0 .819-.4034.819-.9695zM24 20.184h-2.2462c.0483.4396.3794.8009.9274.8009.283 0 .6203-.1144.825-.3192l.289.4155c-.289.277-.7165.4215-1.1802.4215-.8732 0-1.5234-.6081-1.5234-1.5295 0-.843.6141-1.5234 1.4752-1.5234.8732 0 1.4332.6684 1.4332 1.5836v.1506zm-.6142-.4457c-.012-.3432-.247-.7707-.819-.7707-.542 0-.7888.4155-.819.7707h1.638zm-5.4338-8.0399L12 15.1348l-5.952-3.4364V4.8256L12 1.3892l5.952 3.4364v6.8728zm-1.7072-5.8871L12 3.3607 7.7553 5.8113v4.9014L12 13.1635l4.2448-2.4506V5.8112z"
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
export class SvgSonatypeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
