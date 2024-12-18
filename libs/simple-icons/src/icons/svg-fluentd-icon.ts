import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fluentd-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fluentd</title>
      <path
        d="M1.83 2.195C1.279 2.191.8 2.377.425 2.82-.429 3.823.03 6.135 1.787 8.917l.02.028a10.177 10.177 0 0 0 .197.297c1.733 2.579 4.249 4.677 3.743 7.586a4.28 4.28 0 0 1-.599 1.564C3.615 20.797.003 21.047.003 21.047l.042.001-.045.005s4.355 1.344 8.533.438c.598-.13 1.192-.305 1.769-.537a12.331 12.331 0 0 0 .023-.01c.343-.138.667-.284.975-.437a12.331 12.331 0 0 0 .282-.145c.285-.15.556-.306.814-.467a12.331 12.331 0 0 0 .152-.095c.316-.204.61-.416.888-.635a12.331 12.331 0 0 0 .146-.116c.164-.134.323-.27.476-.407a12.331 12.331 0 0 0 .123-.105l.036-.04c.008-.008.015-.016.024-.023a12.842 12.842 0 0 0 .86-.888c.05-.056.1-.112.148-.169.059-.068.118-.135.175-.203l.1-.123c.127-.154.25-.31.372-.465l.032-.042c.679-.88 1.28-1.779 1.933-2.639l.216-.278c.294-.374.6-.74.932-1.091l.03-.031c.108-.114.22-.226.334-.337l.07-.067a10.997 10.997 0 0 1 .264-.243c.036-.032.072-.065.109-.096a5.003 5.003 0 0 1 .374-.293c.012-.01.025-.018.038-.027a5.003 5.003 0 0 1 .85-.48l-.065.03.022-.01.06-.027a5.623 5.623 0 0 1 1.63-.412h.001a5.623 5.623 0 0 1 .533-.026h.07a5.623 5.623 0 0 1 .115.002l.428-.003a.204.204 0 0 0 .088-.016c.062-.03.047-.102-.012-.186a1.38 1.38 0 0 0-.39-.343 3.688 3.688 0 0 1-.098-.052 3.871 3.871 0 0 1-.036-.022 3.688 3.688 0 0 1-.256-.161 3.871 3.871 0 0 1-.129-.096 3.688 3.688 0 0 1-.193-.15c-.205-.2-.432-.733-.523-.888a2.05 2.05 0 0 0-.24-.33c-.272-.306-.665-.533-1.302-.615-.891-.115-1.727.072-2.565.333l.1-.035c-1.168.354-2.334.87-3.655.94h-.04a5.553 5.553 0 0 1-.668-.01l-.06-.004a5.473 5.473 0 0 1-1.16-.233c-1.312-.412-3.154-1.88-5.047-3.316a113.017 113.017 0 0 0-.651-.49 51.56 51.56 0 0 0-.789-.58l-.222-.155-.236-.166-.086-.06a17.622 17.622 0 0 0-1.612-.997l-.019-.01a10.036 10.036 0 0 0-.367-.186c-.039-.019-.078-.035-.117-.053a7.732 7.732 0 0 0-.548-.23l-.05-.017a5.023 5.023 0 0 0-.316-.101l-.026-.007a3.055 3.055 0 0 0-.816-.125zM20.6 8.641a.504.5 0 0 1 .505.5.504.5 0 0 1-.505.5.504.5 0 0 1-.504-.5.504.5 0 0 1 .504-.5z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFluentdIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
