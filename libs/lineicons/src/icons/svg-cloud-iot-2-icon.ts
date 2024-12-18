import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cloud-iot-2-icon',
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
        d="M8.61288 2.15759C10.4745 1.68444 12.3561 2.30712 13.5784 3.61827C14.5156 3.15767 15.6338 3.06578 16.6928 3.45537C18.4831 4.11402 19.5117 5.92951 19.2442 7.74502C20.4227 8.53784 21.1997 9.88466 21.1997 11.414C21.1997 13.8546 19.2212 15.8331 16.7806 15.8331H16.4983V18.249C16.4983 18.6632 16.8341 18.999 17.2483 18.999H17.7386C17.9667 18.6955 18.3297 18.4992 18.7385 18.4992H18.7485C19.4389 18.4992 19.9985 19.0589 19.9985 19.7492C19.9985 20.4396 19.4389 20.9992 18.7485 20.9992H18.7385C18.3295 20.9992 17.9663 20.8027 17.7383 20.499H17.2483C16.0057 20.499 14.9983 19.4916 14.9983 18.249V15.8331H12.7483V19.7417C13.0576 19.9692 13.2583 20.3358 13.2583 20.7492C13.2583 21.4396 12.6986 21.9992 12.0083 21.9992H11.9983C11.3079 21.9992 10.7483 21.4396 10.7483 20.7492C10.7483 20.3403 10.9447 19.9772 11.2483 19.7491V15.8331H8.99829V18.249C8.99829 19.4916 7.99093 20.499 6.74829 20.499H6.25857C6.03053 20.8027 5.66736 20.9992 5.25829 20.9992H5.24829C4.55793 20.9992 3.99829 20.4396 3.99829 19.7492C3.99829 19.0589 4.55793 18.4992 5.24829 18.4992H5.25829C5.66714 18.4992 6.03014 18.6955 6.2582 18.999H6.74829C7.1625 18.999 7.49829 18.6632 7.49829 18.249V15.8331H7.21593C4.77535 15.8331 2.79688 13.8546 2.79688 11.414C2.79688 9.85313 3.60618 8.48241 4.82582 7.69667C4.51439 5.19526 6.10638 2.79463 8.61288 2.15759ZM8.28493 14.3331H11.9617C11.9738 14.3325 11.986 14.3322 11.9983 14.3322C12.0106 14.3322 12.0228 14.3325 12.0349 14.3331H15.7117C15.7238 14.3325 15.736 14.3322 15.7483 14.3322C15.7606 14.3322 15.7728 14.3325 15.7849 14.3331H16.7806C18.3928 14.3331 19.6997 13.0262 19.6997 11.414C19.6997 10.2632 19.0338 9.26645 18.0628 8.79076C17.7312 8.62826 17.5672 8.24848 17.6763 7.89564C18.06 6.65513 17.4081 5.31685 16.1748 4.86312C15.3662 4.56562 14.5014 4.7189 13.8556 5.19903C13.6929 5.31995 13.4882 5.36989 13.2882 5.33748C13.0881 5.30507 12.9097 5.19307 12.7935 5.02699C11.9653 3.84287 10.4633 3.23497 8.98236 3.61137C7.0829 4.09413 5.92891 6.01486 6.38801 7.91457C6.47171 8.2609 6.30019 8.61832 5.97763 8.7697C4.98306 9.23645 4.29688 10.2459 4.29688 11.414C4.29688 13.0262 5.60378 14.3331 7.21593 14.3331H8.21165C8.22379 14.3325 8.23601 14.3322 8.24829 14.3322C8.26058 14.3322 8.27279 14.3325 8.28493 14.3331Z"
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
export class SvgCloudIot2Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
