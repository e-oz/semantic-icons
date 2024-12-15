import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tidyverse-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tidyverse</title>
      <path
        d="M22.392 18V5.999l-.829-.478L13.706.984 12 0l-1.706.984-7.857 4.537-.829.478v12.002l.829.478 7.956 4.594 1.609.927 1.61-.927 7.956-4.594.824-.479Zm-19.955-.45V6.508L12 .984l9.563 5.522v11.042L12 23.072 2.437 17.55Zm10.061 4.416v.228l.197.113.193-.113v-.228l-.193-.112-.197.112Zm-1.419-.111v.17l.148.082.141-.082v-.17l-.141-.082-.148.082Zm-.757-1.072.292-.164.291.167v.333l-.291.165-.292-.167v-.334Zm1.757-.006v.207l.178.102.176-.102v-.207l-.176-.101-.178.101Zm2.788-.026v-.15l-.127-.074-.131.074v.15l.131.073.127-.073Zm-6.425-.468.291-.164.292.166v.334l-.292.164-.291-.166v-.334Zm4.898-.246v.39l.339.192.333-.192v-.39l-.333-.193-.339.193Zm-3.445.291v.133l.116.067.117-.067v-.133l-.117-.068-.116.068Zm2.289-.54.113-.065.113.065v.129l-.113.063-.113-.065v-.127Zm3.127-.149v.167l.144.082.141-.082v-.167l-.141-.082-.144.082Zm1.403-.159v.122l.105.059.104-.059v-.122l-.104-.06-.105.06Zm-9.8-.432.178-.102.182.102v.207l-.182.101-.178-.101v-.207Zm.903.149v.101l.091.054.087-.054v-.101l-.087-.051-.091.051Zm5.115-.241v.206l.179.102.175-.102v-.206l-.175-.099-.179.099Zm-2.883.196v-.108l-.091-.051-.091.051v.108l.091.05.091-.05Zm1.453-.309v.206l.178.103.176-.103v-.206l-.176-.102-.178.102Zm3.03.038.113-.062.11.062v.127l-.11.065-.113-.065v-.127Zm-5.561-.129.178-.102.181.102v.207l-.181.102-.178-.102v-.207Zm6.542-.418v.257l.223.128.218-.128v-.257l-.218-.125-.223.125Zm-5.439.008v.207l.178.101.175-.101v-.207l-.175-.101-.178.101Zm-3.869.124v.111l.097.053.093-.053v-.111l-.093-.053-.097.053Zm11.941-.576v.351l.306.172.297-.172v-.351l-.297-.175-.306.175Zm-13.076.028.288-.161.289.164v.331l-.289.161-.288-.161v-.334Zm8.941.444v-.102l-.088-.051-.09.051v.102l.09.051.088-.051Zm2.953-.192v.127l.11.062.108-.062v-.127l-.108-.062-.11.062Zm-8.811-.521v.425l.368.212.362-.212v-.425l-.362-.207-.368.207Zm-.941.21v.15l.129.076.13-.076v-.15l-.13-.077-.129.077Zm12.408-.153.125-.071.124.071v.145l-.124.07-.125-.07v-.145Zm-7.99-.011v-.461l-.391-.224-.399.224v.461l.399.226.391-.226Zm3.335-.532.319-.181.322.183v.371l-.322.179-.319-.182v-.37Zm-2.886.509a.319.319 0 0 1 .026-.026h-.009c-.003.009-.011.017-.017.026Zm4.995-.444v.206l.178.102.176-.102v-.206l-.176-.102-.178.102Zm-13.637-.207v.323l.28.161.277-.161v-.323l-.277-.161-.28.161Zm10.803.238v-.266l-.223-.13-.232.13v.266l.232.13.223-.13Zm-9.552-.283v.139l.125.07.118-.07v-.139l-.118-.07-.125.07Zm8.457 0 .12-.068.121.068v.139l-.121.068-.12-.071v-.136Zm-5.871-.105v.207l.178.105.175-.105v-.207l-.175-.099-.178.099Zm12.514.003v.131l.113.065.111-.065v-.131l-.111-.065-.113.065Zm-3.692-.136.178-.101.181.101v.207l-.181.102-.178-.102v-.207Zm-3.91-.019v.207l.179.101.175-.101v-.207l-.175-.102-.179.102Zm6.263.161v-.207l-.175-.101-.181.101v.207l.181.102.175-.102Zm-8.2-.294v-.204l-.175-.102-.179.102v.204l.179.101.175-.101Zm-4.045-.275v.136l.119.068.116-.068v-.136l-.116-.067-.119.067Zm-3.388.032.091-.051.087.051v.101l-.087.051-.091-.051v-.101Zm5.524-.187v.206l.178.102.179-.102v-.206l-.179-.099-.178.099Zm-2.823-.005v.206l.179.102.174-.102v-.206l-.174-.103-.179.103Zm2.3.067.091-.051.093.051v.105l-.093.051-.091-.051v-.105Zm13.314-.107.127-.074.127.074v.147l-.127.073-.127-.073v-.147Zm-9.795-.012.118-.067.119.067v.139l-.119.065-.118-.067v-.137Zm3.679-.22.221-.125.218.125v.252l-.218.121-.221-.121v-.252Zm-1.623.133v-.354l-.303-.175-.308.175v.354l.308.175.303-.175Zm1.026.084v-.149l-.127-.074-.13.074v.149l.13.074.127-.074Zm3.771.003v-.122l-.105-.061-.108.061v.122l.108.062.105-.062Zm1.083-.282.181-.099.178.101v.207l-.178.099-.181-.102v-.206Zm-15.356.24v-.119l-.098-.059-.103.059v.119l.103.056.098-.056Zm5.326-.105v.105l.088.051.088-.051v-.105l-.088-.05-.088.05Zm2.662-.104v.125l.11.061.105-.061v-.125l-.105-.063-.11.063Zm-7.312-.04.125-.07.124.07v.144l-.124.071-.125-.071v-.144Zm12.196-.3v.331l.289.164.283-.164v-.331l-.283-.164-.289.164Zm-9.687-.138v.319l.277.159.271-.159v-.319l-.271-.156-.277.156Zm-1.494-.119.292-.164.289.164v.333l-.289.164-.292-.164v-.333Zm5.092.396v-.206l-.176-.102-.18.102v.206l.18.101.176-.101Zm-8.075-.487v.277l.243.136.234-.136v-.277l-.234-.138-.243.138Zm11.438-.211.283-.162.28.162v.322l-.28.158-.283-.158v-.322Zm-2.472.33v-.206l-.175-.102-.178.102v.206l.178.102.175-.102Zm-4.961-.231v.135l.119.068.116-.068v-.135l-.116-.066-.119.066Zm9.229-.154.181-.099.178.102v.207l-.178.099-.181-.102v-.207Zm3.751-.045.181-.102.178.102v.207l-.178.101-.181-.101v-.207Zm-1.089-.036v.206l.178.102.175-.102v-.206l-.175-.103-.178.103Zm-8.596-.034.178-.099.181.101v.207l-.181.099-.178-.102v-.206Zm7.074.203v-.207l-.175-.101-.181.101v.207l.181.102.175-.102Zm1.027-.028v-.207l-.176-.102-.178.102v.207l.178.102.176-.102Zm-10.384-.24.178-.099.182.101v.207l-.182.099-.178-.102v-.206Zm-3.657-.028v-.324l-.274-.158-.281.158v.324l.281.16.274-.16Zm.495-.148.178-.101.181.101v.207l-.181.101-.178-.101v-.207Zm2.271.187v-.136l-.113-.065-.116.065v.136l.116.064.113-.064Zm4.147-.017.085.051.087-.051v-.099l-.087-.048-.085.048v.099Zm-5.335-.006v-.119l-.099-.059-.105.059v.119l.105.057.099-.057Zm7.258-.359.201-.113.207.116v.235l-.207.113-.201-.116v-.235Zm7.666.009v.214l.189.108.184-.108v-.214l-.184-.108-.189.108Zm-11.473-3.31.504 1.437c.053.162.11.351.147.498h.008c.042-.146.09-.33.147-.509l.455-1.426h.441l-.625 1.734c-.3.835-.504 1.262-.787 1.525a1.098 1.098 0 0 1-.512.286l-.104-.371a1.09 1.09 0 0 0 .365-.215 1.32 1.32 0 0 0 .35-.492.323.323 0 0 0 .034-.105.393.393 0 0 0-.028-.116l-.848-2.243.453-.003Zm3.182 3.46v-.136l-.113-.065-.116.065v.136l.116.064.113-.064Zm-9.373-.796v-.104l-.089-.051-.093.051v.104l.093.055.089-.055Zm5.442-.859c0 .215.005.464.019.628H7.91l-.02-.421h-.008a.842.842 0 0 1-.783.478c-.554 0-.982-.498-.982-1.236-.006-.808.47-1.306 1.03-1.306.35 0 .588.175.693.373h.008V9.91h.416v2.937Zm8.613.178c.164.107.353.17.551.176.303 0 .447-.162.447-.362 0-.212-.119-.326-.427-.447-.413-.156-.609-.396-.609-.69 0-.393.301-.713.793-.713a1.09 1.09 0 0 1 .563.15l-.105.322a.865.865 0 0 0-.47-.142c-.246 0-.385.15-.385.331 0 .201.139.291.435.413.399.162.603.374.603.735 0 .428-.314.73-.857.73-.252 0-.484-.065-.645-.166l.106-.337Zm2.073-.685c.008.599.37.846.786.846.301 0 .479-.057.637-.127l.071.317a1.78 1.78 0 0 1-.764.15c-.707 0-1.128-.493-1.128-1.228s.407-1.312 1.077-1.312c.75 0 .948.698.948 1.145 0 .067-.006.138-.014.206H18.95v.003Zm-5.521 0c.008.599.37.846.786.846.3 0 .478-.057.637-.127l.071.317a1.78 1.78 0 0 1-.764.15c-.707 0-1.128-.493-1.128-1.228s.407-1.312 1.077-1.312c.749 0 .947.698.947 1.148 0 .068-.005.138-.014.206h-1.612Zm-9.137-1.997v.699h.597v.336h-.597v1.312c0 .303.082.473.315.473a.871.871 0 0 0 .243-.031l.019.33a.993.993 0 0 1-.37.059c-.195 0-.35-.065-.45-.186-.119-.13-.161-.348-.161-.633v-1.327h-.359v-.336h.356v-.583l.407-.113ZM15.477 11.8c0-.286-.006-.532-.02-.758h.365l.014.479h.02c.105-.329.356-.535.636-.535a.41.41 0 0 1 .119.018v.418a.476.476 0 0 0-.142-.014c-.294 0-.503.238-.56.569a1.562 1.562 0 0 0-.019.206v1.299h-.413V11.8ZM5.265 13.478v-2.432h.419v2.432h-.419Zm5.954-2.436.45 1.369c.077.221.139.421.184.622h.014c.054-.201.119-.401.196-.622l.446-1.369h.436l-.902 2.432h-.399l-.874-2.432h.449Zm10.155 2.187v-.148l-.125-.073-.13.073v.148l.13.073.125-.073ZM7.845 12.032a.85.85 0 0 0-.02-.187c-.062-.282-.288-.512-.603-.512-.432 0-.687.402-.687.939 0 .493.229.9.678.9.281 0 .535-.195.611-.529a.875.875 0 0 0 .02-.192v-.419h.001Zm-5.018.424v.173l.15.088.147-.088v-.173l-.147-.085-.15.085Zm11.826-.433c.006-.282-.11-.718-.58-.718-.421 0-.608.413-.638.718h1.218Zm5.521 0c.006-.282-.11-.718-.579-.718-.422 0-.609.413-.643.718h1.222Zm-17.61-.48.108-.06.11.06v.124l-.11.062-.108-.062v-.124Zm18.555-.416.128-.071.127.074v.147l-.127.07-.128-.073v-.147Zm-18.142-.365v-.15l-.127-.076-.133.076v.15l.133.077.127-.077Zm2.752-.405a.254.254 0 0 1-.237.272h-.028c-.147 0-.252-.122-.252-.272 0-.155.111-.277.261-.277.157.004.256.122.256.277Zm14.409-.447.293-.166.295.166v.34l-.295.167-.293-.167v-.34Zm-.88-.158v.207l.178.102.175-.102v-.207l-.175-.099-.178.099Zm-2.099-.11v.207l.181.101.175-.101v-.207l-.175-.102-.181.102Zm-5.823.113v-.206l-.176-.102-.178.102v.206l.178.102.176-.102Zm1.388-.501-.339-.194-.348.194v.403l.348.194.339-.194v-.403Zm1.055.233V9.28l-.175-.102-.179.102v.207l.179.101.175-.101Zm-6.712-.074v-.207l-.175-.099-.178.099v.207l.178.102.175-.102Zm14.06.048v-.102l-.087-.048-.085.048v.102l.085.048.087-.048Zm-5.551-.314.18-.101.178.101v.207l-.178.101-.18-.101v-.207ZM2.847 9.113l.181-.102.178.102v.206l-.178.103-.181-.103v-.206Zm11.58 0v.206l.178.103.176-.103v-.206l-.176-.102-.178.102Zm5.103.107v.099l.087.051.085-.051V9.22l-.085-.05-.087.05Zm-9.923-.036v.082l.071.039.068-.039v-.082l-.068-.039-.071.039Zm8.477-.484v.396l.345.198.337-.198V8.7l-.337-.198-.345.198Zm-13.189.43v-.206l-.178-.102-.181.099v.206l.181.105.178-.102Zm12.086-.333.178-.103.181.103v.206l-.181.102-.178-.102v-.206Zm-8.387.09v-.28l-.24-.138-.243.138v.28l.243.139.24-.139Zm-2.749-.145v.128l.11.065.108-.065v-.128l-.108-.062-.11.062Zm-1.932-.228v.11l.097.054.093-.054v-.11l-.093-.055-.097.055Zm1.649-.026v-.263l-.226-.13-.229.13v.263l.229.133.226-.133Zm10.002-.017v.073l.062.034.063-.034v-.073l-.063-.036-.062.036Zm-3.015-.045.087-.051.091.051v.102l-.091.05-.087-.05v-.102Zm-4.721-.495-.343-.198-.35.198v.404l.35.199.343-.199v-.404Zm6.55.246-.174-.099-.182.099v.209l.182.102.174-.102v-.209Zm6.326-.226.305-.172.305.174v.351l-.305.173-.305-.173v-.353Zm-10.299-.003.294-.167.294.167v.339l-.294.164-.294-.166v-.337Zm9.481.195v.207l.181.101.176-.101v-.207l-.176-.099-.181.099Zm-4.885-.017.181-.102.178.102v.207l-.178.102-.181-.102v-.207ZM3.707 7.807v.31l.269.154.271-.154v-.31l-.271-.153-.269.153Zm8.103.155-.175-.102-.178.102v.206l.178.103.175-.103v-.206Zm4.978-.108v-.423l-.358-.207-.371.207v.423l.371.21.358-.21Zm-7.899.108v-.207l-.176-.101-.181.101v.207l.181.102.176-.102Zm9.509-.252.159-.091.158.091v.184l-.158.091-.159-.091V7.71ZM6.6 7.773v-.269l-.234-.133-.233.13v.268l.233.134.234-.13ZM2.94 7.6v.133l.117.065.113-.065V7.6l-.113-.065-.117.065Zm9.94.031.181.102.175-.102v-.206l-.175-.102-.181.102v.206Zm-2.981.051.09.051.088-.051V7.58l-.088-.05-.09.05v.102Zm-5.041-.043v-.104l-.087-.051-.094.051v.104l.094.055.087-.055Zm9.959-.325.178-.102.182.102v.206l-.182.103-.178-.103v-.206Zm-1.111-.045.257.147.255-.147v-.297l-.255-.147-.257.147v.297Zm4.395.073v-.146l-.127-.074-.127.074v.146l.127.074.127-.074Zm1.361-.174v.113l.099.056.095-.056v-.113l-.095-.055-.099.055ZM7.837 7.111v-.207l-.176-.102-.181.102v.207l.181.101.176-.101Zm-4.023-.37v.293l.255.144.249-.144v-.293l-.249-.145-.255.145Zm4.537.123.181-.101.179.101v.207l-.179.102-.181-.102v-.207Zm12.066-.039.179-.102.181.102v.207l-.181.101-.179-.101v-.207Zm-14.855.223v-.104l-.087-.048-.091.048v.104l.091.051.087-.051Zm11.532-.26v.206l.182.103.174-.103v-.206l-.174-.102-.182.102Zm-4.279-.252-.306-.175-.314.175v.363l.314.178.306-.178v-.363Zm-6.087.06v.139l.121.067.116-.067v-.139l-.116-.068-.121.068Zm4.415.04v-.207l-.175-.101-.182.101v.207l.182.101.175-.101Zm3.1-.36.181-.102.178.102v.206l-.178.103-.181-.103v-.206Zm-5.04-.209.288-.162.289.164v.332l-.289.164-.288-.164v-.334Zm9.206.34V6.2l-.175-.099-.179.099v.207l.179.101.175-.101Zm1.567-.049v.102l.088.048.088-.048v-.102l-.088-.048-.088.048Zm-.543.009V6.16l-.175-.101-.179.101v.207l.179.101.175-.101Zm-3.162-.199.122-.067.124.067v.142l-.124.071-.122-.071v-.142Zm-.645.089V6.05l-.175-.099-.181.099v.207l.181.104.175-.104Zm-7.21-.066v-.206l-.175-.099-.178.099v.206l.178.102.175-.102Zm-3.21-.246.178-.101.178.101v.207l-.178.101-.178-.101v-.207Zm1.279.232v-.09l-.077-.046-.079.046v.09l.079.046.077-.046Zm6.33-.486.178-.102.181.102v.206l-.181.102-.178-.102v-.206ZM6.773 5.68v-.337l-.286-.164-.291.164v.337l.291.164.286-.164Zm10.912-.085V5.19l-.342-.198-.351.198v.405l.351.197.342-.197Zm-5.538.039v-.133l-.116-.068-.116.068v.133l.116.068.116-.068Zm-2.215-.096.178.102.176-.102v-.206l-.176-.103-.178.103v.206Zm4.028.003v-.105l-.09-.053-.091.053v.105l.091.054.09-.054Zm4.922-.003v-.099l-.085-.051-.088.051v.099l.088.051.085-.051Zm-2.843-.305.178-.103.181.103v.206l-.181.102-.178-.102v-.206Zm-5.035-.419.178-.102.182.102v.207l-.182.101-.178-.101v-.207Zm6.616-.13.182-.102.178.102v.207l-.178.101-.182-.101v-.207Zm-4.019-.042.181-.099.178.101v.207l-.178.099-.181-.102v-.206Zm-.727.158v-.136l-.116-.068-.122.068V4.8l.122.067.116-.067Zm2.249-.116v-.207l-.178-.102-.179.102v.207l.179.102.178-.102Zm.554-.175.138-.079.139.079v.158l-.139.079-.138-.079v-.158Zm-4.042-.015v.102l.088.051.087-.051v-.102l-.087-.05-.088.05Zm-1.592-.082V4.07l-.292-.164-.294.164v.342l.294.167.292-.167Zm-1.941.057v-.156l-.13-.076-.135.076v.156l.135.076.13-.076Zm2.447-.003v-.153l-.13-.076-.133.076v.153l.133.077.13-.077Zm.416-.37.178.101.175-.101v-.207l-.175-.102-.178.102v.207Zm-.076-.204v-.207l-.176-.101-.178.101v.207l.178.102.176-.102Zm3.776-.201v-.43l-.366-.209-.373.209v.43l.373.215.366-.215Zm-3.171-.167.308.175.303-.175v-.353l-.303-.173-.308.173v.353Zm-1.892-.365.129-.073.128.073v.148l-.128.073-.129-.073v-.148Zm3.736-.619v.206l.178.102.176-.102V2.54l-.176-.102-.178.102Zm.871-.04.179-.102.18.102v.207l-.18.102-.179-.102V2.5Zm-2.783.124v-.206l-.175-.102-.181.102v.206l.181.102.175-.102Zm2.164-.288V2.13l-.176-.102-.178.102v.206l.178.102.176-.102Zm-2.448-.491.105-.061.108.061v.122l-.108.061-.105-.061v-.122Zm1.198-.088V1.55l-.173-.101-.181.101v.207l.181.101.173-.101Z"
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
export class SvgTidyverseIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
