import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-redragon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Redragon</title>
      <path
        d="M13.995 4.077v.06A10.963 10.963 0 0 1 16.22 8.42c.605 2.167.876 4.414.805 6.662a1.01 1.01 0 0 1 0 .113 6.278 6.278 0 0 0-.721-1.846 4.39 4.39 0 0 0-1.367-1.45c.025.064.059.113.059.168a7.04 7.04 0 0 1 .528 2.245 4.703 4.703 0 0 1-1.076 3.41 1.38 1.38 0 0 0-.113.203l-.069-.065a3.949 3.949 0 0 0-.138-2.374c-.578 2.216-2.068 3.538-4.047 4.437 2.404-.01 4.723-.375 6.697-1.856.015.533-.148.958-.696 1.841 1.673-.839 2.403-2.23 2.586-4.012.45.536.755 1.178.888 1.866.128.656.192 1.327.286 1.974.71-1.747.686-3.593.444-5.512 2.137 1.248 3.02 3.266 3.701 5.428a25.023 25.023 0 0 0-.133-3.494c-.17-1.698-.59-3.36-1.248-4.935a11.844 11.844 0 0 0-6.638-6.583 8.79 8.79 0 0 0-1.973-.563zm-2.734.11c-.306.522-.587 1.06-.933 1.539a18.019 18.019 0 0 1-1.14 1.524 1.313 1.313 0 0 1-.943.43l.445-2.083a.626.626 0 0 0-.143.188c-.3.46-.592.928-.908 1.372a.632.632 0 0 1-.726.247c-.493-.144-.987-.282-1.48-.44a.257.257 0 0 0-.326.08A18.356 18.356 0 0 1 3.785 8.42c-1.076.953-2.24 1.746-3.785 1.638v.065c.434 1.026.864 2.053 1.318 3.074a1.648 1.648 0 0 0 .69.74 12.216 12.216 0 0 1-.183-1.283c-.024-.523.094-.617.617-.667a.168.168 0 0 1 .203.129c.074.187.163.37.246.558.104-.227.193-.44.296-.642a.301.301 0 0 1 .149-.133c.222-.094.45-.168.686-.257l.177.356c.153-.35.296-.696.46-1.037a.375.375 0 0 1 .468-.173v.242a4.935 4.935 0 0 0 .493 2.626 4.244 4.244 0 0 1 .281 1.046c.04.162-.043.257-.196.257l-.4.044a1.655 1.655 0 0 1 .27.247c.075.094.179.27.144.32a.918.918 0 0 1-.39.267.536.536 0 0 1-.315 0 9.746 9.746 0 0 1-.81-.272 3.64 3.64 0 0 1-.414-.212l-.08.094.716.612a1.554 1.554 0 0 0 1.24.41.987.987 0 0 0 .986-.988c.045-.306.005-.616.045-.922a2.704 2.704 0 0 1 .927-1.974 2.561 2.561 0 0 0-1.214.74 6.366 6.366 0 0 1-.079-1.135 1.545 1.545 0 0 1 1.402-1.653 20.515 20.515 0 0 1 1.648-.281c.805-.08 1.599-.246 2.369-.494a4.367 4.367 0 0 0 1.406-.794 17.83 17.83 0 0 1-2.872.38 8.882 8.882 0 0 0 3.4-4.777c-1.056 1.48-2.202 2.867-3.87 3.701a22.7 22.7 0 0 0 1.447-4.086zM5.443 8.07c-.03.153-.054.305-.094.454-.074.29-.163.577-.237.868a.197.197 0 0 1-.198.178c-.384.045-.764.103-1.183.157zM9.4 10.775a4.206 4.206 0 0 0-.577.053 2.897 2.897 0 0 0-1.48.523.987.987 0 0 0-.43.923 1.1 1.1 0 0 1 .972-.671 3.065 3.065 0 0 1 1.762.34c.49.234.772.76.696 1.298a2.338 2.338 0 0 1-.687 1.377 5.797 5.797 0 0 1-1.914 1.308 9.695 9.695 0 0 0-2.32 1.41 3.95 3.95 0 0 0-1.396 2.567h5.921a2.023 2.023 0 0 1 .987-2.551l-.26 1.115a5.428 5.428 0 0 0 1.243-2.665c.171.407.245.848.216 1.288a5.615 5.615 0 0 0 .44-2.866l.518.561c-.049-.4-.09-.755-.134-1.11a3.097 3.097 0 0 0-1.865-2.585 4.197 4.197 0 0 0-1.692-.315z"
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
export class SvgRedragonIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
