import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-refresh-dollar-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.3777 10.4603C2.9776 10.3531 2.74017 9.94185 2.84737 9.54175C3.3886 7.52186 4.58121 5.737 6.24022 4.464C7.89924 3.19099 9.93195 2.50098 12.0231 2.50098C14.1142 2.50098 16.1469 3.19099 17.806 4.464C19.2116 5.54261 20.2825 6.98868 20.906 8.63384L21.6667 7.28259C21.8699 6.92165 22.3273 6.79378 22.6882 6.99699C23.0491 7.2002 23.177 7.65754 22.9738 8.01848L21.2392 11.0995C21.1416 11.2729 20.9791 11.4003 20.7875 11.4539C20.596 11.5074 20.391 11.4827 20.2176 11.3851L17.1369 9.65037C16.776 9.44713 16.6482 8.98979 16.8514 8.62886C17.0546 8.26794 17.512 8.1401 17.8729 8.34334L19.5481 9.28664C19.0305 7.8511 18.1109 6.58872 16.8928 5.65403C15.4958 4.58203 13.784 4.00098 12.0231 4.00098C10.2621 4.00098 8.55041 4.58203 7.15337 5.65403C5.75632 6.72602 4.75203 8.22904 4.29626 9.92998C4.18906 10.3301 3.7778 10.5675 3.3777 10.4603Z"
        fill="#323544"
      />
      <path
        d="M20.6712 13.5393C21.0713 13.6465 21.3087 14.0577 21.2015 14.4578C20.6603 16.4777 19.4677 18.2626 17.8087 19.5356C16.1497 20.8086 14.117 21.4986 12.0258 21.4986C9.93466 21.4986 7.90195 20.8086 6.24294 19.5356C4.83447 18.4548 3.76218 17.0051 3.13924 15.3559L2.37242 16.718C2.16921 17.0789 1.71188 17.2068 1.35094 17.0035C0.989997 16.8003 0.862131 16.343 1.06534 15.9821L2.79997 12.901C2.89756 12.7277 3.06001 12.6002 3.25158 12.5467C3.44316 12.4931 3.64817 12.5179 3.8215 12.6155L6.9022 14.3502C7.26313 14.5534 7.39097 15.0108 7.18773 15.3717C6.9845 15.7326 6.52715 15.8604 6.16623 15.6572L4.50371 14.7211C5.02192 16.1532 5.94026 17.4126 7.15608 18.3455C8.55313 19.4175 10.2649 19.9986 12.0258 19.9986C13.7868 19.9986 15.4985 19.4175 16.8955 18.3455C18.2926 17.2735 19.2969 15.7705 19.7526 14.0696C19.8598 13.6695 20.2711 13.432 20.6712 13.5393Z"
        fill="#323544"
      />
      <path
        d="M12.0244 7.80814C12.4386 7.80814 12.7744 8.14393 12.7744 8.55814V8.72712C13.5229 8.91629 14.0767 9.59415 14.0767 10.4014C14.0767 10.8156 13.741 11.1514 13.3267 11.1514C12.9125 11.1514 12.5767 10.8156 12.5767 10.4014C12.5767 10.2761 12.4752 10.1746 12.3499 10.1746H11.9549C11.6882 10.1746 11.4721 10.3907 11.4721 10.6574C11.4721 10.8586 11.5969 11.0387 11.7854 11.1094L12.7902 11.4862C13.5641 11.7765 14.0767 12.5163 14.0767 13.3428C14.0767 14.1988 13.5343 14.9281 12.7744 15.2057V15.4419C12.7744 15.8561 12.4386 16.1919 12.0244 16.1919C11.6102 16.1919 11.2744 15.8561 11.2744 15.4419V15.273C10.526 15.0838 9.97209 14.406 9.97209 13.5988C9.97209 13.1846 10.3079 12.8488 10.7221 12.8488C11.1363 12.8488 11.4721 13.1846 11.4721 13.5988C11.4721 13.724 11.5736 13.8256 11.6989 13.8256H12.0939C12.3606 13.8256 12.5767 13.6094 12.5767 13.3428C12.5767 13.1415 12.4519 12.9614 12.2635 12.8907L11.2586 12.5139C10.4848 12.2237 9.97209 11.4839 9.97209 10.6574C9.97209 9.80135 10.5145 9.07204 11.2744 8.7944V8.55814C11.2744 8.14393 11.6102 7.80814 12.0244 7.80814Z"
        fill="#323544"
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
export class SvgRefreshDollar1Icon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
