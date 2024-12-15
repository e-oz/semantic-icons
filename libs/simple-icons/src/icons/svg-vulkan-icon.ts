import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vulkan-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vulkan</title>
      <path
        d="M13.411 15.12h-.875v-2.798c.28.156.649.442.875.719zm-7.383 0H4.936l-1.423-4.4h.992l.979 3.093h.013l.992-3.093h.999zm4.394 0h-.833v-.444h-.017c-.112.185-.255.319-.432.401s-.358.123-.541.123q-.3525 0-.576-.093c-.151-.063-.267-.149-.354-.261-.086-.112-.146-.25-.181-.412-.034-.162-.052-.343-.052-.539v-1.961h.876v1.799c0 .263.041.459.123.589.082.129.229.194.438.194.237 0 .41-.071.518-.214.107-.142.159-.375.159-.699v-1.669h.876zm3.134-1.918-.002-.123 1.104-1.147h1.035l-1.201 1.171 1.337 2.017h-1.061zm2.433-.289c.013-.205.065-.375.155-.511.091-.136.205-.244.345-.326.141-.082.298-.14.473-.174.174-.035.349-.052.526-.052.16 0 .324.011.487.034.164.024.315.067.451.132.136.067.246.157.332.274.087.116.13.272.13.466v1.659c0 .144.009.282.024.412.017.131.045.23.086.295h-.889c-.017-.05-.03-.099-.041-.151a1.2 1.2 0 0 1-.021-.157c-.141.144-.304.243-.494.302-.19.058-.382.086-.581.086-.151 0-.293-.02-.424-.056a.99.99 0 0 1-.346-.173c-.099-.077-.176-.177-.23-.295-.056-.119-.085-.261-.085-.425 0-.181.033-.33.095-.447.065-.116.147-.211.246-.28.102-.069.216-.123.345-.158.13-.034.259-.062.391-.084.131-.019.261-.036.388-.049s.24-.031.339-.056c.099-.024.177-.061.235-.108.058-.048.084-.117.08-.207 0-.095-.015-.171-.048-.225a.32.32 0 0 0-.123-.129.51.51 0 0 0-.179-.063c-.069-.01-.14-.015-.218-.015-.172 0-.308.037-.407.11-.1.074-.156.197-.173.369zm2.021.647c-.037.033-.084.059-.138.078a1.04 1.04 0 0 1-.179.045c-.065.013-.13.022-.201.031-.069.008-.14.019-.209.03a1.7 1.7 0 0 0-.194.049c-.065.022-.119.048-.166.084a.39.39 0 0 0-.114.132c-.029.054-.044.121-.044.203 0 .077.015.144.044.196.028.054.069.095.116.127.05.031.108.052.173.065.064.013.133.019.202.019.173 0 .307-.028.402-.086.094-.058.163-.127.209-.207.045-.08.073-.162.082-.244.011-.082.015-.148.015-.196zm1.443-1.628h.833v.444h.017c.11-.185.254-.319.431-.403s.358-.127.542-.127c.235 0 .427.032.576.094.148.065.267.154.353.266.087.112.147.25.182.412.034.162.051.343.051.539v1.961h-.875v-1.799c0-.263-.041-.46-.123-.589-.082-.13-.229-.194-.438-.194-.24 0-.41.071-.518.213-.108.143-.16.376-.16.699v1.67h-.875zm-8.451-.55c.302.149.593.31.876.483v3.253h-.876zm-8.93.159c-.261.768.203 1.635 1.156 2.408-2.122-.911-3.496-2.244-3.184-3.38.434-1.573 3.932-2.177 7.481-1.491 3.136.606 5.416 2.375 5.884 3.617-1.035-.936-2.621-1.883-4.562-2.37-3.235-.816-6.268-.27-6.775 1.216m11.341.613c-.207-.328-.502-.667-.875-1.001v-.436h.875zM24 14.652c0 .265-.207.472-.479.472-.267 0-.481-.207-.481-.472 0-.259.214-.466.481-.466.27 0 .479.207.479.466m-.839 0c0 .207.153.373.364.373.205 0 .356-.164.356-.369 0-.207-.151-.375-.358-.375-.209 0-.362.166-.362.371m.287.246h-.108v-.466c.043-.009.103-.015.179-.015.088 0 .127.015.162.034.026.02.045.056.045.104 0 .052-.039.09-.097.108v.006c.045.017.071.052.086.114.015.072.024.1.035.117h-.117c-.015-.017-.023-.061-.036-.114-.009-.052-.037-.074-.097-.074h-.052zm.002-.266h.052c.06 0 .108-.019.108-.069 0-.043-.031-.071-.1-.071-.028 0-.047.002-.06.007z"
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
export class SvgVulkanIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
