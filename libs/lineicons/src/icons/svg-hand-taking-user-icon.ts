import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hand-taking-user-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4423 4.05183C13.4423 3.02111 14.2779 2.18555 15.3086 2.18555C16.3393 2.18555 17.1749 3.02111 17.1749 4.05183C17.1749 5.08254 16.3393 5.91811 15.3086 5.91811C14.2779 5.91811 13.4423 5.08254 13.4423 4.05183ZM15.3086 3.68555C15.1063 3.68555 14.9423 3.84954 14.9423 4.05183C14.9423 4.25412 15.1063 4.41811 15.3086 4.41811C15.5109 4.41811 15.6749 4.25412 15.6749 4.05183C15.6749 3.84954 15.5109 3.68555 15.3086 3.68555Z"
        fill="#323544"
      />
      <path
        d="M21.6044 11.2659C21.0447 10.6311 20.0839 10.5508 19.4266 11.0839L16.8212 13.197C16.512 12.6632 15.9345 12.304 15.2732 12.304H12.6754C11.5119 11.8794 10.2262 11.8074 9.41278 11.8111C8.64057 11.8146 7.94114 12.1196 7.38764 12.5621L5.69546 13.9148C5.47206 13.789 5.18986 13.781 4.95173 13.9185L2.37513 15.4061C2.01641 15.6132 1.8935 16.0719 2.10061 16.4306L5.09928 21.6245C5.30638 21.9832 5.76508 22.1061 6.1238 21.899L8.7004 20.4114C9.01125 20.2319 9.14503 19.8635 9.04042 19.535L9.56527 19.0601C9.70317 18.9353 9.8825 18.8662 10.0685 18.8662H16.2417C16.8423 18.8662 17.4104 18.5933 17.7859 18.1245L21.6525 13.2959C22.1317 12.6974 22.1114 11.841 21.6044 11.2659ZM8.2864 18.1943L6.53627 15.163L8.32425 13.7337C8.66549 13.4609 9.04628 13.3128 9.41955 13.3111C10.1887 13.3076 11.296 13.3829 12.222 13.7358C12.3365 13.7794 12.4613 13.804 12.5912 13.804H15.2732C15.432 13.804 15.5608 13.9328 15.5608 14.0917C15.5608 14.1584 15.5381 14.2198 15.5 14.2686L15.4269 14.3279C15.4184 14.3347 15.4102 14.3417 15.4021 14.3489C15.3633 14.3684 15.3195 14.3793 15.2732 14.3793H12.5383C12.1241 14.3793 11.7883 14.7151 11.7883 15.1293C11.7883 15.5435 12.1241 15.8793 12.5383 15.8793H15.2732C15.7583 15.8793 16.1984 15.686 16.5205 15.3723L20.3715 12.2489C20.404 12.2225 20.4515 12.2265 20.4792 12.2579C20.5043 12.2863 20.5053 12.3287 20.4816 12.3583L16.615 17.1869C16.5242 17.3002 16.3869 17.3662 16.2417 17.3662H10.0685C9.51056 17.3662 8.97255 17.5735 8.55886 17.9478L8.2864 18.1943ZM6.02332 20.225L3.77464 16.3302L5.05221 15.5926L7.30088 19.4874L6.02332 20.225Z"
        fill="#323544"
      />
      <path
        d="M14.0944 6.27857C12.8582 6.27857 11.856 7.28072 11.856 8.51694V9.44718C11.856 9.86139 12.1918 10.1972 12.606 10.1972H18.0111C18.4253 10.1972 18.7611 9.86139 18.7611 9.44718V8.51694C18.7611 7.28072 17.7589 6.27857 16.5227 6.27857H14.0944ZM13.356 8.51694C13.356 8.10915 13.6866 7.77857 14.0944 7.77857H16.5227C16.9305 7.77857 17.2611 8.10915 17.2611 8.51694V8.69718H13.356V8.51694Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHandTakingUserIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
