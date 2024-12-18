import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-leroymerlin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Leroy Merlin</title>
      <path
        d="M10.407 7.419c-.17-.164-.329-.323-.478-.468.707-.722 1.414-1.444 2.116-2.166.239.234.468.453.687.683.02.02.01.084-.01.119-.22.433-.438.866-.657 1.3-.02.04-.04.074-.07.139l.134-.055c.449-.204.902-.403 1.35-.612.074-.035.12-.035.184.03.2.199.403.393.583.567-.722.742-1.434 1.464-2.136 2.181-.18-.174-.349-.343-.513-.503.348-.353.707-.717 1.065-1.075l-.015-.03-.11.045-1.284.582c-.07.03-.12.04-.174-.025-.075-.09-.21-.164-.224-.258-.015-.095.074-.215.124-.32.18-.393.364-.786.528-1.194-.368.358-.737.712-1.1 1.06zm11.71 10.357c.01-.045.016-.06.016-.074.194-.683.388-1.365.577-2.047.01-.04.02-.104-.005-.13-.234-.238-.473-.467-.722-.706l-2.116 2.16c.15.145.319.31.493.484.463-.454.941-.917 1.4-1.36 0-.015 0 0-.006.015-.159.667-.313 1.335-.483 1.997-.044.18-.035.304.115.428.17.14.319.309.488.478L24 16.851c-.144-.14-.309-.3-.503-.494-.443.458-.901.926-1.38 1.42zm-7.956-6.582c.124-.13.269-.274.433-.443-.299-.294-.612-.593-.906-.877.164-.164.314-.318.478-.488.234.234.478.478.717.712.14-.144.284-.289.458-.463-.239-.234-.493-.473-.717-.692l.334-.358c.313.308.627.612.936.916.134-.135.274-.28.413-.424-.498-.487-1.006-.98-1.519-1.483l-2.11 2.156c.487.468.99.96 1.483 1.444zM3.187 15.102c-.155-.139-.29-.264-.409-.373.294-.314.588-.622.887-.941-.13-.12-.27-.254-.414-.389-.488.478-.985.966-1.473 1.44l2.15 2.15c.489-.477.987-.96 1.49-1.453-.15-.14-.29-.27-.434-.409-.304.294-.617.603-.916.897l-.463-.434c.249-.264.488-.522.737-.786-.14-.13-.284-.264-.468-.439zm5.258-6.647c-.07-.025-.115-.02-.165.035-.149.154-.308.304-.463.453-.02.02-.034.045-.06.075.38.124.743.239 1.111.358.264.085.553.13.787.27.229.139.408.373.602.572.1.104.194.214.294.328.2-.214.373-.398.553-.587-.24-.244-.498-.503-.747-.767a.39.39 0 0 1-.09-.16c-.09-.363-.174-.731-.264-1.095-.07-.294-.144-.592-.219-.906-.214.21-.413.403-.607.598-.02.02-.02.074-.01.11.04.148.084.293.124.442.06.214.12.428.185.667-.364-.149-.698-.268-1.031-.393zm11.193 3.998-.558-.542c-.697.712-1.399 1.434-2.116 2.166.478.468.976.95 1.47 1.429.154-.16.323-.329.507-.518-.294-.289-.602-.588-.911-.886.548-.568 1.085-1.116 1.608-1.649zm-17.532 6.33c.498-.484.986-.962 1.479-1.445-.174-.16-.344-.319-.518-.478-.289.279-.592.578-.906.881-.548-.562-1.09-1.115-1.633-1.673-.18.19-.354.369-.528.558.692.707 1.394 1.43 2.106 2.156zm18.842-4.995c-.697.712-1.4 1.434-2.102 2.15.16.16.339.34.533.529.697-.712 1.404-1.434 2.106-2.156-.159-.16-.343-.334-.537-.523zm-2.973-1.759c-.294.23-.612.299-.976.16-.154.478-.309.946-.463 1.424-.19-.185-.368-.354-.543-.538-.025-.03-.015-.105-.005-.15.125-.572.25-1.145.379-1.722.005-.02.005-.04-.01-.075-.374.388-.747.777-1.116 1.155l-.552-.538 2.086-2.16c.468.452.921.87 1.344 1.319.284.289.195.856-.144 1.125zm-.543-.97c-.154-.17-.333-.32-.498-.474-.154.16-.318.324-.493.503.1.105.205.22.31.329.02.025.039.05.064.064.045.035.09.07.14.09.159.07.338.02.442-.114.115-.14.14-.29.035-.399zm-8.086.084c0 .812-.762 1.543-1.608 1.543-.807 0-1.549-.746-1.549-1.558 0-.901.657-1.569 1.554-1.569a1.582 1.582 0 0 1 1.603 1.584zm-.747 0a1.603 1.603 0 0 0-.752-.837.581.581 0 0 0-.642.05c-.21.15-.329.354-.304.623.04.428.657.99 1.086.985.398-.005.757-.463.612-.821zm-1.045 2.276c-.17.18-.334.359-.503.533-.025.025-.095.015-.14.005-.538-.14-1.075-.284-1.613-.423a.218.218 0 0 0-.115-.005l1.096 1.125c-.18.194-.359.384-.523.558L3.59 13.091c.03-.035.05-.06.07-.08.338-.338.682-.672 1.02-1.006.225-.219.493-.333.812-.293.408.05.707.378.717.801.005.15-.02.304-.03.463.463.145.926.299 1.375.443zm-2.063-.826c-.134-.135-.304-.164-.443-.055-.154.12-.294.259-.443.393.189.175.363.339.552.513.08-.074.185-.169.284-.264.04-.04.08-.074.11-.12.104-.158.084-.323-.06-.467zm15.86 6.622H2.554c-.015-.015-.025-.03-.04-.045.04-.02.085-.03.115-.06 1.305-1.289 2.604-2.579 3.904-3.863l4.566-4.521c.264-.264.533-.518.796-.787.085-.085.13-.085.215 0 1.483 1.494 2.977 2.982 4.466 4.471 1.568 1.569 3.132 3.137 4.7 4.7a.78.78 0 0 0 .1.08c-.01.01-.015.02-.025.025z"
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
export class SvgLeroymerlinIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
