import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-doxygen-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Doxygen</title>
      <path
        d="m10.371 13.934.013.892h-.059l-10.273.01-.015-.902h10.334zm-6.548-1.257c-.075-.206-.113-.436-.113-.693s.038-.487.113-.693a1.47 1.47 0 0 1 .32-.53 1.36 1.36 0 0 1 .5-.34c.193-.084.41-.125.652-.125.241 0 .46.04.653.123.198.078.366.192.504.34.138.145.246.322.32.532.076.206.113.437.113.693s-.037.487-.112.693c-.07.197-.178.378-.32.532-.142.146-.314.26-.505.334a1.73 1.73 0 0 1-.653.118c-.242 0-.46-.04-.653-.118a1.417 1.417 0 0 1-.499-.334 1.546 1.546 0 0 1-.32-.532zm.73-.693a2 2 0 0 0 .035.378c.024.12.064.229.12.328.06.095.136.17.23.229a.686.686 0 0 0 .357.086c.143 0 .26-.03.356-.086a.63.63 0 0 0 .231-.23.992.992 0 0 0 .125-.327c.048-.25.048-.505 0-.755a.949.949 0 0 0-.125-.328.63.63 0 0 0-.23-.229.64.64 0 0 0-.357-.093.64.64 0 0 0-.356.093.696.696 0 0 0-.232.23 1.029 1.029 0 0 0-.119.327c-.023.123-.035.25-.035.377zm12.927.68a2.07 2.07 0 0 1-.106-.68c0-.239.037-.462.112-.668.139-.394.432-.715.813-.89a1.55 1.55 0 0 1 .64-.13c.263 0 .49.053.684.16.194.104.352.244.475.421.126.177.217.38.273.606.055.227.075.464.059.712h-2.214c.012.285.08.49.208.618.126.128.309.192.546.192a.74.74 0 0 0 .439-.13c.123-.09.198-.185.226-.284h.742c-.12.383-.301.657-.547.822-.245.165-.541.248-.89.248-.241 0-.46-.04-.653-.118a1.388 1.388 0 0 1-.492-.346 1.595 1.595 0 0 1-.315-.532zm.736-1.026h1.372c-.04-.223-.111-.392-.214-.507-.1-.116-.252-.174-.457-.174a.7.7 0 0 0-.338.074.652.652 0 0 0-.214.174.734.734 0 0 0-.113.222c-.02.08-.032.15-.036.21v.001zM8.103 13.58l.642-1.008.64 1.008h.962l-1.134-1.7 1.01-1.498H9.29l-.534.835-.54-.835h-.96l1.008 1.515L7.16 13.58h.944zm5.408-3.198h-.872l-.67 2.19h-.014l-.694-2.19h-.896l1.074 3c.024.064.036.13.035.198a.44.44 0 0 1-.082.26.315.315 0 0 1-.244.136 1.677 1.677 0 0 1-.25-.006 49.755 49.755 0 0 1-.243-.025v.724c.087.008.173.014.256.018.087.008.174.013.261.013.29 0 .514-.056.676-.167s.29-.297.38-.557l1.283-3.594zm3.018 3.89a1.28 1.28 0 0 1-.48.366c-.21.099-.491.148-.843.148a1.8 1.8 0 0 1-.463-.062 1.413 1.413 0 0 1-.427-.18 1.103 1.103 0 0 1-.321-.32.95.95 0 0 1-.143-.464h.837c.04.165.117.278.232.34a.784.784 0 0 0 .398.099c.237 0 .409-.074.516-.223a.888.888 0 0 0 .16-.563v-.42h-.012a.863.863 0 0 1-.392.377 1.223 1.223 0 0 1-.528.118c-.23 0-.427-.042-.593-.124a1.18 1.18 0 0 1-.41-.347 1.548 1.548 0 0 1-.237-.513 2.669 2.669 0 0 1-.071-.625c0-.206.027-.404.083-.594a1.57 1.57 0 0 1 .255-.507c.11-.149.247-.266.41-.352a1.21 1.21 0 0 1 .57-.13c.2 0 .377.04.527.117.165.09.3.228.386.396h.012v-.427h.8v2.994c0 .128-.016.275-.052.44a1.05 1.05 0 0 1-.214.457zm-.534-2.33a1.91 1.91 0 0 0-.035-.373.957.957 0 0 0-.12-.315.626.626 0 0 0-.22-.216.67.67 0 0 0-.343-.08.614.614 0 0 0-.308.073.682.682 0 0 0-.214.204.914.914 0 0 0-.125.291c-.024.108-.036.22-.036.34 0 .117.01.232.03.348.024.11.062.212.113.303.055.09.127.165.214.222.097.06.21.09.326.087a.648.648 0 0 0 .54-.272.849.849 0 0 0 .13-.278c.032-.108.048-.22.048-.335zm5.824-.039c0-.325.052-.558.155-.698.103-.145.269-.217.498-.217.202 0 .343.066.422.198.079.128.118.324.118.587v1.807h.843v-1.967c0-.198-.018-.377-.053-.538a.996.996 0 0 0-.172-.414.793.793 0 0 0-.344-.267 1.322 1.322 0 0 0-.553-.099c-.178 0-.352.044-.522.13a.964.964 0 0 0-.415.402h-.018v-.445h-.801v3.198h.842v-1.677zm-21.737.694a2.465 2.465 0 0 1 0-1.262c.06-.202.144-.38.255-.532.115-.153.257-.274.428-.365a1.2 1.2 0 0 1 .593-.142c.182 0 .354.04.517.123a.895.895 0 0 1 .391.353h.012V9.164h.843v4.416h-.8v-.408h-.013a.9.9 0 0 1-.392.378 1.26 1.26 0 0 1-.54.11c-.23 0-.431-.044-.606-.135a1.302 1.302 0 0 1-.433-.378 1.875 1.875 0 0 1-.255-.55zm.76-.619c0 .124.014.248.042.37.027.125.07.237.13.336.063.095.14.173.231.235.103.06.22.089.34.086a.633.633 0 0 0 .57-.315c.054-.1.094-.21.117-.334a2.025 2.025 0 0 0 0-.76.887.887 0 0 0-.125-.324.66.66 0 0 0-.219-.228.633.633 0 0 0-.344-.087.663.663 0 0 0-.35.087.697.697 0 0 0-.232.228c-.058.103-.1.214-.124.33-.024.12-.036.244-.036.376zm12.816 1.999-.01-.047-.986.01-.013.04c-.091.282-.18.469-.407.705l-.095.1h2.006l-.133-.105c-.187-.146-.295-.356-.362-.703zm3.487-.061-.01.035c-.091.3-.272.565-.517.76l-.108.088 7.457-.04.033-.891-6.855.048z"
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
export class SvgDoxygenIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
