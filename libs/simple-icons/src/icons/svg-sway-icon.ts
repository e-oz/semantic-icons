import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sway-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sway</title>
      <path
        d="M13.785.813a2.11 2.11 0 0 0-.17.012c-.753.076-1.484.31-2.209.52-.742.221-1.459.52-2.148.888-.52.275-1.234.763-1.537 1.272-.193.31-.181.766.117.976.07.059.17.1.264.123.87.21 2.342-.794 3.002-1.115.846-.415 1.729-.732 2.587-1.117.328-.146 1.4-.484 1.407-.963.02-.521-.849-.61-1.313-.596Zm6.51.615c-.796-.006-1.606.104-2.37.162-1.395.106-2.816.584-4.048 1.168-.146.076-.297.145-.443.233-.34.193-.648.403-.881.666-.783.925-.295 1.598.54 1.988.284.132.605.231.932.297.38.076.766.109 1.102.092.11-.006.224-.018.336-.025l.004.02c.11.379.45.671.83.794.38.123.794.117 1.185.094a12.986 12.986 0 0 0 4.147-.975c.269-.105.52-.223.713-.433.175-.216.273-.52.144-.778-.157-.31-.548-.39-.886-.402-.231-.01-.458.004-.684.027.031-.02.063-.04.094-.062.438-.321 1.43-.906 1.675-1.338.328-.578-.36-1.184-.986-1.354a5.55 5.55 0 0 0-1.404-.173Zm-9.51 3.627c-.027 0-.056 0-.084.002C9.73 5.12 8.353 6.164 8.025 6.8c-.455.9.782 1.449 1.524 1.186.765-.263 1.91-1.196 2.039-2.043.04-.274-.052-.596-.297-.754a.895.895 0 0 0-.506-.133Zm-3.933.928c-.597.009-1.518.884-1.793 1.139-.485.444-.469.834.326.834.66-.012 1.349-.45 1.74-.922.146-.181.275-.403.21-.613-.074-.294-.229-.42-.427-.436a.571.571 0 0 0-.056-.002zm6.187.184c-.175.838-.77 1.52-1.504 2.076-1.185.9-2.55 1.535-3.847 2.265-2.001 1.138-4.058 2.834-4.596 5.126a5.076 5.076 0 0 0-.137 1.376c.023.307.273.46.514.46.06 0 .12-.009.176-.028a.41.41 0 0 0 .28-.431 4.605 4.605 0 0 1 .005-.489 4.36 4.36 0 0 1 .297-1.332c.237-.604.6-1.146 1.044-1.636a7.698 7.698 0 0 1 .47-.473c.163-.153.336-.3.513-.442a11.999 11.999 0 0 1 .545-.414c.372-.266.76-.514 1.148-.748.047.03.1.057.166.07 2.269.474 4.626.158 6.672-.84-.093.002-.186.005-.28.003a8.773 8.773 0 0 1-.456-.022 5.787 5.787 0 0 1-.453-.053 1.361 1.361 0 0 1-.592-.246 9.344 9.344 0 0 1-3.793.368l.426-.237c1.75-.955 3.85-2.145 4.308-4.086a5.173 5.173 0 0 1-.718-.193 4.59 4.59 0 0 1-.188-.074zm6.615 1.146c-1.57.024-3.16.415-4.527 1.21-.013.006-.024.017-.037.024a8.69 8.69 0 0 0-1.451.606c-.257.14-.543.374-.467.648.062.214.305.304.531.342.028.005.056.013.082.016a7.61 7.61 0 0 0 2.037-.037 7.736 7.736 0 0 0 1.579-.409c.257-.093.52-.221.625-.478a.502.502 0 0 0 .03-.192 7.18 7.18 0 0 0 1.91-.87c.18-.117.378-.298.349-.52-.041-.263-.38-.352-.66-.34zm.655 2.256c-1.14.03-2.77.796-3.26 1.11-.263.169-.543.426-.484.73.052.327.444.479.783.52.823.105 4.672-.316 4.058-1.835-.162-.401-.58-.539-1.097-.525Zm-5.641 4.258a6.862 6.862 0 0 0-1.375.117c-1.022.204-1.997.583-3.014.752-.876.134-1.715-.139-2.615-.127-.942.014-1.886.167-2.8.424a4.182 4.182 0 0 0-.116.24 3.913 3.913 0 0 0-.322 1.756.943.943 0 0 1-.01.18.901.901 0 0 1-.312.578c-.324.273-.819.292-1.176.074a.972.972 0 0 1-.469-.748c-.001-.026 0-.052-.002-.078a5.285 5.285 0 0 1 .01-.572c.013-.19.036-.38.068-.569-.262.098-.528.19-.795.281-.266.092-.533.183-.795.28-.152.052-.945.361-.945.361l11.992 4.566 12.002-4.564.006-.002c-.053-.023-.094-.03-.146-.053-1.759-.671-3.463-1.285-5.215-1.974a18.547 18.547 0 0 0-.97-.356c-.976-.326-1.979-.552-3.001-.566ZM0 17.31v1.3l11.992 4.577 12.002-4.578v-1.297l-12.002 4.565L0 17.31Z"
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
export class SvgSwayIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
