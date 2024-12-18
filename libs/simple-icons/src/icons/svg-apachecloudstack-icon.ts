import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apachecloudstack-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Apache CloudStack</title>
      <path
        d="M12.446 11.386c.326-.116 1.077-.462 1.228-1.23l-1.692-.114s-.458-.161-.705-.94c0 0-1.022-.55-.951-1.342 0 0 .158-.987 1.004-1.128 0 0 .882-.218 1.062 1.192 0 0 .415 1.194-.394 1.278 0 0-.175.385.46.402 0 0 .773.23 1.32-.229 0 0 .371-.341.812-.276 0 0 .095-.169-.09-.274 0 0-1.097-.939-1.289-2.267 0 0-.905-.126-1.018-.766 0 0-.211-.992.608-1.19 0 0 .522-.119.787 0 0 0 .667-1.817 2.57-2.128 0 0 1.573-.37 2.134.82 0 0 .232.647.106 1.19 0 0-.132.594.007.746 0 0 .509-.12.72.211.211.33.304 1.038-.119 1.203 0 0 .126.562-.297.945 0 0-1.342.78-1.725 1.44 0 0-.118.151-.178.204a1.354 1.354 0 01-.516.283s-.159.07-.337-.018c0 0-.053.265.245.311 0 0 .565-.078 1.18-.266l4.443-1.59s-.206-.555-.041-.826c0 0 .091-.144.174-.175.154-.059.338-.352.346-.581 0 0-.043-.58.373-.606 0 0 .4-.024.366.465l-.029.321s.61-.23.814.185c0 0 .412.836-.025 1.51 0 0-.643.633-1.489.235l-.29-.179s-5.168 2.14-5.228 2.28c0 0-.405.205-.707.753 0 0-1.037 1.85-1.572 2.34 0 0-.35.423-.601.528l.054.146c.347.037.601-.047.601-.047.965-.462 1.105-.106 1.105-.106.352.252.204.978.204.978 2.696 2.59-.204 5.128-.204 5.128-.455.198-.669 0-.669 0-.079-.119.67-.766.67-.766 1.368-1.64.156-3.412.156-3.412-2.023-2.18-4.05-.553-4.05-.553-.912 1.018-.78 2.128-.78 2.128-.159.317-.423.185-.423.185-.357-.423 0-1.533 0-1.533.529-1.23 1.652-1.732 1.652-1.732l.169-.136c.204-.935-.134-2.062-.134-2.062-.925-2.206-2.488-2.578-3.03-2.64.008.057.006.046-.001 0-.12-.013-.189-.012-.189-.012-2.317-.22-3.379 1.789-3.379 1.789-.62.55-.581 1.815-.581 1.815 1.524.343 1.898 1.295 1.898 1.295.106.396-.348.269-.348.269C5.22 13.69 4.51 13.635 4.51 13.635c-1.44-.26-2.414.664-2.414.664-.584.405-1.102 1.281-1.102 1.281C.157 17.06.68 18.472.68 18.472c.287 1.433 1.997 2.385 1.997 2.385.814.422 1.684.297 1.684.297.708-.162.544.211.544.211-.2.3-.469.304-.469.304-1.528.101-2.216-.414-2.216-.414C-1.195 19.11.347 15.59.347 15.59c1.6-3.119 4.19-2.458 4.19-2.458.052-.939.819-2.247.819-2.247 1.14-1.42 2.416-1.726 3.181-1.764l.004-.004s-.018-1.007.29-1.862c0 0 .16-.435.723-1.286.089-.134.37-.493.458-.82 0 0 .476-1.497-1.229-1.735 0 0-.543-.096-.898.19-.225.18-.437.286-.6.33 0 0-.806.277-.78-.238 0 0-.145-.767 1.68-.978 0 0 2.23-.383 2.49 1.388 0 0 .364 1.083-.958 2.709 0 0-.722 1.118-.557 2.334.045.007.068.013.068.013 2.326.404 3.211 2.212 3.211 2.212l.007.012zm.322.648l.797 1.602c1.387-.564 1.98-2.434 1.98-2.434.38-.942-.211-1.083-.211-1.083-.406-.106-.696.3-.696.3-.91 1.104-1.671 1.519-1.87 1.615zm4.284-8.153c-1.295-1.242-2.538.343-2.538.343-.766.978.08 2.353.08 2.353-.344.08-.503.317-.503.317-.237 1.19 1.11 2.009 1.11 2.009 1.031.687 1.666-.212 1.666-.212.264-.608 1.691-1.612 1.691-1.612.476-.476 0-1.004 0-1.004-.502-.357-.581-.978-.581-.978-.04-.529.04-1.176.04-1.176-.265-.476-.965-.04-.965-.04zm-3.714 1.19c-.08-.212-.35-.146-.35-.146-.535.099-.423.7-.423.7.04.417.476.483.476.483.013-.621.297-1.038.297-1.038zm4.943.468c-.06.126.066.212.066.212.177.117.343.324.343.324.08.072.205 0 .205 0 .17-.247-.125-.536-.125-.536-.198-.198-.49 0-.49 0zm-6.159 2.333s-.132-.674-.572-.86c0 0-.318-.083-.555.19 0 0-.437.445-.291.987 0 0 .251.595.916.718 0 0 .375.115.59-.454 0 0 .055-.176-.088-.581zm9.829-.328c.099.114.158.304.158.304.013.445.627.42.627.42.688.03.933-.4.933-.4.206-.357.127-1.049-.1-1.178-.228-.13-.732 0-.732 0 .122-.238.048-.615.048-.615-.044-.406-.386-.172-.386-.172-.206.154-.106.595-.106.595-.01.28-.372.405-.372.405-.276.283-.07.64-.07.64zm-5.92-1.962c-.01.12-.149.066-.149.066-.036-.26-.377-.323-.377-.323-.357.015-.356.28-.356.28-.199.123-.242-.056-.242-.056.116-.452.589-.36.589-.36.498.03.535.393.535.393zm.758.055s.027-.37.334-.44c0 0 .446-.143.64.256 0 0 .07.162.007.207 0 0-.14.051-.181-.192 0 0-.113-.22-.336-.173 0 0-.198.021-.248.23 0 0-.01.22-.216.112zm-1.676 1.235c.102-.062.247-.009.34.047.1.062.21.12.316.17.209.099.425.162.661.162.123 0 .254.012.374-.005.1-.014.203-.025.304-.035a.991.991 0 00.359-.096c.055-.029.11-.052.164-.084.05-.031.096-.072.144-.102.023-.014.082-.058.11-.053.035.006.069.103.06.136-.068.02-.133.074-.198.105-.09.044-.173.103-.255.16-.116.08-.252.192-.326.313-.173.283-.37.572-.656.749a.917.917 0 01-.495.119c-.166 0-.376-.03-.519-.12a.61.61 0 01-.29-.356c-.044-.158 0-.317 0-.478 0-.125.033-.31-.026-.42-.02-.038-.028-.027-.062-.057-.026-.022-.04-.065-.027-.113.002-.008.014-.043.022-.042zm1.291-.515a.137.137 0 01-.14.134.137.137 0 01-.14-.134c0-.074.062-.134.14-.134.077 0 .14.06.14.134zm.575-.023a.137.137 0 01-.14.134.137.137 0 01-.14-.134c0-.074.062-.134.14-.134.077 0 .14.06.14.134z"
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
export class SvgApachecloudstackIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
