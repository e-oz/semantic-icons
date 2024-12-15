import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lazyvim-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LazyVim</title>
      <path
        d="M2.87 0a2.5 2.5 0 0 0-.697.1q-.187.058-.351.147-.163.09-.297.213l-.008.006q-.133.124-.235.27a1.7 1.7 0 0 0-.27.643 1.8 1.8 0 0 0 .105 1.023q.072.164.176.308.105.14.24.26l.007.004q.137.12.299.205.159.084.348.14.32.093.682.092h2.8l-4.256 5.09-.618.733.01.008q-.046.06-.088.124l-.07.116L.59 9.6q-.03.06-.05.12l-.006.016a1.8 1.8 0 0 0-.122.66q0 .219.042.423.039.204.12.4.084.2.21.372a2 2 0 0 0 1.067.746h.002q.397.117.87.117H9.65q.169 0 .338-.02.163-.02.312-.06l.044-.013q.185-.056.344-.144a1.6 1.6 0 0 0 .297-.21l.012-.01a1.65 1.65 0 0 0 .414-.592q.063-.157.095-.33a2 2 0 0 0 .004-.672 1.6 1.6 0 0 0-.084-.304l-.02-.055a1.5 1.5 0 0 0-.436-.58l-.006-.005a1.65 1.65 0 0 0-.635-.325 2.7 2.7 0 0 0-.675-.087H5.918l4.157-4.95.243-.304a6 6 0 0 0 .353-.486 2.1 2.1 0 0 0 .262-.64q.075-.315.074-.674 0-.46-.142-.83a1.7 1.7 0 0 0-.437-.648 1.8 1.8 0 0 0-.66-.39A2.6 2.6 0 0 0 8.938 0Zm12.36 6.062q-.179 0-.347.024a2 2 0 0 0-.325.073q-.18.054-.338.142a1.6 1.6 0 0 0-.29.21l-.003.003a1.6 1.6 0 0 0-.394.56q-.065.15-.097.317-.03.165-.032.337a1.7 1.7 0 0 0 .135.655q.07.162.171.3.098.131.225.242l.01.012q.133.114.29.197.155.082.335.134a2.4 2.4 0 0 0 .658.09h2.673L13.82 14.24l-.594.703.01.008-.088.123a1 1 0 0 0-.066.113l-.057.112c-.015.036-.046.097-.055.133a1.8 1.8 0 0 0-.118.64 2.1 2.1 0 0 0 .158.796 1.87 1.87 0 0 0 .83.912q.19.102.406.166h.001q.192.057.404.085.214.03.437.03h6.678q.168 0 .325-.02.154-.02.304-.06l.042-.012a1.7 1.7 0 0 0 .33-.14q.155-.083.288-.203l.01-.01q.134-.124.233-.265.103-.146.168-.308.06-.152.093-.318.03-.166.03-.34a1.8 1.8 0 0 0-.112-.605l-.02-.05a1.5 1.5 0 0 0-.417-.56l-.004-.004a1.6 1.6 0 0 0-.29-.19 2 2 0 0 0-.332-.128 2.4 2.4 0 0 0-.65-.083h-3.575l3.727-4.435q.154-.182.262-.314l.234-.291a6 6 0 0 0 .34-.47q.085-.137.15-.293a2.4 2.4 0 0 0 .102-.324 2.8 2.8 0 0 0 .07-.65q0-.445-.14-.8a1.7 1.7 0 0 0-.423-.628 1.8 1.8 0 0 0-.639-.377 2.5 2.5 0 0 0-.804-.12Zm-11.39 9.23q-.127 0-.256.016a1.5 1.5 0 0 0-.498.162q-.12.068-.22.158l-.001.004a1.2 1.2 0 0 0-.37.665 1.2 1.2 0 0 0 .002.506 1.15 1.15 0 0 0 .374.65l.01.01a1.2 1.2 0 0 0 .47.25q.23.067.49.067h1.776l-2.833 3.39-.468.553.01.007-.078.124-.042.084c-.014.03-.027.068-.042.097a1.3 1.3 0 0 0-.09.48q0 .156.03.305.029.147.088.289.063.146.152.27a1.4 1.4 0 0 0 .47.413q.142.076.304.125.142.042.299.063.159.02.32.02h4.776q.118 0 .24-.014.118-.015.224-.044l.034-.01q.135-.041.249-.104.12-.066.219-.154l.007-.008a1.2 1.2 0 0 0 .303-.432q.048-.113.07-.24a1.4 1.4 0 0 0 .002-.486 1.2 1.2 0 0 0-.06-.222l-.016-.042a1.14 1.14 0 0 0-.322-.426 1.2 1.2 0 0 0-.467-.24 1.8 1.8 0 0 0-.483-.06h-2.42l2.768-3.294.167-.21.139-.183a2 2 0 0 0 .106-.158q.066-.104.112-.22a1.8 1.8 0 0 0 .115-.472q.014-.126.013-.247 0-.33-.103-.596a1.26 1.26 0 0 0-.32-.47 1.3 1.3 0 0 0-.478-.284 1.8 1.8 0 0 0-.596-.092z"
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
export class SvgLazyvimIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
