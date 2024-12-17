import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-watchtower-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Watchtower</title>
      <path
        d="M12 .099C5.373.099 0 5.426 0 12c0 6.571 5.373 11.9 12 11.9S24 18.573 24 12C24 5.428 18.627.1 12 .1Zm.139 7.34 5.377 2.66v.222h-.526v.504l6.36-1.619a11.525 11.525 0 0 1-.248 6.424l-6.112-1.22v.652h2.428v1.091h.393l-.002.248-2.745 1.471.67 4.219-.203.111a11.72 11.72 0 0 1-5.506 1.367A11.68 11.68 0 0 1 6.72 22.3h-.01v-.003c-.065-.033-.131-.064-.195-.098l.685-4.31-2.765-1.473.001-.264h.413v-1.09h2.435v-.65L.961 15.675a11.464 11.464 0 0 1-.602-3.676c0-.987.125-1.947.36-2.863l6.564 1.676v-.51h-.578v-.203Zm-4.856 3.373v3.6l.33-.067v-3.451zm.33.082 2.668.68v-1.061H7.613Zm2.668.68v2.24l.328-.067v-2.09zm.328.083.452.115.039-.439h2.076l.04.453.458-.115v-1.158h-3.065zm3.065.014-.002 2.074.33.067v-2.225l2.658-.678v-.396H14v1.074zm2.986-.762v3.434l.33.066v-3.584zm0 3.434-2.658-.531v.935h2.658zm-2.988-.598-.281-.055.097 1.057h.184zm-3.063.002v1h.178l.096-1.055zm-2.996.598v.402h2.666v-.933zm-.904 7.95c.003.003.007.003.01.005l10.812-.098-.343-2.219H7.078Zm5.428-14.704-5.291 2.594h10.527Zm-.905 3.888-.298 3.268h2.408l-.299-3.268zm-3.619 3.543v.069h9.235l-.004-.069zm-2.547.32v.81h2.217v-.81zm2.547 0v.81h3.01v-.81zm3.229 0v.81h2.605v-.81zm2.824 0v.81h3.18v-.81zm3.398 0v.81H19.2v-.81Zm-12.216 1.05 2.574 1.37h9.422l2.574-1.37z"
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
export class SvgWatchtowerIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}