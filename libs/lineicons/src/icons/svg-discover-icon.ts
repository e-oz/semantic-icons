import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-discover-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 10.3701H2.86964C3.03181 10.3701 3.19388 10.3849 3.34119 10.407C4.10756 10.5175 4.71188 10.9229 4.71188 11.9987C4.71188 13.0673 4.10756 13.4799 3.34119 13.583C3.19388 13.6052 3.03171 13.6124 2.86964 13.6124H2V10.3701ZM21.72 10.8638C21.8378 10.8638 21.9263 10.7754 21.9263 10.6427C21.9263 10.5101 21.8378 10.4142 21.72 10.4142C21.602 10.4142 21.5135 10.51 21.5135 10.6427C21.5135 10.7754 21.602 10.8638 21.72 10.8638ZM21.72 10.3627C21.7568 10.3627 21.7932 10.3699 21.8272 10.384C21.8612 10.3981 21.892 10.4187 21.918 10.4447C21.944 10.4707 21.9647 10.5016 21.9787 10.5355C21.9928 10.5695 22 10.6059 22 10.6427C22 10.6795 21.9928 10.7159 21.9787 10.7499C21.9647 10.7839 21.9441 10.8148 21.9181 10.8408C21.8921 10.8668 21.8612 10.8874 21.8272 10.9015C21.7932 10.9156 21.7568 10.9228 21.72 10.9228C21.6833 10.9228 21.6468 10.9155 21.6129 10.9015C21.5789 10.8874 21.548 10.8668 21.522 10.8408C21.496 10.8148 21.4754 10.7839 21.4613 10.7499C21.4472 10.7159 21.44 10.6795 21.44 10.6428C21.44 10.606 21.4472 10.5696 21.4613 10.5356C21.4754 10.5016 21.496 10.4707 21.522 10.4447C21.548 10.4187 21.5789 10.3981 21.6129 10.384C21.6468 10.37 21.6833 10.3627 21.72 10.3627ZM21.72 10.687L21.7052 10.6648H21.6684V10.7975H21.6093V10.4806H21.7346C21.8082 10.4806 21.8526 10.5101 21.8526 10.5764C21.8526 10.6279 21.8156 10.6575 21.7641 10.6648L21.8526 10.7975H21.7862L21.72 10.687ZM21.72 10.5249H21.7273C21.7567 10.5249 21.7862 10.5323 21.7862 10.5692C21.7862 10.6134 21.7568 10.6207 21.7273 10.6207H21.6685V10.5249H21.72ZM19.6714 11.7481C19.9146 11.7186 20.1134 11.6154 20.1134 11.3059C20.1134 11.0112 19.9147 10.93 19.6714 10.8933H19.2291V11.7629H19.4354C19.5166 11.7629 19.5976 11.7554 19.6714 11.7481ZM19.6714 10.3775C20.2462 10.3996 20.7767 10.5175 20.7767 11.2544C20.7767 11.6376 20.5335 11.9545 20.1283 12.006C20.2978 12.0281 20.401 12.1977 20.4599 12.3451L20.9685 13.6124H20.2609L19.8778 12.5956C19.8189 12.4482 19.7674 12.3596 19.6715 12.3081C19.6199 12.2787 19.5389 12.2639 19.4355 12.2639H19.2292V13.6124H18.5955V10.3701H19.2807C19.4059 10.3701 19.5461 10.3701 19.6714 10.3775ZM13.7686 11.3428C13.8422 11.5344 13.879 11.7482 13.879 11.9914C13.879 12.2198 13.8422 12.4409 13.7686 12.6398C13.5401 13.266 12.9874 13.6714 12.2286 13.6714C11.2116 13.6714 10.563 12.9787 10.563 11.9913C10.563 10.9963 11.2262 10.3185 12.2286 10.3185C12.9874 10.3185 13.5401 10.7165 13.7686 11.3428ZM13.7686 10.6575L14.8888 13.6124H15.1245L16.3699 10.3701H15.7066L15.0435 12.0797L14.3361 10.3701H13.6582L13.7686 10.6575ZM16.5321 10.3701H18.4185V10.8933H17.1731V11.6892H18.3078V12.1901H17.1732V13.104H18.426V13.6124H16.5322V10.3701H16.5321ZM3.34119 10.9449C3.23065 10.908 3.11274 10.8933 2.99493 10.8933H2.63382V13.104H2.99493C3.11285 13.104 3.23076 13.0819 3.34119 13.0451C3.73181 12.9049 4.04866 12.5439 4.04866 11.9986C4.04877 11.4533 3.73181 11.0775 3.34119 10.9449ZM4.96246 10.3701H5.60354V13.6124H4.96246V10.3701ZM7.65958 11.2323C7.43851 11.0922 7.20279 10.9522 6.95222 10.9228C6.72377 10.8933 6.48057 10.9596 6.48057 11.2838C6.48057 11.8438 7.88076 11.608 7.88076 12.6914C7.88076 13.3987 7.3207 13.7451 6.67962 13.6714C6.33326 13.6344 6.13431 13.5313 5.86161 13.3472V12.6839C6.07541 12.8019 6.39216 13.0302 6.64273 13.0745C6.91544 13.1188 7.21017 13.0375 7.21017 12.7429C7.21017 12.1166 5.81745 12.3744 5.81745 11.3058C5.81745 10.5837 6.36276 10.3184 6.92282 10.3184C7.2029 10.3184 7.44599 10.4215 7.65969 10.6131L7.65958 11.2323ZM10.4009 13.2882C10.2387 13.4947 9.85555 13.6124 9.5976 13.6346C8.60278 13.7009 7.93956 13.1483 7.93956 12.0503C7.93956 10.9449 8.52174 10.2964 9.5976 10.3555C9.8113 10.3628 10.1577 10.4365 10.3861 10.6281V11.2471C10.1134 11.0777 9.83343 10.9598 9.5976 10.9524C8.94176 10.9303 8.60278 11.3429 8.60278 12.0061C8.60278 12.6694 8.91963 13.0377 9.5976 13.0083C9.86282 13.0011 10.2608 12.7873 10.4009 12.6694V13.2882Z"
        fill="#323544"
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
export class SvgDiscoverIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
