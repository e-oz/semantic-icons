import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dragonframe-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Dragonframe</title>
      <path
        d="M.936.001A.937.937 0 0 0 0 .937v22.132c0 .519.42.93.936.93h9.968s-.519-.466-.611-.56a1.14 1.14 0 0 1-.237-.365c-.053-.128-.094-.383-.112-.51-.017-.128-.06-.222-.102-.332-.043-.112-.238-.381-.289-.45-.05-.068-.332-.39-.39-.459-.06-.068-.06-.145-.034-.195.024-.051-.018-.095-.086-.172-.068-.075-.382-.415-.518-.576-.136-.162-.068-.204-.033-.221.033-.018.27.136.391.196.092.045.325.168.433.197.048.013.073.011.083-.009.013-.02.26-.364.367-1.023.119-1.171-.12-1.867-.4-2.456a7.363 7.363 0 0 0-.714-1.206c-.145-.187-.815-.765-.927-.841-.11-.077-1.393-.918-1.538-1.038-.144-.118.025-.166.08-.142.143.064.428.178.558.238.151.065.91.33 1.054.364.145.033.126.03.103-.119-.017-.111-.23-.604-.332-.782-.103-.18-.553-.817-.859-1.113-.304-.297-.663-.681-.799-.892-.136-.213-.696-1.368-.868-1.792a12.048 12.048 0 0 0-.527-1.114c-.059-.101-.134-.154-.125-.24.007-.083.253.128.365.23.167.153.388.445.661.86.272.418.571.688.621.738.051.05.39.393.44.424.033.017.046.004.053-.024.02-.084 0-.295-.033-.46-.042-.221-.018-.748-.092-1.012-.078-.261-.113-.389-.469-1.02-.358-.628-.74-1.681-1.053-3.347a12.3 12.3 0 0 1-.163-3.264c.018-.163.085-.136.13-.128.04.01.065.265.065.265s-.015.612.731 2.609c.75 1.996 1.633 2.133 1.71 2.15.077.016.11.007.11-.035 0-.041-.213-.9-.136-1.57.076-.673.238-.945.33-1.04.071-.07.069-.014.069.196-.002.07-.002.158 0 .264.01.426.281.995.281.995s.118.5.323-.664c.296-1.954.018-2.995-.06-3.274C8.28.998 7.944 0 7.157 0Zm15.427 0c-.65 0-.895.997-.972 1.279-.076.278-.357 1.32-.059 3.274.204 1.164.323.664.323.664s.273-.57.281-.995c.002-.106 0-.193 0-.264-.002-.21-.002-.266.068-.195.092.094.255.366.33 1.039.077.67-.134 1.529-.134 1.57 0 .042.032.05.11.035.077-.017.96-.153 1.709-2.15.746-1.997.729-2.61.729-2.61s.027-.254.068-.264c.042-.008.111-.035.128.128a12.22 12.22 0 0 1-.16 3.264c-.316 1.666-.698 2.72-1.055 3.347-.356.631-.392.759-.469 1.02-.076.264-.05.79-.092 1.012-.032.165-.053.376-.032.46.006.028.02.041.05.024.053-.03.39-.374.44-.424.052-.05.35-.32.62-.738.273-.415.495-.707.664-.86.113-.102.356-.313.365-.23.009.086-.066.139-.125.24-.06.1-.359.688-.53 1.114-.169.424-.73 1.579-.866 1.792-.135.21-.494.595-.798.892-.306.296-.756.933-.86 1.113-.1.178-.313.67-.331.782-.023.15-.042.152.103.119.143-.033.9-.299 1.052-.364.132-.06.417-.174.56-.238.055-.024.225.024.08.142-.146.12-1.428.96-1.54 1.038-.11.076-.782.654-.925.84a7.129 7.129 0 0 0-.714 1.207c-.28.589-.519 1.285-.4 2.456.108.659.354 1.004.364 1.023.014.02.038.022.085.009.11-.029.34-.152.434-.197.119-.06.358-.214.39-.196.036.017.102.06-.032.221-.136.161-.45.501-.518.576-.068.077-.112.121-.086.172a.18.18 0 0 1-.035.195c-.06.068-.338.39-.391.46-.05.067-.246.337-.288.449-.042.11-.085.204-.103.332a2.416 2.416 0 0 1-.11.51 1.178 1.178 0 0 1-.237.364c-.095.095-.646.56-.646.56h10.256a.945.945 0 0 0 .936-.947V.937A.937.937 0 0 0 23.064 0ZM8.933 11.49a.078.078 0 0 0-.085.074c-.015.238-.038.422-.053.642-.017.25-.05.531.063.784.113.247.366.661.45.782.09.12.429.604.513.734.086.13.307.533.345.604.04.068.015.068.07.068.033 0 .04-.176.04-.325 0-.084-.003-.158-.003-.187 0-.494.018-.96-.147-1.432a1.266 1.266 0 0 0-.175-.345c-.123-.169-.255-.331-.383-.494-.05-.066-.1-.134-.16-.192-.09-.091-.327-.379-.382-.504-.04-.097-.055-.198-.084-.207a.038.038 0 0 0-.01-.002zm5.915 0a.034.034 0 0 0-.01.002c-.03.009-.044.11-.086.207-.053.125-.29.413-.383.504-.059.058-.107.126-.157.192-.13.163-.261.325-.382.494a1.25 1.25 0 0 0-.176.345c-.165.472-.147.938-.147 1.432 0 .077-.016.512.037.512.055 0 .03 0 .07-.068.037-.07.26-.475.343-.604.083-.13.425-.613.514-.734a7.1 7.1 0 0 0 .45-.782c.065-.143.082-.294.082-.443a4.3 4.3 0 0 0-.017-.34c-.019-.22-.038-.405-.054-.643-.003-.059-.056-.076-.084-.074zM10.7 19.994c-.006 0-.006.007-.006.029 0 .032-.02.16-.01.239.005.082.017.262.03.35.006.053.004.148.002.247v.192c.004.144-.015.412-.137.63 0 0-.034.035-.034.061 0 .03.024.042.05.093.046.087.194.272.249.33.052.057.155.181.272.087.044-.037.057-.095.057-.171 0-.12-.038-.288-.057-.494-.005-.035-.097-.407-.132-.567-.024-.119-.101-.464-.125-.578-.015-.067-.077-.274-.088-.314-.01-.037-.031-.12-.055-.13l-.016-.004zm2.345 0c-.004 0-.01.002-.019.005-.021.008-.04.092-.052.13-.01.039-.072.246-.088.313-.026.114-.1.46-.127.578-.033.16-.125.532-.13.567-.032.335-.114.569 0 .665.114.094.218-.03.273-.088.053-.057.201-.242.248-.33.026-.05.05-.063.05-.092 0-.026-.035-.06-.035-.06a1.277 1.277 0 0 1-.139-.631c.003-.057 0-.123 0-.19a2.476 2.476 0 0 1 .005-.25c.011-.087.022-.268.032-.349.008-.08-.012-.207-.012-.24 0-.021 0-.028-.006-.028z"
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
export class SvgDragonframeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
