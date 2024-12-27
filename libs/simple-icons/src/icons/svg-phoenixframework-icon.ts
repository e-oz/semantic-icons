import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-phoenixframework-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Phoenix Framework</title>
      <path
        d="m9.012 15.241-.188-.036c-1.34-.248-2.186-1.06-2.588-2.334-.25-.794.204-1.38 1.038-1.416.682-.032 1.15.36 1.562.816.532.588 1.02 1.216 1.542 1.814.754.86 1.64 1.412 2.854 1.24a5.404 5.404 0 0 0 2.86-1.308c.124-.108.26-.2.392-.302l-.084-.098a6.034 6.034 0 0 1-2.12.252c-1.092-.054-2.132-.282-3.064-.882-.848-.548-1.476-1.28-1.774-2.26-.24-.79.252-1.344 1.072-1.23.313.049.606.187.842.398.2.168.39.346.594.51.958.77 2.294.812 3.508-.022-1.996-.01-3.354-1.108-4.548-2.5-.466-.544-.922-1.1-1.4-1.636-.92-1.038-1.944-1.952-3.346-2.264-1.79-.398-3.518-.136-5.176.622A4.214 4.214 0 0 0 0 5.217h.352c.836-.022 1.464.35 1.916 1.034.328.498.482 1.06.6 1.64.176.86.086 1.734.188 2.598.26 2.22 1.394 3.768 3.506 4.56.774.292 1.568.39 2.45.19v.002zM3.674 5.113c-.334.084-.6-.05-.874-.328.47-.118.886-.164 1.332-.18a.562.562 0 0 1-.458.508zm10.938 12.96c-.03-.212-.212-.306-.356-.42-.634-.492-1.378-.668-2.164-.682a4.08 4.08 0 0 1-1.378-.208c-.204-.076-.43-.174-.426-.436.006-.266.238-.34.448-.404.174-.052.352-.084.548-.13-.5-.32-.988-.364-1.636-.102-1.024.41-2.032.36-3.052-.006-.574-.208-1.086-.534-1.618-.824l-.026.02c.44.722 1.038 1.304 1.71 1.8 1.296.96 2.712 1.53 4.37 1.276a22.8 22.8 0 0 1 1.614-.19c.676-.054 1.32.136 1.966.308v-.002zm-3.124-10.37c-.036-.026-.07-.09-.144-.024a5.258 5.258 0 0 0 2.284 1.776c1.488.604 3 .708 4.544.174 1.2-.414 2.06-.01 2.508 1.156.066-1.352-.73-2.338-1.996-2.53-.712-.11-1.37.128-2.038.32-1.856.54-3.584.274-5.16-.872h.002zm9.256 5.272.726.064c-.546-.48-1.212-.52-1.888-.48-1.026.058-1.766.65-2.44 1.356-.594.624-1.13 1.324-2.016 1.574l.02.04c.12.002.24.008.36.002 1.288-.058 2.5-.33 3.464-1.264.306-.294.576-.62.87-.926.226-.258.562-.394.904-.366zm-2.992-1.596c-.96.084-1.794.48-2.58 1.006-.602.404-1.248.594-1.972.468-.128-.022-.258-.04-.384-.058l-.006.054c.046.024.092.05.14.07.12.048.24.106.364.136 1.396.33 2.732.16 3.936-.618.76-.49 1.546-.582 2.398-.456.086.014.172.028.258.036.08.008.164.088.272 0a3.454 3.454 0 0 0-2.426-.638zm-3.434-3.26a2.68 2.68 0 0 0 1.534-.364c-.154.014-.22.014-.282.026a2.296 2.296 0 0 1-1.96-.472l-.646-.5c-.856-.652-1.836-.872-2.91-.852.018.052.02.088.038.106 1.168 1.18 2.52 1.996 4.226 2.054v.002zm8.452 6.06c-.724-.72-1.694-.81-2.59-.186.594.028 1.04.216 1.4.592.128.134.262.26.404.378.548.44 1.474.46 2.016.052-.636-.248-.636-.248-1.23-.838v.002zm-7.198 5.486c-.634-1.18-1.7-1.448-2.936-1.368.364.1.708.26 1.02.474.286.2.526.448.764.702.472.504 1.208.812 1.696.708-.224-.14-.546-.514-.546-.514h-.012l.008.006.004.018c.004-.02.006-.016.008-.01h.02l-.028-.012v.01l.01.004s.114.208-.008-.018z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPhoenixframeworkIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
