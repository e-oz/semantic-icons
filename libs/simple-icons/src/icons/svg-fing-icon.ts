import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fing-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fing</title>
      <path
        d="M12.706 9.583c1.359.018 2.375 1.094 2.347 2.485-.027 1.317-1.117 2.352-2.46 2.337-1.333-.015-2.352-1.113-2.334-2.515.018-1.334 1.069-2.325 2.447-2.307zm6.259-3.852c-.654-.716-1.447-1.271-2.316-1.726-.26-.136-.535-.241-.8-.367-.444-.211-.719-.539-.579-1.052.147-.537.547-.738 1.071-.597 1.196.323 2.198 1.004 3.15 1.769.114.092.225.189.333.288.194.179.346.542.611.459.254-.08.079-.446.129-.681.048-.228.161-.422.405-.402.256.021.519.141.511.455a46.98 46.98 0 0 1-.116 2.518c-.03.375-.31.509-.68.491a72.177 72.177 0 0 0-2.081-.068c-.329-.006-.679.012-.685-.439-.005-.435.333-.47.667-.483.118-.002.256.039.38-.165zm-4.422-3.714c-.007 1.068-.87 1.938-1.917 1.934-1.063-.004-1.98-.923-1.971-1.973.009-1.057.944-1.993 1.973-1.978 1.059.016 1.922.926 1.915 2.017zM5.465 20.792c-1.049-.013-1.895-.891-1.894-1.964.001-1.106.893-2.018 1.949-1.993 1.063.025 1.925.959 1.893 2.049-.032 1.081-.89 1.921-1.948 1.908zm5.267 1.174c.023-1.124.857-1.896 2.017-1.866 1.04.026 1.9.948 1.861 1.992-.039 1.04-.955 1.92-1.984 1.908-1.062-.013-1.917-.931-1.894-2.034zM5.649 6.814c-1.13.002-1.966-.822-1.964-1.937.001-1.051.875-1.947 1.911-1.96 1.046-.012 1.953.868 1.965 1.907.013 1.126-.816 1.988-1.912 1.99zm-2.954 7.082a1.92 1.92 0 0 1-1.927-1.923c-.004-1.08.894-1.988 1.96-1.981 1.08.007 1.94.912 1.916 2.014-.025 1.099-.845 1.894-1.949 1.89zm18.931 5.047c-.009 1.103-.872 1.926-1.997 1.906-1.077-.02-1.84-.844-1.831-1.979.009-1.11.811-1.921 1.899-1.92 1.077.002 1.938.892 1.929 1.993zm1.606-6.87a10.458 10.458 0 0 1-.856 4.046c-.188.443-.51.724-1.044.546-.495-.164-.75-.587-.542-1.095a9.8 9.8 0 0 0 .731-4.062c-.016-.522.304-.818.836-.814.487.003.793.245.843.75.021.208.022.419.032.629zm-6.363 7.897c.575-.027.804.255.925.598a.808.808 0 0 1-.351.989c-.404.25-.84.473-1.328.529-.418.048-.741-.114-.918-.502-.168-.369-.102-.738.216-.965a4.064 4.064 0 0 1 1.456-.649zM4.67 7.84c-.027.8-.622 1.588-1.179 1.563-.441-.02-.886-.47-.885-.896.001-.762.622-1.615 1.161-1.595.512.017.92.437.903.928zm5.254 13.317c.003.597-.317.906-.902.853-.495-.045-.914-.299-1.291-.586-.302-.23-.411-.589-.213-.958.192-.358.472-.564.919-.497.838.124 1.484.627 1.487 1.188zm-6.456-6.743c.531.002 1.093.781 1.075 1.491a.871.871 0 0 1-.859.835c-.508.009-1.082-.738-1.1-1.432-.011-.423.456-.895.884-.894zM9.102 2.002c.53.009.839.344.818.885-.021.528-.81 1.1-1.487 1.078-.47-.015-.783-.369-.778-.879.006-.596.675-1.097 1.447-1.084z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFingIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
