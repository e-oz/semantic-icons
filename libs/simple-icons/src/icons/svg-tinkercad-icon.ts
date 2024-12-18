import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tinkercad-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tinkercad</title>
      <path
        d="M0 0v7.32h7.32V0H0zm8.34 0v7.32h7.32V0H8.34zm8.34 0v7.32H24V0h-7.32zM1.605 1.266h4.106V2.33h-1.4v3.725H3.055V2.33h-1.45V1.265zm9.77 0h1.256V6.05h-1.256V1.266zm6.814 0h1.692l1.455 3.289v-3.29h1.158v4.79H20.82l-1.47-3.26V6.05h-1.16V1.266zM0 8.34v7.32h7.32V8.34H0zm8.34 0v7.32h7.32V8.34H8.34zm8.34 0v7.32H24V8.34h-7.32zm-6.32 1.265h3.19v.965h-1.935v.92H13.5v.92h-1.885v1.065h2.03v.916h-3.286V9.605zm8.16 0h1.906c1.075 0 1.719.495 1.719 1.315 0 .535-.284.935-.8 1.135.22.14.35.37.485.705l.645 1.625h-1.35l-.006.006-.433-1.221c-.2-.535-.287-.664-.702-.664h-.254v1.885h-1.21V9.605zM1.596 9.61h1.26v1.756L4.3 9.61h1.51l-2.022 2.25 2.182 2.536H4.39l-1.541-1.94v1.94H1.596V9.609zm18.134.916v1.065h.334c.375 0 .827-.095.827-.57 0-.36-.226-.495-.801-.495h-.36zM0 16.68V24h7.32v-7.32H0zm8.34 0V24h7.32v-7.32H8.34zm8.34 0V24H24v-7.32h-7.32zm-12.42 1.2c.375 0 .815.066 1.17.17l.09.024-.055 1.022-.16-.067a2.415 2.415 0 0 0-.89-.174c-.876 0-1.466.555-1.466 1.485s.54 1.484 1.446 1.484c.35 0 .66-.06.925-.18l-.006-.003.16-.07.055.993-.08.032c-.33.13-.753.199-1.193.199-.765 0-1.411-.22-1.871-.635-.475-.43-.73-1.06-.73-1.82 0-1.425 1.095-2.46 2.605-2.46zm6.996.07h1.484l1.824 4.784H13.26l-.4-1.16H11.1l-.41 1.16H9.435l1.82-4.785zm6.965 0h1.718c1.625 0 2.522.825 2.522 2.325v.004c0 1.535-.992 2.455-2.647 2.455h-1.593V17.95zm1.26.915v2.95h.195c.975 0 1.488-.55 1.488-1.54 0-.895-.49-1.41-1.375-1.41h-.309zm-7.5.19-.596 1.6h1.17l-.575-1.6z"
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
export class SvgTinkercadIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
