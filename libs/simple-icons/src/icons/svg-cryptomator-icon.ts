import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cryptomator-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cryptomator</title>
      <path
        d="M11.98 7.64c.41-.165 1.463-.51 3.016-.51.86 0 1.745.105 2.643.314-.212-2.883-2.434-5.69-5.668-5.69-3.477 0-5.474 2.799-5.669 5.677.894-.206 1.775-.31 2.63-.31 1.57 0 2.632.351 3.047.518m1.516-1.186a.25.25 0 0 1-.25-.25.25.25 0 0 1 .25-.25c.137 0 .25.113.25.25a.25.25 0 0 1-.249.25zM14 4.073c.72 0 1.313.592 1.313 1.313v.001h-2.626v-.001c0-.721.592-1.313 1.313-1.313m-1.486 1.88c.137 0 .25.113.25.25s-.113.25-.25.25a.25.25 0 0 1-.25-.25.25.25 0 0 1 .25-.25m-1.962.5a.25.25 0 0 1-.25-.25c0-.137.113-.25.25-.25a.25.25 0 0 1 .25.25.25.25 0 0 1-.25.25m.981-.5c.137 0 .25.113.25.25s-.113.25-.25.25a.25.25 0 0 1-.251-.25c0-.137.113-.25.251-.25M9.94 4.073c.721 0 1.313.592 1.313 1.313v.001H8.626v-.001c0-.721.593-1.313 1.313-1.313zM23.804 15.17a1.8 1.8 0 0 0-1.595-.976 1.07 1.07 0 0 0-.064-.821l-.448-.875a1.07 1.07 0 0 0-.79-.57l-.416-.817c.205-.279.316-.617.316-.963a1.632 1.632 0 0 0-1.847-1.61c.037.507.045 1.333-.174 2.121-.065.247-.061.507.011.752q.043.146.087.336.206.038.415.022l.392.766c-.167.31-.171.683-.011.996l.447.874c.13.254.356.446.628.533-.22.305-.339.672-.339 1.049a1.8 1.8 0 0 0 1.591 1.781l.05.003a.435.435 0 0 0 .429-.433.435.435 0 0 0-.382-.43.93.93 0 0 1-.823-.921.93.93 0 0 1 .927-.927c.508 0 .927.418.927.927 0 .157-.04.311-.116.448a.435.435 0 0 0 .373.654.43.43 0 0 0 .385-.236 1.8 1.8 0 0 0 .028-1.683m-19.931-.765.447-.874a1.07 1.07 0 0 0-.01-.997l.39-.765q.179.014.356-.013.04-.185.093-.367c.073-.244.078-.504.014-.751-.215-.781-.206-1.6-.168-2.107a1.634 1.634 0 0 0-1.801 1.616c0 .347.111.685.316.964l-.418.817a1.07 1.07 0 0 0-.79.57l-.447.875a1.07 1.07 0 0 0-.012.95l-.051-.001c-.984 0-1.793.81-1.793 1.793 0 .304.077.603.224.868a.434.434 0 0 0 .758-.418.9.9 0 0 1-.116-.448c0-.509.419-.927.927-.927a.93.93 0 0 1 .927.927.93.93 0 0 1-.824.921.435.435 0 0 0-.382.43c0 .237.194.432.43.433l.05-.002a1.8 1.8 0 0 0 1.593-1.783c0-.423-.15-.833-.423-1.157.307-.071.567-.274.71-.554m15.122 2.278a1.1 1.1 0 0 0-.513-.127h-.877a5.9 5.9 0 0 0 1.003-3.318 6 6 0 0 0-.227-1.707 1.8 1.8 0 0 1-.012-.988c.319-1.15.11-2.421.11-2.421-4.01-1.251-6.502-.01-6.502-.01s-2.487-1.249-6.498-.01c0 0-.214 1.27.102 2.422a1.8 1.8 0 0 1-.015.987c-.111.38-.232.964-.233 1.707a5.9 5.9 0 0 0 1.005 3.338h-.895c-.179 0-.355.044-.513.127-.429.22-.778.709-.981 1.38a4.8 4.8 0 0 0-.14 2.035c.183 1.285.84 2.148 1.635 2.148h2.241v-.002a.45.45 0 0 0 .28-.127l1.077-.95c.22-.197.384-.693.437-1.327a5 5 0 0 0 .016-.562 12 12 0 0 0 2.465 1.002s1.137-.282 2.471-.997q-.008.28.016.557c.053.634.217 1.13.437 1.327l1.077.949a.45.45 0 0 0 .28.127v.001h2.241c.794 0 1.452-.863 1.636-2.148.1-.68.052-1.374-.14-2.035-.203-.67-.553-1.159-.983-1.378M8.755 20.845c-.011.005-.562.495-.875.772a.24.24 0 0 1-.161.062.24.24 0 0 1-.215-.132c-.455-.892-.504-2.705-.182-3.823.546.526 1.15.958 1.736 1.307.033.66-.094 1.692-.303 1.814m4.178-4.573-.968.275-.968-.278.7-2.934a1.25 1.25 0 0 1-.972-1.214c0-.683.563-1.246 1.246-1.246s1.245.563 1.245 1.246c0 .58-.406 1.086-.971 1.214zm3.496 5.274a.243.243 0 0 1-.376.071c-.313-.277-.864-.767-.875-.772-.208-.122-.336-1.15-.303-1.81a9.6 9.6 0 0 0 1.738-1.303c.32 1.118.27 2.926-.184 3.814"
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
export class SvgCryptomatorIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
