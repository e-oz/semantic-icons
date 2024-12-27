import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-php-icon',
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
        d="M12 7.3062C17.3548 7.3062 21.4516 9.53201 21.4516 12.0481C21.4516 14.5643 17.3548 16.8223 12 16.8223C6.64516 16.8223 2.54839 14.5643 2.54839 12.0481C2.54839 9.53201 6.64516 7.3062 12 7.3062ZM12 6.75781C6.45161 6.75781 2 9.11265 2 12.0159C2 14.9191 6.45161 17.2417 12 17.2417C17.5484 17.2417 22 14.9191 22 12.0159C22 9.11265 17.5484 6.75781 12 6.75781ZM8.80645 11.6288C8.58065 12.8868 7.67742 12.7578 6.6129 12.7578L7.06452 10.532C8.25806 10.532 9.03226 10.403 8.80645 11.6288ZM5.03226 14.9836H6.19355L6.45161 13.5643C7.70968 13.5643 8.54839 13.661 9.25806 12.9836C10.0645 12.2094 10.2903 10.8868 9.70968 10.2417C9.3871 9.88684 8.93548 9.6933 8.25806 9.6933H6.03226L5.03226 14.9836ZM10.871 8.3062H12L11.7419 9.72555C12.7097 9.72555 13.6452 9.6933 14.0968 10.0804C14.5484 10.532 14.3226 11.0481 13.871 13.6288H12.6774C13.129 11.1772 13.2258 10.9514 13.0968 10.7578C12.9677 10.5643 12.4516 10.5643 11.5484 10.5643L10.9677 13.6288H9.83871L10.871 8.3062ZM17.7742 11.6288C17.5484 12.8868 16.6452 12.7578 15.5806 12.7578L16.0323 10.532C17.2258 10.532 18 10.403 17.7742 11.6288ZM14 14.9836H15.129L15.3871 13.6288C16.7419 13.6288 17.4839 13.7256 18.1935 13.0481C19 12.2739 19.2258 10.9514 18.6452 10.3062C18.3226 9.95136 17.871 9.75781 17.1935 9.75781H14.9677L14 14.9836Z"
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
export class SvgPhpIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
