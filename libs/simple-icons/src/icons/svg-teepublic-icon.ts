import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-teepublic-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TeePublic</title>
      <path
        d="M6.998.488s-.57.33-.68.982c-.097.584.138 1.114.19 1.22-.408.255-.797.539-1.165.849.506-.577.561-1.384.038-2.147 0 0-.516.41-.53 1.07-.013.6.306 1.096.365 1.183-.338.294-.657.613-.956.95.356-.63.27-1.396-.335-2.043 0 0-.448.483-.363 1.138.074.568.433.999.527 1.103-.222.263-.432.537-.628.823-.1.148-.196.298-.289.45.39-.726.232-1.569-.53-2.179 0 0-.375.543-.196 1.179.175.62.68 1.016.705 1.035-.277.456-.517.93-.718 1.42.226-.78-.098-1.562-.955-2.006 0 0-.26.605.04 1.194.28.551.821.84.89.874-.18.445-.329.902-.444 1.368.063-.763-.372-1.445-1.247-1.747 0 0-.17.636.21 1.175.346.487.894.696.997.732-.097.418-.167.843-.211 1.273-.11-.69-.63-1.226-1.476-1.382 0 0-.073.655.385 1.131.382.396.9.534 1.062.569a10.67 10.67 0 0 0-.01 1.342C1.48 11.351.881 10.872 0 10.839c0 0 .022.659.544 1.064.45.349 1.004.402 1.149.41.039.466.11.928.21 1.382-.308-.657-.984-1.032-1.864-.911 0 0 .135.645.72.953.503.265 1.059.223 1.203.205.111.448.251.887.42 1.316-.396-.623-1.128-.905-1.992-.655 0 0 .227.618.85.838.549.195 1.105.062 1.228.028.17.403.366.796.585 1.176-.487-.514-1.23-.66-2.019-.296 0 0 .318.578.966.703.554.106 1.067-.091 1.205-.151a10.27 10.27 0 0 0 .895 1.231c-.566-.568-1.4-.667-2.201-.145 0 0 .397.526 1.057.556.635.029 1.163-.318 1.202-.344.358.417.748.802 1.165 1.155-.675-.49-1.54-.44-2.245.249 0 0 .493.438 1.146.337.643-.098 1.1-.56 1.114-.574.388.327.8.625 1.231.892-.724-.35-1.545-.164-2.127.598 0 0 .551.362 1.183.169.592-.181.97-.665 1.015-.724.38.23.776.437 1.183.617-.705-.135-1.4.187-1.824.958 0 0 .599.276 1.195-.009.51-.245.806-.712.88-.84.436.179.885.329 1.344.447-.751-.069-1.43.349-1.75 1.205 0 0 .633.186 1.18-.182.494-.332.718-.872.757-.977l.153.035.081.018c.704.155 1.325.32 1.864.497-.82.315-1.6.74-1.958 1.293a.097.097 0 0 0 .081.15.098.098 0 0 0 .081-.045c.31-.478 1.012-.912 2.093-1.296 1.082.384 1.783.818 2.093 1.296.019.028.05.044.082.044a.097.097 0 0 0 .081-.15c-.359-.552-1.138-.977-1.958-1.292a19.34 19.34 0 0 1 1.863-.497l.082-.018c.05-.01.101-.023.152-.035.04.105.263.645.757.977.548.368 1.18.182 1.18.182-.32-.856-.998-1.274-1.75-1.205a10.27 10.27 0 0 0 1.345-.448c.074.129.369.596.88.841.595.285 1.195.01 1.195.01-.424-.772-1.12-1.094-1.825-.959.407-.18.802-.386 1.183-.617.046.06.424.543 1.015.724.632.193 1.183-.17 1.183-.17-.582-.761-1.402-.946-2.127-.598.431-.266.843-.564 1.232-.891.013.014.47.476 1.113.574.653.1 1.146-.337 1.146-.337-.704-.688-1.57-.739-2.245-.25.417-.352.807-.737 1.166-1.154.04.028.568.373 1.202.344.66-.03 1.057-.556 1.057-.556-.802-.521-1.635-.423-2.2.144l.13-.156c.277-.342.532-.702.763-1.074.139.06.651.257 1.205.15.649-.124.966-.702.966-.702-.79-.363-1.53-.218-2.019.295.22-.38.415-.772.585-1.175.123.034.68.167 1.229-.028.622-.22.85-.838.85-.838-.865-.25-1.596.032-1.993.655.168-.429.309-.868.42-1.316.144.018.7.06 1.203-.205.585-.308.72-.953.72-.953-.88-.121-1.556.254-1.864.912.1-.455.171-.916.21-1.383.146-.008.7-.062 1.15-.41.522-.405.543-1.064.543-1.064-.88.033-1.479.511-1.674 1.203a10.609 10.609 0 0 0-.01-1.34c.162-.036.68-.173 1.062-.569.458-.476.385-1.131.385-1.131-.846.156-1.364.693-1.476 1.381-.044-.43-.114-.854-.21-1.272.103-.036.65-.245.996-.732.38-.539.21-1.175.21-1.175-.875.302-1.31.984-1.246 1.748a10.218 10.218 0 0 0-.443-1.37c.067-.034.608-.322.89-.873.3-.589.038-1.194.038-1.194-.857.444-1.18 1.227-.954 2.006a10.36 10.36 0 0 0-.719-1.42c.025-.02.53-.415.706-1.035.178-.636-.196-1.179-.196-1.179-.763.61-.922 1.453-.532 2.178-.092-.151-.187-.301-.288-.449a10.29 10.29 0 0 0-.628-.823c.094-.104.454-.535.527-1.103.086-.655-.363-1.138-.363-1.138-.604.647-.69 1.413-.334 2.043-.3-.338-.619-.656-.957-.95.06-.087.378-.584.365-1.183-.013-.66-.53-1.07-.53-1.07-.523.763-.467 1.57.038 2.147-.368-.31-.756-.594-1.164-.85.05-.105.287-.635.19-1.219-.11-.651-.68-.982-.68-.982-.403.822-.239 1.605.33 2.103a10.37 10.37 0 0 0-1.2-.619c-.504-.813-1.318-1.082-2.1-.795 0 0 .317.603.93.892.413.193.823.127 1.049.062.401.173.787.368 1.156.585-.57-.164-1.168.043-1.588.639 0 0 .475.288 1 .104.435-.15.721-.493.808-.609.377.236.736.493 1.075.772-.54-.246-1.163-.128-1.667.401 0 0 .43.354.976.249.45-.087.782-.383.886-.485.358.31.692.644 1.001.998-.507-.376-1.175-.374-1.78.097 0 0 .371.413.927.39.482-.018.87-.287.965-.358.28.332.537.681.77 1.046-.443-.378-1.065-.44-1.691-.085 0 0 .307.463.86.522.444.046.84-.13.979-.202.227.376.43.766.607 1.17-.363-.441-.952-.615-1.624-.392 0 0 .21.513.742.68.427.132.85.036 1-.007.163.404.3.82.41 1.245-.29-.512-.858-.783-1.572-.657 0 0 .135.539.637.78.412.197.854.158.999.137.108.469.183.949.224 1.437-.172-.626-.718-1.039-1.5-1.02 0 0 .052.553.512.866.412.28.9.287 1 .286a10.758 10.758 0 0 1 .004 1.392c-.101-.615-.574-1.077-1.327-1.168 0 0-.028.554.382.931.35.32.805.406.93.424-.04.472-.112.934-.216 1.389-.004-.613-.39-1.138-1.105-1.355 0 0-.123.542.215.983.287.374.716.537.84.579-.107.427-.242.845-.402 1.251.06-.587-.248-1.138-.906-1.448 0 0-.2.518.071 1.004.221.397.602.619.735.687-.178.418-.382.823-.612 1.212.167-.583-.051-1.192-.668-1.605 0 0-.276.482-.08 1.003.163.434.517.713.63.794-.218.352-.458.69-.716 1.012.188-.525.043-1.11-.472-1.576 0 0-.343.437-.225.981.092.42.363.73.484.852-.27.314-.56.613-.866.893.263-.473.226-1.057-.177-1.6 0 0-.422.362-.412.918.007.43.214.788.308.93-.318.27-.653.522-1.003.753.36-.434.423-1.037.092-1.654 0 0-.47.297-.54.85-.057.436.106.83.175.977-.395.242-.809.458-1.239.644.505-.365.706-.995.45-1.71 0 0-.508.223-.66.758-.132.46-.002.909.038 1.026a9.93 9.93 0 0 1-1.256.423c.513-.3.776-.88.632-1.596 0 0-.536.148-.764.655-.188.416-.137.856-.114 1.002l-.15.035-.08.018c-.427.093-1.27.279-2.12.577a18.04 18.04 0 0 0-2.12-.577l-.08-.018-.15-.035c.024-.146.074-.586-.113-1.002-.228-.507-.764-.655-.764-.655-.144.717.119 1.296.632 1.596a9.966 9.966 0 0 1-1.256-.423c.039-.118.17-.566.038-1.026-.152-.535-.66-.758-.66-.758-.257.715-.055 1.345.45 1.71a9.992 9.992 0 0 1-1.24-.644c.07-.146.232-.54.176-.978-.07-.552-.54-.849-.54-.849-.332.617-.269 1.22.092 1.654-.35-.23-.685-.482-1.004-.753.094-.142.301-.5.308-.93.01-.556-.412-.918-.412-.918-.403.543-.44 1.127-.177 1.6-.306-.28-.595-.579-.865-.893.12-.122.392-.433.484-.852.118-.544-.225-.98-.225-.98-.515.465-.66 1.05-.473 1.575a10.23 10.23 0 0 1-.716-1.012c.114-.08.468-.36.63-.794.196-.52-.08-1.003-.08-1.003-.617.413-.834 1.022-.667 1.605-.23-.389-.435-.794-.612-1.212.133-.068.513-.29.734-.687.272-.486.071-1.004.071-1.004-.658.31-.965.861-.905 1.448-.16-.406-.296-.824-.403-1.251.125-.042.554-.205.84-.579.34-.441.216-.983.216-.983-.716.217-1.101.742-1.106 1.354a10.103 10.103 0 0 1-.217-1.388c.127-.018.582-.104.932-.424.41-.377.382-.931.382-.931-.753.091-1.226.553-1.328 1.167a9.665 9.665 0 0 1 .005-1.391c.1.002.588-.005.999-.286.46-.313.512-.866.512-.866-.781-.019-1.327.393-1.5 1.019.042-.488.116-.967.225-1.436.145.021.587.06 1-.137.5-.241.635-.78.635-.78-.713-.126-1.281.146-1.571.657.11-.426.247-.841.41-1.245.15.043.573.14 1 .006.53-.166.742-.68.742-.68-.673-.222-1.261-.048-1.624.393.176-.404.38-.795.607-1.17.139.072.534.248.978.202.553-.059.86-.522.86-.522-.625-.355-1.247-.293-1.691.085.234-.364.49-.714.77-1.046.096.071.483.34.965.359.556.022.927-.391.927-.391-.604-.47-1.272-.473-1.78-.097a10 10 0 0 1 1.002-.998c.103.102.436.398.886.485.546.105.975-.249.975-.249-.503-.529-1.127-.647-1.667-.4.34-.28.699-.537 1.076-.773.086.116.373.459.807.61.526.183 1-.105 1-.105-.42-.596-1.018-.803-1.588-.639.37-.217.756-.412 1.157-.585.226.065.636.13 1.048-.062.614-.289.932-.892.932-.892-.784-.287-1.597-.018-2.102.795a10.37 10.37 0 0 0-1.2.62c.57-.499.734-1.282.331-2.104zm3.935 5.19c-.045-.005-.225.052-.412.088-.187.036-.696.062-.874.102-.178.04-.607.188-.727.21-.121.023-.496.245-.79.335-.295.089-.67.308-.95.392-.282.085-.697.246-.88.304-.183.058-.504.214-.518.245-.013.032.184.545.318.834.134.29.347.763.4.91.055.148.113.282.162.295.049.013.45.098.562.116.111.018.473.023.593.014.12-.01.38 0 .487.053 0 0 .035.527.035.571 0 .045-.009.848-.026.946-.018.099-.08.946-.117 1.34-.035.392-.089 1.49-.089 1.632 0 .143-.053 1.214-.053 1.41v.955c0 .17.044.572.062.607.018.036 2.178.188 2.802.26.625.07 1.419.142 2.08.124.66-.018 1.66-.107 2.133-.107.473 0 .803 0 .839-.036.035-.035-.036-.874-.036-1.151 0-.276-.036-1.58-.036-1.91 0-.33-.027-1.196-.027-1.321s-.035-1.526-.062-1.999c-.027-.473-.098-1.285-.08-1.339.017-.053.268-.107.365-.09.099.019.572.09.679.09.107 0 .41.027.473-.017.062-.045.607-1.071.67-1.214.062-.143.303-.714.303-.759 0-.044-.813-.401-1.045-.526-.231-.125-.87-.442-1.088-.513-.219-.072-.505-.143-.643-.21s-.607-.192-.861-.25c-.254-.058-.608-.194-.738-.207-.129-.014-.343-.045-.38-.05-.035-.004-.173-.116-.209-.093-.035.022-.392.354-.642.408-.25.054-.86.075-1.164-.041-.303-.116-.472-.404-.516-.408z"
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
export class SvgTeepublicIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
