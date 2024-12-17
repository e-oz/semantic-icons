import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quicktype-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>quicktype</title>
      <path
        d="M11.226 14.393a2.9 2.9 0 0 0 .612-.804c.538-1.032.365-2.246.047-2.983-.614-1.422-2.041-2.225-3.683-2.225-1.497 0-2.427.64-2.868 1.048-.474.44-1.144 1.31-1.144 2.729 0 .601.096 1.136.288 1.603.253.616.795 1.486 2.053 1.914a4.965 4.965 0 0 0 1.609.249h4.145c.466 0 .71-.405.705-.717a.694.694 0 0 0-.705-.683l-.29.005c-.516.04-.96.157-1.332.35l.563-.486zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Zm1.424-15.41a.852.852 0 0 0 0 1.705h5a.852.852 0 1 0 0-1.705zm1.662 6.259c0 .478.375.865.838.865a.852.852 0 0 0 .838-.865V11.55c0-.478-.375-.656-.838-.656-.463 0-.838.178-.838.656zm-4.951-1.763c-.321.84-1.063 1.323-1.943 1.323-.875 0-1.612-.468-1.928-1.323-.18-.486-.227-1.19.005-1.79a1.998 1.998 0 0 1 1.103-1.146c.254-.107.53-.16.83-.16 1.032 0 1.675.604 1.938 1.306a2.666 2.666 0 0 1-.005 1.79z"
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
export class SvgQuicktypeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}