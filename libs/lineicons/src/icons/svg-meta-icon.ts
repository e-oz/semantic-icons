import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-meta-icon',
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
        d="M9.34179 10.0847H10.0998L11.3885 12.4526L12.6774 10.0847H13.4189V13.9755H12.8005V10.9935L11.6704 13.0584H11.0903L9.96018 10.9935V13.9755H9.34179V10.0847Z"
        fill="#323544"
      />
      <path
        d="M15.4127 14.0448C15.1263 14.0448 14.8746 13.9804 14.6575 13.8516C14.4404 13.7228 14.2712 13.5445 14.1499 13.3166C14.0285 13.0887 13.9679 12.8275 13.9679 12.5329C13.9679 12.2346 14.0272 11.9706 14.1458 11.7408C14.2643 11.5111 14.429 11.3314 14.6397 11.2017C14.8504 11.072 15.0926 11.0072 15.3662 11.0071C15.638 11.0071 15.872 11.0724 16.0681 11.203C16.2642 11.3337 16.4151 11.5167 16.5209 11.7519C16.6267 11.9873 16.6797 12.2633 16.6797 12.5801V12.7524H14.5808C14.6192 12.9896 14.7136 13.1763 14.8641 13.3124C15.0146 13.4486 15.2047 13.5167 15.4346 13.5167C15.6188 13.5167 15.7776 13.4889 15.9107 13.4333C16.0439 13.3778 16.1689 13.2934 16.2856 13.1804L16.614 13.589C16.2874 13.8928 15.887 14.0448 15.4127 14.0448ZM15.8642 11.7367C15.7347 11.6024 15.565 11.5352 15.3553 11.5352C15.1509 11.5352 14.9799 11.6037 14.8422 11.7408C14.7044 11.8779 14.6173 12.0623 14.5808 12.2939H16.0859C16.0676 12.0567 15.9938 11.871 15.8642 11.7367Z"
        fill="#323544"
      />
      <path
        d="M17.4307 11.591H16.8615V11.0768H17.4307V10.2264H18.0272V11.0768H18.8919V11.591H18.0272V12.8944C18.0272 13.1112 18.0637 13.2659 18.1366 13.3585C18.2096 13.4512 18.3345 13.4975 18.5116 13.4975C18.59 13.4975 18.6566 13.4942 18.7113 13.4877C18.7661 13.4812 18.8262 13.4725 18.8919 13.4614V13.9699C18.817 13.9919 18.7406 14.0086 18.6634 14.0199C18.5751 14.0331 18.4859 14.0397 18.3966 14.0394C17.7526 14.0394 17.4307 13.6818 17.4307 12.9667V11.591Z"
        fill="#323544"
      />
      <path
        d="M22 13.9753H21.4144V13.5695C21.3104 13.7215 21.1782 13.8386 21.0177 13.9211C20.8571 14.0035 20.6747 14.0447 20.4704 14.0447C20.2186 14.0447 19.9956 13.9794 19.8013 13.8488C19.607 13.7182 19.4542 13.5385 19.343 13.3097C19.2317 13.0808 19.176 12.8191 19.176 12.5245C19.176 12.2281 19.2326 11.966 19.3457 11.738C19.4588 11.5101 19.6153 11.3314 19.815 11.2016C20.0148 11.072 20.2441 11.0071 20.5032 11.0071C20.6984 11.0071 20.8735 11.0456 21.0286 11.1225C21.1816 11.1976 21.3141 11.3097 21.4144 11.449V11.0766H22V13.9753ZM21.4035 12.091C21.3396 11.9261 21.2388 11.7959 21.1011 11.7005C20.9634 11.6051 20.8042 11.5574 20.6236 11.5574C20.3682 11.5574 20.1648 11.6445 20.0134 11.8186C19.862 11.9928 19.7863 12.2281 19.7863 12.5245C19.7863 12.8229 19.8593 13.0591 20.0052 13.2332C20.1511 13.4074 20.3491 13.4945 20.599 13.4945C20.7832 13.4945 20.9474 13.4463 21.0915 13.3499C21.2356 13.2536 21.3396 13.124 21.4035 12.9609V12.091Z"
        fill="#323544"
      />
      <path
        d="M6.35262 9.95312C5.85532 9.95312 5.46657 10.3335 5.11468 10.8168C4.63108 10.1914 4.22666 9.95312 3.74271 9.95312C2.75601 9.95312 2 11.2573 2 12.6377C2 13.5015 2.41146 14.0463 3.10066 14.0463C3.59668 14.0463 3.95348 13.8088 4.58766 12.6829C4.58766 12.6829 4.85204 12.2087 5.03389 11.8821C5.09766 11.9866 5.16475 12.0992 5.23527 12.2199L5.53269 12.728C6.11202 13.7126 6.43477 14.0463 7.01969 14.0463C7.69108 14.0463 8.06474 13.494 8.06474 12.6123C8.06474 11.1669 7.29171 9.95312 6.35262 9.95312ZM4.10406 12.378C3.58985 13.1966 3.41196 13.3801 3.12567 13.3801C2.83105 13.3801 2.65595 13.1174 2.65595 12.649C2.65595 11.6468 3.14791 10.6222 3.73437 10.6222C4.05195 10.6222 4.31733 10.8084 4.72388 11.3995C4.33787 12.0008 4.10406 12.378 4.10406 12.378ZM6.0447 12.2749L5.6891 11.6726C5.59287 11.5137 5.50042 11.3674 5.41168 11.2337C5.73218 10.7313 5.99653 10.481 6.31093 10.481C6.96407 10.481 7.48665 11.4577 7.48665 12.6575C7.48665 13.1148 7.33912 13.3801 7.03359 13.3801C6.74072 13.3801 6.60079 13.1836 6.0447 12.2749Z"
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
export class SvgMetaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
