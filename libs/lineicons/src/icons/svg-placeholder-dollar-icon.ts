import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-placeholder-dollar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 5.5C12.6642 5.5 13 5.83579 13 6.25V6.68778C13.9908 6.83841 14.75 7.69397 14.75 8.72684C14.75 9.14106 14.4142 9.47684 14 9.47684C13.5858 9.47684 13.25 9.14106 13.25 8.72684C13.25 8.41613 12.9981 8.16424 12.6874 8.16424H12C11.5858 8.16424 11.25 8.50003 11.25 8.91424V9.17932C11.25 9.49194 11.4439 9.77178 11.7366 9.88156L13.2901 10.4641C14.1682 10.7935 14.75 11.633 14.75 12.5709V12.8359C14.75 13.9067 14.002 14.8028 13 15.0302V15.5C13 15.9142 12.6642 16.25 12.25 16.25C11.8358 16.25 11.5 15.9142 11.5 15.5V15.0624C10.5092 14.9118 9.75 14.0562 9.75 13.0233C9.75 12.6091 10.0858 12.2733 10.5 12.2733C10.9142 12.2733 11.25 12.6091 11.25 13.0233C11.25 13.3341 11.5019 13.5859 11.8126 13.5859H12.5C12.9142 13.5859 13.25 13.2502 13.25 12.8359V12.5709C13.25 12.2582 13.0561 11.9784 12.7634 11.8686L11.2099 11.286C10.3318 10.9567 9.75 10.1172 9.75 9.17932V8.91424C9.75 7.84345 10.498 6.94736 11.5 6.72V6.25C11.5 5.83579 11.8358 5.5 12.25 5.5Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.25 2C7.41751 2 3.5 5.91751 3.5 10.75C3.5 14.3979 5.68538 17.2112 7.74944 19.0611C8.79077 19.9943 9.82886 20.708 10.6055 21.1883C10.9947 21.4289 11.3202 21.6122 11.5504 21.7363C11.6656 21.7983 11.757 21.8457 11.8209 21.8781C11.8528 21.8943 11.8778 21.9067 11.8955 21.9154L11.9163 21.9256L11.9225 21.9286L11.9245 21.9296C11.9245 21.9296 11.9258 21.9302 12.25 21.2539L11.9258 21.9302C12.1307 22.0285 12.3693 22.0285 12.5742 21.9302L12.25 21.2539C12.5742 21.9302 12.5742 21.9302 12.5742 21.9302L12.5755 21.9296L12.5775 21.9286L12.5837 21.9256L12.6045 21.9154C12.6222 21.9067 12.6472 21.8943 12.6791 21.8781C12.743 21.8457 12.8344 21.7983 12.9496 21.7363C13.1798 21.6122 13.5053 21.4289 13.8945 21.1883C14.6711 20.708 15.7092 19.9943 16.7506 19.0611C18.8146 17.2112 21 14.3979 21 10.75C21 5.91751 17.0825 2 12.25 2ZM13.1055 19.9125C12.7516 20.1314 12.4568 20.2976 12.25 20.4093C12.0432 20.2976 11.7484 20.1314 11.3945 19.9125C10.6711 19.4652 9.70923 18.8032 8.75056 17.944C6.81462 16.209 5 13.7704 5 10.75C5 6.74594 8.24594 3.5 12.25 3.5C16.2541 3.5 19.5 6.74594 19.5 10.75C19.5 13.7704 17.6854 16.209 15.7494 17.944C14.7908 18.8032 13.8289 19.4652 13.1055 19.9125Z"
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
export class SvgPlaceholderDollarIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
