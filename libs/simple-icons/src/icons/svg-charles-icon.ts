import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-charles-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Charles</title>
      <path
        d="M10.494.713c-.103.011-.385.049-.623.076-.24.028-.705.11-1.04.175l-.61.122-.883-.132C5.706.713 3.694.74 2.252 1.02c-1.464.278-2.45.802-2.218 1.173.033.055.358.34.72.634 1.536 1.24 2.296 2.18 2.734 3.398.228.633.31 1.114.304 1.885-.005.901-.114 1.376-.732 3.24-.27.813-.564 1.802-.65 2.194-.142.65-.158.804-.158 1.749 0 1.022.043 1.431.24 2.245a6.588 6.588 0 0 0 1.896 3.218c.337.306.45.442.43.518-.05.175.09.475.32.71.584.59 1.886 1.093 3.27 1.257.71.087 2.18.076 2.862-.022.53-.076 1.47-.301 1.746-.41.59-.24 1.117-.557 1.383-.83.444-.453.45-.464.417-.732-.032-.224-.022-.246.168-.388.255-.19 1.07-1.017 1.29-1.306.2-.262.576-.906.69-1.19.103-.24.14-.246.31-.066.367.394 1.12.721 1.528.667.352-.05.596-.361.406-.52-.037-.032-.265-.14-.51-.245a4.335 4.082 0 0 1-.64-.339l-.2-.158.022-.41c.032-.71.25-1.022 1.93-2.78 1.345-1.41 1.595-1.694 2.148-2.442.58-.782.884-1.278 1.247-2.049.727-1.551.976-3.239.662-4.485-.5-1.982-2.392-3.468-4.398-3.452-1.128.006-2.093.427-3.107 1.35-.575.524-.69.475-.526-.213.097-.432.08-.629-.082-.956-.325-.65-1.6-1.262-3.064-1.476-.46-.066-1.876-.114-2.196-.075zm9.962 3.02c1.106.34 2.022 1.29 2.326 2.41.2.753.054 2.141-.342 3.223a11.632 10.954 0 0 1-1.014 1.978c-.33.501-1.3 1.704-1.85 2.283a43.744 41.193 0 0 0-1.512 1.682c-.303.36-.51.557-.57.546-.075-.016-.09-.141-.118-.89a19.086 17.973 0 0 0-.917-4.916c-.206-.59-.26-.951-.157-1.016.043-.028.314-.05.602-.05.336 0 .537-.021.564-.06.022-.037-.13-.23-.374-.464-.423-.41-.586-.66-.722-1.11-.168-.556-.032-1.458.304-2.052.477-.836 1.388-1.503 2.283-1.661.4-.072 1.09-.028 1.497.098M11.569 7.34c.098.033.25.115.342.192.12.103.2.13.31.109.226-.05.747.207.866.414.05.094.136.224.19.29.08.098.098.175.07.4-.026.24-.01.31.104.48a.76.76 0 0 1 .135.442c0 .192.016.236.082.213a.178.168 0 0 0 .08-.136c0-.197.158-.486.294-.547a.774.774 0 0 1 .38-.027c.227.038.25.05.227.175-.016.076.01.17.06.213.076.082.076.092-.017.164-.092.066-.097.093-.038.245.066.176.066.176-.086.149-.087-.017-.168-.023-.185-.006-.016.016.017.202.076.41.136.486.13.622-.027 1.054-.103.29-.12.404-.08.59.08.431.053 1.572-.06 2.283a14.166 13.34 0 0 1-.38 1.72c-.228.798-.483 2.279-.472 2.743.005.246.027.459.043.476.016.016.125-.104.233-.263.24-.35.45-.525.852-.705.162-.071.34-.185.396-.25.157-.176.254-.153.195.048-.027.088-.033.164-.022.164.016 0-.016.066-.076.153-.054.082-.13.257-.168.393-.038.137-.12.317-.18.4-.08.114-.091.174-.048.218.044.043.14-.028.37-.268.346-.355.53-.579.563-.666.043-.115.602-.667.645-.64.027.017.06.006.082-.027.086-.141.12-.016.114.4l-.01.447-.294.323a56 56 0 0 1-.786.84c-.266.28-.624.662-.787.841a4.493 4.231 0 0 1-.596.536c-.298.202-.927.447-1.33.525a2.851 2.851 0 0 0-.324.066c-.255.059-2.863.07-3.525.009a31.86 30.002 0 0 0-.873-.075.816.768 0 0 1-.217-.045.532.501 0 0 0-.21-.033c-.52-.01-.94-.114-1.227-.31-.114-.077-.27-.137-.347-.137-.076 0-.135-.028-.135-.055 0-.032-.038-.054-.082-.054-.043 0-.08-.028-.08-.055 0-.033-.028-.054-.06-.054-.066 0-.288-.198-.608-.542-.125-.13-.31-.322-.4-.42-.1-.099-.18-.198-.18-.218 0-.029-.05-.094-.11-.158-.216-.23-.324-.356-.297-.356.01 0-.027-.104-.08-.23-.213-.47-.088-.508.19-.07.107.163.226.3.264.3.103 0 .336.284.494.601.07.142.255.393.4.562l.278.302.233-.056c.124-.033.25-.082.276-.103.065-.06-.18-.4-.667-.923-.4-.432-.504-.607-.325-.563.06.016.12.049.13.076.016.022.114.028.212.011a.994.936 0 0 1 .433.055c.206.07.25.07.25.01 0-.043-.022-.092-.054-.109-.028-.016-.044-.11-.033-.207a.732.69 0 0 0-.184-.476c-.017-.016-.033-.115-.044-.218l-.016-.186.152.137c.087.076.233.175.33.213.098.037.25.153.33.257.148.175.169.185.39.152.132-.021.257-.049.278-.059.033-.023.3.087.602.24.022.01.038 0 .038-.028 0-.026-.087-.092-.19-.141-.238-.115-.238-.186-.005-.23.222-.043.347-.01.72.18.305.153.419.137.26-.044-.123-.14-.07-.3.072-.212.18.114.293.393.282.71-.01.41-.01.405.114.29.07-.066.097-.137.076-.214-.212-.716-.25-1.01-.288-2.19l-.01-.285-.18.066a3.12 3.12 0 0 0-.44.218c-.33.197-.622.23-1.007.12-.163-.043-.43-.12-.59-.164-.164-.044-.316-.115-.338-.153-.103-.158-.113-.42-.027-.546.12-.17.11-.208-.07-.208-.08 0-.222-.021-.31-.049a2.013 1.896 0 0 0-.39-.082 1.48 1.394 0 0 1-.276-.054c-.022-.018-.224-.044-.446-.066-.217-.016-.428-.06-.466-.088-.076-.06-.054-.19.06-.42.048-.093.075-.17.054-.17-.022 0 0-.037.038-.092a.316.298 0 0 0 .07-.12c-.032-.142.37-.88.548-1.022.18-.136.537-.235.835-.24h.19l-.14-.153c-.29-.306-.375-.568-.36-1.104.017-.628.05-.661.755-.786.72-.132.894-.082 1.247.35.087.103.12.12.14.06.06-.159.283-.334.413-.334.076 0 .304.099.504.218.206.121.396.219.43.219.107.006.487.339.633.552.14.218.21.536.222 1.017 0 .19.033.282.125.365.157.147.217.36.233.808.01.323 0 .382-.114.497-.135.137-.553.236-.743.176-.12-.038-.146.097-.195 1.01-.05.895.076 1.945.288 2.43l.157.368.206-.225.206-.225.087.132c.076.11.108.126.195.076.12-.06.293-.262.298-.333 0-.027-.027-.027-.054-.011-.033.017-.054.006-.054-.027 0-.032-.033-.055-.065-.05-.125.018-.423-.07-.423-.125 0-.028-.022-.037-.054-.017-.066.045-.49-.343-.49-.447 0-.066.018-.071.077-.022.044.038.136.05.212.033.087-.022.195.005.314.076.38.235.418.126.082-.223-.27-.29-.347-.48-.44-1.126-.027-.19.05-.235.13-.071.033.054.17.158.304.224.353.175.727.655.922 1.196.157.438.25.53.418.438.05-.029.103-.143.124-.252.022-.115.136-.497.25-.852.266-.787.325-1.3.184-1.459-.07-.082-.157-.109-.33-.098-.402.01-.64-.24-.722-.781-.054-.34-.005-.371.537-.394.44-.021.602.05.84.367.12.163.142.235.12.425-.11.951-.168 1.29-.315 1.82-.092.327-.18.7-.195.813-.027.192-.022.207.07.17.06-.028.207-.055.337-.071l.233-.022-.173.245c-.217.312-.19.4.12.39.178-.007.232-.03.243-.11.005-.06.027-.263.043-.46.033-.327.13-.764.418-1.857.06-.224.14-.546.18-.71.042-.164.096-.36.123-.437.093-.23.244-1.092.342-1.928.05-.426.038-1.224-.022-1.278-.06-.06-.146.279-.103.393.06.136.055.18-.108.945-.103.48-.157.64-.255.71-.065.049-.19.158-.277.246-.086.082-.2.148-.254.148-.098-.006-.337-.34-.472-.673-.044-.109-.103-.207-.136-.228-.12-.078-.282-.793-.26-1.153.022-.382.005-.405-.255-.257-.32.18-1.49.06-1.535-.158-.005-.045.066-.187.17-.323.275-.366.427-.857.313-1-.05-.054-.038-.081.033-.114.092-.033.092-.038.005-.088-.157-.088-.108-.147.11-.141.194.01.2.004.21-.198.01-.223.184-.55.315-.605.054-.017.08-.11.08-.263 0-.18-.015-.213-.064-.164-.12.12-.45.076-.63-.088a1.98 1.865 0 0 0-.363-.256c-.2-.103-.27-.19-.683-.842a5.034 4.74 0 0 0-.396-.518c-.108-.114-.19-.235-.18-.273.018-.038.169-.055.45-.044.235.006.625-.022.864-.066.542-.092.764-.103.992-.038m-3.427.41c.07.055.18.07.325.05.2-.028.233-.017.266.087.027.087-.01.18-.152.349-.173.213-.396.35-1.014.634-.466.213-.586.322-.634.552-.027.136-.082.196-.255.273-.125.054-.26.141-.304.202-.157.196-.526.754-.613.917-.076.148-.336.443-.547.612a.328.309 0 0 1-.196.071c-.097 0-.108-.038-.12-.344a35.512 33.441 0 0 0-.021-.541c-.005-.223.098-.426.228-.426.103 0 .098-.087-.005-.132-.12-.043-.098-.305.043-.518l.206-.327a.302.284 0 0 1 .255-.16c.2-.021.195-.004.098-.207a1.672 1.574 0 0 1-.114-.306l-.038-.14.238.08c.125.044.255.104.288.132.087.087.135.055.135-.094 0-.136.028-.169.472-.535.255-.202.575-.295.7-.191.054.044.097.044.146.005.033-.033.152-.065.255-.081.103-.01.206-.028.222-.028.017-.005.076.022.136.066"
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
export class SvgCharlesIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
