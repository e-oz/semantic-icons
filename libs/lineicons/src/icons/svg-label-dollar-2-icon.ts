import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-label-dollar-2-icon',
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
        d="M12 8.24961C12.4142 8.24961 12.75 8.5854 12.75 8.99961V9.43739C13.7408 9.58802 14.5 10.4436 14.5 11.4765C14.5 11.8907 14.1642 12.2265 13.75 12.2265C13.3358 12.2265 13 11.8907 13 11.4765C13 11.1657 12.7481 10.9139 12.4374 10.9139H11.75C11.3358 10.9139 11 11.2496 11 11.6639V11.9289C11 12.2416 11.1939 12.5214 11.4866 12.6312L13.0401 13.2138C13.9182 13.5431 14.5 14.3826 14.5 15.3205V15.5855C14.5 16.6563 13.752 17.5524 12.75 17.7798V18.2496C12.75 18.6638 12.4142 18.9996 12 18.9996C11.5858 18.9996 11.25 18.6638 11.25 18.2496V17.812C10.2592 17.6614 9.5 16.8058 9.5 15.7729C9.5 15.3587 9.83579 15.0229 10.25 15.0229C10.6642 15.0229 11 15.3587 11 15.7729C11 16.0837 11.2519 16.3355 11.5626 16.3355H12.25C12.6642 16.3355 13 15.9998 13 15.5855V15.3205C13 15.0078 12.8061 14.728 12.5134 14.6182L10.9599 14.0356C10.0818 13.7063 9.5 12.8668 9.5 11.9289V11.6639C9.5 10.5931 10.248 9.69697 11.25 9.46961V8.99961C11.25 8.5854 11.5858 8.24961 12 8.24961Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0927 3.01432C13.0296 2.97929 12.9653 2.94752 12.9 2.91899V1.99961C12.9 1.50255 12.4971 1.09961 12 1.09961C11.5029 1.09961 11.1 1.50255 11.1 1.99961V2.91899C11.0347 2.94752 10.9704 2.97929 10.9073 3.01432L5.6573 5.93099C4.94301 6.32782 4.5 7.08071 4.5 7.89784V19.7496C4.5 20.9923 5.50736 21.9996 6.75 21.9996H17.25C18.4926 21.9996 19.5 20.9923 19.5 19.7496V7.89784C19.5 7.08071 19.057 6.32782 18.3427 5.93099L13.0927 3.01432ZM12 6.64961C12.4971 6.64961 12.9 6.24667 12.9 5.74961V4.6232L17.6142 7.24222C17.8523 7.3745 18 7.62546 18 7.89784V19.7496C18 20.1638 17.6642 20.4996 17.25 20.4996H6.75C6.33579 20.4996 6 20.1638 6 19.7496V7.89784C6 7.62546 6.14767 7.3745 6.38577 7.24222L11.1 4.6232V5.74961C11.1 6.24667 11.5029 6.64961 12 6.64961Z"
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
export class SvgLabelDollar2Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
