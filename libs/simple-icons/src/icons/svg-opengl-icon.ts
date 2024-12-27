import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-opengl-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>OpenGL</title>
      <path
        d="M3.607 13.88c1.32 1.197 3.862 2.008 6.781 2.008 2.375 0 4.503-.481 5.923-1.325-1.555 1.413-4.328 2.41-7.495 2.41C3.947 16.972 0 14.745 0 11.999c0-2.747 3.948-4.973 8.818-4.972 3.179.001 5.96 1.001 7.511 2.425-1.421-.85-3.558-1.34-5.941-1.34-2.828 0-5.303.761-6.655 1.897.01-.004.019-.008.028-.013.253-.119.548-.179.885-.179.336 0 .631.06.885.179.253.12.465.28.635.48.171.201.298.431.383.691.086.26.128.531.128.812 0 .282-.042.553-.128.813-.085.26-.212.49-.383.691-.17.2-.382.359-.635.477-.254.117-.549.176-.885.176-.337 0-.632-.059-.885-.176a2.2 2.2 0 0 1-.154-.08m-.347-1.283c.056.203.143.385.262.547s.271.292.458.391q.279.147.666.147t.666-.147c.186-.099.339-.229.458-.391s.206-.344.261-.547a2.3 2.3 0 0 0 0-1.232c-.055-.203-.142-.385-.261-.547s-.272-.293-.458-.391-.408-.148-.666-.148-.48.05-.666.148c-.187.099-.339.229-.458.391s-.206.344-.262.547c-.055.202-.083.407-.083.616 0 .208.028.414.083.616m4.254-1.183v.356h.009c.073-.146.187-.252.344-.318.156-.066.328-.099.515-.099.208 0 .39.037.544.112.155.074.283.175.385.302.103.128.18.274.232.441.052.166.078.342.078.529s-.025.363-.075.529c-.051.167-.127.312-.229.435-.103.124-.231.222-.386.293-.154.071-.334.107-.539.107-.066 0-.139-.007-.221-.02a1.25 1.25 0 0 1-.242-.067.94.94 0 0 1-.227-.125.67.67 0 0 1-.179-.196h-.009v1.359h-.446v-3.638zm1.585.936c-.033-.117-.083-.222-.151-.313-.067-.092-.154-.165-.26-.219-.105-.054-.229-.081-.371-.081-.149 0-.275.028-.379.086a.76.76 0 0 0-.255.226c-.066.094-.113.2-.143.318-.029.119-.044.24-.044.362 0 .129.016.253.047.373.031.121.08.227.148.319.067.091.155.165.262.221q.162.084.39.084c.152 0 .28-.029.382-.087a.694.694 0 0 0 .246-.229c.063-.095.108-.203.135-.325.028-.122.042-.248.042-.377 0-.122-.016-.241-.049-.358m2.799 1.527c-.201.149-.455.224-.761.224q-.324 0-.561-.102c-.159-.068-.292-.163-.4-.285-.107-.122-.188-.268-.242-.438-.054-.169-.084-.354-.091-.554 0-.2.031-.384.094-.55.062-.166.15-.311.263-.433s.248-.217.402-.285c.155-.067.325-.101.51-.101.24 0 .439.048.598.145.158.097.285.22.381.37q.144.2235.198.489c.037.177.052.345.045.505h-2.018c-.004.115.01.224.041.328.032.103.082.195.151.274.07.08.158.143.266.191.108.047.234.071.38.071.187 0 .341-.043.461-.128q.1785-.1275.237-.387h.438c-.059.295-.19.517-.392.666m-.108-1.688c-.04-.092-.093-.171-.161-.237a.77.77 0 0 0-.239-.157c-.092-.039-.194-.059-.304-.059-.115 0-.218.02-.31.059a.71.71 0 0 0-.237.16.8.8 0 0 0-.156.236c-.038.09-.06.186-.067.287h1.545a.86.86 0 0 0-.071-.289m1.259-.775v.418h.009c.185-.32.478-.479.88-.479.178 0 .326.023.445.071s.215.114.288.199c.074.085.125.186.155.303.029.117.044.247.044.39v1.733h-.446v-1.783q0-.2445-.147-.387c-.097-.095-.231-.143-.402-.143-.136 0-.253.021-.353.062-.099.04-.182.098-.248.173a.75.75 0 0 0-.149.262c-.033.1-.049.21-.049.328v1.487h-.447v-2.634zm4.908 2.606c-.202.083-.406.125-.611.125-.324 0-.616-.056-.875-.166s-.477-.262-.655-.456c-.178-.193-.314-.42-.409-.682-.095-.261-.142-.542-.142-.844 0-.31.047-.597.142-.862.094-.265.23-.496.408-.694.177-.197.395-.352.654-.464.259-.113.55-.169.875-.169.217 0 .427.032.631.096.203.064.387.158.551.282.164.125.3.277.406.459.107.182.172.391.196.626h-.889c-.055-.231-.162-.405-.32-.521-.159-.116-.35-.174-.575-.174-.21 0-.388.04-.534.119s-.265.186-.356.319q-.1365.201-.198.456-.063.255-.063.528c0 .174.021.344.063.508.041.165.108.313.199.444.091.132.209.237.356.316.146.08.324.119.534.119.309 0 .547-.076.715-.228.169-.152.267-.372.294-.661h-.936v-.681h1.776v2.237h-.591l-.095-.47c-.166.209-.35.355-.551.438m2.746-4.107v3.368h2.063v.768h-2.992V9.913zM24 13.667c0 .07-.017.134-.052.194a.389.389 0 0 1-.336.194.389.389 0 0 1-.336-.194.39.39 0 0 1-.052-.194.389.389 0 0 1 .194-.336.39.39 0 0 1 .194-.052.389.389 0 0 1 .336.194c.035.06.052.125.052.194m-.075 0c0-.086-.031-.16-.092-.221a.302.302 0 0 0-.221-.092c-.086 0-.16.031-.221.092a.302.302 0 0 0-.092.221c0 .086.031.16.092.221s.135.092.221.092.16-.031.221-.092a.302.302 0 0 0 .092-.221m-.489-.207h.186c.052 0 .09.01.114.032.023.021.035.049.035.085q0 .0405-.027.072c-.018.02-.046.035-.085.044.016.006.028.013.035.019q.0165.015.033.042c.001.002.023.042.067.12h-.122c-.039-.079-.066-.126-.079-.141-.014-.016-.028-.023-.041-.023-.003 0-.007 0-.013.001v.163h-.103zm.103.176h.045q.045 0 .063-.015a.046.046 0 0 0 .018-.037.05.05 0 0 0-.017-.038c-.012-.009-.032-.014-.06-.014h-.049z"
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
export class SvgOpenglIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
