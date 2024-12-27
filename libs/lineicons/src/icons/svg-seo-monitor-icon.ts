import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-seo-monitor-icon',
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
        d="M8.93795 6.58496C8.42885 6.58496 8.0177 6.73221 7.72973 7.04721C7.44426 7.35344 7.31195 7.77879 7.31195 8.30096C7.31195 8.68993 7.39826 9.04522 7.57356 9.36335L7.57421 9.3645C7.74806 9.67357 8.04715 10.0105 8.4607 10.3754L8.46147 10.3761C8.7815 10.6547 8.98899 10.885 9.09664 11.068L9.09767 11.0697C9.20155 11.2411 9.25595 11.4444 9.25595 11.685C9.25595 11.8921 9.21262 12.0104 9.15806 12.0722C9.11089 12.1261 9.03223 12.165 8.89295 12.165C8.7527 12.165 8.67243 12.1244 8.62315 12.0656C8.56962 12.0017 8.52995 11.8897 8.52995 11.703V11.121H7.29395V11.631C7.29395 12.1638 7.42252 12.5974 7.70096 12.9098L7.70207 12.911C7.98471 13.2212 8.39371 13.365 8.90195 13.365C9.41635 13.365 9.83081 13.2181 10.1191 12.9028C10.4109 12.5902 10.5459 12.1525 10.5459 11.613C10.5459 11.1971 10.4639 10.8271 10.2944 10.5077C10.126 10.1902 9.82547 9.84908 9.40542 9.48382C9.0857 9.20553 8.87391 8.97726 8.75938 8.79781C8.65392 8.62328 8.60195 8.43757 8.60195 8.23796C8.60195 8.05368 8.64037 7.94334 8.69163 7.88089C8.73825 7.8241 8.81373 7.78496 8.94695 7.78496C9.07524 7.78496 9.15099 7.82372 9.2001 7.88336L9.20306 7.88674C9.25133 7.9419 9.29195 8.05309 9.29195 8.25596V8.72996H10.5279V8.31896C10.5279 7.78717 10.3998 7.35606 10.121 7.04922C9.84462 6.73227 9.44095 6.58496 8.93795 6.58496Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0241 6.58496C15.5091 6.58496 15.0925 6.73208 14.7985 7.04653C14.5069 7.35854 14.3711 7.78992 14.3711 8.31896V11.631C14.3711 12.16 14.5069 12.5914 14.7985 12.9034C15.0925 13.2178 15.5091 13.365 16.0241 13.365C16.5391 13.365 16.9557 13.2178 17.2497 12.9034C17.5413 12.5914 17.6771 12.16 17.6771 11.631V8.31896C17.6771 7.78992 17.5413 7.35854 17.2497 7.04653C16.9557 6.73208 16.5391 6.58496 16.0241 6.58496ZM15.6611 8.25596C15.6611 8.06585 15.701 7.95117 15.755 7.88574C15.8045 7.82581 15.8846 7.78496 16.0241 7.78496C16.1636 7.78496 16.2437 7.82581 16.2932 7.88574C16.3473 7.95117 16.3871 8.06585 16.3871 8.25596V11.694C16.3871 11.8841 16.3473 11.9988 16.2932 12.0642C16.2437 12.1241 16.1636 12.165 16.0241 12.165C15.8846 12.165 15.8045 12.1241 15.755 12.0642C15.701 11.9988 15.6611 11.8841 15.6611 11.694V8.25596Z"
        fill="#323544"
      />
      <path
        d="M13.9936 6.67496H10.9936V13.275H13.9936V12.075H12.2836V10.44H13.6426V9.23996H12.2836V7.87496H13.9936V6.67496Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.78711 4.17188C3.54447 4.17188 2.53711 5.17923 2.53711 6.42187V13.8281C2.53711 15.0708 3.54447 16.0781 4.78711 16.0781H11.7871V18.3281H9.53714C9.12293 18.3281 8.78714 18.6639 8.78714 19.0781C8.78714 19.4923 9.12293 19.8281 9.53714 19.8281H15.5371C15.9514 19.8281 16.2871 19.4923 16.2871 19.0781C16.2871 18.6639 15.9514 18.3281 15.5371 18.3281H13.2871V16.0781H20.2871C21.5298 16.0781 22.5371 15.0708 22.5371 13.8281V6.42188C22.5371 5.17923 21.5297 4.17188 20.2871 4.17188H4.78711ZM4.03711 6.42187C4.03711 6.00766 4.3729 5.67188 4.78711 5.67188H20.2871C20.7013 5.67188 21.0371 6.00766 21.0371 6.42188V13.8281C21.0371 14.2423 20.7013 14.5781 20.2871 14.5781H4.78711C4.3729 14.5781 4.03711 14.2423 4.03711 13.8281V6.42187Z"
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
export class SvgSeoMonitorIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
