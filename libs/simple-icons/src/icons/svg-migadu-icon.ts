import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-migadu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Migadu</title>
      <path
        d="M7.082 1.8984c-3.8526 0-6.9911 3.0832-7.08 6.9141.0017 7.003-.0042 3.8683 0 5.9219-.0635 3.5183 2.4066 7.254 7.082 7.3672h.0058l.0176-4.3106c-.0094-.0072-.0333.0062-.0234-.0176a3.2156 3.2156 0 0 1-.1777-.0078c-.4723-.0681-.883-.1891-1.2286-.3633-.7129-.4136-1.2188-1.2338-1.3496-2.0156-.075-2.2967 1.6707-3.1776 2.754-3.1347 1.789.0708 2.8546 1.4727 2.7538 3.2539v6.5957h4.3282v-7.082a2.816 2.816 0 0 1 .1093-.7716c.2989-1.0394 1.2046-1.8632 2.4453-1.9824h.3829c1.4318.118 2.5303 1.269 2.5703 2.7188v7.1172H24c-.0058-2.3606.0002-4.7215 0-7.082 0-3.8933-3.1478-7.0575-7.0352-7.0821-.8926-.0027-1.8444.1522-2.8007.5566l-.0176-.0097c-.2552-3.6775-3.3229-6.586-7.0645-6.586zm-2.7617 8.3203a1.0235 1.0235 0 0 1 1.0235 1.0235 1.0235 1.0235 0 0 1-1.0235 1.0234 1.0235 1.0235 0 0 1-1.0234-1.0234 1.0235 1.0235 0 0 1 1.0234-1.0235z"
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
export class SvgMigaduIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}