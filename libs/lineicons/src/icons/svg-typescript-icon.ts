import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-typescript-icon',
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
        d="M19.131 3H4.86944C3.91371 3 3.13867 3.78715 3.13867 4.75781V19.2422C3.13867 20.2129 3.91371 21 4.86944 21H19.131C20.0867 21 20.8617 20.2129 20.8617 19.2422V4.75781C20.8617 3.78715 20.0867 3 19.131 3ZM13.4194 12.9844H11.204V19.418H9.43865V12.9844H7.22328V11.543H13.4194V12.9844ZM19.131 18.2613C18.9925 18.5777 18.7537 18.8133 18.4733 18.9996C18.1964 19.1719 17.8848 19.3055 17.504 19.3863C17.1233 19.4672 16.7425 19.5059 16.3271 19.5059C15.9117 19.5059 15.4964 19.4707 15.1156 19.3969C14.7348 19.323 14.3921 19.2141 14.1117 19.0664V17.3772C14.0899 17.3596 14.0674 17.3423 14.046 17.3241L14.1117 17.3086V17.3772C14.406 17.6145 14.73 17.7973 15.0844 17.9217C15.4306 18.0553 15.8114 18.1221 16.1921 18.1221C16.4344 18.1221 16.6179 18.101 16.7806 18.0623C16.9502 18.0202 17.0852 17.9639 17.196 17.8936C17.3067 17.8233 17.3891 17.7389 17.4418 17.6405C17.4944 17.542 17.5214 17.4366 17.5214 17.3241C17.5214 17.1623 17.4764 17.0217 17.3898 16.9022C17.3102 16.7827 17.1925 16.6702 17.0437 16.5682C16.9052 16.4663 16.7321 16.3678 16.5245 16.2729C16.3168 16.178 16.1056 16.0795 15.8668 15.9811C15.2783 15.6998 14.8145 15.4186 14.5168 15.0319C14.2156 14.6803 14.0668 14.2233 14.0668 13.6959C14.0668 13.2741 14.1464 12.9366 14.3091 12.6412C14.4821 12.3248 14.6864 12.0928 14.9668 11.903C15.2437 11.7096 15.5552 11.569 15.936 11.4811C16.3168 11.3932 16.6975 11.3475 17.1129 11.3475C17.5283 11.3475 17.8745 11.3721 18.186 11.4213C18.4975 11.4705 18.7883 11.5479 19.0514 11.6498V13.3022C18.9302 13.2108 18.7883 13.1299 18.636 13.0596C18.4733 12.9893 18.3141 12.933 18.1514 12.8873C17.9887 12.8416 17.826 12.8075 17.6668 12.7854C17.5145 12.7632 17.3621 12.7523 17.2168 12.7523C17.0056 12.7523 16.8256 12.7699 16.6629 12.8086C16.4968 12.8473 16.3583 12.9 16.2475 12.9703C16.1368 13.0406 16.0506 13.1215 15.9879 13.2199C15.9252 13.3184 15.8944 13.4273 15.8944 13.5469C15.8944 13.677 15.929 13.793 15.9983 13.8984C16.0675 14.0004 16.1644 14.0988 16.2925 14.1937C16.4067 14.2852 16.5625 14.3766 16.7425 14.468C16.9502 14.5594 17.1371 14.6508 17.3656 14.7457C17.6771 14.8793 17.954 15.027 18.1964 15.1676C18.4387 15.3082 18.6429 15.4734 18.8194 15.6598C19.0064 15.8355 19.1414 16.0465 19.2348 16.2926C19.3283 16.5387 19.3767 16.8164 19.3767 17.1363C19.3767 17.5934 19.2694 17.9449 19.131 18.2613Z"
        fill="#323544"
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
export class SvgTypescriptIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
