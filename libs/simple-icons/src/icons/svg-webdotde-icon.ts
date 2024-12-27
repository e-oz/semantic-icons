import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-webdotde-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WEB.DE</title>
      <path
        d="M3 0C1.35 0 0 1.35 0 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3Zm9.732 2.19c.047 0 .086.046.118.11.063.126.097.333.108.466.064.82.318-.013.434.082.088.091.395.593.35.903-.081.545-1.477.504-1.653.489-.15-.014-.574-.073-.716-.328-.136-.246.133-.78.333-.985.01-.01.157-.159.284-.207.016-.006.023-.01.043-.015.009-.003.014.003.01.026-.029.144-.035.64.177.626.195-.012.23-.764.308-.959a.466.466 0 0 1 .127-.181.166.166 0 0 1 .077-.027zm-.86 2.411c2.35-.02 4.401.205 5.725.418 0 0 .803.102.971.393.094.159.094.38.038.524-.039.1-.185.015-.154.206.315-.061.923.038 1.09.341.219.399-.096.366-.256.552-.111.13-.014.384-.229.486-.236.112-.797-.132-1.063-.16a24.962 24.962 0 0 1-.894-.107c-1.133-.16-2.373-.112-3.526-.068-1.095.042-2.21.06-3.296.24-.978.163-2.085.22-3.052.557-.356.127-1.574.648-1.537-.135.015-.329.426-.371.682-.447.184-.054.392-.054.472-.151.143-.172-.612-.003-.796.029-.186.033-.442.162-.635.09-.509-.188-.26-.64.108-.765.3-.1.526-.183.905-.246 4.534-.538 6.462-.54 11.511-.331-.051-.396-2.216-.468-2.61-.552-.637-.151-5.585-.224-7.072.154-.301.077-1.352.247-1.948.37-.31.064-.435-.238-.402-.496.034-.182.03-.184.307-.297.627-.253 1.7-.33 2.312-.401a31.328 31.328 0 0 1 3.35-.204Zm5.419 3.408c.241.022.292.214.423.41.208.314.258.48.294.859.046.404.059 2 .043 2.618.003.346.122 1.34.008 1.88.798.097 1.512.213 2.132.348 0-.004 1.236.238 1.499.597a.529.529 0 0 1 .119.27.649.649 0 0 1 .003.156.802.802 0 0 1-.06.184.325.325 0 0 1-.166.136.586.586 0 0 1-.122.037c-.022.004-.149.03-.269.002-.048-.012-.1-.02-.156-.037a1.894 1.894 0 0 1-.356-.154c-.783-.449-2.047-.62-2.865-.782-1.884-.356-10.438-.717-13.427.475-.603.238-.943.388-1.56.326-.027-.003-.283-.024-.325-.038a.453.453 0 0 1-.306-.325 1.226 1.226 0 0 1-.017-.168.322.322 0 0 1 .043-.146c.08-.124.099-.174.438-.327.553-.248 1.366-.283 2.285-.426.378-.058.713-.107 1.045-.151-.008-.017-.005-.035-.01-.05-.062-.335-.097-.887-.074-1.129.078-.874.264-2.222.391-3.08.037-.246-.018-.465.195-.635.335-.27.498-.149.69.03.337.31.434.332.37.884-.266 2.29-.404 3.51-.308 3.806l.008.027c.572-.056 1.16-.098 1.926-.141a56.19 56.19 0 0 1 1.046-.035c-.247-.134-.483-.345-.563-.557a3.713 3.713 0 0 1-.199-1.164c-.003-.425.059-2.194.078-2.756.005-.148-.008-.415.128-.522.117-.092.554-.147.643-.167.825-.184.572.655.506 1.131-.06.43-.11 2.074-.092 2.606.01.248.037.496.08.74.024.13.106.404.165.522.022.044.053.102.05.147.195-.003 2.52.046 2.607.049-.107-.26-.047-.597-.067-.866-.016-1.285-.3-4.211-.073-4.416.23-.236.48-.173.68.033.162.167.349.293.415.511.097.28.018 2.596.121 3.412.076.51.233.978-.22 1.33l-.037.03c.947.042 1.83.101 2.643.179.005-.16.019-.35.016-.498.034-.303-.118-3.786-.174-3.897l-.135-.536c-.053-.264.062-.7.375-.73a.615.615 0 0 1 .116-.002zM3.124 17.562h.794l.405 2.722.595-2.722h.773l.585 2.732.45-2.732h.744l-.734 3.571h-.92l-.54-2.416-.533 2.416h-.92Zm4.823 0h2.233v.6H8.701v.883h1.304v.6H8.701v.889h1.529v.6H7.947Zm2.869 0h1.194c.794 0 1.179.325 1.179.924 0 .595-.48.799-.48.799s.674.085.674.85c0 .6-.399.998-1.238.998h-1.33zm4.473 0h.964c1.228 0 1.782.66 1.782 1.753 0 1.119-.629 1.818-1.857 1.818h-.89zm3.313 0h2.232v.6h-1.478v.883h1.304v.6h-1.304v.889h1.528v.6h-2.282zm-7.032.56v.944h.325c.37 0 .55-.16.55-.48 0-.315-.18-.465-.625-.465zm4.473.04v2.372h.21c.694 0 1.019-.38 1.019-1.169 0-.793-.335-1.203-1.024-1.203zM11.57 19.61v.965h.415c.445 0 .639-.175.639-.495s-.21-.47-.595-.47zm2.692.82c.22 0 .38.14.38.37a.37.37 0 0 1-.39.383c-.254 0-.384-.164-.385-.374 0-.235.165-.379.395-.379z"
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
export class SvgWebdotdeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
