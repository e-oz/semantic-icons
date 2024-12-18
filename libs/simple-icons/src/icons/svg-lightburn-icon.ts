import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lightburn-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LightBurn</title>
      <path
        d="M1.419 23.947c-.481-.13-.956-.505-1.18-.933-.248-.475-.228.159-.228-7.504V8.606l.214-.312A9.388 9.388 0 0 1 2.968 5.7c1.18-.723 2.468-1.173 3.925-1.372.546-.075 1.87-.103 2.382-.051 2.234.227 4.417 1.19 5.777 2.549l.338.338-.289.295c-.159.162-.323.334-.364.38l-.076.086.524.022c1.01.042 2.43.423 3.41.916.154.078.287.14.296.14.01 0-.074-.172-.185-.384-.615-1.175-1.069-2.77-1.019-3.583l.018-.295-.347.363-.347.364-.24-.221c-1.801-1.663-3.841-2.598-6.406-2.935-1.354-.178-3.068-.145-4.362.085a11.764 11.764 0 0 0-3.339 1.095c-.892.437-1.708.97-2.405 1.57l-.248.213v-1.86C.014 1.583.015 1.555.09 1.333.311.682.83.207 1.485.052 1.68.006 2.908 0 11.978 0c8.925 0 10.303.007 10.511.05.677.143 1.22.653 1.448 1.361.055.168.058.876.049 10.572-.009 8.875-.018 10.42-.06 10.587-.148.597-.595 1.086-1.208 1.325l-.229.089-2.217.01c-1.22.005-2.217 0-2.217-.01 0-.012.022-.063.048-.113.194-.38.386-1.304.421-2.032.02-.408.025-.435.083-.404.168.09.469.884.48 1.265.01.373.094.473.199.234a6.57 6.57 0 0 0 .256-.92c.143-.837.166-2.06.052-2.827-.175-1.179-.472-2.208-.923-3.199-.352-.771-.841-1.574-1.294-2.122l-.21-.253c-.051-.062-.048-.064.083-.041.431.074.922.339 1.211.652.079.086.152.155.162.155.04 0-.42-.634-.652-.9-.719-.822-1.597-1.403-2.73-1.808-.542-.194-1.292-.373-1.56-.373-.089 0-.114-.016-.131-.086-.082-.324.252-.841.79-1.223.219-.156.23-.169.12-.146a4.962 4.962 0 0 0-.84.291c-.309.147-.795.582-1.13 1.007l-.103.132-.323-.007a2.099 2.099 0 0 1-.34-.022c-.066-.066.422-.755.796-1.122.3-.294.781-.69.941-.774.044-.023.073-.049.064-.058-.02-.02-.749.27-1.154.458-.537.25-1.139.7-1.713 1.281-.431.437-.463.449-.912.337-.429-.106-1.039-.13-1.415-.053-.9.182-1.457.794-1.434 1.577l.006.205-.447.76c-.49.835-.737 1.178-1.092 1.522-.349.338-.51.444-.616.404-.126-.048-.36-.039-.527.02a.766.766 0 0 0-.45.375c-.118.24-.418.34-.526.174-.085-.128-.327-.233-.476-.205-.174.032-.438.282-.563.531-.213.426-.268 1.07-.126 1.472a.94.94 0 0 0 .621.576c.04.012.168.134.286.271.205.238.292.3.211.149-.057-.107-.045-.296.023-.355.105-.092.198-.126.543-.2.327-.072.338-.072.372-.01.121.22.633.628.79.628.046 0 .044-.015-.017-.1-.122-.171-.206-.39-.206-.54-.001-.204.102-.307.544-.542.333-.176.419-.241.713-.544.579-.597.692-.7.979-.89.574-.38 1.267-.673 1.773-.748.241-.035.277-.032.478.041.18.066.477.227.477.26 0 .004-.22.135-.488.29-.269.155-.588.347-.71.427-.67.434-1.402 1.156-1.937 1.909-.42.59-.703.888-.998 1.045-.237.126-.467.168-1.116.2-.319.016-.468.036-.46.062.028.086.47.298.797.382.508.13 1.012.149 1.434.051.6-.138.94-.362 1.346-.887.536-.693.79-.955 1.151-1.194.917-.607 1.463-.734 2.299-.536.72.17.93.15 1.332-.138.166-.118.308-.276.622-.692.468-.62.751-.937.714-.8-.032.115-.296.64-.587 1.166l-.239.431.13.109c.178.15.335.479.36.759.029.302-.049.59-.265.979-.273.494-.582.878-1.209 1.505a12.559 12.559 0 0 1-3.495 2.503L7.766 24l-3.081-.002c-2.576-.002-3.112-.01-3.266-.052zm6.004-9.468c.126-.427.521-.941.846-1.1a1.55 1.55 0 0 1 1.252-.026l.15.066-.08.142c-.283.505-1.09.92-1.906.98l-.287.02z"
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
export class SvgLightburnIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
