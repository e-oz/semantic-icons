import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vfairs-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>vFairs</title>
      <path
        d="M22.316 5.923c-.01-.014-.027-.024-.04-.035a.412.412 0 0 0-.06-.047L12.223.061a.427.427 0 0 0-.08-.033C12.128.02 12.113.02 12.1.015a.41.41 0 0 0-.325.046l-9.992 5.78a.418.418 0 0 0-.143.141c-.015.014-.02.034-.028.05a.423.423 0 0 0-.048.191v11.56a.418.418 0 0 0 .007.05c.007.14.088.266.212.331l9.992 5.78a.555.555 0 0 0 .487 0l9.888-5.756a.437.437 0 0 0 .284-.406V6.223a.408.408 0 0 0-.119-.3zM2.45 17.015V6.99l8.665 5.012-8.665 5.012zm10.452-5.023l8.648-5.001v10.024c-2.905-1.676-5.634-3.268-8.648-5.023zm-.46-.757V1.211l8.666 5.012zm-.885 0L2.891 6.223l8.666-5.012zm0 1.535v10.024l-8.665-5.012zm.925.023l5.477 3.168 3.129 1.821-8.606 5.01Z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVfairsIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
