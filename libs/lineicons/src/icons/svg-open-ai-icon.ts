import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-open-ai-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5565 10.6338C21.0009 9.27575 20.8528 7.76958 20.1367 6.53501C19.0503 4.63378 16.8528 3.67081 14.7046 4.11526C13.7663 3.05353 12.3836 2.46094 10.9515 2.46094C8.75399 2.46094 6.82807 3.86835 6.13671 5.94242C4.7293 6.23872 3.51943 7.10291 2.80338 8.36217C1.71696 10.2634 1.96387 12.6338 3.42066 14.2634C2.97622 15.6461 3.14906 17.1276 3.8651 18.3622C4.95152 20.2634 7.14906 21.2511 9.2972 20.7819C10.2602 21.8437 11.6182 22.4609 13.0503 22.4609C15.2478 22.4609 17.1737 21.0535 17.8651 18.9795C19.2725 18.6832 20.4824 17.819 21.1984 16.5597C22.2849 14.6585 22.0379 12.2634 20.5565 10.6338ZM13.0503 21.1523C12.1614 21.1523 11.3219 20.856 10.6552 20.2881C10.6799 20.2634 10.754 20.2387 10.7787 20.214L14.754 17.9177C14.9515 17.7943 15.075 17.5967 15.075 17.3498V11.7449L16.754 12.7079C16.7787 12.7079 16.7787 12.7325 16.7787 12.7572V17.3992C16.8034 19.4733 15.1244 21.1523 13.0503 21.1523ZM5.00091 17.7202C4.55646 16.9548 4.40831 16.0659 4.55646 15.2017C4.58115 15.2264 4.63054 15.2511 4.67992 15.2758L8.65523 17.572C8.85276 17.6955 9.09967 17.6955 9.2972 17.572L14.1614 14.7572V16.7079C14.1614 16.7325 14.1614 16.7572 14.1367 16.7572L10.112 19.0782C8.33424 20.1153 6.03794 19.498 5.00091 17.7202ZM3.96387 9.02884C4.40831 8.26341 5.09967 7.69551 5.91449 7.37452V12.1153C5.91449 12.3375 6.03794 12.5597 6.23548 12.6832L11.0997 15.498L9.42066 16.4609C9.39597 16.4609 9.37128 16.4856 9.37128 16.4609L5.34659 14.1399C3.51943 13.1029 2.92683 10.8066 3.96387 9.02884ZM17.791 12.2387L12.9268 9.4239L14.6058 8.46094C14.6305 8.46094 14.6552 8.43625 14.6552 8.46094L18.6799 10.7819C20.4824 11.819 21.075 14.1153 20.0379 15.893C19.5935 16.6585 18.9021 17.2264 18.0873 17.5227V12.8066C18.112 12.5844 17.9886 12.3622 17.791 12.2387ZM19.4454 9.7202C19.4207 9.69551 19.3713 9.67081 19.3219 9.64612L15.3466 7.34983C15.1491 7.22637 14.9021 7.22637 14.7046 7.34983L9.84041 10.1646V8.21402C9.84041 8.18933 9.84041 8.16464 9.86511 8.16464L13.8898 5.84365C15.6923 4.80662 17.9639 5.4239 19.0009 7.22637C19.4454 7.96711 19.5935 8.856 19.4454 9.7202ZM8.92683 13.177L7.24782 12.214C7.22313 12.214 7.22313 12.1893 7.22313 12.1646V7.52267C7.22313 5.44859 8.90214 3.76958 10.9762 3.76958C11.8651 3.76958 12.7046 4.06588 13.3713 4.63378C13.3466 4.65847 13.2972 4.68316 13.2478 4.70785L9.27251 7.00415C9.07498 7.1276 8.95152 7.32514 8.95152 7.57205V13.177H8.92683ZM9.84041 11.2017L12.0133 9.94242L14.1861 11.2017V13.6955L12.0133 14.9548L9.84041 13.6955V11.2017Z"
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
export class SvgOpenAiIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
