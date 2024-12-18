import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-clubhouse-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Clubhouse</title>
      <path
        d="M24 9.543c0 .32-.23.763-.337.976-.39.833-1.03 2.112-1.03 3.585 0 3.213-1.135 4.811-2.023 5.628a5.706 5.706 0 0 1-3.852 1.527 6.144 6.144 0 0 1-3.32-.976c-1.366-.905-2.219-2.326-3.088-3.745-.692-1.153-1.171-2.06-1.918-3.816-.421-1.018-.813-2.012-1.15-3.094-.16-.514-.142-.905.053-1.153.195-.23.462-.337.78-.355.55-.018.764.373 1.083 1.384.195.639.586 1.563.816 2.077.302.621.728 1.455.923 1.74.16.25.302.32.461.32.284 0 .497-.16.497-.443 0-.16-.16-.426-.248-.586-.16-.302-.497-.905-.728-1.42a32.775 32.775 0 0 1-.763-1.917c-.142-.373-.301-.905-.461-1.437-.248-.816-.373-1.313-.373-1.687 0-.568.426-.94 1.065-.94.461 0 .763.23.958 1.064.16.763.444 2.006.852 2.982.266.639.656 1.492.887 1.918.142.248.301.461.301.55 0 .124-.23.32-.426.585-.124.16-.177.267-.177.39 0 .107.071.214.177.356.107.142.213.284.338.284.088 0 .142-.036.195-.107a6.12 6.12 0 0 1 1.847-1.563c.816-.461 1.651-.692 2.308-.834.319-.07.408-.142.408-.32 0-.212-.16-.336-.373-.354-.16-.018-.301 0-.55.018-.177.018-.266-.071-.372-.302-.32-.674-.94-1.811-1.313-3.266a13.95 13.95 0 0 1-.39-2.13c-.054-.391.017-.533.212-.71.249-.213.692-.302 1.03-.213.407.106.62.426.833 1.67.107.585.284 1.33.497 1.97.266.816.603 1.492 1.118 2.397.284.497.638 1.011 1.011 1.51-.071.213-.195.354-.603.692-.408.337-.816.692-1.189 1.348-.266.479-.39 1.011-.39 1.366 0 .337.07.408.284.408.372 0 .674-.07.692-.23.088-.64.195-1.047.55-1.528.212-.266.585-.603.887-.87.567-.46.763-.727.958-1.383.088-.302.195-.586.337-.852.337-.62.94-1.33 1.882-1.33.302 0 .55.088.71.337a.966.966 0 0 1 .124.479zM12.608 7.265c.16.658.355 1.226.55 1.723.23.605.497 1.12.87 1.811.177.337.265.337.691.107a9.14 9.14 0 0 1 1.207-.515c-.639-1.384-1.171-2.539-1.437-3.514a29.883 29.883 0 0 1-.39-1.918c-.054-.497-.107-.923-.231-1.384-.142-.568-.338-.834-.888-.834-.514 0-1.135.266-1.135.94 0 .444.124 1.1.248 1.631.213.516.249.835.515 1.953zm-7.484 7.147c-.43.116-2.276.784-2.721.957-.503.195-.857.372-.605 1.122.205.607.553.636.874.516.45-.166 2.442-1.21 2.818-1.442.34-.21.45-.37.29-.769-.145-.363-.354-.465-.656-.384zm-1.276-3.074c.252-.008.448-.09.508-.526.047-.335-.006-.51-.39-.629-.371-.114-2.702-.494-3.205-.542-.434-.042-.702 0-.753.687-.049.64.13.836.572.88.508.05 2.733.144 3.268.13zm-2.63-6.082c.474.283 2.293 1.385 2.906 1.579.306.096.468.01.64-.331s.218-.477-.111-.742c-.34-.274-2.123-1.661-2.628-1.924-.435-.226-.729-.139-.993.361-.299.566-.244.798.185 1.057z"
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
export class SvgClubhouseIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
