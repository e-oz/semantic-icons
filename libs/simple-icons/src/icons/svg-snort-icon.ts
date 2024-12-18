import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-snort-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Snort</title>
      <path
        d="M7.53 14.994c.257-.027.46-.392.582-.555-.23-.163-.718.217-.582.555m11.815-1.747c-1.03 1.34-2.629 3.305-2.588 4.511.23-1.016 1.355-1.26 2.94-3.36.84-1.097 1.138-1.3 2.222-3.211.04-.054.718-.271.556-.474-1.315.474-2.575 1.829-3.13 2.534m4.43-5.054c-.325-.529-1.26-.773-1.991-.637-2.683.623-6.3-.23-7.276-.8-.068 0 .149-.528.013-.731.203-.136.271-.217.528-.15.461.204 1.03.123 1.49.055-.27-.528-.541-1.558-.948-2.154-.393.325-1.002.582-1.395.853-.732-1.978-3.211-2.33-5.217-1.192-.054.027-.108.027-.108.027s-.542-1.138-.772-1.667C7.38 2.217 6.757 2.8 6.486 2.8c-.542 0-1.192 0-1.72-.068 0 .922.352 1.992.392 2.792-.8.799-1.585 1.585-2.113 2.588-.583-.136-1.233-.23-1.843.027-.38.162-.827.636-.678 1.165.082.298.461.61 1.193.8-1.41 1.354-2.128 4.213-.84 5.202-.326.325-.719.637-.84 1.07-.15.57.176.773.569.854.731.136 1.26-.23 1.802-.555 1.138.677 1.91.623 3.238.69.135 0 .447.394.447.394s-.894-.095-1.355.04c-.623.19-1.165.772-.732 1.274.637.759 1.87 1.03 2.981.759.678.718.366 1.896-.772 2.37.99-.067 2.14-.731 2.263-2.1.027-.257-.122-.677-.325-.88-.136-.136-.312-.325-.312-.325s.555-1.057-.596-1.653c.46-.095 1.328-.461 1.328-.461s.352.406.663.46c.34.055.732-.135.868-.46.19-.488-.393-.867-.393-.867l.46-.732s.407.38.583.678c.57.948.678 1.896 1.206 2.831.27.461.732.84 1.192 1.044a2.5 2.5 0 0 0 1.274.08c.745-.135 1.341-.378 1.761-.636 2.954-1.761 5.027-4.065 6.83-7.33.446-.88 1.422-2.602.758-3.658m-8.4-3.943s.176.311.27.528c.136.325.394.962.394.962l-.529-.095-.501-.352s-.068.257-.352.474c-.136-.393.149-.582-.244-1.016.311-.203.962-.501.962-.501m-7.29 15.853c.122.704-.501 1.422-.935 1.693.38-.582.746-.84.312-2.046-.176-.474-.596-.813-1.03-1.097-.135-.095-.311-.15-.515-.203-.216-.055-.46.108-.664.311 0 0 .624.312 1.166.407.311.406-.312.42-.312.42-.068.067-1.788-.176-1.68-1.016.04-.326.69-.935 1.992-.434.731.284 1.558 1.3 1.666 1.965m-.732-2.48c.326.149.326.528.326.867 0 .068-.068.068-.136.136-.203-.366-.542-.542-.867-.8-.068-.054-.108-.081-.04-.149.216-.203.487-.176.717-.054m2.426-1.138c-.122.46-.556.38-.596.149-.04-.203.217-.271.298-.366.068.04.311.149.298.217m2.507 1.22c-.719-2.141-2.697-4.106-3.659-4.675-.054-.027-.176.149-.176.149s.867.813 1.003 1.409c.135.528-.163 1.097-.501 1.49-1.328 1.26-3.117 1.016-4.824.895-.528-.041-1.314-.393-.908-1.193-.596.461-1.517 1.328-2.195 1.057-.135-.054-.325-.38-.19-.69.244-.516 1.057-1.315 1.762-1.667.04-.068-.054-.204-.312-.082-.27.122-.8.637-1.016.529-1.206-.597-.434-2.819-.04-3.55.487-.908 1.124-1.07 1.788-1.274-.786-.135-1.396-.217-1.789-.623-.203-.271-.108-.474.095-.732a1.56 1.56 0 0 1 .705-.42c.27-.081.501-.04.759.014.65.135.69.474 1.016.406-.068-.149-.407-.46-.339-.596a5.95 5.95 0 0 1 1.572-1.978c.095-.082.162-.095.298-.095.203.068.122.27.244.46.203.34.745.326 1.07.068.664-.528.88-1.517 1.152-2.317 0-.067.217-.487-.15-.365-.175.731-.46 1.327-.866 1.991-.203.271-.434.502-.76.38-.067-.068-.202-.109-.23-.312-.135-.948-.325-2.723-.325-2.723s.922.122 1.274.04c.203-.04.664-.596 1.125-.786.325.461.636.908.921 1.355 1.328-.596 2.886-1.07 4.2-.08.461.392.962.893 1.111 1.34.122.34.19 1.166.109 1.789 1.124.596 2.235.935 3.495 1.179.556.108.99.162 1.532.203.27.027.907.108 2.167-.108-2.588.528-4.674 2.195-6.422 4.213-.867.99-2.412 3.415-2.615 4.296-.081.365-.095.555-.081 1.002Zm10.568-6.572c-.434 1.273-1.545 2.954-2.696 4.2-1.07 1.165-4.106 3.956-6.247 3.835-1.002-.055-1.395-1.084-1.03-2.236.678-2.181 3.7-6.612 7.534-8.197.8-.325 2.195-.474 2.52-.054.434.61.19 1.653-.08 2.452Zm-2.914-.068c.177-.339.38-.474.448-.745.068-.46.88-.163.921-.772-1.382.216-3.13 1.883-4.281 3.306-1.193 1.463-2.886 3.577-2.724 5.121.271-1.273.746-.745 2.683-3.103 1.057-1.273 2.141-2.303 2.954-3.807m-6.504-5.569c-.217-.23-.38.325-.501.23-.42-.311.23-1.409-.583-1.544-.664-.122-1.151.637-1.585 1.07.203.65.962-1.165 1.49-.636.217.216.204.677.312.935-.38-.136-.8.447-.637.934.054.15.23.258.312.176.149-.094-.081-.176-.095-.216a.61.61 0 0 1 .176-.637c.176-.15.15.095.081.311-.04.136-.149.217-.121.312.243.203.42-.623.42-.623s.528.217.731-.312m.082.474c-.068.068-.163.109-.19.244-.027.15-.163.34-.095.488.285.15.583-.298.501-.582 0-.082-.067-.23-.216-.15m.067.34c-.013.121-.027.108-.081.203s-.081.013-.095-.068.014-.095.054-.23c.027-.109.068-.095.082-.095.067 0 .054.067.04.19"
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
export class SvgSnortIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
