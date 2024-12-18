import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-globe-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00312 12.1255C2.07025 17.59 6.52083 22.0001 12.0014 22.0001C17.5238 22.0001 22.0005 17.5224 22.0005 12.0002C22.0005 6.49245 17.5473 2.02384 12.0449 2.00038C12.0304 2.00013 12.0158 2 12.0012 2C11.9866 2 11.972 2.00013 11.9574 2.00038C6.49755 2.02389 2.07089 6.42415 2.00314 11.8733C2.00106 11.9151 2 11.9572 2 11.9996C2 12.0418 2.00105 12.0838 2.00312 12.1255ZM8.97906 8.97712C9.91568 8.83117 10.9326 8.75032 11.9996 8.75032C13.0679 8.75032 14.086 8.83136 15.0235 8.97764C15.1696 9.91466 15.2505 10.932 15.2505 11.9996C15.2505 13.0671 15.1696 14.0845 15.0235 15.0216C14.086 15.1678 13.0679 15.2489 11.9996 15.2489C10.9326 15.2489 9.91569 15.168 8.97906 15.0221C8.83291 14.0849 8.75196 13.0674 8.75196 11.9996C8.75196 10.9319 8.83291 9.91428 8.97906 8.97712ZM7.419 9.29819C7.30981 10.1594 7.25196 11.0661 7.25196 11.9996C7.25196 12.9331 7.30981 13.8398 7.419 14.701C6.8082 14.5418 6.25021 14.3524 5.75696 14.1391C4.976 13.8015 4.39155 13.4187 4.01306 13.0318C3.66763 12.6787 3.52335 12.3559 3.50265 12.072C3.50245 12.0481 3.50235 12.0242 3.50235 12.0002C3.50235 11.9758 3.50245 11.9514 3.50266 11.927C3.5234 11.6432 3.66769 11.3204 4.01306 10.9674C4.39155 10.5805 4.976 10.1978 5.75696 9.86009C6.25021 9.64683 6.8082 9.45746 7.419 9.29819ZM9.30032 7.4171C9.45948 6.80704 9.64869 6.24969 9.86173 5.75696C10.1994 4.976 10.5821 4.39155 10.969 4.01306C11.3419 3.64827 11.6811 3.50781 11.9761 3.50032L12.0014 3.50028L12.0263 3.50032C12.3214 3.5078 12.6606 3.64825 13.0335 4.01306C13.4203 4.39155 13.8031 4.976 14.1407 5.75696C14.3538 6.24981 14.5431 6.8073 14.7023 7.41753C13.8407 7.30824 12.9336 7.25032 11.9996 7.25032C11.0669 7.25032 10.1609 7.30808 9.30032 7.4171ZM16.5836 9.29907C17.1931 9.45816 17.7499 9.64723 18.2422 9.86009C19.0232 10.1978 19.6077 10.5805 19.9862 10.9674C20.3613 11.3509 20.4992 11.6987 20.4992 11.9996C20.4992 12.3005 20.3613 12.6483 19.9862 13.0318C19.6077 13.4187 19.0232 13.8015 18.2422 14.1391C17.7499 14.352 17.1931 14.5411 16.5836 14.7001C16.6927 13.8392 16.7505 12.9328 16.7505 11.9996C16.7505 11.0664 16.6927 10.16 16.5836 9.29907ZM14.7023 16.5817C14.5431 17.1919 14.3538 17.7494 14.1407 18.2422C13.8031 19.0232 13.4203 19.6077 13.0335 19.9861C12.65 20.3613 12.3021 20.4992 12.0012 20.4992C11.7003 20.4992 11.3525 20.3613 10.969 19.9862C10.5821 19.6077 10.1994 19.0232 9.86173 18.2422C9.64869 17.7495 9.45948 17.1922 9.30032 16.5821C10.1609 16.6911 11.0669 16.7489 11.9996 16.7489C12.9336 16.7489 13.8407 16.691 14.7023 16.5817ZM7.69311 16.3082C7.89575 17.2403 8.16319 18.0934 8.48491 18.8375C8.66253 19.2484 8.85983 19.6332 9.07661 19.9833C6.73603 19.1253 4.87777 17.2671 4.01951 14.9265C4.36866 15.1424 4.75227 15.3389 5.16168 15.5159C5.90633 15.8379 6.76016 16.1055 7.69311 16.3082ZM16.3095 16.3074C17.2411 16.1048 18.0938 15.8375 18.8375 15.5159C19.2488 15.3381 19.634 15.1406 19.9844 14.9236C19.1265 17.2657 17.2675 19.1252 14.9258 19.9835C15.1426 19.6333 15.3399 19.2484 15.5176 18.8375C15.8394 18.0932 16.1069 17.2399 16.3095 16.3074ZM19.9838 9.07529C19.6336 8.85838 19.2485 8.66098 18.8375 8.48327C18.0938 8.16171 17.2411 7.89437 16.3095 7.69177C16.1069 6.75934 15.8394 5.90596 15.5176 5.16168C15.3402 4.75137 15.1431 4.36698 14.9267 4.01722C17.2675 4.87548 19.1258 6.7342 19.9838 9.07529ZM7.69311 7.69102C6.76016 7.89372 5.90632 8.16132 5.16168 8.48327C4.75248 8.66019 4.36906 8.85663 4.02005 9.0724C4.87844 6.73282 6.73604 4.87536 9.0757 4.01737C8.85927 4.3671 8.66228 4.75144 8.48491 5.16168C8.16319 5.90577 7.89575 6.75888 7.69311 7.69102Z"
        fill="#323544"
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
export class SvgGlobe1Icon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
