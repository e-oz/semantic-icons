import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bluetooth-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2999 21.4424C11.2516 21.6446 11.287 21.8658 11.4162 22.049C11.4991 22.1667 11.6097 22.2533 11.733 22.3062C11.8292 22.3511 11.9366 22.3762 12.0499 22.3762C12.2721 22.3762 12.4717 22.2795 12.6091 22.126L19.0211 17.608C19.2204 17.4675 19.339 17.2389 19.3391 16.9951C19.3391 16.7513 19.2207 16.5226 19.0215 16.3821L13.3496 12.3799L19.043 8.36256C19.2422 8.22198 19.3607 7.99333 19.3606 7.7495C19.3605 7.50568 19.2419 7.27711 19.0426 7.13666L12.4861 2.51678C12.3632 2.42876 12.2126 2.37695 12.0499 2.37695C11.6357 2.37695 11.2999 2.71274 11.2999 3.12695L11.2999 10.9336L5.9227 7.13936C5.58426 6.90055 5.1163 6.98132 4.87749 7.31976C4.63868 7.6582 4.71945 8.12616 5.05789 8.36497L10.7479 12.3799L5.07945 16.3797C4.74101 16.6185 4.66024 17.0864 4.89905 17.4249C5.13786 17.7633 5.60582 17.8441 5.94426 17.6053L11.2999 13.8263L11.2999 21.4424ZM12.7999 20.1566V13.8278L17.2876 16.9944L12.7999 20.1566ZM17.3091 7.75019L12.7999 10.932V4.57285L17.3091 7.75019Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBluetoothIcon {
  readonly class = input('');
}