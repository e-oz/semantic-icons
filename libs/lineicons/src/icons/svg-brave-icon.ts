import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brave-icon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0131 2L16.729 3.98345C16.729 3.98345 18.2358 3.55704 18.9473 4.28194C19.6588 5.00684 20.2448 5.64644 20.2448 5.64644L19.7843 6.79774L20.3703 8.50338C20.3703 8.50338 18.6469 15.1535 18.445 15.9656C18.0475 17.5646 17.7754 18.1829 16.6453 18.9931C15.5153 19.8033 13.4645 21.2104 13.1296 21.4236C13.0575 21.4696 12.9815 21.5224 12.9029 21.5772C12.6165 21.7764 12.2951 22 11.9996 22C11.7041 22 11.3828 21.7765 11.0964 21.5772C11.0177 21.5225 10.9417 21.4696 10.8696 21.4236C10.5348 21.2104 8.48391 19.8033 7.35388 18.9931C6.22382 18.1829 5.95179 17.5646 5.55417 15.9656C5.35223 15.1535 3.62891 8.50338 3.62891 8.50338L4.21486 6.79774L3.75447 5.64644C3.75447 5.64644 4.34042 5.00684 5.05193 4.28194C5.76344 3.55704 7.27017 3.98345 7.27017 3.98345L8.98617 2H11.9996H15.0131ZM7.75147 5.24137C7.75147 5.24137 5.54428 7.95971 5.54428 8.54071C5.54428 9.02109 5.73408 9.20909 5.95762 9.43055C6.00445 9.47693 6.05272 9.52476 6.10106 9.57704L7.75603 11.3675C7.77243 11.3852 7.79068 11.4039 7.81 11.4237C7.97519 11.5929 8.2185 11.8421 8.04683 12.256C8.03537 12.2836 8.0236 12.3117 8.01163 12.3403C7.82348 12.7886 7.59115 13.3423 7.88685 13.9032C8.20142 14.4998 8.74025 14.898 9.08556 14.8322C9.43083 14.7663 10.2418 14.3346 10.54 14.1374C10.8382 13.9401 11.7833 13.146 11.7833 12.8421C11.7833 12.5887 11.1034 12.167 10.7732 11.9622C10.7076 11.9215 10.6557 11.8893 10.6258 11.8688C10.5917 11.8454 10.5347 11.8093 10.4645 11.7649C10.163 11.5741 9.6188 11.2295 9.60518 11.0768C9.58831 10.8885 9.59475 10.8333 9.83772 10.368C9.88939 10.269 9.94987 10.1629 10.0124 10.0533C10.2437 9.64782 10.5027 9.19379 10.4454 8.86852C10.3806 8.50136 9.81594 8.29081 9.33758 8.11248C9.27775 8.09018 9.21929 8.06836 9.16334 8.04685C9.0237 7.99312 8.84822 7.92616 8.66498 7.85624L8.6646 7.8561L8.66406 7.85586C8.18666 7.67368 7.65664 7.47141 7.56916 7.43034C7.44805 7.37342 7.47934 7.31922 7.84623 7.28378C7.89481 7.27908 7.95519 7.27256 8.02449 7.26505C8.47873 7.21588 9.31635 7.12517 9.72361 7.24082C9.80369 7.26357 9.89344 7.28834 9.98758 7.31431C10.4452 7.44056 11.006 7.59529 11.0599 7.68449C11.0693 7.7001 11.0786 7.71352 11.0873 7.72618C11.1388 7.80079 11.1725 7.84948 11.1154 8.16662C11.0985 8.26069 11.0638 8.44533 11.0209 8.67372C10.8945 9.34615 10.6969 10.3979 10.672 10.6339C10.6685 10.6668 10.6647 10.6985 10.661 10.7291C10.6294 10.992 10.6083 11.1672 10.9081 11.237L10.986 11.2552C11.3242 11.3343 11.8204 11.4503 11.9996 11.4503C12.1787 11.4503 12.6746 11.3344 13.0128 11.2553L13.0912 11.237C13.3909 11.1672 13.3698 10.9922 13.3382 10.7293C13.3345 10.6987 13.3307 10.6669 13.3272 10.6339C13.3024 10.3982 13.1052 9.34914 12.9788 8.67657C12.9357 8.44702 12.9007 8.26103 12.8838 8.16662C12.8267 7.84948 12.8603 7.80079 12.9119 7.72618C12.9206 7.71352 12.9299 7.70007 12.9393 7.68449C12.9932 7.59529 13.5539 7.44056 14.0115 7.31435C14.1056 7.28838 14.1955 7.26357 14.2756 7.24082C14.6828 7.12517 15.5206 7.21588 15.9748 7.26505C16.0441 7.27256 16.1044 7.27908 16.1529 7.28378C16.5199 7.31922 16.5512 7.37342 16.43 7.43034C16.3425 7.47144 15.812 7.67389 15.3344 7.85613C15.1512 7.92609 14.9755 7.99312 14.8359 8.04685C14.7802 8.06829 14.7219 8.08997 14.6624 8.11221L14.6619 8.11238C14.1835 8.29071 13.6186 8.50132 13.5538 8.86852C13.4965 9.19383 13.7556 9.64796 13.9869 10.0535C14.0494 10.163 14.1099 10.269 14.1615 10.368C14.4045 10.8333 14.4109 10.8885 14.3941 11.0768C14.3804 11.2296 13.8361 11.5741 13.5347 11.7649C13.4645 11.8093 13.4074 11.8454 13.3734 11.8688C13.3434 11.8894 13.2915 11.9215 13.2259 11.9623C12.8956 12.1671 12.2159 12.5887 12.2159 12.8421C12.2159 13.146 13.161 13.9401 13.4592 14.1374C13.7574 14.3346 14.5684 14.7663 14.9137 14.8322C15.259 14.898 15.7978 14.4998 16.1124 13.9032C16.4081 13.3422 16.1758 12.7887 15.9876 12.3404C15.9756 12.3118 15.9638 12.2837 15.9524 12.256C15.7807 11.8422 16.024 11.593 16.1891 11.4238C16.2085 11.404 16.2267 11.3853 16.2431 11.3675L17.8981 9.57704C17.9465 9.52476 17.9948 9.4769 18.0416 9.43051C18.2651 9.20909 18.4549 9.02105 18.4549 8.54071C18.4549 7.95971 16.2477 5.24137 16.2477 5.24137C16.2477 5.24137 14.3852 5.6038 14.1341 5.6038C13.9338 5.6038 13.5468 5.46804 13.1435 5.32652C13.0413 5.29071 12.9381 5.25451 12.8367 5.22003C12.3344 5.04949 11.9996 5.04822 11.9996 5.04822C11.9996 5.04822 12.0026 5.04825 12.0086 5.04842H11.9906C11.9961 5.04825 11.9991 5.04825 11.9996 5.04822C11.9944 5.04825 11.6609 5.05079 11.1625 5.22003C11.0611 5.25451 10.9579 5.29071 10.8558 5.32652C10.4524 5.46804 10.0655 5.6038 9.86507 5.6038C9.61397 5.6038 7.75147 5.24137 7.75147 5.24137ZM13.4392 15.0216C12.8494 14.7107 12.1143 14.4463 11.9996 14.4463C11.8849 14.4463 11.1498 14.7107 10.56 15.0216C10.4266 15.092 10.3014 15.1577 10.1861 15.2183L10.1854 15.2186C9.79134 15.4255 9.51176 15.5723 9.4061 15.6397C9.26948 15.7268 9.35278 15.8911 9.47725 15.9807C9.60172 16.0704 11.2742 17.3899 11.4365 17.5357C11.4573 17.5543 11.4792 17.5744 11.5021 17.5955C11.6585 17.7391 11.8581 17.9224 11.9996 17.9224C12.141 17.9224 12.3405 17.7393 12.4969 17.5956C12.5199 17.5746 12.5419 17.5543 12.5626 17.5357C12.725 17.3899 14.3975 16.0704 14.5219 15.9807C14.6464 15.8911 14.7297 15.7268 14.5931 15.6397C14.4875 15.5723 14.2082 15.4257 13.8145 15.219C13.6988 15.1583 13.5732 15.0923 13.4392 15.0216Z"
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
export class SvgBraveIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
