import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-toggl-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Toggl</title>
      <path
        d="M1.356 7.446v.64c0 .711-.541 1.286-1.209 1.286-.05 0-.098-.003-.147-.009v1.58h.82v1.588c0 .625.112 1.107.338 1.434.347.501.734.83 1.676.83.546 0 1.004-.126 1.304-.293v-1.868a1.266 1.266 0 0 1-.444.074c-.363 0-.512-.112-.647-.282-.087-.112-.13-.276-.13-.489v-.994h1.22V9.161h-1.22V7.446zm19.862 0v5.04c0 .627.093 1.149.319 1.478.347.5.816.827 1.75.83a1.76 1.76 0 0 0 .713-.173v-1.92c-.441.055-.594-.256-.594-.565v-4.69zm-6.552.519-.722 1.004a2.885 2.885 0 0 0-.883-.133c-.628 0-1.258.185-1.718.617-.449.419-.658 1.005-.658 1.605 0 .6.21 1.186.658 1.605.039.038.08.071.12.104l-.084.045c-.21.12-.402.273-.568.451-.284.303-.568.756-.568 1.36 0 0-.039 1.286 1.438 1.286h1.071c.247 0 .498.157.498.403 0 .086-.025.17-.072.242h2.048c.309-.351.475-.806.466-1.274-.014-.403-.133-.831-.435-1.113-.34-.316-.831-.46-1.288-.46h-2.038c-.2 0-.379-.151-.379-.338a.338.338 0 0 1 .252-.326s.034-.008.072-.02c.371.171.776.258 1.185.254.627 0 1.256-.185 1.717-.617.449-.419.658-1.005.658-1.605 0-.6-.21-1.186-.658-1.605a2.095 2.095 0 0 0-.433-.31c.432.1.879-.023 1.186-.553zm5.182 0-.722 1.004a2.883 2.883 0 0 0-.882-.133c-.628 0-1.257.185-1.717.617-.449.419-.658 1.005-.658 1.605 0 .6.21 1.186.658 1.605.131.122.278.228.436.313a2.621 2.621 0 0 0-.32.287c-.284.303-.568.756-.568 1.36 0 0-.039 1.286 1.438 1.286h1.07c.247 0 .498.157.498.403 0 .086-.024.17-.071.242h2.048c.309-.351.475-.806.466-1.274-.015-.403-.135-.831-.439-1.113-.34-.316-.831-.46-1.288-.46l-2.362-.017c-.15 0-.263-.094-.263-.232 0-.115.057-.283.2-.311.282.088.576.132.872.13.628 0 1.257-.185 1.718-.616.448-.42.658-1.006.658-1.606 0-.6-.21-1.185-.658-1.604a2.085 2.085 0 0 0-.435-.31c.433.1.879-.024 1.186-.554zm-12.45.886c-.771 0-1.542.247-2.107.823-.552.561-.808 1.346-.808 2.149 0 .803.257 1.587.807 2.149.566.576 1.337.823 2.107.823.77 0 1.541-.247 2.106-.823.55-.562.807-1.346.807-2.149 0-.803-.257-1.588-.807-2.15-.565-.575-1.335-.822-2.106-.822zm5.74 1.622a.566.566 0 1 1-.582.565.527.527 0 0 1 .143-.378h.001a.565.565 0 0 1 .438-.187zm5.194.001a.564.564 0 1 1-.581.564.526.526 0 0 1 .144-.378.564.564 0 0 1 .437-.186zm-10.872.593a.73.73 0 1 1-.75.732.678.678 0 0 1 .186-.49.73.73 0 0 1 .564-.242z"
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
export class SvgTogglIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
