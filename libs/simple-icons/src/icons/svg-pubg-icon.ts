import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pubg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PUBG</title>
      <path
        d="M1.425 20.693c-.107-.247-.132-.4-.131-.8 0-.376.015-.478.208-1.416a38 38 0 0 0 .2-1.015c-.1-.056-.481-.376-.7-.587-.49-.472-.799-.938-.942-1.415-.059-.195-.067-.282-.056-.592.013-.341.02-.378.127-.599a2 2 0 0 1 .257-.39c.14-.15.145-.161.188-.465.024-.171.072-.493.105-.715.054-.36.056-.424.018-.592a2.84 2.84 0 0 1 .082-1.529c.358-.99 1.39-1.681 3-2.007 1.226-.249 2.815-.265 4.374-.045 1.537.218 3.344.715 5.011 1.38.214.086.392.152.396.148.014-.014-1.28-.668-1.61-.814A17 17 0 0 0 8.28 8.073C7.472 7.92 7.22 7.9 6.147 7.9c-.931 0-1.068.007-1.46.073a7 7 0 0 0-.836.18c-.1.03-.056-.046.082-.141.516-.356 1.36-.69 2.23-.886.853-.191.851-.177.023-.165-.407.006-.74.002-.74-.009s.025-.041.055-.068a10 10 0 0 0 .342-.376c.493-.56 1.253-1.22 1.923-1.667 1.278-.854 2.553-1.345 4.124-1.588.51-.08 2.061-.08 2.6 0 1.682.245 2.964.707 4.14 1.49.554.37.864.624 1.339 1.101.953.958 1.613 2.02 2.191 3.527.31.808.601 1.76.756 2.474l.072.331.164.115c.09.063.183.152.206.198s.166.448.316.894c.151.445.286.814.3.82s.026.111.026.234c0 .213-.004.225-.086.264-.106.05-1.037.255-1.16.255-.127 0-.23-.11-.322-.343l-.177-.436c-.054-.128-.172-.416-.263-.638-.302-.739-.295-.725-.394-.766-.08-.033-.128-.026-.393.064-.166.057-.35.13-.407.165a.55.55 0 0 0-.221.4c-.001.091.23.762.289.84.067.089 1.591 1.11 1.688 1.131.06.013.253-.014.528-.074l.438-.094c.003 0 .016.215.028.478.021.45.018.486-.043.607-.104.204-.003.16-1.67.723-1.314.444-1.564.497-2.353.497a4.5 4.5 0 0 1-2.388-.644c-.48-.283-1.052-.767-1.224-1.037-.133-.209-.16-.04.34-2.195.1-.427.194-.781.211-.787.017-.005.09.1.163.236s.164.266.202.29.287.14.552.259c.409.182.515.217.695.228a.82.82 0 0 0 .79-.41c.083-.131.097-.2.213-1.07l.158-1.178c.098-.725.09-.957-.046-1.248-.153-.327-.328-.474-.881-.741-.918-.444-.862-.435-1.279-.204-.158.088-.29.161-.293.164a8 8 0 0 0 .313-.006l.318-.01.52.24c.408.19.555.275.678.392.301.29.393.655.31 1.241-.052.37-.085.458-.23.615-.185.202-.334.269-.596.27-.208 0-.243-.01-.732-.24-.509-.24-.516-.242-.79-.249l-.276-.007-.039.156-.166.685c-.162.673-.477 1.976-.735 3.038-.11.454-.258 1.063-.327 1.355-.159.668-.214.86-.307 1.075-.219.503-.689.99-1.2 1.245-.578.287-1.076.342-1.828.205a45 45 0 0 0-4.48-.615c-.606-.053-2.655-.053-3.051 0-.826.111-1.187.19-1.535.337a1.93 1.93 0 0 0-.847.672c-.174.257-.253.71-.191 1.092.029.177-.008.192-.079.03zm.317-3.394c0-.028.06-.365.165-.929.1-.538.212-.748.576-1.086.604-.56 1.758-.924 3.331-1.05.557-.045 2.451-.014 3.072.05 1.287.131 1.77.195 2.88.38.906.151.886.15.7.073a58 58 0 0 0-2.054-.744c-1.222-.412-1.941-.578-3.207-.74-.625-.08-2.496-.081-3.082-.001-1.13.154-1.95.382-2.568.717-.523.282-.895.643-1.049 1.02-.09.22-.075.702.03.956.124.299.332.586.65.9.436.428.556.526.556.454m-.558-4.09c.15-.107.649-.33.963-.43.525-.169.957-.256 1.805-.367.497-.065 2.617-.093 3.284-.043l.716.053c.286.022.316-.01.392-.418l.184-.974c.19-1 .248-1.318.249-1.375 0-.105-.107-.19-.281-.217-.792-.129-2.275-.198-3.255-.153-2.203.1-3.583.628-4.102 1.566a1.6 1.6 0 0 0-.219.662q-.018.188.01.105c.143-.436.52-.88.926-1.094.237-.125.26-.132.26-.088 0 .015-.063.058-.14.096q-.273.131-.513.593c-.153.295-.193.468-.297 1.291a61 61 0 0 1-.096.74c-.021.135-.008.14.114.053m9.586-.184c.066-.052.078-.085.078-.236 0-.159-.01-.184-.102-.266-.12-.108-.188-.114-.298-.028-.161.128-.122.44.069.544.11.06.16.057.253-.014m7.349-1.91c.223-.15.319-.421.251-.712-.118-.515-.662-.73-.966-.384-.283.322-.166.91.22 1.1.178.088.361.087.495-.004m-.321-.32c-.187-.102-.245-.433-.103-.586.108-.117.285-.115.4.006.166.172.172.42.016.551-.105.088-.19.096-.313.029m-6.548-.146c.098-.139.036-.446-.105-.521-.09-.049-.204-.039-.257.022-.14.16-.142.312-.003.476.1.12.29.132.366.023z"
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
export class SvgPubgIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
