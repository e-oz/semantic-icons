import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-blogger-icon',
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
        d="M13.8169 12.8873C14.0704 12.8873 14.2817 12.9859 14.4507 13.1831C14.6197 13.3521 14.7042 13.5633 14.7042 13.8169C14.7042 14.0704 14.6197 14.2817 14.4506 14.4507C14.2817 14.6197 14.0704 14.7042 13.8169 14.7042H10.1409C9.88726 14.7042 9.67599 14.6197 9.50705 14.4506C9.33798 14.2817 9.25345 14.0704 9.25345 13.8169C9.25345 13.5633 9.33798 13.3521 9.50705 13.1831C9.67605 12.9859 9.88732 12.8873 10.1409 12.8873H13.8169ZM10.1409 10.1831C9.88726 10.1831 9.67599 10.0986 9.50705 9.92953C9.33798 9.76053 9.25345 9.54925 9.25345 9.29572C9.25345 9.04224 9.33798 8.83099 9.50705 8.66199C9.67605 8.49292 9.88732 8.40839 10.1409 8.40839H12.507C12.7606 8.40839 12.9718 8.49292 13.1408 8.66199C13.3099 8.83099 13.3944 9.04224 13.3944 9.29572C13.3944 9.54931 13.3099 9.76059 13.1408 9.92953C12.9718 10.0986 12.7605 10.1831 12.507 10.1831H10.1409ZM15.5914 10.1831V8.40839C15.5914 7.67595 15.3239 7.04214 14.7887 6.50694C14.2535 5.97175 13.6197 5.70415 12.8873 5.70415H9.29572C8.56334 5.70415 7.92955 5.97175 7.39436 6.50694C6.85916 7.04214 6.59156 7.67595 6.59156 8.40839V14.7041C6.59156 15.4365 6.85916 16.0703 7.39436 16.6055C7.92955 17.1407 8.56334 17.4083 9.29572 17.4083H14.7042C15.4366 17.4083 16.0704 17.1407 16.6056 16.6055C17.1408 16.0703 17.4084 15.4365 17.4084 14.7041V12C17.4084 11.7464 17.3239 11.5351 17.1548 11.366C16.9858 11.197 16.7746 11.1125 16.5211 11.1125C16.2676 11.1125 16.0422 11.028 15.845 10.859C15.676 10.6618 15.5914 10.4365 15.5914 10.1829V10.1831ZM19.2254 3C19.7043 3 20.1127 3.18309 20.4507 3.54928C20.8169 3.88729 21 4.29575 21 4.77465V19.2253C21 19.7042 20.8169 20.1267 20.4507 20.4929C20.1127 20.8309 19.7043 20.9999 19.2254 20.9999H4.77465C4.29575 20.9999 3.87321 20.8309 3.50702 20.4929C3.16901 20.1267 3 19.7042 3 19.2254V4.77465C3 4.29575 3.16901 3.88729 3.50702 3.54928C3.87321 3.18309 4.29575 3 4.77465 3L19.2254 3Z"
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
export class SvgBloggerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
