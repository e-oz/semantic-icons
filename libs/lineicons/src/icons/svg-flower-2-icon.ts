import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-flower-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3207 2.06762C12.1203 1.97746 11.8999 1.97746 11.7096 2.06762H11.6996C11.6996 2.06762 11.6795 2.07764 11.6695 2.08765C11.6395 2.10769 11.5994 2.12772 11.5493 2.14776C11.4491 2.19785 11.2989 2.288 11.1386 2.38818C10.798 2.59855 10.3572 2.92913 9.90643 3.38993C9.00485 4.31155 8.09326 5.7741 8.09326 7.84773C8.09326 7.91786 8.09326 7.98798 8.09326 8.0581C8.02314 8.0581 7.95301 8.0581 7.88289 8.0581C5.79924 8.0581 4.3467 8.9697 3.42509 9.87127C2.96428 10.3221 2.6337 10.7628 2.42334 11.1034C2.31314 11.2737 2.233 11.414 2.18291 11.5142C2.15286 11.5642 2.13283 11.6043 2.12281 11.6344C2.12281 11.6544 2.11279 11.6644 2.10277 11.6744V11.6945C2.01262 11.8948 2.01262 12.1152 2.10277 12.3055V12.3256C2.10277 12.3256 2.11279 12.3456 2.12281 12.3656C2.13283 12.3957 2.16288 12.4358 2.18291 12.4859C2.233 12.586 2.32316 12.7363 2.42334 12.8966C2.6337 13.2372 2.96428 13.6779 3.42509 14.1287C4.3467 15.0303 5.80926 15.9419 7.88289 15.9419C7.95301 15.9419 8.02314 15.9419 8.09326 15.9419C8.09326 16.012 8.09326 16.0821 8.09326 16.1523C8.09326 18.2359 9.00485 19.6885 9.90643 20.6101C10.3572 21.0709 10.798 21.4015 11.1386 21.6118C11.3089 21.722 11.4491 21.8022 11.5493 21.8522C11.5994 21.8823 11.6395 21.9023 11.6695 21.9123C11.6896 21.9123 11.6996 21.9224 11.7096 21.9324H11.7196C11.92 22.0225 12.1403 22.0225 12.3307 21.9324H12.3407C12.3407 21.9324 12.3607 21.9324 12.3707 21.9224C12.3707 21.9224 12.3707 21.9224 12.3808 21.9224C12.4108 21.9123 12.4509 21.8823 12.501 21.8623C12.6011 21.8122 12.7514 21.722 12.9117 21.6218C13.2523 21.4115 13.6931 21.0809 14.1438 20.6201C15.0454 19.6985 15.957 18.2359 15.957 16.1623C15.957 16.0922 15.957 16.022 15.957 15.9519C16.0271 15.9519 16.0973 15.9519 16.1674 15.9519C18.251 15.9519 19.7036 15.0403 20.6252 14.1387C21.086 13.688 21.4166 13.2472 21.6269 12.9066C21.7371 12.7363 21.8173 12.596 21.8674 12.4959C21.8974 12.4458 21.9174 12.4057 21.9275 12.3757C21.9275 12.3556 21.9375 12.3456 21.9475 12.3356V12.3156C22.0377 12.1152 22.0377 11.8948 21.9475 11.7045C21.9475 11.7045 21.9475 11.6744 21.9375 11.6644C21.9375 11.6644 21.9375 11.6644 21.9375 11.6544C21.9175 11.6243 21.8974 11.5843 21.8774 11.5342C21.8273 11.434 21.7371 11.2837 21.637 11.1235C21.4266 10.7829 21.096 10.3421 20.6352 9.89131C19.7136 8.98973 18.251 8.07814 16.1774 8.07814C16.1073 8.07814 16.0372 8.07814 15.967 8.07814C15.967 8.00801 15.967 7.93789 15.967 7.86777C15.967 5.78412 15.0554 4.33158 14.1539 3.40997C13.7031 2.94916 13.2623 2.61858 12.9217 2.40821C12.7514 2.29802 12.6112 2.21788 12.511 2.16779C12.4609 2.13774 12.4208 2.11771 12.3908 2.10769C12.3707 2.10769 12.3607 2.09767 12.3507 2.08765H12.3407M8.5741 13.5477C8.44387 13.8282 8.3437 14.1287 8.26356 14.4493C8.13333 14.4493 7.99308 14.4593 7.85284 14.4593C6.25003 14.4593 5.15812 13.7681 4.43686 13.0769C4.07623 12.7263 3.81577 12.3757 3.64547 12.1152C3.62544 12.0851 3.6054 12.0551 3.58537 12.025C3.6054 11.995 3.62544 11.9649 3.64547 11.9349C3.81577 11.6744 4.07623 11.3238 4.43686 10.9732C5.1481 10.272 6.25003 9.59078 7.85284 9.59078C7.99308 9.59078 8.13333 9.59078 8.26356 9.6008C8.3437 9.92136 8.45389 10.2219 8.5741 10.5024C8.36373 10.9732 8.25354 11.4841 8.25354 12.0351C8.25354 12.586 8.37375 13.0969 8.5741 13.5677V13.5477ZM10.9483 4.45179C11.2989 4.09116 11.6495 3.8307 11.9099 3.66041C11.94 3.64037 11.97 3.62034 12.0001 3.6003C12.0301 3.62034 12.0602 3.64037 12.0903 3.66041C12.3507 3.8307 12.7013 4.09116 13.0519 4.45179C13.7532 5.16304 14.4344 6.26496 14.4344 7.86777C14.4344 8.31856 14.3943 8.71926 14.3141 9.06987C13.673 8.569 12.8716 8.26847 11.9901 8.26847C11.1085 8.26847 10.3071 8.569 9.66601 9.06987C9.58587 8.71926 9.5458 8.31856 9.5458 7.86777C9.5458 6.26496 10.237 5.17305 10.9282 4.45179H10.9483ZM14.2641 12.015C14.2641 13.2572 13.2523 14.269 12.0101 14.269C10.7679 14.269 9.75617 13.2572 9.75617 12.015C9.75617 10.7729 10.7679 9.76108 12.0101 9.76108C13.2523 9.76108 14.2641 10.7729 14.2641 12.015ZM13.072 19.5783C12.7214 19.9389 12.3707 20.1993 12.1103 20.3696C12.0802 20.3897 12.0502 20.4097 12.0201 20.4298C11.9901 20.4097 11.96 20.3897 11.93 20.3696C11.6695 20.1993 11.3189 19.9389 10.9683 19.5783C10.2671 18.867 9.58587 17.7651 9.58587 16.1623C9.58587 15.7115 9.62594 15.3108 9.70608 14.9602C10.3472 15.4611 11.1486 15.7616 12.0301 15.7616C12.9117 15.7616 13.7131 15.4611 14.3542 14.9602C14.4344 15.3108 14.4744 15.7115 14.4744 16.1623C14.4744 17.7651 13.7832 18.857 13.092 19.5783H13.072ZM20.3647 12.1052C20.1944 12.3656 19.934 12.7163 19.5733 13.0669C18.8621 13.7681 17.7602 14.4493 16.1574 14.4493C16.0171 14.4493 15.8769 14.4493 15.7467 14.4393C15.6665 14.1187 15.5563 13.8182 15.4361 13.5377C15.6465 13.0669 15.7567 12.556 15.7567 12.005C15.7567 11.454 15.6365 10.9432 15.4361 10.4723C15.5663 10.1918 15.6665 9.89131 15.7467 9.57075C15.8769 9.57075 16.0171 9.56073 16.1574 9.56073C17.7602 9.56073 18.8521 10.2519 19.5733 10.9432C19.934 11.2938 20.1944 11.6444 20.3647 11.9048C20.3848 11.9349 20.4048 11.9649 20.4248 11.995C20.4048 12.025 20.3848 12.0551 20.3647 12.0851V12.1052Z"
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
export class SvgFlower2Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
