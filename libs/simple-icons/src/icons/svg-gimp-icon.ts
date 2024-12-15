import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gimp-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GIMP</title>
      <path
        d="M19.848 1.636c-.106-.016-.228.107-.324.397-.157.47-1.073 3.203-5.504 4.326.596.512.976 1.242.976 2.059 0 1.547-1.344 2.8-3 2.8-1.655 0-2.997-1.254-2.998-2.8 0-.603.208-1.158.555-1.616-3.135-.322-4.49-3.123-4.49-3.123l-.096 4.163c-.025.564-.009 1.111-.27 1.636a3.335 2.365 54.527 0 0-.05-.072 3.335 2.365 54.527 0 0-2.849-1.654 3.335 2.365 54.527 0 0-1.013.334 3.335 2.365 54.527 0 0 .029 4.095 3.335 2.365 54.527 0 0 3.291 1.59c2.997 2.22 8.482 4.148 12.231 1.885l-2.025-1.629c-1.064.345-2.604.34-4.397-.295 2.9.582 4.47-.053 5.334-.722-.228-.296-.71-.526-.71-.526s.563.107.93.496c.147.155.198.387.218.653.553.298 1.183.656 1.875 1.062 2.06-2.06 3.253-5.933 2.52-12.617-.035-.269-.127-.425-.233-.442zM6.855 7.096c1.051-.001 1.903.795 1.903 1.777 0 .98-.853 1.776-1.903 1.775-1.05 0-1.9-.795-1.9-1.775 0-.981.85-1.777 1.9-1.778zm5.776.482a1.325 1.325 0 1 0-.002 2.65 1.325 1.325 0 0 0 .002-2.65zm-10.942.639a.964.947 0 0 1 .002 0 .964.947 0 0 1 .021 0 .964.947 0 0 1 .965.949.964.947 0 0 1-.965.947.964.947 0 0 1-.962-.947.964.947 0 0 1 .94-.95zm5.559.123a.84.84 0 1 0 .02 1.68.84.84 0 0 0-.02-1.68zm8.26 4.964c-.043.053-.103.099-.156.147l.21.115c-.017-.1-.033-.21-.054-.262zm-.55.1l-.733.361.06.05.198.157 1.994 1.606.015.012a81.76 81.76 0 0 0 1.952 1.513.543.543 0 0 0-.008.127l.26-.04.103.152 2.317 1.472c-.12.41-.065.953.207 1.457.79 1.465 2.677 2.094 2.677 2.094-.771-1.968-.209-3.569-1.73-4.133-.242-.09-.453-.093-.629-.033l-2.047-1.895-.174-.052-.025-.262a.839.839 0 0 0-.12.059c-.306-.26-.687-.537-1.09-.815-1.364-.835-2.257-1.3-3.228-1.83z"
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
export class SvgGimpIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
