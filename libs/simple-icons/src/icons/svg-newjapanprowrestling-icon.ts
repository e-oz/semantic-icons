import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-newjapanprowrestling-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>New Japan Pro-Wrestling</title>
      <path
        d="M11.95.086C10.875.082 9.814.24 8.69.563c-3.17.913-6.005 3.227-7.422 6.064a13 13 0 0 0-1.184 3.728c-.122.8-.11 2.422.025 3.3.204 1.327.562 2.498 1.08 3.536a11.8 11.8 0 0 0 2.295 3.187c2.015 2.007 4.58 3.207 7.502 3.51.516.053 1.876.018 2.479-.065 4.408-.602 8.04-3.365 9.696-7.376 1.065-2.578 1.12-5.86.14-8.506a15 15 0 0 0-1.058-2.156 12.04 12.04 0 0 0-4.65-4.299c-1.137-.59-2.306-.98-3.67-1.218A11.7 11.7 0 0 0 11.95.086m.05.207c6.465 0 11.705 5.24 11.705 11.707 0 6.466-5.24 11.706-11.705 11.706C5.534 23.706.293 18.466.293 12S5.533.293 12 .293m-.098.211c-.436 0-.86.018-1.162.053A12 12 0 0 0 2.594 5.24c-.779 1.04-1.52 2.592-1.86 3.9-.253.976-.316 1.513-.318 2.73-.003 1.18.028 1.516.232 2.523.68 3.336 2.987 6.31 6.096 7.856 1.43.71 2.564 1.036 4.334 1.244.41.048 2.023-.016 2.592-.103 3.306-.508 6.203-2.323 7.997-5.01.416-.622 1.028-1.803 1.268-2.45.215-.58.448-1.497.556-2.203.12-.774.12-2.62.004-3.372-.386-2.488-1.483-4.662-3.242-6.425-1.821-1.826-4.14-2.96-6.835-3.346a11 11 0 0 0-1.328-.08zm-.02.113c1.977-.005 3.637.39 5.407 1.287a11.25 11.25 0 0 1 4.638 4.34c1.073 1.834 1.55 3.598 1.553 5.74.002 1.91-.318 3.314-1.12 4.928-.956 1.925-2.185 3.34-3.901 4.491-2.154 1.446-5.024 2.185-7.494 1.93-2.242-.232-4.313-1.066-6.125-2.467-.533-.412-1.422-1.303-1.887-1.893-.68-.864-1.347-2.05-1.709-3.028-.856-2.316-.942-5.08-.226-7.263.166-.508.567-1.497.771-1.903C3.229 3.92 6.165 1.67 9.473.887 10.336.683 10.9.62 11.88.617m.074.211a10.5 10.5 0 0 0-1.518.106c-1.68.24-3.25.85-4.76 1.845-1.313.87-2.577 2.173-3.36 3.467-.498.827-1.036 2.129-1.284 3.11-.436 1.726-.404 3.704.088 5.568.776 2.94 2.922 5.576 5.692 6.99 1.437.733 2.666 1.076 4.496 1.255.35.034.967.027 1.49-.018a11.3 11.3 0 0 0 4.22-1.166 11.04 11.04 0 0 0 5.017-4.885c.848-1.622 1.212-3.13 1.215-5.047.004-1.895-.314-3.284-1.127-4.92-.934-1.882-2.11-3.227-3.811-4.364A11.66 11.66 0 0 0 11.955.83m.668.463q.116 0 .242.022c.37.06.467.15.496.46l.024.233h-.233c-.205 0-.233-.01-.246-.102-.012-.088-.048-.105-.234-.117-.17-.01-.224.002-.246.06-.038.1.035.143.32.18.469.063.627.21.627.594 0 .3-.078.468-.252.55-.18.087-.66.095-.894.015-.175-.06-.322-.285-.32-.49 0-.198.058-.245.265-.21.144.025.188.055.2.13.025.179.542.205.542.028 0-.11-.105-.16-.412-.195-.295-.033-.467-.143-.524-.34-.055-.192.007-.549.112-.654.108-.108.3-.166.533-.164m1.492.193c.038 0 .2.027.393.07.826.18.93.25.93.62 0 .305-.153.718-.3.814-.137.09-.293.09-.618.004l-.262-.068a2 2 0 0 0-.067.275c-.06.295-.075.304-.35.225-.081-.024-.148-.06-.148-.078 0-.02.094-.442.207-.938.114-.495.205-.91.205-.922zm-3.13.26.03.16c.036.19-.002.22-.312.264-.153.02-.22.053-.22.102 0 .056.04.064.218.04.12-.018.253-.043.297-.056.067-.02.08.006.08.16V2.6l-.268.052-.267.055.033.19c.04.216.006.257-.213.257l-.142.002-.1-.603c-.055-.332-.093-.61-.084-.62.01-.009.227-.056.482-.103zm3.56.367q-.055 0-.074.018a.4.4 0 0 0-.051.174c-.012.11.006.14.1.166.244.07.366.047.423-.078.047-.102.042-.128-.027-.178a.8.8 0 0 0-.371-.102m-5.11.033c.19 0 .23.017.33.15.243.33.286.75.094.927-.198.183-.6.29-.85.222-.105-.028-.312-.426-.345-.668a.57.57 0 0 1 .027-.306c.08-.147.485-.324.745-.324m6.803.075c.182-.008.608.135.785.27.215.162.273.342.207.636-.063.285-.407.896-.582 1.033-.153.12-.377.12-.691 0a1.15 1.15 0 0 1-.408-.28c-.16-.174-.168-.2-.14-.398.064-.474.527-1.205.796-1.257zm-9.113.258h.03c.154.004.28.088.398.254l.12.17-.194.12c-.192.12-.198.12-.272.034-.073-.085-.08-.086-.215-.006-.21.124-.286.224-.256.346.037.147.39.63.46.63.108 0 .443-.25.443-.332 0-.106-.072-.103-.233.012l-.13.094-.118-.174a1 1 0 0 1-.117-.205c0-.036.626-.45.68-.45.034 0 .282.36.37.536a.8.8 0 0 1 .052.285c0 .238-.173.44-.543.64-.283.15-.374.167-.545.1-.266-.108-.885-1.005-.885-1.283 0-.184.133-.36.414-.547.217-.145.393-.22.54-.224m2.276.09h-.01a1 1 0 0 0-.138.04c-.157.054-.174.11-.092.29.053.115.145.145.287.09.103-.04.08-.266-.04-.42Zm6.96.19a.22.22 0 0 0-.141.05c-.137.123-.342.626-.291.71.047.078.322.233.412.233.03 0 .126-.117.215-.26.224-.36.254-.51.115-.617a.5.5 0 0 0-.31-.117m1.695.398c.065 0 .87.65.92.742.038.07.036.143-.004.276-.065.215-.344.54-.465.54-.06 0-.088.033-.088.108 0 .06-.068.2-.152.31a3 3 0 0 0-.21.306c-.071.135-.108.13-.302-.04l-.162-.142.17-.23c.185-.252.178-.3-.051-.47l-.125-.093-.125.14a3 3 0 0 0-.2.247l-.075.107-.184-.146-.184-.145.602-.756c.33-.415.617-.754.635-.754m-12.567.32c.018 0 .315.322.66.715l.63.715-.198.203c-.11.112-.23.202-.265.202-.037 0-.286-.117-.553-.26-.522-.28-.523-.278-.065.242l.287.324-.15.145c-.082.08-.17.145-.193.144-.024 0-.327-.324-.674-.72l-.63-.72.14-.144c.28-.288.3-.29.84-.005.269.14.486.242.486.228s-.15-.2-.33-.416l-.328-.393.156-.13a.8.8 0 0 1 .187-.13m6.375.187c.67-.004 1.406.044 1.848.133 2.845.57 5.293 2.692 6.236 5.402.862 2.479.43 5.567-1.058 7.563-.353.472-1.135 1.292-1.57 1.646a8.4 8.4 0 0 1-3.641 1.704c-.447.09-.734.117-1.45.13-.493.01-1.052 0-1.24-.022-.64-.08-1.327-.23-1.797-.392-2.01-.7-3.853-2.35-4.81-4.308-.386-.79-.628-1.688-.733-2.723-.31-3.1 1.067-6.02 3.665-7.766 1.073-.72 2.087-1.1 3.49-1.302a8 8 0 0 1 1.06-.065m.162.14c-.645.003-1.346.05-1.744.13-1.626.328-3.092 1.156-4.302 2.43a7.6 7.6 0 0 0-1.37 1.95 7.8 7.8 0 0 0-.83 2.844c-.07.65-.024 1.777.096 2.383.48 2.416 2.187 4.635 4.426 5.75.718.358 1.74.66 2.668.787.45.062 1.982.025 2.424-.06 1.86-.35 3.39-1.16 4.623-2.456.642-.675.985-1.16 1.367-1.93.956-1.928 1.131-4.37.453-6.314-.211-.605-.69-1.542-1.041-2.035-.347-.487-1.103-1.292-1.565-1.668a7.97 7.97 0 0 0-4.183-1.773 9 9 0 0 0-1.024-.043m6.07.053c-.025.003-.05.03-.091.084-.084.11-.083.112.062.236q.257.22.35.043c.046-.086.009-.137-.242-.328q-.04-.032-.067-.035zm1.468.486.394.414c.216.228.437.47.49.535l.093.12-.176.18-.175.18-.165-.16c-.091-.088-.18-.16-.198-.16s-.267.215-.553.479l-.52.48-.15-.154c-.082-.085-.141-.176-.132-.2.009-.026.233-.25.498-.497.265-.248.487-.47.494-.498.007-.027-.05-.11-.125-.182-.076-.073-.137-.155-.135-.182s.084-.117.182-.2zm-8.737.2c.183.004.384.053.576.157.27.148.423.326.524.612.084.237.094.83.015.91-.08.08-.316.067-.453-.026a6 6 0 0 1-.32-.246 2 2 0 0 0-.41-.256c-.245-.107-.53-.406-.572-.6-.076-.344.238-.557.64-.55m2.432.098h.049a.65.65 0 0 1 .295.068c.306.168.346.57.088.898-.054.068-.296.224-.54.346-.243.123-.493.276-.554.342-.14.15-.168.15-.248-.006-.18-.352-.12-1.052.113-1.318.172-.196.508-.323.797-.33M9.34 4.84q.07 0 .15.004c.333.016.823.89.616 1.097-.073.073-.29.066-.518-.017a3.4 3.4 0 0 0-.604-.112c-.496-.05-.65-.11-.69-.267-.023-.097.01-.148.194-.317.31-.28.52-.38.852-.386Zm5.26.056c.16 0 .307.04.504.14.317.158.668.506.625.618-.041.107-.35.25-.698.323-.346.073-.43.076-.64.015-.203-.058-.33-.274-.33-.56 0-.192.02-.245.156-.38.135-.135.186-.155.383-.155M3.822 5.05h.022c.11.01.293.168.76.56.407.342.74.638.74.657s-.067.1-.15.18l-.147.144-.748-.62-.746-.618.09-.13c.072-.1.114-.167.18-.173m-.588.72c.014 0 .132.216.264.48l.24.483h.575c.315 0 .574.01.574.022s-.058.114-.127.228l-.125.21H3.67l.318.206c.175.114.326.215.336.225.022.022-.185.393-.218.39a23 23 0 0 1-.82-.48 38 38 0 0 1-.82-.498c-.03-.032.19-.395.24-.394.026 0 .158.072.296.16.138.087.27.16.29.16.023 0-.044-.16-.151-.354l-.196-.353.13-.244c.073-.133.145-.24.159-.24m13.02.047h.04l.147.008c.808.058.953.576.446 1.584q-.344.686-.56.356c-.111-.172-.05-.32.277-.66.33-.345.392-.45.392-.64q0-.325-.392-.36c-.347-.03-.6.118-.782.458-.176.332-.264.414-.513.485-.24.068-.283.156-.153.318.21.262.217.31.055.494-.11.125-.141.194-.117.266.017.053.042.173.054.266.03.22-.078.29-.578.379a3.5 3.5 0 0 0-.867.294c-.27.126-.53.236-.578.244-.17.03-.276.245-.27.555l.01.975.004.687-.138.125c-.162.147-.592.283-.797.252a1.5 1.5 0 0 1-.29-.082c-.12-.05-.158-.05-.218 0-.124.103-.09.32.072.455.373.315.453.412.453.545 0 .142.134.242.324.242.083 0 .088-.02.06-.226-.03-.226-.028-.227.202-.44.127-.116.245-.268.262-.336.05-.2.154-.277.537-.398.627-.198 1.162-.124 1.525.21.242.224.323.47.29.903-.023.339-.151.64-.344.82-.166.154-.196.137-.196-.1 0-.172-.017-.213-.103-.245-.181-.067-.714-.09-.79-.033-.038.028-.09.166-.116.304a1.4 1.4 0 0 1-.211.49c-.173.252-.46.505-.514.452-.017-.018-.03-.24-.03-.492 0-.425-.01-.465-.11-.545-.15-.122-.38-.154-.71-.1-.22.036-.317.032-.433-.016-.18-.073-.278-.045-.313.092-.022.09.072.749.147 1.026q.053.193-.237.015c-.077-.047-.28-.24-.45-.427l-.307-.344-.37-.053c-.667-.094-1.104-.41-1.41-1.02-.092-.183-.21-.36-.26-.392-.14-.09-.307.013-.38.236-.048.146-.108.21-.297.32-.13.076-.3.225-.375.33a1 1 0 0 1-.203.22q-.138.057-.295-.297c-.117-.264-.17-1.29-.076-1.514.037-.09.197-.243.443-.422.262-.19.416-.338.48-.46.05-.1.083-.19.073-.2s-.1.046-.2.125c-.098.08-.328.215-.51.303-.382.182-.504.177-.702-.036l-.125-.134-.05.125a2 2 0 0 0-.077.287c-.052.264-.144.395-.428.613a7 7 0 0 0-.637.6c-.2.215-.397.392-.435.392-.08 0-.108-.19-.155-1.035-.045-.81.067-1.314.38-1.705.23-.287.625-.455.939-.402.234.04.314.128.314.343 0 .437.094.419.324-.064.19-.398.268-.48.553-.572.18-.06.352-.215.297-.27-.02-.02-.18-.033-.36-.033-.294 0-.33-.01-.343-.092-.05-.323-.043-.32-.26-.097a.9.9 0 0 1-.4.26 3.1 3.1 0 0 0-.782.37.5.5 0 0 1-.2.086c-.132 0-.056-.33.134-.593a5 5 0 0 0 .322-.545c.272-.54.5-.743.832-.743.152 0 .173.017.24.184.04.1.1.184.13.184.12 0 .156-.164.11-.512-.112-.87-.021-1.33.296-1.48.285-.136.45-.086 1.03.312.35.24.394.258.646.258.147 0 .45-.045.673-.1.31-.076.554-.1 1.047-.103.612-.004.656.002.918.125.514.24.644.446.57.9-.025.156-.032.302-.017.326.08.127-.054.36-.422.737q-.385.395-.36.464c.022.057.14.073.587.09.6.023.723-.003.816-.178.052-.097.047-.137-.04-.304-.12-.234-.18-1.068-.101-1.363.1-.367.485-.647 1.11-.807a1.6 1.6 0 0 1 .633-.04c.817.083.885.072 1.504-.224.413-.198.529-.25.689-.256m4.401.135c.3 0 .648.46.65.856.002.16-.02.213-.16.336-.092.08-.19.136-.22.127s-.094-.094-.145-.188c-.077-.143-.08-.175-.027-.21.054-.032.055-.064.008-.18-.078-.186-.196-.287-.278-.237-.053.033-.038.096.082.358.237.513.186.683-.277.93-.276.147-.39.12-.651-.15-.226-.235-.346-.485-.346-.724 0-.113.34-.474.422-.447.026.01.09.09.144.182.09.156.092.172.02.252s-.07.096.025.267c.057.1.137.19.18.197.144.028.144-.133-.005-.435-.08-.162-.145-.328-.145-.37 0-.248.405-.564.723-.564M7.142 6.32c-.112-.003-.205.028-.256.102-.105.15-.095.618.02.928.082.216.265.44.36.44.016 0 .158-.116.315-.257.413-.368.458-.625.164-.92-.182-.182-.417-.287-.603-.293m10.422.567c.063.004.142.075.263.213.288.326.276.348-.222.435a.35.35 0 0 1-.205-.025c-.101-.06-.103-.234-.004-.442.059-.124.105-.186.168-.18m.355 1h.014a.7.7 0 0 1 .18.055c.266.102.648.442.777.69.105.203.139.63.056.713-.107.108-.32.096-.605-.033-.497-.226-.61-.398-.61-.922 0-.242.022-.342.087-.422.042-.053.064-.08.1-.082m-.95.037q.11.003.25.133c.142.132.289.526.3.806.007.15-.078.19-.27.125a3 3 0 0 1-.282-.133c-.215-.114-.276-.275-.23-.613.028-.213.114-.322.234-.318m-14.482.703a.74.74 0 0 1 .504.186c.292.255.362.586.197.923-.17.35-.62.52-.964.368-.523-.235-.66-.808-.29-1.217a.76.76 0 0 1 .553-.26m18.947.002c.212.003.427.09.582.27a.9.9 0 0 1 .185.359.784.784 0 0 1-.99.873.776.776 0 0 1-.457-1.1.74.74 0 0 1 .68-.402m-12.79.17c-.15 0-.272.009-.272.02 0 .01.043.265.094.568.19 1.128.38 1.367 1.27 1.586.773.19.864.262.827.666-.017.195-.007.298.04.367.058.082.156.132.156.08a2 2 0 0 0-.05-.162c-.04-.11-.038-.162.005-.213.04-.048.046-.167.023-.41-.028-.307-.02-.353.07-.475.09-.125.094-.153.044-.398a2.3 2.3 0 0 1-.024-.623c.03-.345.028-.365-.084-.477-.097-.097-.16-.117-.373-.117-.193 0-.322-.034-.53-.14A2.95 2.95 0 0 0 8.646 8.8m-6.197.062c-.346.027-.59.45-.437.758.158.333.68.41.906.11.19-.233.138-.634-.14-.778a.54.54 0 0 0-.286-.09Zm18.937.002c-.374.013-.623.5-.41.809.168.265.58.348.81.125.232-.196.254-.596.012-.79a.6.6 0 0 0-.412-.144m-6.011.188q.009 0 .012.002c.044.042-.293 1.034-.418 1.23q-.363.57-1.227.389a1.5 1.5 0 0 0-.4-.02l-.194.026.028-.31c.028-.318.095-.502.219-.604.063-.053.072-.037.072.127 0 .273.064.404.27.54.31.206.697.12.947-.208.116-.154.122-.56.01-.78-.045-.086-.066-.173-.046-.193.04-.04.632-.2.727-.2m-6.605.023c.016 0 .108.023.203.05l.172.054-.094.156c-.075.126-.087.204-.065.395.065.547.56.819 1.07.588.18-.083.43-.346.43-.456 0-.03.018-.052.04-.052.094 0 .178.142.208.35.018.122.043.265.055.318.02.09-.002.099-.36.127l-.61.05a1.4 1.4 0 0 1-.383-.017c-.323-.082-.52-.307-.625-.713-.07-.27-.098-.85-.04-.85m8.174.05c.122-.002.278.099.407.284.126.183.129.19.129.918 0 .503-.018.74-.053.752-.03.01-.164-.086-.303-.213-.368-.336-.468-.595-.432-1.111.016-.22.053-.45.082-.516a.18.18 0 0 1 .17-.115m-7.414.183q.046 0 .114.008c.513.057.74.533.365.765-.228.14-.413.123-.602-.055a.6.6 0 0 1-.187-.318c-.025-.144-.013-.188.09-.293.08-.08.127-.107.22-.107m4.72.095h.02c.05.002.089.025.15.07.092.07.128.14.139.274.025.342-.13.543-.457.596-.125.02-.175.002-.262-.092a.6.6 0 0 1-.133-.322c-.02-.176-.006-.223.092-.32a.86.86 0 0 1 .45-.206m-4.571.137c-.122.005-.203.08-.203.197 0 .23.328.302.423.092.07-.152.004-.267-.166-.287zm8.35.004q.078 0 .222.053c.45.16.93.587 1.125 1.004.245.52.246 1.447.004 1.69-.15.15-.277.104-.691-.247a21 21 0 0 0-.565-.463c-.192-.147-.342-.437-.344-.658 0-.08.03-.284.07-.453a2.6 2.6 0 0 0 .06-.574c-.013-.251.006-.35.12-.352m-3.922.127q-.23-.002-.228.24c0 .092.03.14.103.17.116.046.27.018.32-.06.052-.08.042-.234-.02-.295-.03-.03-.11-.055-.175-.055m2.659 1.285c.125 0 .406.335.447.535.053.26.038.738-.03 1.024-.07.3-.227.687-.28.687-.02 0-.117-.094-.217-.21-.277-.324-.316-.494-.198-.837.053-.153.107-.4.12-.545.06-.614.07-.654.158-.654M1.08 11.04l.287.025c.353.03 1.66.116 1.783.116.082 0 .09.027.08.283l-.015.283-.572.225a9 9 0 0 0-.596.246c-.013.012.253.008.588-.01l.607-.031-.013.199-.014.2-.873.079c-.48.043-.96.089-1.067.1l-.195.02.002-.35v-.35l.693-.228c.8-.265.793-.288-.109-.295l-.586-.004v-.254Zm21.001.307.076.002c.202.004.39.028.47.072.222.12.264.235.265.723 0 .537-.085.724-.37.81-.234.07-.648.068-1.052-.006-.522-.095-.65-.168-.713-.4-.06-.217-.033-.713.047-.861.06-.115.28-.231.435-.231.108 0 .117.016.117.2 0 .163-.018.207-.09.226-.135.035-.2.24-.138.428.04.124.08.158.22.187.243.052.733.032.811-.033.09-.076.093-.52.002-.594-.13-.108-.23-.037-.246.174l-.016.197-.214-.015-.215-.014v-.772l.138-.04a2 2 0 0 1 .473-.051zm-15.895.43c.036 0 .09.057.117.126.1.253.237.915.265 1.297.034.46 0 .552-.357.946-.127.14-.292.393-.367.56-.206.458-.317.55-.463.385-.19-.214-.492-1.225-.492-1.64 0-.242.18-.704.36-.923.16-.196.853-.752.937-.752m11.68.095q.053 0 .126.043c.177.1.735.852.85 1.147.143.367.142.903-.004 1.228-.108.242-.281.422-.402.422-.036 0-.261-.19-.502-.424-.605-.585-.7-.786-.54-1.164a6 6 0 0 0 .2-.68c.103-.42.163-.57.27-.572m-14.67.883q.025 0 .028.002c.026.026.248 1.097.23 1.11a3 3 0 0 1-.205.054c-.22.054-.185.103-.3-.42-.062-.28-.102-.33-.21-.262-.05.033-.05.099.012.395.04.195.074.362.074.369 0 .025-.464.124-.484.103a3 3 0 0 1-.1-.394c-.075-.36-.083-.375-.203-.375-.069 0-.137.019-.15.04-.014.023.015.223.064.446.05.224.075.42.057.436-.044.039-.47.18-.545.18-.033 0-.06-.013-.06-.028s-.076-.348-.165-.74a9 9 0 0 1-.148-.725c.032-.026 1.86-.19 2.105-.191m4.896.168c.096 0 .102.01.265.482.08.226.17.382.31.528.247.258.35.41.35.52 0 .116-.59.993-.67.993-.034 0-.13-.091-.212-.205a11 11 0 0 1-.38-.584c-.217-.358-.23-.392-.23-.7 0-.52.28-1.034.567-1.034m12.653.185c.414.006 2.005.093 2.03.118.018.018-.078.712-.102.734a18 18 0 0 1-.76.094c-.412.046-.723.09-.69.103.035.012.352.086.706.164.62.138.64.147.63.256-.03.31-.064.41-.14.406-.043-.002-.51-.143-1.037-.31-.528-.168-.96-.314-.96-.326l.032-.26.03-.236.56-.104c.31-.057.54-.112.514-.121a8 8 0 0 0-.504-.074l-.455-.057.015-.182a.7.7 0 0 1 .033-.2.5.5 0 0 1 .098-.005m-4.49.047c.083-.006.192.057.272.176.088.13.104.216.104.533 0 .454-.058.633-.397 1.227-.198.348-.276.447-.353.447-.054 0-.12-.027-.145-.06a22 22 0 0 1-.29-.424c-.214-.32-.24-.38-.214-.522.048-.253.145-.402.528-.808.197-.21.373-.425.39-.48s.057-.086.106-.09m-12.81.779c.04 0 .115.335.08.367a3 3 0 0 1-.405.2c-.202.09-.353.165-.336.165s.204-.04.414-.09.396-.092.414-.092c.037 0 .145.198.192.35.026.084-.025.124-.405.32-.238.124-.427.23-.42.237s.216-.05.46-.13c.247-.078.455-.134.464-.124s.05.093.088.185l.07.166-.746.235c-.41.129-.867.275-1.017.324a3 3 0 0 1-.305.09c-.017 0-.075-.107-.129-.237a1.5 1.5 0 0 1-.097-.29c0-.031.228-.164.505-.296.278-.131.504-.245.504-.253s-.22.044-.492.117a6 6 0 0 1-.568.133c-.048 0-.108-.094-.172-.26-.055-.143-.092-.265-.084-.274a90 90 0 0 1 1.984-.843m3.42.23c.176 0 .35.188.53.576.086.19.26.502.385.694.144.22.227.398.227.484 0 .075-.102.459-.227.854-.124.394-.24.796-.256.89-.015.099-.053.172-.088.172-.033 0-.214-.182-.402-.402-.434-.51-.748-.934-.902-1.227-.106-.2-.12-.284-.12-.643 0-.35.02-.451.126-.68.204-.44.484-.717.726-.718m10.427.086h.002c.098.005.208.082.35.229.428.445.647 1.477.337 1.595-.117.045-.285-.06-.41-.258-.083-.131-.147-.185-.224-.185-.163 0-.176.107-.053.434.174.462.19.672.072.916-.12.248-.377.486-.527.486-.095 0-.123-.044-.211-.31a5 5 0 0 0-.28-.635c-.248-.457-.24-.53.14-1.14a14 14 0 0 0 .456-.788c.12-.238.222-.35.348-.344m3.093.28c.043.002 2.034.59 2.047.607.02.024-.218.632-.246.63-.016 0-.463-.178-.993-.396s-.968-.4-.974-.404c-.023-.016.137-.436.166-.436m-11.095.229c.043 0 .138.088.213.195.295.422.43.892.43 1.514 0 .432-.003.447-.102.447-.067 0-.21-.111-.408-.318-.393-.41-.566-.758-.53-1.07.033-.273.288-.77.397-.77m1.873.048c.037 0 .375.688.375.763s-.222.244-.32.244a.2.2 0 0 1-.14-.07c-.098-.12-.11-.504-.022-.732.043-.113.09-.205.107-.205m2.023.023.065.16c.102.25.13.557.064.688-.07.137-.196.16-.367.066s-.158-.207.06-.594zm1.784.21q.1 0 .164.099c.089.143.18.785.146 1.017-.04.259-.23.477-.617.707-.36.214-.328.203-.414.149-.05-.032-.056-.105-.03-.332.02-.16.04-.426.048-.59.016-.368.15-.671.396-.893q.178-.16.307-.158zm-2.922.638c.072 0 .31.073.53.164.408.169.562.182 1.015.086.323-.07.338.209.027.482-.2.176-.323.177-.828.002-.553-.192-.79-.185-1.477.045-.3.1-.562.184-.58.184s-.1-.07-.185-.155c-.242-.242-.273-.535-.057-.533.058 0 .195.042.305.092.32.145.456.12.81-.14.2-.148.355-.227.44-.227m9.54.01.291.115.29.115-.276.59c-.153.325-.29.59-.305.59a24 24 0 0 1-.9-.48 44 44 0 0 0-.91-.495c-.044-.016.11-.353.163-.353.02 0 .325.143.674.318l.635.318.17-.36zm-1.94.542c.056 0 .377.14.377.17a1.5 1.5 0 0 1-.1.2c-.056.097-.092.186-.08.195.01.009.33.198.708.422l.7.414c.02.012-.238.43-.265.428a18 18 0 0 1-.71-.457l-.69-.455-.13.162-.13.16-.17-.123-.18-.133c-.01-.008.604-.92.66-.98q.004-.004.009-.003m-16.417.135.118.172a.8.8 0 0 1 .115.217c0 .026-.072.096-.16.156s-.16.135-.16.168c0 .075.222.342.285.342.04 0 .67-.42 1.058-.705l.127-.094.112.135a.7.7 0 0 1 .113.172c.004.089-.96.868-1.254 1.01-.262.13-.357.144-.512.08-.145-.057-.352-.294-.498-.563-.107-.198-.126-.277-.1-.41.036-.2.242-.416.542-.568zm12.547.047c.112 0 .292.263.344.504a1.65 1.65 0 0 1-.021.865c-.113.38-.3.544-1.1.963-.393.206-.72.373-.73.373-.007 0-.025-.19-.042-.424a3 3 0 0 0-.107-.638c-.11-.31-.04-.446.322-.637.342-.18.55-.338.96-.72.17-.158.34-.286.374-.286m-7.302.018q.035 0 .086.01c.24.047.385.135.718.445.17.158.395.354.5.435.31.24.343.456.2 1.338-.074.47-.107.572-.186.586-.037.007-.273-.104-.525-.246-.698-.393-.947-.573-1.1-.791-.124-.177-.142-.241-.156-.594-.022-.525.05-.837.244-1.04.1-.106.144-.143.22-.143m-3.208.986.152.148c.084.082.154.167.154.188s-.12.22-.267.44c-.416.62-.843 1.3-.827 1.316.01.008.325-.282.703-.645.38-.362.7-.661.713-.662.052-.004.558.45.666.598.2.27.137.473-.263.85-.136.13-.293.25-.348.269-.13.042-.368-.075-.562-.275-.085-.088-.177-.158-.204-.16-.026 0-.15.115-.28.257l-.231.26-.328-.38-.328-.376.136-.197a1 1 0 0 0 .133-.236c0-.021-.07-.118-.154-.217l-.155-.18-.222.098-.223.097-.172-.193a1.3 1.3 0 0 1-.172-.22c0-.016.468-.196 1.04-.403zm13.699.004c.112 0 .258.068.38.176.078.067.076.077-.04.199-.093.097-.152.12-.235.1-.082-.021-.144.005-.244.1-.15.145-.17.227-.062.269.04.015.08.027.088.027s.113-.082.236-.184c.288-.238.479-.292.7-.2.447.186.73.527.672.816-.036.18-.24.453-.47.627-.19.144-.424.174-.592.076a3 3 0 0 1-.273-.205l-.18-.15.17-.17.219.207.168-.186c.196-.218.208-.306.053-.377-.104-.047-.135-.032-.34.16-.334.312-.542.337-.828.096-.175-.147-.278-.337-.278-.512 0-.256.434-.7.686-.7m-8.297.469a.25.25 0 0 1 .13.033c.212.114.968 1.278.968 1.492 0 .162-.455.218-.79.098-.434-.155-.584-.396-.585-.936-.002-.424.105-.677.277-.687m-5.72.09c-.027.004-.12.038-.225.083-.214.092-.217.096-.137.184.08.09.083.09.23-.08a1 1 0 0 0 .14-.186zm8.519.13q.02 0 .039.002c.166.012.254.172.252.473-.005.5-.267.846-.73.967-.344.09-.38.088-.575-.01-.11-.055-.165-.116-.174-.195-.024-.21.466-.843.848-1.096q.2-.133.34-.14m4.562.158c.04.002.093.046.176.142l.152.178-.28.223c-.374.298-.362.279-.263.369.084.076.1.07.387-.174l.299-.254.164.203.166.2-.3.238c-.163.13-.298.263-.298.294 0 .032.036.092.08.13.075.068.108.053.42-.198.186-.15.353-.271.373-.271.042 0 .415.41.41.453-.002.024-.712.606-1.03.842l-.11.082-.201-.29c-.63-.89-.996-1.43-.996-1.46 0-.026.498-.453.816-.7a.05.05 0 0 1 .035-.01zm-12.176.529c-.02 0-.09.058-.16.13l-.127.132.196.164.197.162.127-.09c.07-.05.13-.12.13-.152 0-.063-.298-.346-.363-.346m1.23.394c.09-.005.415.18.415.244 0 .018-.12.453-.27.97-.15.514-.267.942-.26.95.007.006.216-.337.462-.766.594-1.036.505-.945.796-.823.232.096.242.106.22.241-.04.223-.09.99-.065.99.012 0 .11-.212.22-.47.108-.26.203-.476.208-.483a.7.7 0 0 1 .2.062c.145.058.185.095.163.15-.017.042-.185.5-.375 1.016-.19.518-.36.953-.375.97-.016.015-.163-.032-.326-.106a6 6 0 0 1-.303-.143c-.004-.005.037-.33.094-.72a10 10 0 0 0 .09-.73c-.008-.008-.153.262-.32.6-.17.336-.313.62-.32.628-.017.016-.78-.385-.878-.46-.04-.033-.033-.104.03-.29l.085-.248-.224-.145-.225-.145-.192.164c-.208.18-.227.177-.49-.048l-.15-.13.857-.617c.472-.341.885-.637.918-.657l.016-.002zm9.802.018c.226 0 .568.38.568.628q0 .15.066.15c.082 0 .287.205.553.55l.207.27-.226.137-.225.14-.232-.319c-.128-.175-.262-.32-.297-.32a.9.9 0 0 0-.252.107l-.186.107.203.358c.113.196.194.375.18.398-.026.042-.36.225-.41.225-.015 0-.234-.43-.486-.952l-.457-.95.103-.076c.184-.14.8-.453.89-.453m-.014.508a.4.4 0 0 0-.19.064c-.253.137-.253.14-.167.271a.4.4 0 0 0 .097.12c.01 0 .1-.053.2-.116.189-.12.204-.144.156-.27q-.027-.07-.096-.07m-1.03.005.342 1.024.342 1.024-.252.095a2 2 0 0 1-.304.098c-.03 0-.168-.227-.305-.504s-.252-.498-.26-.49c-.007.007.059.245.147.53.087.287.16.534.16.55 0 .027-.497.234-.563.234-.017 0-.061-.057-.097-.127-.1-.192-.856-1.8-.856-1.82 0-.023.276-.117.342-.117.029 0 .145.185.256.412.11.226.206.405.213.398a3 3 0 0 0-.1-.422 5 5 0 0 1-.113-.457c0-.043.452-.231.478-.2.007.01.11.2.23.42.12.223.226.397.235.388.01-.01-.053-.214-.138-.453l-.157-.435.2-.074zm-8.95.118c-.028 0-.094.05-.213.15-.107.092-.108.097-.024.16.124.094.163.068.227-.15.03-.106.04-.158.01-.16m2.802.475c.123-.005.908.187 1 .247a.37.37 0 0 1 .137.188c.052.207-.01.736-.105.898-.124.212-.27.252-.64.178-.35-.07-.36-.063-.407.27-.066.457-.046.438-.38.357-.19-.046-.197-.052-.167-.19.04-.187.53-1.925.547-1.945q.003-.002.015-.004m3.487.226c.207 0 .263.02.373.13.17.17.32.66.353 1.157.032.47-.04.674-.277.787-.216.103-.617.137-.805.07a.6.6 0 0 1-.24-.173c-.122-.165-.222-.69-.223-1.178 0-.385.01-.433.117-.56.136-.162.354-.233.702-.233m-1.674.045c.515 0 .574.01.652.096.124.136.153.683.045.847-.073.112-.074.125 0 .207.045.05.087.18.096.305.008.12.02.33.03.463l.019.242-.235-.014-.234-.013-.033-.344a3 3 0 0 0-.057-.402c-.013-.036-.11-.057-.252-.057h-.23v.826h-.252c-.21 0-.253-.013-.252-.08 0-.044.03-.504.068-1.02.037-.519.068-.968.068-.999 0-.043.145-.057.567-.057m-1.526.264q-.02 0-.025.006a1 1 0 0 0-.05.197l-.03.168.2.045.232.05c.018.001.054-.037.08-.085a.5.5 0 0 0 .047-.2c0-.097-.03-.118-.23-.158a1.4 1.4 0 0 0-.185-.023zm3.125.148a.54.54 0 0 0-.263.065c-.08.06-.083.093-.037.51.062.576.142.655.505.503l.164-.068-.025-.336a2 2 0 0 0-.096-.504c-.064-.153-.087-.17-.248-.17m-1.595.047c-.152 0-.16.005-.16.184 0 .178.007.183.16.183a.8.8 0 0 0 .228-.03c.042-.015.072-.08.072-.154 0-.142-.065-.183-.3-.183m2.888.057h.008c.026.028.157.37.147.38a3 3 0 0 1-.278.08l-.263.07-.026-.122-.04-.2c-.013-.062.038-.097.216-.15a2 2 0 0 1 .236-.058"
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
export class SvgNewjapanprowrestlingIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}