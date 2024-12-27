import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coinbase-icon',
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
        d="M3.29338 14.2052C2.63977 14.2052 2 13.7276 2 12.6493C2 11.5675 2.63977 11.0969 3.29338 11.0969C3.61499 11.0969 3.86744 11.1812 4.04727 11.3006L3.85015 11.7396C3.72911 11.6518 3.54929 11.5956 3.36946 11.5956C2.97522 11.5956 2.61557 11.9117 2.61557 12.6423C2.61557 13.3728 2.9856 13.696 3.36946 13.696C3.54929 13.696 3.72911 13.6398 3.85015 13.5519L4.04727 14.0015C3.86053 14.128 3.61499 14.2052 3.29338 14.2052Z"
        fill="#323544"
      />
      <path
        d="M5.54385 14.2052C4.71039 14.2052 4.25045 13.5344 4.25045 12.6493C4.25045 11.7642 4.70696 11.0969 5.54385 11.0969C6.37723 11.0969 6.83718 11.7607 6.83718 12.6493C6.83718 13.5344 6.37723 14.2052 5.54385 14.2052ZM5.54385 11.578C5.0804 11.578 4.85219 11.9995 4.85219 12.6423C4.85219 13.285 5.0804 13.71 5.54385 13.71C6.00723 13.71 6.23547 13.285 6.23547 12.6423C6.23547 11.9995 6.00723 11.578 5.54385 11.578Z"
        fill="#323544"
      />
      <path
        d="M7.63925 10.6155C7.44212 10.6155 7.28299 10.461 7.28299 10.2713C7.28299 10.0817 7.44212 9.92712 7.63925 9.92712C7.83635 9.92712 7.99544 10.0817 7.99544 10.2713C7.99544 10.461 7.83288 10.6155 7.63925 10.6155ZM7.33836 11.1564H7.94011V14.1418H7.33836V11.1564Z"
        fill="#323544"
      />
      <path
        d="M10.2985 14.142V12.1505C10.2985 11.8028 10.091 11.5851 9.68293 11.5851C9.46508 11.5851 9.26447 11.6237 9.14343 11.6729V14.1455H8.54862V11.3076C8.84257 11.1847 9.21952 11.0969 9.67946 11.0969C10.5026 11.0969 10.9002 11.4622 10.9002 12.0943V14.1455H10.2985"
        fill="#323544"
      />
      <path
        d="M12.4812 14.2053C12.1008 14.2053 11.7238 14.1105 11.4921 13.9946V9.79395H12.0869V11.234C12.2287 11.1672 12.457 11.1111 12.661 11.1111C13.4184 11.1111 13.9336 11.666 13.9336 12.5792C13.9336 13.7066 13.3596 14.2053 12.4812 14.2053ZM12.5573 11.5852C12.3947 11.5852 12.2011 11.6238 12.0869 11.6836V13.6434C12.1734 13.682 12.3428 13.7206 12.5123 13.7206C12.9861 13.7206 13.3354 13.387 13.3354 12.6248C13.3388 11.9715 13.0345 11.5852 12.5573 11.5852Z"
        fill="#323544"
      />
      <path
        d="M15.5522 14.2052C14.7084 14.2052 14.2795 13.8575 14.2795 13.2675C14.2795 12.4351 15.151 12.2875 16.0398 12.2383V12.0487C16.0398 11.6729 15.7943 11.5394 15.4173 11.5394C15.1407 11.5394 14.8017 11.6272 14.6046 11.7221L14.4525 11.3076C14.6876 11.2023 15.0853 11.0969 15.4796 11.0969C16.1816 11.0969 16.6104 11.3744 16.6104 12.1119V13.9945C16.3995 14.1104 15.9672 14.2052 15.5522 14.2052ZM16.0433 12.6423C15.4415 12.6739 14.8432 12.7266 14.8432 13.2569C14.8432 13.573 15.0819 13.7662 15.5349 13.7662C15.7251 13.7662 15.9499 13.7346 16.0433 13.6889V12.6423Z"
        fill="#323544"
      />
      <path
        d="M17.9519 14.2052C17.6095 14.2052 17.2498 14.1104 17.0354 13.9945L17.236 13.5309C17.3882 13.6257 17.7098 13.724 17.9346 13.724C18.2562 13.724 18.4706 13.5625 18.4706 13.3131C18.4706 13.0427 18.2458 12.9373 17.9484 12.8249C17.5541 12.6739 17.115 12.4912 17.115 11.9328C17.115 11.4411 17.4919 11.0969 18.1455 11.0969C18.5017 11.0969 18.7957 11.1847 19.0032 11.3076L18.8164 11.7291C18.685 11.6448 18.4222 11.5535 18.2112 11.5535C17.9 11.5535 17.7271 11.7185 17.7271 11.9363C17.7271 12.2068 17.9449 12.3016 18.2354 12.414C18.6435 12.5685 19.0965 12.7406 19.0965 13.3236C19.0931 13.854 18.6885 14.2052 17.9519 14.2052Z"
        fill="#323544"
      />
      <path
        d="M21.9948 12.6354L20.0409 12.9128C20.0997 13.4502 20.4455 13.7206 20.94 13.7206C21.234 13.7206 21.5521 13.6469 21.7527 13.538L21.9256 13.9911C21.6974 14.114 21.3031 14.2018 20.8985 14.2018C19.9717 14.2018 19.453 13.5977 19.453 12.6459C19.453 11.7327 19.9544 11.0934 20.7775 11.0934C21.5418 11.0934 21.9948 11.6027 21.9948 12.407C22.0017 12.4808 22.0017 12.5581 21.9948 12.6354ZM20.774 11.5395C20.3175 11.5395 20.0167 11.8943 20.0063 12.5159L21.4311 12.3157C21.4242 11.7959 21.1648 11.5395 20.774 11.5395Z"
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
export class SvgCoinbaseIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
