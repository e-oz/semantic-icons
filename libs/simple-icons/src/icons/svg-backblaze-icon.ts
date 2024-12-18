import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-backblaze-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Backblaze</title>
      <path
        d="M9.3108.0003c.6527 1.3502 1.5666 4.0812-1.3887 7.1738-1.8096 1.8796-3.078 3.8487-2.3496 6.0644.3642 1.1037 1.1864 2.5079 2.8867 2.7852.6107.1008 1.3425-.0006 1.7403-.1406 2.4538-.8544 2.098-3.4138 1.5546-5.0469-.07-.2129-.1915-.7333-.2363-.9238-.3726-1.6023.776-2.6562 1.129-3.8047.028-.0925.0534-.1819.0702-.2715.042-.21.067-.423.0781-.6387 0-1.8264-.9882-2.6303-1.7754-3.5996C10.1794.5643 9.3107.0003 9.3107.0003Zm6.2754 6.0175s-.709.3366-1.2188.8829c-.4454.4818-.8635.8789-1.2949 1.8593-.028.14-.0518.2863-.0742.4375-.2325 1.6416 1.1473 3.1446.7187 5.1895-.112.535-.3554.7123-.7812 1.6367-.5098 1.1065-.383 2.588.3594 3.5293.6723.8488 1.879 1.2321 3.0527.9492 2.1065-.5042 3.0646-2.2822 2.8965-4.2851-.1317-1.58-.8154-2.7536-2.754-4.961-.9607-1.0925-1.6072-2.409-1.5624-3.4062.1373-1.2074.6582-1.832.6582-1.832zM4.8928 15.1936c-.0222.0145-.0439.0614-.0586.1602a.0469.0469 0 0 1-.0059.0195v.01c-.1148.5406-.1649 1.823.1153 2.9687.353 1.4427 1.4175 3.902 4.412 5.129 2.5184 1.0336 5.718.5411 7.8497-1.627.5294-.5435.408-.4897-.4883-.2012v-.002c-1.1121.3558-3.5182.5463-4.7676-1-1.5239-1.8852-.4302-3.3633-1.3574-3.1504-3.6164.8348-5.2667-1.4657-5.5469-2.1016-.0023-.002-.0857-.2487-.1523-.205z"
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
export class SvgBackblazeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
