import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-amazon-original-icon',
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
        d="M15.5454 17.345C15.7479 17.4519 16.0073 17.4406 16.1866 17.28V17.2813L16.1904 17.2888C16.8765 16.6799 17.5699 16.0792 18.2704 15.4869C18.4916 15.3031 18.4535 15.0156 18.2816 14.7656C18.2282 14.6916 18.1744 14.6191 18.121 14.547C17.678 13.9499 17.2585 13.3844 17.2585 12.25V8.02C17.2585 7.87581 17.2593 7.73257 17.2601 7.5904C17.2694 5.96712 17.2778 4.48508 16.0635 3.35125C15.0223 2.35125 13.2966 2 11.976 2C9.39539 2 6.50976 2.9625 5.90038 6.15938C5.83601 6.49313 6.08351 6.67188 6.30476 6.72188L8.94289 7.01688C9.19101 7.00563 9.37039 6.77063 9.41601 6.52063C9.64101 5.42188 10.561 4.89063 11.5954 4.89063C12.156 4.89063 12.7904 5.09688 13.1185 5.59688C13.4607 6.09667 13.4555 6.76309 13.4508 7.36075C13.4503 7.42901 13.4498 7.49638 13.4498 7.5625V7.90625C13.2039 7.93362 12.9462 7.95949 12.6807 7.98614C11.2485 8.12992 9.58939 8.29646 8.34664 8.84376C6.64351 9.57688 5.45288 11.0769 5.45288 13.2794C5.45288 16.1 7.22788 17.5088 9.51414 17.5088C11.4416 17.5088 12.4991 17.0544 13.9879 15.5356C14.0609 15.6414 14.1266 15.7391 14.1887 15.8313C14.5454 16.3612 14.7787 16.7077 15.5454 17.345ZM13.4486 10.8099C13.4498 11.8038 13.4508 12.6476 12.941 13.5431C12.5035 14.3056 11.816 14.7763 11.0629 14.7763C10.021 14.7763 9.41039 13.9825 9.41039 12.8106C9.41039 10.4981 11.4829 10.0775 13.4491 10.0775L13.4485 10.665C13.4485 10.7137 13.4486 10.762 13.4486 10.8099Z"
        fill="#323544"
      />
      <path
        d="M11.98 22C14.56 22 17.5568 21.1875 19.625 19.6625C19.9687 19.4087 19.675 19.0312 19.325 19.18C17.068 20.1309 14.6453 20.6262 12.1962 20.6375C8.80495 20.6375 5.5112 19.7062 2.85183 18.1581C2.61932 18.0219 2.45182 18.2606 2.63932 18.4356C5.1037 20.6625 8.35495 22 11.98 22Z"
        fill="#323544"
      />
      <path
        d="M18.0919 18.5952C18.766 18.516 20.225 18.3445 20.485 18.6787H20.4937C20.7587 19.0175 20.2 20.4137 19.95 21.0362C19.8668 21.2256 20.0293 21.3012 20.2 21.1587C21.31 20.2312 21.595 18.2856 21.3687 18.0062C21.1425 17.7269 19.2087 17.4875 18.0212 18.3187C17.8387 18.4456 17.8693 18.6225 18.0725 18.5975L18.0919 18.5952Z"
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
export class SvgAmazonOriginalIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
