import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-laravel-icon',
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
        d="M21.7054 6.55587C21.7054 6.55587 21.6934 6.53187 21.6854 6.51187C21.6774 6.49187 21.6694 6.47187 21.6654 6.45987C21.6534 6.43987 21.6414 6.42791 21.6254 6.40791C21.6174 6.39191 21.6054 6.37991 21.5894 6.36391C21.5814 6.35591 21.5694 6.34791 21.5454 6.32791C21.5334 6.31591 21.5214 6.30791 21.5014 6.29591L17.7864 4.15646C17.6584 4.08448 17.4864 4.08448 17.3585 4.15646L13.6394 6.29991C13.6394 6.29991 13.6154 6.31591 13.5914 6.33591L13.5554 6.36391C13.5554 6.36391 13.5314 6.39591 13.5114 6.41991L13.4874 6.45587C13.4874 6.45587 13.4674 6.49187 13.4554 6.52387L13.4434 6.55587C13.4354 6.59587 13.4274 6.63183 13.4274 6.66783V10.6628L10.5722 12.3064V4.56436C10.5722 4.52837 10.5722 4.48838 10.5602 4.45639C10.5562 4.44439 10.5522 4.43239 10.5402 4.4084C10.5322 4.3884 10.5242 4.36841 10.5162 4.35641C10.5082 4.33642 10.4962 4.32442 10.4802 4.30442C10.4722 4.29243 10.4602 4.27643 10.4442 4.26044C10.4362 4.25244 10.4242 4.24444 10.4002 4.22444C10.3882 4.21645 10.3762 4.20445 10.3602 4.19645L6.64114 2.05698C6.51318 1.98101 6.34522 1.98101 6.21326 2.05698L2.49817 4.19245C2.49817 4.19245 2.46618 4.21645 2.44619 4.23644L2.40619 4.26444C2.40619 4.26444 2.3862 4.29243 2.36621 4.31642L2.34221 4.35241C2.34221 4.35241 2.32222 4.3964 2.31422 4.4204L2.29822 4.45639C2.29023 4.49238 2.28223 4.52837 2.28223 4.56836V17.2932C2.28223 17.3652 2.30222 17.4411 2.34221 17.5051C2.3782 17.5731 2.43419 17.6251 2.49817 17.6651L9.93233 21.944C9.93233 21.944 9.96829 21.96 9.99629 21.972L10.0323 21.984C10.0683 21.992 10.1043 22 10.1443 22C10.1803 22 10.2162 21.992 10.2522 21.984L10.2882 21.972C10.3122 21.964 10.3362 21.956 10.3562 21.94L17.7904 17.6651C17.9223 17.5851 18.0023 17.4451 18.0023 17.2932V13.2982L21.5014 11.2827C21.5694 11.2467 21.6214 11.1907 21.6614 11.1267C21.6974 11.0587 21.7174 10.9867 21.7174 10.9108V6.66783C21.7174 6.63183 21.7174 6.59587 21.7054 6.55587ZM17.5744 8.31143L14.7191 6.66783L17.5744 5.02824L20.4297 6.66783L17.5744 8.31143ZM6.42918 2.92477L9.28049 4.56836L6.42918 6.21195L3.5739 4.56836L6.42918 2.92477ZM9.71237 5.30816V12.8023L7.97681 13.8021L6.85709 14.4459V6.95575L9.71237 5.30816ZM9.71237 20.8243L3.14201 17.0412V5.30816L5.9973 6.95575V15.1897C5.9973 15.1897 6.0013 15.2177 6.0053 15.2457C6.0053 15.2617 6.0093 15.2817 6.0133 15.3017C6.0173 15.3177 6.0253 15.3297 6.0333 15.3537C6.0413 15.3737 6.0493 15.3897 6.0573 15.4017C6.0653 15.4177 6.07326 15.4297 6.09326 15.4576L6.12526 15.4936C6.12526 15.4936 6.14526 15.5136 6.17326 15.5336L9.71237 17.5411V20.8243ZM10.1443 16.7973L7.29298 15.1857L13.8593 11.4067L16.7106 13.0502L10.1443 16.7973ZM17.1425 17.0412L10.5722 20.8283V17.5411L17.1425 13.7901V17.0412ZM17.1425 12.3064L14.2872 10.6628V7.41163L17.1425 9.05523V12.3064ZM20.8576 10.6628L18.0023 12.3064V9.05523L20.8576 7.41163V10.6628Z"
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
export class SvgLaravelIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
