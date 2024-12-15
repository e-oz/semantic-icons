import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-snyk-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Snyk</title>
      <path
        d="M17.097 13.344c.143-.37.06-2.117-.222-4.675l-.004-.04.904-2.431v-.05c0-1.06-1.374-3.9-2.186-5.41L15.192 0l-.84 5.854-.503.829-.125-.042c-.351-.118-1.042-.316-1.728-.316-.65 0-1.294.171-1.72.315l-.125.042-.504-.827L8.807 0l-.396.737c-.812 1.51-2.186 4.35-2.186 5.411v.05l.904 2.432-.004.039c-.283 2.558-.366 4.305-.222 4.674.13.332.642 1.041 1.072 1.605l-.619 5.724.617.442.576-5.329c.012.414.064 1.277.275 2.068l-.389 3.592L12 24l4.279-3.067.375-.268-.62-5.73c.428-.561.934-1.262 1.063-1.591zM15.59 2.298c.694 1.408 1.421 3.08 1.471 3.779l-.388 1.045c-.935-1.31-1.228-3.441-1.253-3.636zm-1.124 7.8c.84 0 .212.712.138.792h-1.587c.144-.18.69-.792 1.45-.792zm-.452 1.468a.178.178 0 0 1-.175.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.325 0v-.025h.511l-.008.007c.039.038.06.093.052.15zM12.39 19.29c.097.064.2.115.306.156-.168.19-.399.287-.697.287-.299 0-.53-.097-.697-.288.107-.04.21-.092.306-.156a.573.573 0 0 0 .391.114c.103 0 .255 0 .391-.113zm-2.62-7.724a.178.178 0 0 1-.174.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.326 0v-.025h.511l-.008.007c.039.038.06.093.052.15zm-.374-.676c-.074-.08-.702-.792.138-.792.759 0 1.305.612 1.45.792zM6.948 6.077c.05-.699.778-2.37 1.471-3.78l.185 1.29c-.07.48-.393 2.37-1.257 3.56zM9.473 18.09c-.373-1.02-.377-2.446-.377-2.507v-.097l-.06-.076c-.551-.683-1.477-1.9-1.616-2.257l-.005-.014c-.124-.43.1-2.997.268-4.513l.008-.066-.187-.502.07-.075c.476-.497.88-1.213 1.203-2.126L9 5.223l.118.82.807 1.326.22-.094c.009-.004.934-.4 1.851-.4H12v.44h-.004c-.812 0-1.669.36-1.677.363l-.571.246-.797-1.308c-.27.62-.585 1.137-.94 1.543l.129.347-.019.169c-.24 2.156-.348 4.044-.285 4.332.086.2.523.812 1 1.437l.748-.218 1.17-1.334.184 3.458c-.011.015-.28.393-.28.609 0 .235.344.541.685.786.005-.01.007-.02.013-.03.12-.212.275-.251.346-.087.04.092.028.369.028.369l.005.002v.328c-.013.027-.302.674-1.014.674-.275 0-.948-.089-1.248-.911zm2.536 2.409c-.527 0-1.297-.257-1.374-.952.029.001.057.003.086.003.06 0 .119-.003.177-.01.235.455.665.6 1.102.6.436 0 .865-.146 1.1-.6.059.007.119.01.18.01.029 0 .057-.002.085-.003-.076.695-.835.952-1.356.952zm2.956-5.09l-.061.077v.097c0 .06-.004 1.487-.377 2.507-.3.822-.973.91-1.248.91-.71 0-1.002-.658-1.014-.686V18l.005-.004s-.012-.276.028-.368c.07-.164.226-.126.346.088.006.009.009.02.013.03.34-.246.686-.552.686-.787 0-.216-.269-.593-.28-.61l.183-3.457 1.17 1.334 1.2.35c-.23.304-.463.6-.651.834zm-8.472-1.907c-.22-.563-.022-2.916.187-4.817l-.895-2.409v-.128c0-.312.095-.734.246-1.207-1.177.253-1.808.49-1.808.49v12.996l2.67 1.914.577-5.332c-.538-.718-.868-1.226-.977-1.507zm3.853-7.346c.446-.136 1.042-.27 1.65-.27.61 0 1.21.135 1.658.27l.276-.453.184-1.288s-1.288-.068-2.103-.068c-.759 0-1.467.026-2.125.07l.184 1.286zm7.623-1.217c.151.474.247.896.247 1.21v.127l-.895 2.409c.208 1.901.406 4.253.186 4.818-.109.279-.435.782-.968 1.493l.578 5.337 2.66-1.906V5.432s-.632-.24-1.808-.493Z"
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
export class SvgSnykIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
