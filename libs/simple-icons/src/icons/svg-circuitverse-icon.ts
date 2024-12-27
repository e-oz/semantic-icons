import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-circuitverse-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CircuitVerse</title>
      <path
        d="M12.1227 24c-.201 0-.4037-.0058-.6028-.0175a.487.487 0 0 1-.0433-.287.703.703 0 0 0-.0213-.2624H9.2251a1.205 1.205 0 0 1-.785.3898.7059.7059 0 0 1-.5075-.2282.9153.9153 0 0 1-.0647-1.099.7.7 0 0 1 .5576-.267 1.2192 1.2192 0 0 1 .703.267h2.3271a1.9635 1.9635 0 0 0 0-.614h-1.1959a1.1416 1.1416 0 0 1-.5495-.1293c-.442-.2654-.9147-.522-1.4868-.808a1.3834 1.3834 0 0 0-.711-.194 7.1018 7.1018 0 0 1-.4752.0142c-.157 0-.313-.0036-.4644-.007a18.8307 18.8307 0 0 0-.45-.0072 1.3491 1.3491 0 0 1-.8135.3704.6752.6752 0 0 1-.512-.2411.7596.7596 0 0 1 0-1.0666.7188.7188 0 0 1 .5363-.2718 1.3055 1.3055 0 0 1 .7566.3364H7.771a1.1403 1.1403 0 0 1 .5495.1293c.1413.0824.2938.1616.4415.2389a6.0441 6.0441 0 0 1 .7544.4399 1.9496 1.9496 0 0 0 1.116.3293 2.542 2.542 0 0 0 .1772-.006 1.5207 1.5207 0 0 1 .2191-.0143c.0682 0 .1361.0032.208.0068.0797.004.1615.0078.2516.0078v-1.0343h-1.1639a1.267 1.267 0 0 1-.711.2993.8404.8404 0 0 1-.614-.3316c-.3709-.4043-.1346-.8032.1291-1.0666a.5653.5653 0 0 1 .3533-.125 1.3475 1.3475 0 0 1 .8426.4479h1.099v-.905a.3807.3807 0 0 0-.1778-.0404c-.027 0-.054.0019-.0824.0039-.0285.0019-.0624.0042-.0954.0042H4.959a.8404.8404 0 0 1-.7434-.3556c-.1716-.2285-.3698-.4592-.545-.6629l-.069-.0804c-.7435-.0647-.9698-.2845-.9375-.905a.7495.7495 0 0 1 .8404-.6788c.4916 0 .711.329.711 1.0666.0608.0708.12.1429.1827.2195.1357.1651.2757.3361.4315.492h6.6582a5.5024 5.5024 0 0 0 0-1.0344H6.6397a1.3177 1.3177 0 0 1-.7948.3707.6623.6623 0 0 1-.498-.2414.7457.7457 0 0 1 0-1.099.6933.6933 0 0 1 .508-.2685 1.1678 1.1678 0 0 1 .7201.3652h4.8806v-1.002h-8.242c-.156.1736-.3232.3494-.5016.5356-.1584.1661-.3213.3368-.5007.531a.8381.8381 0 0 1-.7912.7515.8055.8055 0 0 1-.1138-.008.8459.8459 0 0 1-.6464-1.002c.0588-.3827.372-.6022.8597-.6022a1.9283 1.9283 0 0 1 .2715.0204c.1765-.2062.4435-.5084.7111-.7757a.9587.9587 0 0 1 .7757-.3233h8.1774v-1.0989H1.6295a1.226 1.226 0 0 1-.7434.3436.6817.6817 0 0 1-.5494-.3113.8488.8488 0 0 1 .097-1.1312.7486.7486 0 0 1 .4793-.194 1.1539 1.1539 0 0 1 .8138.4849h3.1998l-.1014-.097c-.5595-.5284-1.1378-1.0747-1.8382-1.713a.7554.7554 0 0 1-.7757-.808c0-.514.2195-.7435.711-.7435.6617 0 .8404.2127.8728 1.0343.2482.238.4922.469.7508.7134.5417.5126 1.101 1.0414 1.6733 1.6138h5.236v-.7434H9.1605a1.2783 1.2783 0 0 1-.7049.2628.7457.7457 0 0 1-.588-.2951.808.808 0 0 1 .1294-1.099.6351.6351 0 0 1 .4373-.167 1.2777 1.2777 0 0 1 .8235.3933h2.198v-.8404c-.2264 0-.4526-.0036-.671-.007h-.0066a39.3709 39.3709 0 0 0-.656-.0072c-.2484 0-.4675.0048-.6705.0142a1.3974 1.3974 0 0 1-.1144.0048 1.2311 1.2311 0 0 1-.8552-.3603l-.6006-.5068-.0116-.01-.0078-.0066A260.83 260.83 0 0 0 6.6397 7.272H3.052a1.235 1.235 0 0 1-.7192.2909.7298.7298 0 0 1-.5737-.2909.7757.7757 0 0 1 .097-1.099.701.701 0 0 1 .4742-.2233 1.3556 1.3556 0 0 1 .8187.45h3.1352a1.599 1.599 0 0 1 1.1635.4525c.3733.3513.7951.6907 1.203 1.0187h.0016c.19.1532.388.3113.573.4664h2.198V7.2707c-.138 0-.2822-.0035-.4202-.007H11a17.915 17.915 0 0 0-.4392-.0072c-.1616 0-.3032.0048-.4286.0142a1.4155 1.4155 0 0 1-.1157.0049 1.3365 1.3365 0 0 1-.8558-.3265 11.3707 11.3707 0 0 0-.3048-.2405c-.1025-.0788-.212-.1616-.3093-.2443-.8-.0646-1.099-.2909-1.0667-.808a.7757.7757 0 0 1 .7758-.7434c.497 0 .7757.3018.808.8726.1293.097.2586.2033.388.3061l.0015.002c.1267.103.2585.2097.3878.3064h1.5838V5.1394h-.5495a1.3507 1.3507 0 0 1-.7654.3604.6872.6872 0 0 1-.5275-.296.7983.7983 0 0 1 .0324-1.099.6978.6978 0 0 1 .5003-.2146 1.1096 1.1096 0 0 1 .7586.3762h.5171a.5142.5142 0 0 0 .043-.3461 1.2334 1.2334 0 0 1-.0107-.1387v-.5171a3.1097 3.1097 0 0 1-.2908.0126c-.119 0-.2399-.0049-.3556-.0097h-.007a8.4163 8.4163 0 0 0-.364-.0104 1.9597 1.9597 0 0 0-1.0172.2344 10.704 10.704 0 0 1-1.115.5817h-.003c-.1538.0728-.3128.148-.466.2244a.8853.8853 0 0 1-.4202.0646H5.2188a1.0967 1.0967 0 0 1-.6958.3284.7822.7822 0 0 1-.5983-.3271.7237.7237 0 0 1-.181-.5453.8462.8462 0 0 1 .3103-.586.735.735 0 0 1 .4732-.1974 1.0705 1.0705 0 0 1 .755.456h2.101a.6167.6167 0 0 0 .2232-.053 1.192 1.192 0 0 1 .1322-.044c.1316-.0646.2628-.1292.3898-.1893a10.0788 10.0788 0 0 0 .9354-.4894 2.555 2.555 0 0 1 1.353-.3617c.0646 0 .1312.002.1981.0058a2.065 2.065 0 0 0 .2586.0143c.0853 0 .17-.0033.2586-.0068h.0023c.092-.0036.1874-.0075.286-.0075a2.1442 2.1442 0 0 0 .0365-.5908c-.0019-.0701-.0042-.1425-.0042-.2172H9.4164a1.4545 1.4545 0 0 1-.7663.3316.6823.6823 0 0 1-.5262-.2993.8307.8307 0 0 1 .0646-1.0989.715.715 0 0 1 .4874-.2043 1.243 1.243 0 0 1 .7758.3662h2.004c0-.0898.007-.1803.0144-.2763.0087-.1138.0178-.2314.0178-.3701h.126c4.196 0 7.4922 1.6423 9.7967 4.8805a12.2263 12.2263 0 0 1 2.408 6.4563c.1212 2.2033-.439 4.4571-1.6646 6.6986a11.395 11.395 0 0 1-4.4335 4.4768A11.4803 11.4803 0 0 1 12.1227 24zm.3672-5.5768v4.4604a1.616 1.616 0 0 0 .2705.0217 3.4704 3.4704 0 0 0 .491-.0456c.109-.0152.2204-.0323.337-.0407a14.979 14.979 0 0 0 2.392-4.3957zm4.6543 0a19.092 19.092 0 0 1-1.8424 3.9433 10.38 10.38 0 0 0 5.3008-3.9433zm1.0343-5.7855a20.4576 20.4576 0 0 1-.6788 4.6543h3.814a11.2114 11.2114 0 0 0 1.2928-4.6543zm-5.6886 0v4.622h3.8786a18.1495 18.1495 0 0 0 .6787-4.622zm.0323-5.7855v4.6542h4.5573a18.7193 18.7193 0 0 0-.711-4.6542zm4.9452-.0324a21.3593 21.3593 0 0 1 .711 4.6543h4.4281a10.9179 10.9179 0 0 0-1.3252-4.6543zm-2.1979-5.0421a20.007 20.007 0 0 1 1.8747 3.9432h3.4584a10.6137 10.6137 0 0 0-5.333-3.9432zm-2.7473-.5818c0 1.5624 0 3.0382.0323 4.4927h3.4584a.1183.1183 0 0 1-.0323-.097 16.2011 16.2011 0 0 0-2.2302-4.1048c-.0126-.0126-.0249-.0262-.0378-.0404a.2773.2773 0 0 0-.1884-.1212 9.487 9.487 0 0 0-1.002-.1293z"
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
export class SvgCircuitverseIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
