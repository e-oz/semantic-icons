import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-p5dotjs-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>p5.js</title>
      <path
        d="M1.345 9.122v.784h.035c.07-.11.161-.22.274-.333a1.85 1.85 0 0 1 .416-.305 2.557 2.557 0 0 1 1.253-.31 2.632 2.632 0 0 1 1.964.854c.242.266.429.578.561.936.133.36.2.745.2 1.159 0 .413-.065.801-.194 1.163a2.856 2.856 0 0 1-.549.948 2.642 2.642 0 0 1-.866.644c-.34.16-.723.24-1.152.24-.398 0-.763-.083-1.094-.246a1.86 1.86 0 0 1-.766-.668h-.024v3.558H0V9.12zm3.276 2.785c0-.219-.034-.435-.1-.65a1.82 1.82 0 0 0-.298-.579 1.503 1.503 0 0 0-.503-.416 1.53 1.53 0 0 0-.714-.157 1.44 1.44 0 0 0-.691.163 1.77 1.77 0 0 0-.52.421 1.795 1.795 0 0 0-.328.585 1.97 1.97 0 0 0 0 1.305 1.807 1.807 0 0 0 .328.58 1.687 1.687 0 0 0 .52.414c.203.105.434.159.691.159a1.483 1.483 0 0 0 1.217-.586c.132-.171.231-.366.297-.585a2.248 2.248 0 0 0 .1-.654zm13.682-3.054v6.223c0 .335-.028.653-.082.952a2.018 2.018 0 0 1-.31.785 1.623 1.623 0 0 1-.62.532c-.262.132-.602.199-1.024.199a2.676 2.676 0 0 1-.35-.024 3.507 3.507 0 0 1-.281-.047l.117-1.192a1.762 1.762 0 0 0 .386.047.752.752 0 0 0 .397-.094.627.627 0 0 0 .234-.258c.055-.109.09-.235.105-.38.016-.144.024-.298.024-.461V8.853zm4.784 1.765a1.621 1.621 0 0 0-.514-.427 1.449 1.449 0 0 0-.714-.18c-.226 0-.432.046-.62.14a.483.483 0 0 0-.28.467.47.47 0 0 0 .31.462c.206.09.508.182.906.276.21.047.423.109.638.187.214.077.41.18.585.31a1.53 1.53 0 0 1 .427.48c.109.19.163.423.163.695 0 .344-.064.634-.192.872-.13.238-.301.43-.515.58a2.169 2.169 0 0 1-.75.32 3.884 3.884 0 0 1-.883.101 3.507 3.507 0 0 1-1.275-.24 2.694 2.694 0 0 1-1.03-.685l.925-.866a1.828 1.828 0 0 0 1.44.703c.1 0 .204-.012.31-.035a1.052 1.052 0 0 0 .29-.112.607.607 0 0 0 .218-.205.58.58 0 0 0 .081-.316.52.52 0 0 0-.32-.503c-.216-.1-.538-.202-.967-.303a4.635 4.635 0 0 1-.614-.182 2.004 2.004 0 0 1-.531-.292 1.35 1.35 0 0 1-.375-.451 1.42 1.42 0 0 1-.14-.667c0-.311.064-.58.192-.806a1.66 1.66 0 0 1 .51-.556c.21-.145.447-.252.713-.322a3.184 3.184 0 0 1 .819-.105c.405 0 .801.07 1.187.21.386.14.692.355.919.643zm-8.29 2.931l.837-.252.164.505-.833.283.517.734-.436.316-.544-.721-.53.701-.423-.322.517-.708-.84-.302.165-.506.843.271v-.872h.564v.872zm-2.887-2.644a2.309 2.309 0 0 0-.602-.819 2.679 2.679 0 0 0-.907-.509 3.517 3.517 0 0 0-1.13-.175c-.148 0-.313.008-.497.024a2.435 2.435 0 0 0-.474.082l.082-1.79h3.382V6.453H7.05l-.14 4.527a3.487 3.487 0 0 1 .426-.175 6.564 6.564 0 0 1 .491-.147 4.487 4.487 0 0 1 .515-.099 3.78 3.78 0 0 1 .497-.035c.227 0 .45.025.668.076.218.05.415.14.591.269.174.129.317.298.426.509.11.21.164.476.164.795 0 .25-.04.474-.123.673a1.413 1.413 0 0 1-.333.497 1.443 1.443 0 0 1-.49.304c-.19.07-.388.106-.598.106-.375 0-.698-.1-.972-.299a1.631 1.631 0 0 1-.584-.79l-.015.006-1.016.952c.205.335.47.616.797.838.475.324 1.06.486 1.754.486a3.417 3.417 0 0 0 1.17-.2 2.705 2.705 0 0 0 1.609-1.491c.16-.362.24-.773.24-1.233 0-.422-.072-.794-.216-1.118z"
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
export class SvgP5dotjsIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
