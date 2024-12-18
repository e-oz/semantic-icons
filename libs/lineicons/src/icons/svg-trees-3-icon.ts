import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-trees-3-icon',
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
        d="M12.5915 16.4381C13.103 17.7032 14.2334 18.6517 15.6074 18.9082V20.75C15.6074 21.1642 15.9432 21.5 16.3574 21.5C16.7716 21.5 17.1074 21.1642 17.1074 20.75V18.9082C18.9916 18.5563 20.4179 16.9031 20.4179 14.9168C20.4179 13.9818 20.1012 13.1201 19.5705 12.4341C20.1013 11.7479 20.418 10.8862 20.418 9.95112C20.418 7.70857 18.6 5.89062 16.3575 5.89062C15.2114 5.89062 14.1762 6.36544 13.4379 7.12907C13.3738 4.5616 11.2724 2.5 8.68945 2.5C6.0661 2.5 3.93945 4.62665 3.93945 7.25C3.93945 8.22992 4.23681 9.14149 4.74556 9.898C4.01917 10.7799 3.58203 11.9109 3.58203 13.1433C3.58203 15.7092 5.47428 17.8331 7.93945 18.1958V20.75C7.93945 21.1642 8.27524 21.5 8.68945 21.5C9.10367 21.5 9.43945 21.1642 9.43945 20.75V18.1957C10.698 18.0104 11.8072 17.366 12.5915 16.4381ZM5.43945 7.25C5.43945 5.45507 6.89453 4 8.68945 4C10.4844 4 11.9395 5.45507 11.9395 7.25C11.9395 8.0934 11.6192 8.86027 11.0923 9.43836C10.8147 9.74293 10.8349 10.2144 11.1374 10.4942C11.8511 11.1542 12.2963 12.0962 12.2963 13.1433C12.2963 14.8782 11.0715 16.327 9.43945 16.6723V14.5C9.43945 14.0858 9.10367 13.75 8.68945 13.75C8.27524 13.75 7.93945 14.0858 7.93945 14.5V16.6724C6.3071 16.3273 5.08203 14.8784 5.08203 13.1433C5.08203 12.096 5.52734 11.1539 6.24116 10.494C6.54374 10.2142 6.56393 9.74273 6.28638 9.43813C5.75965 8.86007 5.43945 8.09329 5.43945 7.25ZM17.1074 17.3657V15.25C17.1074 14.8358 16.7716 14.5 16.3574 14.5C15.9432 14.5 15.6074 14.8358 15.6074 15.25V17.3658C14.5592 17.0452 13.7969 16.07 13.7969 14.9168C13.7969 14.1522 14.1311 13.4665 14.664 12.9963C14.8253 12.8539 14.9177 12.6491 14.9177 12.434C14.9177 12.2188 14.8253 12.014 14.664 11.8716C14.1312 11.4014 13.797 10.7157 13.797 9.95112C13.797 8.537 14.9434 7.39062 16.3575 7.39062C17.7716 7.39062 18.918 8.537 18.918 9.95112C18.918 10.7158 18.5837 11.4014 18.0509 11.8717C17.8896 12.0141 17.7972 12.2189 17.7972 12.434C17.7972 12.6492 17.8896 12.854 18.0509 12.9963C18.5836 13.4666 18.9179 14.1522 18.9179 14.9168C18.9179 16.07 18.1556 17.0451 17.1074 17.3657Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTrees3Icon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
