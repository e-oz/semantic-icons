import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloud-sun-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.64304 2.5086C8.05683 2.52736 8.37706 2.87801 8.3583 3.2918L8.35784 3.30179C8.33908 3.71558 7.98843 4.03581 7.57464 4.01705C7.16085 3.99828 6.84062 3.64763 6.85938 3.23384L6.85984 3.22385C6.8786 2.81006 7.22925 2.48983 7.64304 2.5086Z"
        fill="#323544"
      />
      <path
        d="M11.3684 4.25343C11.6477 4.55929 11.6262 5.03368 11.3204 5.313L11.313 5.31975C11.0071 5.59907 10.5327 5.57756 10.2534 5.2717C9.97409 4.96584 9.9956 4.49145 10.3015 4.21213L10.3088 4.20538C10.6147 3.92606 11.0891 3.94757 11.3684 4.25343Z"
        fill="#323544"
      />
      <path
        d="M4.5457 10.4845C4.82503 10.7903 4.80351 11.2647 4.49765 11.544L4.49027 11.5508C4.18441 11.8301 3.71002 11.8086 3.4307 11.5027C3.15137 11.1969 3.17289 10.7225 3.47875 10.4431L3.48613 10.4364C3.79199 10.1571 4.26638 10.1786 4.5457 10.4845Z"
        fill="#323544"
      />
      <path
        d="M2.75533 8.41825C3.16911 8.43701 3.51977 8.11678 3.53853 7.70299C3.55729 7.28921 3.23706 6.93855 2.82328 6.91979L2.81329 6.91934C2.3995 6.90057 2.04885 7.2208 2.03008 7.63459C2.01132 8.04838 2.33155 8.39903 2.74534 8.4178L2.75533 8.41825Z"
        fill="#323544"
      />
      <path
        d="M4.79331 5.02411C4.48745 5.30343 4.01306 5.28192 3.73374 4.97606L3.72699 4.96868C3.44767 4.66282 3.46918 4.18843 3.77504 3.90911C4.0809 3.62978 4.55529 3.65129 4.83461 3.95715L4.84136 3.96454C5.12068 4.2704 5.09917 4.74479 4.79331 5.02411Z"
        fill="#323544"
      />
      <path
        d="M5.83617 7.80718C5.87532 6.94375 6.60702 6.27553 7.47045 6.31469C8.03886 6.34046 8.52267 6.66636 8.77576 7.1324C9.15455 6.80377 9.56545 6.51122 10.003 6.26007C9.48747 5.43216 8.58635 4.86375 7.5384 4.81623C5.84739 4.73954 4.41439 6.04822 4.33771 7.73923C4.27739 9.06942 5.07428 10.24 6.2402 10.7163C6.31356 10.6906 6.38762 10.6664 6.46235 10.6438C6.60077 10.2071 6.77688 9.78728 6.98682 9.38802C6.29575 9.19981 5.80236 8.55259 5.83617 7.80718Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.8613 6.73438C17.151 6.73438 19.8616 9.27843 20.1035 12.5106C21.2548 13.2235 22.0234 14.4989 22.0234 15.9549C22.0234 18.191 20.2108 20.0036 17.9748 20.0036H8.07212C5.83609 20.0036 4.02344 18.191 4.02344 15.9549C4.02344 13.8474 5.63378 12.1159 7.69116 11.9239C8.19609 8.97566 10.7732 6.73438 13.8613 6.73438ZM18.621 12.9676C18.6135 10.3545 16.4807 8.23438 13.8613 8.23438C11.3321 8.23438 9.25574 10.2116 9.10979 12.7002C9.08654 13.0966 8.75823 13.4062 8.36108 13.4062H8.07212C6.66452 13.4062 5.52344 14.5473 5.52344 15.9549C5.52344 17.3625 6.66452 18.5036 8.07212 18.5036H17.9748C19.3824 18.5036 20.5234 17.3625 20.5234 15.9549C20.5234 14.9341 19.9232 14.0518 19.0532 13.6448C18.7902 13.5217 18.6218 13.258 18.621 12.9676Z"
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
export class SvgCloudSunIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
