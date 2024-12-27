import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-theguardian-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>The Guardian</title>
      <path
        d="m9.272 8.129-1.16.207V8.4l.32.127v3.577l-.28.16v.103h1.52v-.103l-.264-.145V9.961a.64.64 0 0 1 .4-.129c.24 0 .368.112.368.408v1.871l-.272.145v.111h1.512v-.111l-.271-.145v-1.863c0-.536-.225-.816-.729-.816a1.54 1.54 0 0 0-.992.361l-.031.031V8.13zm-4.512.566-.047 1.121H4.8l.744-1.007h.318v3.23l-.416.217v.111H7.36v-.119l-.416-.217V8.81h.32L8 9.816h.111l-.047-1.12zm8.033.785c-.888 0-1.434.569-1.434 1.489 0 .936.505 1.478 1.48 1.478.553 0 .952-.303 1.104-.52v-.11c-.2.103-.414.24-.718.24-.632 0-.896-.457-.928-1.05h1.752v-.023c0-1.088-.432-1.504-1.256-1.504m-.033.12c.256 0 .385.488.385 1.224l-.866.047c.002-.715.218-1.271.48-1.271m2.577 1.896-1.217.217v.08l.328.111v.928c-.088-.048-.271-.088-.511-.088-.84 0-1.4.52-1.4 1.6 0 1.024.48 1.52 1.128 1.52a1.07 1.07 0 0 0 .8-.329h.032v.32l.096.016 1.201-.158v-.106l-.338-.119v-3.976zm1.367 0a.513.513 0 0 0-.527.512.51.51 0 0 0 .527.511c.288 0 .537-.215.537-.511 0-.288-.249-.512-.537-.512m-14.52.184C1.04 11.68 0 12.233 0 13.793c0 1.456.84 2.07 2.145 2.07a4 4 0 0 0 1.359-.23v-1.465l.367-.2v-.136H2.072v.12l.375.216v1.48a.8.8 0 0 1-.336.055c-.568 0-.806-.624-.814-2.008-.008-1.16.302-1.863.91-1.863.208 0 .314.016.434.072l.664 1.047h.111l-.023-1.088c-.248-.104-.721-.183-1.21-.183m20.714 1.033c-.36.016-.714.157-.954.375h-.039v-.367h-.12l-1.2.214v.122l.336.111v2.36l-.287.16v.113h1.566v-.114l-.271-.152v-2.264a.65.65 0 0 1 .408-.127c.248 0 .385.12.385.424v1.951l-.281.16v.114H24v-.113l-.28-.16v-2.008c0-.56-.231-.8-.751-.8zm-5.772.04-1.236.224v.096l.336.127v2.32l-.282.16v.114h1.56v-.113l-.27-.153v-2.76zM5 12.76l-1.2.217v.087l.329.143v1.8c0 .52.264.856.84.856a1.34 1.34 0 0 0 .902-.375h.033v.36l.12.007 1.193-.152v-.08l-.32-.135v-2.72l-.13-.008-1.199.217v.087l.328.143v2.129a.49.49 0 0 1-.392.183c-.232 0-.367-.087-.367-.375v-2.369zm3.545 0a3.5 3.5 0 0 0-1.098.191v.809h.088l.656-.88.13-.017c.367 0 .495.201.495.793v.393l-.007-.01-.649.129c-.624.12-.928.393-.928.897s.32.798.8.798c.375 0 .617-.127.777-.351h.03c.089.216.273.343.673.343.248 0 .472-.063.584-.127v-.08l-.287-.08v-1.92c0-.664-.464-.888-1.264-.888m2.879 0-.008.008-1.2.224v.08l.329.096v2.352l-.281.16v.113h1.56v-.113l-.271-.153v-1.734c.176-.08.382-.129.654-.129.088 0 .192 0 .248.016v-.897c-.032-.016-.094-.015-.15-.015-.344 0-.632.24-.76.88h-.026v-.88zm7.488 0c-.464 0-.816.103-1.096.191v.809h.088l.657-.88.127-.017c.36 0 .496.201.496.793v.393h-.008l-.64.127c-.633.12-.936.384-.936.888s.32.8.8.8c.376 0 .616-.128.776-.352h.023c.088.216.272.343.672.343.256 0 .482-.063.594-.127v-.08l-.29-.08v-1.92c0-.664-.463-.888-1.263-.888m-4.8.144c.2-.008.255.056.335.104v2.377a.42.42 0 0 1-.279.103c-.432.016-.584-.425-.584-1.209 0-.872.207-1.359.527-1.375m-5.295 1.287v1.186c-.056.064-.128.103-.248.103-.216 0-.377-.129-.377-.609 0-.44.104-.64.424-.664zm10.368 0v1.186h-.008c-.048.064-.12.103-.24.103-.225 0-.383-.129-.383-.609 0-.44.111-.64.431-.664z"
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
export class SvgTheguardianIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
