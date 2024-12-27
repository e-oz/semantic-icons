import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-audi-icon',
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
        d="M18.8519 18.0981V15.443H17.7561V18.0981H18.8519ZM13.0508 16.9957V15.4831H11.9887V16.6393C11.9887 16.9754 11.9753 17.0696 11.9551 17.157C11.8811 17.399 11.6256 17.5064 11.3636 17.5064C11.0007 17.5064 10.8326 17.3653 10.7654 17.1435C10.7452 17.0697 10.7385 16.989 10.7318 16.9084C10.7251 16.8209 10.7318 16.7267 10.7318 16.6261V15.4833H9.65626V17.0025C9.65626 17.3455 9.77061 17.6008 9.95874 17.7755C10.2814 18.0915 10.8259 18.1856 11.33 18.1856C11.9417 18.1856 12.4122 18.0982 12.7483 17.7689C12.9232 17.6007 13.0508 17.3789 13.0508 16.9957ZM7.83458 16.8074C7.78132 16.7982 7.72735 16.7937 7.67332 16.7941H6.46342C6.40287 16.7941 6.33561 16.8008 6.30203 16.8074C6.32219 16.7872 6.36258 16.747 6.40287 16.6932L6.94729 15.7923C7.02126 15.6715 7.05484 15.5908 7.06826 15.5572C7.08168 15.5908 7.11526 15.6715 7.18923 15.7993L7.74716 16.7068C7.77413 16.747 7.81442 16.7872 7.83458 16.8074ZM9.86461 18.0981L7.44471 14.4684H6.08697L6.44316 14.8918C6.44987 14.8986 6.46342 14.9052 6.47671 14.9121C6.46329 14.9188 6.44987 14.9254 6.44316 14.9321L4.33253 18.0981H5.55587L5.88532 17.5536C5.89874 17.5267 5.90545 17.4998 5.90545 17.4865C5.91887 17.4865 5.95258 17.4998 5.98613 17.4998H8.17074C8.20429 17.4998 8.23116 17.493 8.24458 17.4865C8.24335 17.5054 8.24806 17.5242 8.258 17.5403L8.6009 18.0981H9.86461ZM17.4605 16.7337C17.4605 16.4378 17.3394 16.0949 16.963 15.6177L16.0555 14.4683H14.7918L15.511 15.2749C15.6321 15.4094 15.7866 15.5303 15.7866 15.5303C15.6119 15.4293 15.3901 15.3891 15.2153 15.3891C14.7986 15.3891 14.3749 15.4765 13.9987 15.685C13.5953 15.9066 13.3264 16.2764 13.3264 16.7672C13.3264 17.1436 13.4945 17.4327 13.7095 17.6545C14.1936 18.1384 15.074 18.1855 15.3967 18.1855C15.8739 18.1855 16.6201 18.078 17.0437 17.6948C17.2925 17.4662 17.4605 17.1504 17.4605 16.7337ZM16.4118 16.7672C16.4118 17.0429 16.2302 17.2511 16.0017 17.3654C15.8135 17.4663 15.5915 17.4932 15.3967 17.4932C15.2019 17.4932 14.9733 17.4528 14.7851 17.3587C14.5565 17.2444 14.3816 17.0226 14.3816 16.7806C14.3816 16.4916 14.6034 16.2629 14.8657 16.1486C15.0271 16.0749 15.222 16.0479 15.3765 16.0479C15.5245 16.0479 15.7396 16.0679 15.9077 16.1353C16.2103 16.2629 16.4118 16.5049 16.4118 16.7672ZM18.5038 5.81446C17.7167 5.8132 16.9525 6.07872 16.3358 6.56768C15.7191 6.07868 14.9548 5.81317 14.1678 5.81446C13.3808 5.81323 12.6166 6.07875 11.9999 6.56768C11.3833 6.07865 10.6191 5.81314 9.83206 5.81446C9.0451 5.81323 8.2809 6.07875 7.66423 6.56768C7.04755 6.07875 6.28335 5.81323 5.49635 5.81446C3.56507 5.81446 2 7.37943 2 9.31081C2 11.242 3.56496 12.8072 5.49635 12.8072C6.28335 12.8084 7.04752 12.5428 7.66423 12.0539C8.2809 12.5429 9.0451 12.8084 9.83206 12.8072C10.6191 12.8085 11.3833 12.5429 11.9999 12.0539C12.6166 12.5429 13.3808 12.8084 14.1678 12.8072C14.9548 12.8085 15.7191 12.5429 16.3358 12.0539C16.9525 12.5429 17.7167 12.8085 18.5038 12.8072C20.435 12.8072 22 11.2421 22 9.31081C22 7.37952 20.435 5.81446 18.5038 5.81446ZM7.09216 11.4828C6.64661 11.8078 6.09003 12.0061 5.49635 12.0061C4.0065 12.0061 2.80092 10.8007 2.80092 9.31081C2.80092 7.82097 4.0065 6.61539 5.49635 6.61539C6.09003 6.61539 6.64629 6.81385 7.09216 7.13897C6.6009 7.75614 6.33419 8.52201 6.33584 9.31081C6.33623 10.0993 6.60271 10.8646 7.09216 11.4828ZM7.66432 10.9123C7.32074 10.4492 7.13574 9.88749 7.13687 9.31081C7.13542 8.73407 7.32045 8.17233 7.66432 7.70933C8.00816 8.17236 8.19316 8.7341 8.19177 9.31081C8.19287 9.88749 8.0079 10.4491 7.66432 10.9123ZM11.428 11.4828C10.9651 11.8236 10.4051 12.0067 9.83026 12.0053C9.25664 12.0065 8.69787 11.8233 8.23629 11.4828C8.72577 10.8647 8.99226 10.0994 8.99258 9.31094C8.99423 8.52214 8.72752 7.75623 8.23629 7.13907C8.69781 6.79846 9.25664 6.6152 9.83026 6.61639C10.4283 6.61639 10.9808 6.80985 11.428 7.13907C10.9367 7.75623 10.67 8.52214 10.6717 9.31094C10.672 10.0994 10.9385 10.8647 11.428 11.4828ZM11.9999 10.9123C11.6564 10.4492 11.4714 9.88749 11.4725 9.31081C11.4711 8.73407 11.6561 8.17236 11.9999 7.70933C12.3438 8.17233 12.5289 8.73407 12.5275 9.31081C12.5286 9.88752 12.3436 10.4492 11.9999 10.9123ZM15.7637 11.4828C15.3165 11.8121 14.764 12.0053 14.1661 12.0053C13.5682 12.0053 13.0192 11.8118 12.572 11.4828C13.0615 10.8647 13.3281 10.0994 13.3283 9.31094C13.33 8.52214 13.0633 7.75623 12.572 7.13907C13.0192 6.80997 13.5682 6.61639 14.1661 6.61639C14.764 6.61639 15.3165 6.80985 15.7637 7.13907C15.2725 7.75626 15.0058 8.52214 15.0074 9.31094C15.0078 10.0994 15.2743 10.8646 15.7637 11.4828ZM16.3359 10.9123C15.9923 10.4492 15.8073 9.88749 15.8085 9.31081C15.8069 8.73407 15.992 8.1723 16.3359 7.70933C16.6797 8.17236 16.8647 8.7341 16.8634 9.31081C16.8644 9.88749 16.6794 10.4491 16.3359 10.9123ZM18.5038 12.0061C17.9098 12.0061 17.3534 11.8078 16.908 11.4828C17.3974 10.8646 17.6639 10.0994 17.6643 9.31094C17.6658 8.52214 17.3992 7.75626 16.908 7.13907C17.3538 6.81407 17.91 6.61549 18.5038 6.61549C19.9934 6.61549 21.1992 7.82107 21.1992 9.31094C21.1992 10.8006 19.9934 12.0061 18.5038 12.0061Z"
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
export class SvgAudiIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
