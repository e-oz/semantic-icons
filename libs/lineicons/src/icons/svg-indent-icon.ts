import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-indent-icon',
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
        d="M3.75 4C3.75 3.58579 4.08579 3.25 4.5 3.25H20.5C20.9142 3.25 21.25 3.58579 21.25 4C21.25 4.41421 20.9142 4.75 20.5 4.75L4.5 4.75C4.08579 4.75 3.75 4.41421 3.75 4Z"
        fill="#323544"
      />
      <path
        d="M12.4644 9.33398C12.4644 8.91977 12.8001 8.58398 13.2144 8.58398H20.5002C20.9145 8.58398 21.2502 8.91977 21.2502 9.33398C21.2502 9.7482 20.9145 10.084 20.5002 10.084H13.2144C12.8001 10.084 12.4644 9.7482 12.4644 9.33398Z"
        fill="#323544"
      />
      <path
        d="M13.2144 13.916C12.8001 13.916 12.4644 14.2518 12.4644 14.666C12.4644 15.0802 12.8001 15.416 13.2144 15.416L20.5002 15.416C20.9145 15.416 21.2502 15.0802 21.2502 14.666C21.2502 14.2518 20.9145 13.916 20.5002 13.916L13.2144 13.916Z"
        fill="#323544"
      />
      <path
        d="M3.75 20C3.75 19.5858 4.08579 19.25 4.5 19.25H20.5C20.9142 19.25 21.25 19.5858 21.25 20C21.25 20.4142 20.9142 20.75 20.5 20.75H4.5C4.08579 20.75 3.75 20.4142 3.75 20Z"
        fill="#323544"
      />
      <path
        d="M5.25056 9.31666L5.26546 9.3085L9.46308 11.9925L5.25056 9.31666Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.7502 9.32277C3.7502 8.12712 5.07145 7.40366 6.0788 8.04771L10.2662 10.7249C11.1971 11.3201 11.1971 12.6799 10.2662 13.2751L6.0788 15.9523C5.07145 16.5963 3.7502 15.8729 3.7502 14.6772V9.32277ZM5.25056 9.31666C5.25041 9.31768 5.2502 9.31967 5.2502 9.32277L5.2502 14.6772C5.2502 14.6803 5.25041 14.6823 5.25056 14.6833C5.25135 14.6843 5.25346 14.687 5.25716 14.689C5.26085 14.691 5.26361 14.6916 5.2648 14.6918C5.26574 14.6913 5.26819 14.6902 5.2708 14.6885L9.45818 12.0113L9.46 12.0101L9.4621 12.0085L9.46303 12.0077C9.46313 12.0075 9.46436 12.0048 9.46436 12C9.46436 11.9956 9.46335 11.993 9.46308 11.9925L9.4621 11.9915C9.46171 11.9912 9.46113 11.9908 9.46033 11.9902C9.45974 11.9898 9.45903 11.9893 9.45818 11.9887L5.2708 9.31149C5.26819 9.30982 5.2664 9.30893 5.26546 9.3085C5.26426 9.30868 5.26085 9.309 5.25716 9.31103C5.25346 9.31305 5.25135 9.31575 5.25056 9.31666Z"
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
export class SvgIndentIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
