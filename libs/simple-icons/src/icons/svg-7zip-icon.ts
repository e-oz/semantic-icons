import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-7zip-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>7Zip</title>
      <path
        d="M0 18.858h24V8.181H10.717V5.142H0ZM2.021 7.271h6.657v1.994c-1.74 2.09-2.84 4.502-2.948 7.404H3.477c.09-2.501.353-4.954 2.283-6.994l.033-.033H2.021Zm8.45 1.253h13.215v10.143H10.47Zm6.01 1.213v6.871h1.482v-6.87Zm2.755.043v6.912h1.616v-2.42h1.029c.43-.001.754-.29.969-.716.427-.848.429-2.257-.024-3.092-.227-.419-.571-.697-1.033-.684zm-7.924.002v1.596h2.217l-2.304 3.736v1.54h4.287V15.1h-2.698l2.786-3.909v-1.41Zm9.452 1.512h.595c.164-.006.287.081.371.217.17.273.172.736.004.99a.364.364 0 0 1-.373.176l-.55.047z"
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
export class Svg7zipIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
