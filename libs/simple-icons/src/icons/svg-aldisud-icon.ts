import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-aldisud-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Aldi S&#252;d</title>
      <path
        d="M18.164 10.92c-.243-.558-.558-.655-1.044-.655h-4.368l-.412 1.189a.727.727 0 0 1-.097.243h5.533c.315 0 .582.048.8.315h.049c0 .024-.437-1.02-.461-1.092zm-.898-2.135c-.243-.51-.534-.583-1.02-.583h-2.79l-.485 1.432h3.955c.364 0 .631.049.825.315h.049s-.486-1.043-.534-1.164zm-.874-2.063c-.267-.534-.534-.582-1.019-.582h-1.238l-.485 1.43h2.403c.34 0 .63.049.825.316h.048c0-.025-.485-1.02-.534-1.165zM9.355 3.519c-.68 0-.97.485-1.238 1.237L5.424 12.74h.68c.679 0 .97-.485 1.237-1.237l2.354-6.94c.194-.607.485-.947.922-.996V3.52zm4.416-.025c-.679 0-.97.486-1.237 1.238l-2.354 6.916c-.194.607-.461.947-.898.995v.049h1.213c.68 0 .971-.486 1.238-1.238l2.354-6.916c.194-.607.485-.946.922-.995v-.049zm-2.208 0c-.68 0-.97.486-1.237 1.238l-2.33 6.94c-.194.607-.461.947-.898.995v.049h1.213c.68 0 .971-.485 1.238-1.238l2.354-6.916c.194-.606.485-.946.922-.995V3.52c-.218-.025-1.213-.025-1.262-.025zm.364 16.842c-.558 0-.655-.243-.655-.825v-.923h.461v1.044c0 .267.024.388.218.388.17 0 .219-.097.219-.388v-1.044h.437v.923c0 .63-.17.825-.68.825zm.316-1.917a.217.217 0 0 1-.219-.219c0-.121.097-.242.219-.242.121 0 .218.12.218.242a.217.217 0 0 1-.218.219zm-.631 0a.217.217 0 0 1-.219-.219c0-.121.097-.242.219-.242.121 0 .218.12.218.242a.217.217 0 0 1-.218.219zm1.31 1.868v-1.699h.485c.607 0 .874.122.874.85s-.267.85-.874.85zm.558-.291c.243 0 .34-.146.34-.558 0-.388-.097-.558-.34-.558h-.097v1.116zm-3.154.34c-.267 0-.461-.049-.559-.073l.073-.316c.17.049.291.073.389.073.12 0 .266-.024.266-.17 0-.097-.12-.17-.242-.242h-.024c-.195-.122-.413-.243-.413-.51 0-.315.218-.485.63-.485.22 0 .34.024.51.073l-.072.29a.924.924 0 0 0-.364-.072c-.146 0-.243.048-.243.17 0 .097.121.17.267.242h.024c.194.122.437.243.437.51 0 .316-.218.51-.68.51zM8.36 17.569c-.049-.194-.121-.534-.17-.68H6.855c-.048.146-.12.486-.17.68H5.497c.51-1.601.728-2.257 1.31-3.688h1.457c.558 1.407.8 2.087 1.31 3.688zm-1.335-1.456h.995c-.145-.485-.412-1.31-.485-1.553-.097.219-.364 1.044-.51 1.553zm3.834 1.456c-.63 0-.97-.364-.97-.995v-2.693h1.116v2.475c0 .315.097.388.413.388h1.092l.17.825zm6.334-3.688h1.116v3.688h-1.116zm-4.077 3.688v-3.688h1.53c1.14 0 1.916.46 1.916 1.82 0 1.31-.63 1.868-1.868 1.868zm1.117-.8h.315c.68 0 .946-.316.946-1.068 0-.728-.34-1.02-.995-1.02h-.266zm5.532 4.732c0 .17-.145.29-.29.29H4.55a.295.295 0 0 1-.291-.29V2.475c0-.17.145-.291.291-.291h14.924c.17 0 .291.146.291.291zM4.065 1.626a.383.383 0 0 0-.389.388v19.948c0 .218.17.388.389.388h15.87c.219 0 .389-.17.389-.388V2.014a.383.383 0 0 0-.389-.388zM2.803 0a.808.808 0 0 0-.801.8v22.4c0 .436.364.8.8.8h18.395a.808.808 0 0 0 .801-.8V.8c0-.436-.364-.8-.8-.8zm.704.946h17.01a.54.54 0 0 1 .535.534l-.025 21.04a.539.539 0 0 1-.534.534H3.507a.539.539 0 0 1-.534-.534V1.48a.54.54 0 0 1 .534-.534z"
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
export class SvgAldisudIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
