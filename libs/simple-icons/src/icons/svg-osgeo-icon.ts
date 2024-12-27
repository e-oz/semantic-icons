import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-osgeo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>OSGeo</title>
      <path
        d="M11.38742 0 9.88227 2.63735c-4.10198.91912-7.20472 4.44855-7.4712 8.7637h2.41025c.29326-3.50262 3.07658-6.28647 6.5661-6.57945V2.42416Zm1.21236 2.41136V4.8216c3.48923.29298 6.27256 3.0763 6.56554 6.56554H23.99972l-2.6368-1.50459c-.91883-4.10198-4.44798-7.205-8.76314-7.4712Zm-.61286 3.28917-.7459 4.55497 1.4918.9986.9986 1.4918 4.55497-.75926-4.55497-.7459 1.97106-2.95685-2.9563 1.9716zm.7459 5.55358L8.28415 8.28443l2.97022 4.4481 4.4481 2.97021zm-1.47844 1.47843-.99916-1.49124L5.7008 12l4.5544.7459-1.97105 2.95685 2.9435-1.97105.75926 4.55441.7587-4.55441zm.73254-1.26524c.27958 0 .51934.23976.51934.51934 0 .27987-.22636.5199-.51934.5199s-.51935-.24003-.51935-.5199c0-.29298.23976-.51934.51935-.51934zM.00028 12.5995l2.63735 1.5046c.91912 4.10226 4.44799 7.20555 8.76315 7.47174v-2.4108c-3.50263-.29298-6.28593-3.0763-6.5789-6.56554H2.42444Zm19.16504 0c-.29298 3.48923-3.0763 6.27256-6.56554 6.56554V24l1.5046-2.63735c4.10197-.91883 7.20527-4.448 7.47174-8.76315z"
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
export class SvgOsgeoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
