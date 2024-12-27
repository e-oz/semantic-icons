import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-svelte-icon',
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
        d="M11.0962 2.88991C13.7069 1.20039 17.3192 1.98818 19.1478 4.64617V4.64942C19.8276 5.61463 20.193 6.77174 20.1927 7.95848C20.192 8.29297 20.163 8.62676 20.1062 8.95625C19.979 9.66846 19.7113 10.3472 19.3193 10.9518C19.7341 11.7576 19.9512 12.6532 19.9524 13.5626C19.9526 13.8972 19.9231 14.2311 19.8642 14.5603C19.7358 15.2925 19.4581 15.9894 19.0487 16.6061C18.6394 17.2228 18.1076 17.7457 17.4875 18.1412L12.9056 21.1101C10.3029 22.7996 6.68253 22.0118 4.85393 19.3538C4.41948 18.7371 4.11064 18.0384 3.94552 17.2989C3.7804 16.5593 3.76232 15.7938 3.89235 15.047C4.01936 14.3342 4.28703 13.6549 4.67924 13.0498C4.26102 12.2438 4.04108 11.3469 4.03819 10.4358C4.03868 10.1007 4.06817 9.76628 4.12633 9.43642C4.25653 8.70445 4.53574 8.0082 4.9461 7.39215C5.35647 6.77609 5.88894 6.25382 6.50946 5.85877L11.0962 2.88991ZM9.73073 19.7233C10.04 19.723 10.348 19.6831 10.6475 19.6045C10.9774 19.5145 11.2919 19.374 11.5802 19.1878L16.1589 16.2206C16.5314 15.9821 16.8508 15.6675 17.097 15.2967C17.3431 14.926 17.5105 14.5072 17.5884 14.0672C17.6241 13.8674 17.6418 13.6647 17.6414 13.4617C17.6412 12.7478 17.4216 12.0519 17.0131 11.471C16.6776 10.9802 16.23 10.5792 15.7086 10.3023C15.1873 10.0254 14.6077 9.88072 14.0194 9.88078C13.7101 9.88116 13.4021 9.92107 13.1027 9.9996C12.7734 10.0891 12.4594 10.2291 12.1716 10.4147L10.4215 11.554C10.3347 11.6109 10.2395 11.6532 10.1394 11.6794C10.0495 11.7035 9.9568 11.7155 9.86376 11.7151C9.68676 11.7152 9.51234 11.6717 9.35552 11.5883C9.19864 11.505 9.06404 11.3843 8.96307 11.2366C8.84 11.0613 8.77387 10.8513 8.774 10.636C8.77653 10.578 8.7835 10.5203 8.79481 10.4635C8.81844 10.3306 8.86894 10.2041 8.94316 10.092C9.01735 9.97998 9.11364 9.88475 9.22592 9.81241L13.8127 6.84515C13.8993 6.788 13.9946 6.74565 14.0947 6.71984C14.1834 6.6938 14.2749 6.67958 14.3671 6.67749C14.5442 6.67762 14.7185 6.72121 14.8753 6.80453C15.0322 6.88784 15.1668 7.00844 15.2678 7.15604C15.3909 7.33261 15.457 7.54359 15.4569 7.75991V7.84942L15.4409 8.02195L15.6108 8.07568C16.2559 8.27343 16.8629 8.5817 17.4058 8.98718L17.6398 9.16135L17.7263 8.8944C17.7727 8.75221 17.8096 8.60701 17.8369 8.45982C17.8708 8.26147 17.8879 8.06052 17.8882 7.8592C17.8907 7.14573 17.6739 6.44923 17.2679 5.86692C16.9314 5.37528 16.4825 4.97392 15.9597 4.69722C15.4368 4.42053 14.8558 4.27679 14.2662 4.27832C13.957 4.27818 13.649 4.31756 13.3495 4.39552C13.0201 4.48568 12.7062 4.62618 12.4183 4.8122L7.83164 7.77944C7.45944 8.01817 7.14015 8.33287 6.89404 8.70358C6.64797 9.07428 6.48043 9.49289 6.40205 9.93285C6.36814 10.1307 6.35102 10.3311 6.3508 10.5318C6.35092 11.2457 6.57056 11.9416 6.97901 12.5225C7.31431 13.0132 7.76164 13.4141 8.28266 13.691C8.80375 13.968 9.38306 14.1126 9.97114 14.1127C10.2804 14.1122 10.5884 14.0723 10.8879 13.9939C11.2171 13.9041 11.531 13.7642 11.819 13.5789L13.5659 12.446C13.6521 12.3892 13.7468 12.3469 13.8463 12.3206C13.9363 12.2965 14.0289 12.2845 14.122 12.2849C14.2992 12.2847 14.4739 12.3281 14.631 12.4115C14.7882 12.4948 14.923 12.6156 15.0243 12.7634C15.1491 12.9381 15.2168 13.1481 15.2182 13.364C15.2187 13.5292 15.178 13.6919 15.0998 13.8368C15.0216 13.9817 14.9085 14.1041 14.771 14.1925L10.1891 17.176C10.102 17.2322 10.0068 17.2745 9.90705 17.3013C9.81707 17.3255 9.72441 17.3375 9.63138 17.3371C9.45346 17.3364 9.27839 17.2914 9.12145 17.2064C8.96447 17.1213 8.83034 16.9985 8.73068 16.8488C8.6074 16.673 8.54127 16.4625 8.54161 16.2466V16.1571L8.55761 15.9845L8.38776 15.9325C7.74292 15.734 7.13599 15.4258 6.59278 15.021L6.3588 14.8403L6.27226 15.1072C6.22586 15.2494 6.18892 15.3946 6.1617 15.5418C6.12779 15.7396 6.1106 15.94 6.11038 16.1408C6.10998 16.8547 6.32967 17.5508 6.73863 18.1315C7.07349 18.6227 7.5206 19.0242 8.04175 19.3014C8.56289 19.5787 9.14242 19.7235 9.73073 19.7233Z"
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
export class SvgSvelteIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
