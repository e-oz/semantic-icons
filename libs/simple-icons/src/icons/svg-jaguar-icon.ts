import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jaguar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Jaguar</title>
      <path
        d="M5.241 6.609a6.93 6.93 0 0 0-.293.01s-1.6.072-2.1.798c0 0-.085.098-.037.203 0 0 .01.03-.01.05 0 0-.27.24-.406.455-.048.078-.102.209 0 .3 0 0 .045.035.063.065.039.064.075.159.123.215.07.084.211.228.41.193.073-.013.09-.04.09-.04.1.099.26.096.26.096-.02-.064-.09-.188-.1-.263a.421.421 0 0 1 .015-.162.701.701 0 0 1 .145-.271c.054-.054.192-.115.303-.038.088.063.194.268.106.56 0 .022-.1.23-.205.26 0 0-.01.004-.03.004-.07 0-.2-.073-.2-.073s0 .018.015.094c.012.043.027.09.04.127 0 0-.025.046-.042.072-.025.045-.046.131.01.17 0 0 .23.157.455.171.154.01.212-.095.212-.095.114-.156.2-.29.32-.399.327-.3.786-.38.786-.38.03-.004.533-.144 1.386.539-.244.02-.534.078-.756.117-.632.113-1.037.71-1.155.952-.307.633.32.851.32.851.01-.006.6-.052.886-.683 0 0 .104-.279.383-.188.182.059 1.79.62 2.152.716 0 0 1.077.28 1.482-.215.649.213 1.257.316 2.85.11.277-.036.495-.027.495-.027.372.027.712.278.815.442.42.671.95 2.003 2.796 1.841l.835-.076c.51-.03.924-.05 1.345.172.183.096.285.131.596.428.425.404.816.842 1.336.603.185-.085.393-.415.393-.415a.598.598 0 0 0-.253-.419c.473.113 1.54.185 1.952-.536.107-.168.118-.318.078-.408-.113-.253-.426-.17-.426-.17-.148.03-.317.2-.568.274-.538.16-.968-.026-.968-.026-.829-.359-3.493-1.884-4.848-2.55 0 0-1.555-.78-3.839-1.684 0 0-4.148-1.823-7.212-1.77zm0 .136c3-.051 7.113 1.739 7.154 1.758v.001c.368.146.716.289 1.043.425l-.475-.188a43.23 43.23 0 0 0-1.828-.645c-1.544-.533-2.22-.627-2.267-.633a5.54 5.54 0 0 0-.256-.038l-.278-.032.154.249c-1.09-.771-2.395-.81-2.459-.812-.263 0-.492.075-.67.16l.089-.165-.216-.01a6.333 6.333 0 0 0-.901.018 5.1 5.1 0 0 1 .908-.088zm-.319.198c.095 0 .197.003.307.008l-.036.067c-.077.146-.385.448-.892.336 0 0 0 .226.555.307 0 0 .497.088 1.341.767 0 0-.403-.802-1.088-1.01 0 0-.086-.018-.044-.072 0 0 .404-.38.967-.38 0 0 1.754.038 2.869 1.204 0 0-.05-.203-.225-.49l-.073-.12s.067.008.25.038c0 0 .67.083 2.243.626 0 0 1.179.388 1.824.643.97.387 3.398 1.327 4.947 2.172.276.15 3.077 1.61 3.077 1.61.775.349 1.312.137 1.312.137.175-.066.492-.31.63-.172.071.071.081.167.047.26-.04.14-.24.328-.483.435-.255.114-.787.144-1.094.094 0 0-.596-.06-1.117-.605-.165-.172-.367-.367-.554-.559a1.038 1.038 0 0 0-.62-.333c-.35-.047-1.205-.07-1.526-.177-.215-.072-.474-.217-.819-.728-.166-.244-.283-.311-.509-.455 0 0 .173.138.271.312.142.252.213.435.29.57.077.135.164.254.295.36.164.131.266.156.443.185.17.028.742.023 1.232.016.483-.008.699.148.857.282.147.124.4.477.554.632.184.184.32.372.684.556.127.064.334.222.323.374-.164.164-.367.207-.855.076.035.034.29.303.727.176a.558.558 0 0 1-.396.15c-.458-.026-.906-.59-1.158-.798-.19-.158-.213-.197-.537-.422-.493-.341-1.598-.245-1.598-.245l-.812.042c-1.58.12-2.244-1.28-2.419-1.572a2.422 2.422 0 0 0-.168-.25c-.08-.108-.512-.668-.949-.852 0 0 .43.37.404.614 0 0-.178-.083-.662-.014-2.081.297-2.79-.224-2.79-.224.097-.417-.194-.845-.194-.845.16.05 1.184.396 2.155.2 0 0-1.581.008-2.69-.877 0 0 .69.865.526 1.431 0 0-.113.603-1.316.36-.129-.025-.28-.068-2.08-.568-.424-.127-.57.075-.647.197 0 .178-.213.386-.318.45-.558-.1-.336-.617-.336-.617-.35.502.017.724.133.74-.07.033-.135.058-.19.078 0 0-.457-.271-.202-.715.355-.62.717-.819 1.38-.88.29-.027.531-.048.715-.022.48.066.782.338 1.502.407-1.528-.45-1.532-1.335-1.537-1.352V8.5c-.085.292-.038.538.037.746-.02-.008-.355-.228-.483-.305-.548-.335-.982-.394-.982-.394-.182-.023-.266-.244-.266-.244-.01-.011-.013-.022-.02-.032-.252-.432-.502-.44-.502-.44a.836.836 0 0 1 .136.372c.01.055.014.157.014.187 0 .462-.54.607-.54.607-.372.473-.353.483-.436.495-.083.012-.265-.08-.265-.08-.014-.008-.018-.029-.016-.042 0-.029.028-.047.028-.047.07-.055.127-.11.127-.11.394-.403.441-.6.393-.861-.1-.524-.474-.463-.474-.463-.182.018-.256.168-.256.168a4.576 4.576 0 0 0-.195.392c-.08.176-.164.215-.207.223a.396.396 0 0 1-.065.003c-.127-.005-.223-.121-.223-.121-.01-.006-.01-.013-.016-.018-.116-.124-.032-.287-.032-.287.156-.363.46-.416.5-.421l.182-.026c.385-.065.567-.466.567-.466a2.99 2.99 0 0 0-.386.014c-.256.045-.343.346-.343.345-.216.05-.21-.136-.172-.193.034-.052.16-.275.991-.467 0 0 .314-.095.978-.092zm-.159.12c-.2 0-.305.112-.305.123 0 .006.027.009.07.01l.07.003a.79.79 0 0 0 .32-.083.422.422 0 0 0 .092-.052l-.245-.002zm.164.363v.004c.03.081.108.11.143.12v-.001c.163.05.309.138.437.241-.39-.218-.613-.261-.628-.264a1.609 1.609 0 0 1-.157-.032.987.987 0 0 0 .208-.068zm-1.364.05s-.05.16-.247.194c0 0-.077.018-.108.019l.021-.06c0-.012.051-.138.165-.15 0 0 .066-.004.169-.004zm-.683.233a.213.213 0 0 0 .056.047c-.135.057-.485.432-.485.432.177-.262.408-.458.41-.46 0-.003.01-.006.01-.009 0-.003.01-.007.01-.01zm.737.315c.038-.005.217-.012.3.27a.433.433 0 0 0-.14-.185.339.339 0 0 0-.254-.055.2.2 0 0 1 .094-.03zm-1.282 7.398v.873c0 .255-.056.426-.18.55-.165.162-.437.228-.84.228H0v.256h1.428c.677 0 1.156-.092 1.405-.347.143-.146.212-.329.212-.63v-.93zm2.688 0L3.37 17.33h.412l.348-.406h2.104l.35.406h.796l-1.656-1.907zm4.086 0c-.483 0-.772.056-1.03.2a.831.831 0 0 0-.432.75c0 .385.175.666.557.82.229.093.532.137.917.137h2.055v-.875h-.707v.62H9.336c-.366 0-.58-.053-.737-.173-.15-.115-.229-.289-.229-.525 0-.229.075-.4.215-.513.158-.128.365-.186.745-.186h1.774v-.255zm5.656 0v.924c0 .24-.03.393-.122.52-.154.217-.397.295-.896.295h-.06c-.476 0-.741-.078-.895-.294-.091-.128-.122-.273-.122-.521v-.923h-.71v.95c0 .246.027.44.15.603.202.264.574.416 1.6.416h.011c1.032 0 1.402-.152 1.604-.416.124-.163.15-.357.15-.603v-.95zm2.677 0l-1.654 1.907h.412l.349-.406h2.103l.35.406h.796l-1.656-1.907zm2.986 0v1.908h.71v-.661h.933l1.064.66H24l-1.117-.673c.266-.009.493-.05.667-.143a.52.52 0 0 0 .267-.472c0-.255-.114-.418-.321-.51-.185-.08-.413-.108-.866-.108zm.71.24h1.399c.266 0 .384.026.465.086.077.058.105.146.105.283v.036c0 .123-.03.223-.12.286-.09.062-.214.075-.441.075h-1.408zM5.18 15.7l.84.977H4.342zm12.419 0l.84.977h-1.68z"
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
export class SvgJaguarIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
