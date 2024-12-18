import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-stripe-icon',
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
        d="M12.828 9.0128L11.4335 9.30819V8.19229L12.828 7.90234V9.0128Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7284 9.63104C15.1839 9.63104 14.8339 9.88266 14.6395 10.0578L14.5672 9.71859H13.345V16.0969L14.7339 15.807L14.7395 14.2589C14.9395 14.4011 15.2339 14.6035 15.7228 14.6035C16.7173 14.6035 17.6229 13.8158 17.6229 12.0817C17.6173 10.4954 16.7007 9.63104 15.7284 9.63104ZM15.395 13.4001C15.0672 13.4001 14.8728 13.2852 14.7395 13.143L14.7339 11.1135C14.8784 10.9549 15.0784 10.8455 15.395 10.8455C15.9006 10.8455 16.2506 11.4034 16.2506 12.12C16.2506 12.853 15.9062 13.4001 15.395 13.4001Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12.1364C22 10.736 21.3111 9.63104 19.9944 9.63104C18.6721 9.63104 17.8721 10.736 17.8721 12.1255C17.8721 13.772 18.8165 14.6035 20.1722 14.6035C20.8333 14.6035 21.3333 14.4558 21.7111 14.248V13.1539C21.3333 13.3399 20.9 13.4548 20.3499 13.4548C19.811 13.4548 19.3332 13.2688 19.2721 12.6233H21.9889C21.9889 12.5931 21.9909 12.5246 21.9932 12.4457L21.9932 12.4453C21.9963 12.3381 22 12.2119 22 12.1364ZM19.2555 11.6167C19.2555 10.9986 19.6388 10.7415 19.9888 10.7415C20.3277 10.7415 20.6888 10.9986 20.6888 11.6167H19.2555Z"
        fill="#323544"
      />
      <path
        d="M12.828 9.72428H11.4335V14.5108H12.828V9.72428Z"
        fill="#323544"
      />
      <path
        d="M9.8496 9.724L9.93847 10.1288C10.2663 9.53806 10.9163 9.65839 11.0941 9.724V10.9822C10.9219 10.922 10.3663 10.8454 10.0385 11.2666V14.5105H8.64956V9.724H9.8496Z"
        fill="#323544"
      />
      <path
        d="M7.16173 8.53725L5.80614 8.82168L5.80052 13.2034C5.80052 14.013 6.41725 14.6093 7.23951 14.6093C7.69507 14.6093 8.02837 14.5272 8.21173 14.4287V13.3182C8.03395 13.3894 7.15618 13.641 7.15618 12.8314V10.8895H8.21173V9.72429H7.15618L7.16173 8.53725Z"
        fill="#323544"
      />
      <path
        d="M3.87784 10.8181C3.58338 10.8181 3.4056 10.9002 3.4056 11.1135C3.4056 11.3464 3.71157 11.4489 4.09116 11.576C4.70998 11.7832 5.52445 12.056 5.52789 13.0664C5.52789 14.0456 4.73342 14.609 3.57783 14.609C3.10004 14.609 2.5778 14.516 2.06111 14.2972V12.9953C2.52779 13.2469 3.1167 13.4329 3.57783 13.4329C3.88895 13.4329 4.11118 13.3508 4.11118 13.0992C4.11118 12.8412 3.77951 12.7232 3.3791 12.5809C2.76928 12.364 2 12.0905 2 11.1791C2 10.2109 2.75002 9.63104 3.87784 9.63104C4.33896 9.63104 4.79453 9.70217 5.25565 9.88266V11.1682C4.83342 10.9439 4.30007 10.8181 3.87784 10.8181Z"
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
export class SvgStripeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
