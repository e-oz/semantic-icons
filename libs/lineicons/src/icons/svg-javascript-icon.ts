import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-javascript-icon',
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
        d="M3 3V21H21V3H3ZM12.8129 17.0226C12.8129 18.7935 11.7677 19.6065 10.2581 19.6065C8.92258 19.6065 8.13871 18.9097 7.73226 18.0387L9.12581 17.1677C9.35806 17.6613 9.61935 18.0387 10.229 18.0387C10.8097 18.0387 11.129 17.8355 11.129 16.9645V11.2742H12.8129V17.0226ZM16.8194 19.6065C15.2516 19.6065 14.2355 18.8226 13.7129 17.8935L15.1065 17.0806C15.4839 17.6613 15.9774 18.0968 16.7903 18.0968C17.4871 18.0968 17.9226 17.7774 17.9226 17.2258C17.9226 16.6452 17.4871 16.4419 16.7032 16.0935L16.2968 15.9194C15.0774 15.4258 14.2645 14.729 14.2645 13.3355C14.2645 12.0581 15.1935 11.129 16.7323 11.129C17.8065 11.129 18.5613 11.5065 19.1129 12.4935L17.8065 13.3645C17.5161 12.871 17.2258 12.6387 16.7032 12.6387C16.2097 12.6387 15.8903 12.9581 15.8903 13.3645C15.8903 13.8581 16.2097 14.0613 16.9065 14.3806L17.3129 14.5548C18.7355 15.1645 19.5774 15.7742 19.5774 17.2258C19.6065 18.7645 18.4161 19.6065 16.8194 19.6065Z"
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
export class SvgJavascriptIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
