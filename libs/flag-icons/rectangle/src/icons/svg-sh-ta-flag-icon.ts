import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sh-ta-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sh-ta"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#006" d="M640 480V0H0v480z" />
      <path
        fill="#8fc5ff"
        stroke="#fff"
        stroke-width="4.3"
        d="M574.5 199.7c0 63.7-10.2 132.5-93 165.3-82.6-32.8-92.7-101.6-93.1-165.3z"
      />
      <path
        fill="#366cc9"
        stroke="#000"
        stroke-width="4.3"
        d="M481.4 364.7A134.1 134.1 0 0 0 555 302h-7.8c-2.3-.4-79.4-7.8-88.7-11.7-7.9-2.8-38.4 2.7-52.4 7.8a133 133 0 0 0 75.4 66.5z"
      />
      <path
        fill="#5d3100"
        stroke="#000"
        stroke-width=".4"
        d="M423.6 325.6h4.7c1.1 0 1.1 0 1.5-1.2.4-1.2 1.6-.8 2.4-.4.7.4 2.3 0 3-.8.9-.8.9-.8 1.7 0 .7.8 1.1.4 2 0 .3 0 1.9-.8 2.3-2 .3-1.1 1.5-1.5 2-.7.3.8 1 .8 1.9.8.7 0 .7.3.7 1.5 0 .8 0 1.2 2-.4 1.6 1.6 2 .8 2-.8 0-1.5 0-7.8-.8-8.2-.8-.4-1.2-3.1-1.6-5 0-4 0-4-3.9-6 0-1-.8-1.5-4-1.5.5-.4 0-1.5-.7-2-.8-.3-.8-.7 0-2.3.8 0 2.4 0 2.7-1.2.8-.7 3.2-.7 4.7 0 1.6.8 3.2.8 5.9 0l4.7-2.3c2-1.2 2.3-1.6 2.3-3.1 0-4-1.1-7.8-2-9.8-1-2-1-4-2.7-7.4-1.5-3.2-1.5-4-3-5.9-.9-.8-1.3-1.2-1.3-2.3a5.9 5.9 0 0 0-2-4c-3-2.7-3.8-11.7-5.4-18.3-.8-4 0-13-1.5-14.5-2.8-2-4-1.6-6-2.3-1.5-2-1.9-5.5-3.4-9-2 .4-3.2 2.3-4.3 3-1.2.9-1.6.9-1.6 2.8 0 1.6-1.2 4-2.7 7-1.6 3.2-5.1 2-7.9 6.3-5.4-6.6-5.4-8.6-5.8-10.5 0-2-1.2-2.4-4.3-5.1v-6c-2.8-2-4.3-1.5-5.5 0-1.2 1.2-2 3.1-3.9 4-.8 1.5-4 4.6-6.3 9 2.4 35.1 10.2 70.3 34 98.5z"
      />
      <path
        fill="#ff0"
        stroke="#fff"
        stroke-width="4.3"
        d="M574.5 199.7c0-24.3-1.2-47.8-.8-68a248.7 248.7 0 0 0-92.3-16.9c-20.7 0-61.4 3.1-92.2 16.8.7 20.3-.8 43.8-.8 68z"
      />
      <path
        fill="#cf6200"
        d="M393.5 227.4c1 1.6 2.9 4.3 3 6 .8-1.6 1.4-2.2 1.5-3.1 0-1 1.3-2.7.8-3.7-.4-1-.7-1.7.4-1s.9 2 .7 3.8c-.7 5-2.7 6-3 9.3 2.9 7 .7 9.6 4 16.6.5.2 1.8-.3 2.2-.2 1.8-1.2 3-.9 5.5-.3 2.4.5 3.7 2.2 3.7 3.8 0 1.6 0 1.9.6 2.8.5.8 1.4 2.3 1.3 3.4-.3 1 .1 1.6.5 2 .3.5-.2 1.8-.4 2.4-.3.6-.2 1.7 1 3.2 1.2 1.5 4 7.9 4 11.6 0 3.9.3 5.6 1.8 6.3 1.5.7 2 1.3 1.8 2.9-.2 1.5.7 10 .9 11.4.1 1.3.7 1 1.4 1.7.6.7 1 1.5 3 1.5 2.1 0 4-.2 5.2 0 2 2.5 3 6 3.5 8.1.5 2.2.4 5 1 5 .8 0 1.5 0 1.3-2.5-.2-2.6-.4-3-1.3-4.4-1-1.3-1.5-2-1-2.7.5-.8.6-2 .5-3.1-.2-1-.6-2.6 1.2-.6l2.7 3.3c.5.6.7 2 .6 3.3-.1 1.2 0 1.7.9 1 .7-.6 1.5.5 1 1.8-.3 1.3.3 2.1 1.5 2.6 1.2.4 1.7.7 2 1.6.3.8 1.3 1.3 1.3-.6a27 27 0 0 0-1.2-6.9c-.5-1.2-.9-3.8-1-5.4-.2-1.5-.4-1.9-1.1-2.1-.7-.3-1.4-1-1.5-1.6 0-.7-.7-1-1.1-1-.5 0-.9-.3-1.2-.8-.2-.6-.5-.6-1-.6-.5-.1-1.3.2-1.6-.6-.2-.8-.6-2-1.1-2.6-.5-.6-.9-.9-1-3.2 0-2.3 0-2.6-.8-3.4-.8-.8-2-3-2.5-3.8-.4-1-1-1.9-1 0 0 2 0 3 1.3 3.7 1.2.7 1.5.7 1 1.8-.6 1 0 1.7.2 2.4.3.7.6 1.4 0 2-.6.8-1.2.6-1.1-.5a6.4 6.4 0 0 0-.9-3.3c-.4-1-.9-1.6-1.5-1-.6.4-1.1-.2-.7-.6.5-.4.3-.7 0-1-.2-.2-.4-.6.1-1.2s.5-.9.2-2.3-2.5-8.6-3.5-10.2c-1-1.7-.9-2.8.3-1.3 1.3 1.6 2.5 3 2.7 4.4 0 1.4.3 2.2.7 2.6.5.5.7.4 1-.8 0-1.1 1-.7-.4-2.8-1.5-2.1-4.1-5.7-5.2-12.2-1-6.4-1.4-10.5-2.4-12.2-1-1.8-1.3-2.2-1.4-3.8-.1-1.6 0-3.3-.7-4.5-.7-1.2-1.2-1.4-1.3.4-.1 1.8 0 6 .6 6.6.6.7.2 2.6 0 3.5-.2 1-1.7 2.1 1.7 4.1 1.3.9 1 2 1 2.6-.3.8-.5.7-1.2-.4s-1.4-2.1-2.1-2.6c-.7-.5-.9-1-.7-2.5.2-1.5.3-2.5 0-3-.4-.4-.6-.1-.9.8-.2.8-.3 3-.9 3.6-.5.6-.5.2-.8-1.1-.4-1.3.1-3.4.8-5.7.7-2.2 1.2-4.8.6-7.8s-.4-4-2.6-6.5c-2.4-2.6-5.1-5-6.1-8.1-1.2-3.2-1.4-6-2.7-7.4a17 17 0 0 0-4-3.7v-4.7c0-1.2-.5-1.8-1.8-1.6-1.3.2-2.2 1.3-3 2.8-.8 1.6-1.4.9-2.6 3.5-1.2 2.6-2.6 4-2.6 6.8z"
      />
      <path
        fill="#cf6200"
        d="M400.8 257.1c1 .6 1.7.9 3 .3 1.1-.6 2.5-2.4 4.3-.6a11 11 0 0 1 2.4 6.7c0 2.3 0 6.5 2.6 8.8 2.6 2.3 3.9 4.8 4 7.8a53.2 53.2 0 0 0 1.4 9c.4 1.2 1 2.6 1.9 3.5.7.8 1.4 3.1 1.5 5.5.1 2.5-.3 4.1 0 5.4.4 1.2 0 2.2-.8 1.7-1-.5-1.2-1-1.8-2-.6-1-1-.9-.5.7s2 3 3.3 3c1.3 0 1.7.1 2.6 1 .8.8.9 1.2 2.3 1.2s1.6 0 3 .4c1.3.3 1.3.2 2 0 .7-.3 1.4.4 1.9 1.7.4 1.3 1.7 5 1.7 6s0 2 .7 3c.7 1.1.5 2-.3 1.5-.7-.6-.8-.5-1.3-.3-.6.2-1-.2-1.9-.8-.8-.4-.3-.3-1.1-1.5-.8-1.3-1.3-1.7-1.3-.7s-.2 2-.8 1.4c-.6-.5-.9-.5-1.4 0-.5.6-.7 1-1.3 0-.6-1-1.3-1-2-1.3-.5-.1-.5-.1-.8-1-.3-1-1.3-1.2-2-1.2-.9 0-1.3-.4-1.4-1 0-.6-.6-1-1-1.3-.5-.3-.2-1-.3-1.7 0-.7-.7-.5-1.1-.6-.5-.2-.7-.1-.7-1.2 0-1-.5-1.3-.7-2-.4-.8 0-1.5.2-2.2.1-1 0-1.4-.6-2-.6-.8 0-1.5-1.7-3-1.7-1.3-2.5-.1-3-3.4a43.7 43.7 0 0 0-2.4-11.4c-1-1-1.5-2-2.5-2.3-1-.3-1.4 0-1.5-2-.1-2-.7-4.4-2-5.6l-2.3-2.2c-.6-.4-.9-1.4 0-3 .9-1.8.5-4.2.4-5.3-.1-1-.4-2.6-.2-3.8.2-1.2 0-2.7-.2-3.5-.3-.7-.7-1-.2-1.7zm24.5-28.8a22.1 22.1 0 0 1-4.7 4.6c-1.9 1.4-4.3 2.4-3 4.7 1.4 2.3 2.5 2.6 2.7 4.3.3 1.8.8 3.3 2 3.7 1.5.4 2 .2 2 3 0 2.7 0 4 1.2 5s1 2.2 1.6 4.7c.6 2.6.6 8.2 2.2 12 1.5 3.7 5.3 11 4.8 12.4-.4 1.5-.8 2.6.7 4.4 1.7 1.7 2.7 4.3 3 5.8 0 1.5.3 2 2 1.5a6 6 0 0 0 2.9-1.7c.5-.7 1.6-.6 3.1.2 1.5.9 3.8 1.6 5.2.9 1.3-.9 2-2.1 3.2-2.1 1.9-1.4 2.6-4.2 3-5 .4-.8.1-.8-.7-1.6-.8-.8-.4-2.2-.5-3.5-.2-1.4-.7-3.5-2.3-6.5-1.6-3-2.7-6.6-3.7-7.5-1-1-1.6-3.3-1.7-4.4-.1-1-1.4-2-2.2-2.8-.9-.9-1.6-2-2.6-6.8-1-4.7-1.6-8-1.6-9 0-.8-.2-.8-1-1.2-.8-.3-1.2-1.6-.8-2.2.1-.7-.4-1.4-.7-2.2-.2-.8 0-2.3.6-3.2.5-.8.4-3-.1-5-.5-1.8-1.1-3.4-3.3-3.8-2.1-.2-2.6-.8-3.3-2.6-1-1.7-1.8-4.8-2-5.5-.2-.7-.7-.8-2.3.6-1.6 1.3-2.2 1.7-2.2 4.3 0 1.7.4 2.2.9 3.1.5 1 .7 1.3 1 3.8.4 2.5 2.7 6.6-.2 9-3 2.2-2.6 2.8-2.5 4.4.2 1.7-.8 2.7-1.3.5-.6-2.4 0-3.7 1.6-4.8 1.6-1 3.1-2.5 2-4a19 19 0 0 1-1.7-6.6c-.1-1.6-.3-2.2-1.3-.9"
      />
      <path
        fill="#00b800"
        d="m401.2 262.8.3 3.3c0 1.1.4 3.5-.5 5.2-.8 1.7-.6 2.6 0 3.1h.1c1.7-.5 2-2.3 1.5-3.2a3.2 3.2 0 0 1 .2-3c.5-1 .5-1.5 0-2.2-.5-.7-.5-.7 0-2.6.6-1.7-.7-1.7-1.6-.6m17.4 26.3c-.3-1.2-1.5-6-1.5-9-.1-3-1.5-5.5-4-7.8-2-1.8-2.4-4.7-2.6-7-1.5-.9-2-.5-1.9 1.2 0 1.8 2 2.6 1.7 5.3-.3 2.6-.3 2 1 3.3 1.1 1.2 1.7 2.6 1 3-.7.5-.7 1.5.2 1.8 1 .4 1 1.4.9 2.4-.1.9.9 1.1 1.3 1.7.6.7.6 2.4 0 3.3-.4 1-.5 2.5.4 1.7 1-.9 1.4 0 2.1 1.2.6 1 1.2.7 2 .5a8.5 8.5 0 0 1-.7-1.6zm13 23.6c-.4 1.2-1.1.9-1.7.3-.6-.6-1.3-.6-1-1.8.2-1.1 0-1.3-.7-1.9l-.3-.3h-.8c-1.5 0-1.6-.3-2.5-1.2a6.8 6.8 0 0 0-.5-.4v.8c0 1.1 0 .8-1 1.2-1 .3-1-1.1-1.2-2a3.4 3.4 0 0 0-.1-.6 4 4 0 0 1-3-2.9c-.5-1.6 0-1.7.6-.7s.7 1.3 1.6 2c.8.5 1.2-.5.8-1.7a5.2 5.2 0 0 1 0-1.3 2 2 0 0 0-.8-1c-1.8-.7-1.2-.8-1.2-2.2.2-1.3-.1-1.3-1.2-.6-1 .7-1 0-1-2.2 0-2-1.4-2-1.7-.6-.3 1.5-.9.5-1.4-1.5-.5-2-1.5-2.6-1.5-.6 0 1.7-.6 2-1.6 1.2l.4 3.1c.5 3.3 1.3 2 3 3.5 1.6 1.4 1.1 2.2 1.7 2.9.6.7.7 1.2.6 2-.3.8-.6 1.5-.3 2.2.3.8.8 1 .8 2.1 0 1 .2.9.7 1.2h.8l.7-1c1.3-1.2 3 0 3.7 1.7.6 1.5 1.3 1.9 2.3.6 1-1.2.6-1 1.6.1 1 1.2 1.4 1 1.4 1s1-.4 1.8.2c.7.6 1 .5 2.4-1.4 1.3-2-.6-1.4-1.2-.2zm3.8-55.8c.4-3 .1-5.9 1.3-7 1.3-1 2.7-3.3 2.7 1.4-.2 4.6-.4 4.3-1.3 5.4-1 1.1-1.8 1.4-1 3.1 1.1 1.7 1.2 2 1.1 4.6-.1 2.7-.1 3.9.9 5.2 1.1 1.4 1.4 1.4 1.7 3a8.4 8.4 0 0 0 2.4 4.5c1.2 1.2 2.6 4.2 2.7 6.4.2 2.2 2 2.7 3.8 4.3 1.8 1.5-.4 2.5-1.7 1.8-1.4-.6-.9 0-1.7 1-.8 1-1 1.1-1.7-.6-.7-1.6-3-2.7-4.1-3.1-1.1-.4-2-2.2-3-4a5.2 5.2 0 0 0-3.9-2.6c.4 1.1.6 2 .5 2.4-.4 1.5-.8 2.6.7 4.4 1.7 1.7 2.7 4.3 3 5.8 0 1.5.3 2 2 1.5a7.2 7.2 0 0 0 2.9-1.7c.5-.7 1.6-.7 3.1.2 1.5.8 3.8 1.6 5.2.8 1.3-.9 2-2 3.2-2 1.9-1.4 2.6-4.3 3-5 .4-1 .1-1-.7-1.7-.8-.8-.4-2.2-.6-3.5 0-1.4-.6-3.4-2.2-6.4-1.7-3-2.7-6.6-3.7-7.5-1-1-1.7-3.3-1.7-4.4-.2-1-1.4-2-2.2-2.9-.9-.8-1.7-2-2.6-6.7-.7-3.7-1.4-6.6-1.5-8-1 1.5-1.7 2-2 .8-.5-1.2-.9-1.8-1.5-1-.5.8-.7-.8-.7-1.5s0-.7-.9-.7c-.8 0 0-1-.3-3.2-.3-2-.7-2.2-.9.2-.3 2.4-1.7 4-1.1 4.4.5.6.2 1.7-.3 3.3a5.1 5.1 0 0 0 0 3.6c.4 1-.2 3.2-.4 4.9-.3 1.7 1.1 3.5 1.5.6zm-24.8-24.2c-1 0-1.7 1-1.1 4 .4 2-1 1.6-1.6.6-.5-1-1-3-2-4.7-1.1-1.7-.6 1.1-.7 2.8-.2 1.7.9 1.7 1.8 3 1 1.4.2 1.9-.8 1.9s-.7 2.2-.4 3.6c.3 1.5-.3 1.8-1 .6-1-1.3-.3-3-.2-5.4.2-2.3.3-1.8-1.2-2.3-1.5-.6-1.3-.9-.6-2.2.5-1.4 1-2 .3-2.7-.6-.7-.5-1.1.6-1.2 1-.2.6-1 1.6-1.2 1-.3 1.4 0 1.5-1.7.1-1.5.6-2.3 1.7-1.9.7 2.3 1.5 5.8 2.1 6.8m13.7 16c0 2.8 0 4 1.2 5s1 2.2 1.6 4.7c.6 2.6.6 8.2 2.2 12l1.8 4a7.7 7.7 0 0 0 2-2.6c.3-.8-.9-2.8-1.8-4.3-1-1.8.1-2.3 1-4.4 1-1.9 0-2-1.6-2.6-1.4-.5-1.4-2-2.2-4.1-.8-2.2-.7-3.1-.2-4.4.5-1.2.2-2.1-.9-2.4-1.1-.3-.8-1-.4-2.4.4-1.3.7-1.6-1-1.3-1.2.4-1.5.7-1.9 1z"
      />
      <path
        fill="#5d3100"
        d="M439.9 254.3c-.2 1.6-.2 2.5-.6 3-.4.5-.1 1.3.3 2.2.5.8.6 1.8.3 3.4-.4 1.5.2 2.6 1 3 .8.4 1.2 0 1 2a5.8 5.8 0 0 0 1.7 4.7c1 .8 1.7 2.1 1.5 3 0 .8.7 1.5 1.7 2 1 .4.8.5.8 1s.4.6 1.4.9c1 .3 2 .9 3.2 2.4 1.2 1.6 3 2.3 2.7.7-.3-1.5 0-2.8-1.6-3.5-1.7-.8-2.9-4.7-3.5-7.4a17 17 0 0 0-4-7.1c-.3-2 0-2.9-1.2-3.8a4 4 0 0 1-1.7-3.2c0-.8-.6-2-1.2-2.4-.5-.3-.8-.9-.8-1.8 0-.8-.8-.7-1 1z"
      />
      <path
        fill="#00d860"
        d="M432.7 327a39.2 39.2 0 0 0 9.7-2.8c1.7 1.1 4.5 2.6 5.7 2.6-2.3.5-3.9.3-4.4-.2.3.7 1 1.9 1.6 2-2.3 0-4.8-.6-5.6-1.4-2 .8-5.2 1-7-.2m4.3 3c.9.3 5.2 1 5.8 1-1.4 1.2-.2 2.4 2.1 2.2-1 .2-2.4.6-1.5.8a24.4 24.4 0 0 0 8.9-1.8c-2 2.5-11.4 4.8-15.3-2.2m4 6.1a9 9 0 0 1 5.3.3c-1.4.6-4.5.6-5.4-.2z"
      />
      <path
        d="M445.3 336.1c2-.3 8 1 10-.2-.7 1.9-4.3 2.2-5.7 1.7-1.3-.3-2.5-.8-3.4-.8.6-.3-.2-.3-1-.7z"
      />
      <path
        fill="#00d860"
        d="M447.4 339a30.5 30.5 0 0 0 9-1.1c1.7.6 5.4 1.6 6.2 1.5-1.7 1-5 .4-6 0a10.9 10.9 0 0 1-9.2-.4"
      />
      <path
        fill="#00d860"
        d="M450 339.9c2.3.5 4.3.2 6.5-.5.7.2 2.3.6 3.9.6 1 .5 2.3 1.3 3.7 1.5a16.6 16.6 0 0 1-7.5-.7 19.2 19.2 0 0 0-8 1.5 3 3 0 0 1 1.5-2.3z"
      />
      <path
        d="M447.4 328.6c1.7.5 8.2.2 11.3-1.3 1.4-.7 2.2.4.7.8-5.2 2-9.5 2.6-12.5 1-1.2-.6-1.4-1.2.5-.6z"
      />
      <path
        fill="#00d860"
        d="M478.6 319.8c-7.9 3.7-13 4.8-23.9 1.4-1-.2-1.7 0-.6.7a40 40 0 0 0 8.5 2.6c1.4.1.9.7 0 1-.8.2-1 .8.1.4 1.1-.5 7.8-.7 10.5.7 1.1.7 1.4.5 1.3 0-.1-.4.5-.7 1.4-.8.8-.1 1.4-.4.7-.6-.7-.3-.8-.5-.3-.7.5-.3.6-.6-.2-.7-.7-.2-1.3-.4-.6-.7a9 9 0 0 1 2.6-.7c.2-.5-.1-2 .5-2.6"
      />
      <path
        d="M465.6 320.7a26 26 0 0 0 17-6c1.6 1 3.7 2 4.9 2.2 1.1.2 2 1.2.3 1.2s-4-.7-5.2-1.2a29.5 29.5 0 0 1-17 4.3c-1.1 0-1.4-.5 0-.4z"
      />
      <path
        fill="#00d860"
        d="M452.3 296.3c1.6 1.1 4.3 2.9 7.8 2.6a17 17 0 0 0 5.7 3c-2.4.8-5 1.7-5.6 2.4-1-1-2.5-.8-2.8-1.4-1 1-.9 1.3-.2 1.8a22 22 0 0 0 7 .9c1.2-.4 1.7.7.6 1-2.7 1-8 0-9.8-2.9-2-2.9-3.5-4-8.5-1.3-.5-1.5-.5-1.7-1.5-1.7s-2.8-1.3-1.4-1.3 5.4-.6 8.7-3z"
      />
      <path
        fill="#00d860"
        d="M453.6 303c-1 .1-3.3 1.4-4.1 1.5-.9.2-2.4 1.4-.9 1.4 1.7 0 3.7-1.7 4.8-1.7 1.1 0 1.2-1.5.2-1.3zm5 5c-.7.2-3.3.8-4 .8-.7 0-1.5 0-1.4.6.1.5.3.9-.9.7-1-.2-1.9.3-2.1.6-.3.3-.5.6.6.7 1 0 1.6.3 2.9-.4 1.2-.6 2.3-1.3 3.6-1.4 1.3 0 2.6-1.8 1.2-1.5z"
      />
      <path
        d="M454.9 311.1c1.1.9 6.6 2.6 8.5 2.6 2-.1 1.7.7.2 1a12.2 12.2 0 0 1-9.6-2.7c-1.2-1 0-1.4.8-.9z"
      />
      <path
        fill="#00d860"
        d="M480.8 314a21 21 0 0 1-10.2.3c-1.7-.6-3.3-.6-2 .6 1 1.1 4.8 1.8 7 1.3-7.6 1.7-9.6 1.6-11.4 1.3a38 38 0 0 0-7-.2 6 6 0 0 1-3.3-.4c-.7-.5-.9-1.1 1.1-.9 2 .1 2.3-.2.6-.5-1.8-.3-4.1.4-1.8 2 2.4 1.4 7.4-.2 10.7.8a18.6 18.6 0 0 0 16.7-3.8c.3-.2.9-1-.4-.6zm-20.6-6.3c.2.6.2 1 0 1.4-.2.4-.1.9.5.4s1-1.2 1.8-.8c.7.3 2.3.3 3 .2.8 0 1-.3 0-.7a7.4 7.4 0 0 0-2.9-.6c-.6.1-1.4 0-1.9-.3s-.6 0-.5.4"
      />
      <path
        fill="#00d860"
        d="M471 309.7c-.8 0-2.4-.6-3.1-1-.8-.3-2-.3-1.2 1 .9 1.2 4.6 1.7 6 1.2 1.3-.6.8-1.2 2-.4 1.4.8 2.7 1.3 3.7 1.3s1.3 0 .3-.6-1.6-.7-1.8-1.2c-.2-.5-.2-.9.9-.5 1 .3 2 .8 2.8.4.8-.4 2.2-1.3 3.5-1.3l.2-.8c-1.8 0-3 .5-3.5.6-.4.2-1.4.4-2.4.2s-2.2-.3-2.5-.5c-.4-.3-.3-.5.5-.6.8-.2 1-.7 0-.6-1 .2-4.2.2-5.8-.3-1.5-.5-2.2-.6-2.8-.3-.7.2-.6 1 .3 1 1 0 3.2.3 4 1 .6.7.6.7-.2.4-.9-.4-2.5-.2-.9 1"
      />
      <path
        fill="#00d860"
        d="m484.3 307.8-.3.8c1.9 0 6.4.4 8 1.3 1.4-1.1 1.1-1.5 2-1.2 1 .3 2.4.5 3 .3a2 2 0 0 1 1.5-.2c.6 0 2-.2 2.7-.6.8-.5 2.4-1 3.3-1 .8 0 2-.3.3-.6-1.6-.3-4.2.3-5 .6-1 .3-3.5.5-5 .5s-3.6.7-5.3.3c-1.8-.4-4.2-.2-5.3-.2z"
      />
      <path
        d="M507.9 307c-3 2.2-6.8 2.7-11.1 3-1.3 0-.9.4.2.5 4.6.5 9.8-1.2 11.6-3 .5-.6.4-1.4-.7-.6z"
      />
      <path
        fill="#00d860"
        d="M487.1 312.2a47 47 0 0 1 7.3 1.7c1.2-.2 1.5-.4 1.3-.9-.3-.4-.4-.8 1.7-.6h7.5c.8-.3 2.3-1.5 3-1.5-1.8 0-9.5.4-10.4.3-1 0-1.5 0-2.1.4-.6.3-.9.5-1.7.1-1-.3-2.1-.7-3-.1-.6.4-2.3 0-3.6.6"
      />
      <path
        fill="#00d860"
        d="M504.9 312.4c.7-.3 2.3-1.5 3-1.6 1.4-.1 2.8.4 3.5.6.7.2 1.5 0 1-.6-.4-.5 0-1.6 2-1.3 2.2.2 3.2.6 5.3.4 2.1-.2 2.9 1.3 6.7-.2-.2 1.5.5 1.6 1.2 1.3.7-.2 1.5-.2 2.7.7 1.3 1 8.7 1 10.4.7 1.8-.3 2.6.6 1.3 1s-1.6 1-1.3 1.5c.3.4.6.9-1 .7-1.7-.2-2 .3-2.7.8-.8.6-1 1-3.3.5-2.2-.4-2.7-.1-3.9 0-1.2.2-1.5.3-2.8-.1a9.6 9.6 0 0 0-5.5-.3c-1.6.6-2.7 1-4.2.6-1.5-.3-1.5-.2-.6-1 .8-1 1-1 2.8-1.1 1.8-.2 3-.7 1.9-1.4-1.3-.7-1.6-.6-3.3.1-1.6.8-2.4 1.4-4.3.4-1.8-1-2.6-.9-4-.5-1.2.3-3.2-.5-4.9-1.2m6.1 3c-2.4.4-3-1.1-5.4-.9-.8.2-2.2 1.2-.3 1 1.9-.1 4 .9 5.8.8 1.8-.1 1-1 0-.9zm-2.6 1.7c1.1-.4 3.6.5 4.8.3 1.1-.2 2 .4.8.9-1.2.4-3.7-.7-5-.4-1.1.4-2.4-.1-.7-.8zm-24.4 6.7c1.7 0 7.8-.3 10.2-5.3.2-.4.3-.6 1 0 .7.5 3.6 2.1 8.8 2.6 1.5 0 3 .8.1.7-3-.2-7.6-1-9.1-2-2.7 4.1-7.4 4.6-11 4.5-2.1 0-1.6-.6 0-.5"
      />
      <path
        fill="#00d860"
        d="M497.1 316.8c-.8 1.1-3.6 3-4.8 3.2-1.3 0-5.2-.2-6.1-.6-1-.3-2.1-.3-.8.7a11 11 0 0 0 6 1.3c1.6-.3 3.1-.8 4.2 0 1 .6 3 1.8 4.2 1.6 1.2-.3 3.5-.3 4.3 0 .8.4 2.1 1.6.1 1-2-.7-3.6-.2-4.5-.6 1 1.4 3.3 3.7 5.2 3.7.5 0 .9.9 0 1.3.8.4 3 .9 4.3-.3-.4.5-.2.7.3.9.5.2 1.1.6.2.8-1 .2-3 .3-3.6 0 2 1.3 7 3.4 12.3 2.3 1-.1 1.6-.6 0-.5-3.5 0-3.7 0-4.3-.3-.6-.4-.4-.7.6-1a24 24 0 0 1 4.3-.7c1 0 2.1-.3 0-.3-2 0-4.6 0-5.7-.4-1-.3-1.7-.9-.6-1.6 1-.7 2.1-.5 2.6-1-3.3 0-7.4-2-5.2-3.6.5-.3.4-.4-.4-.5a22 22 0 0 1-4.5-1.4c-1-.5-.4-1.1.5-1.3-2 .3-6-.7-8.6-2.6zm29.8 0c-1.8 1.3-5.3 2-6.8 2-1.4 0-1.7.4-.5.5 1.2.1 2.5.4 3 .2s.9-.2 1.6.2a6 6 0 0 0 3.8 0c1.5-.4 3.7-.6 4.7-.6 1 .1 2 .1 0-.4-1.8-.5-5-.2-5.8 0-.7.2-2.8 0-1.7-.2 1.1-.3 2-1 2.6-1.4zm-1 4a11.8 11.8 0 0 1-6.1 2.3c2 .8 3.8 3 5.2 2.8-.7.5-1.5 1-2.3 1.2a8 8 0 0 0 5.4-1c3 .8 7 .2 8.3-1-2 0-4.3-.6-5.4-1.6 1 0 1.9-.5 2.3-1.1-2.3.4-6-.7-7.3-1.8z"
      />
      <path
        fill="#00d860"
        d="M522.7 327c.8 0 1.7-.6 2.3-1a19.2 19.2 0 0 1-11.1-2.6c-2.2-1.9-2.2-.4-.7.9a11 11 0 0 0 9.6 2.8zm5.4 4.7c-.9.5-5.3.9-6.7.5-1.5-.3-2-.2-1.8.5.3.6.6 1-.6.8a12 12 0 0 0-4 .5c-1 .2-2 1-.2.7 1.9-.2 3.5-.6 5-.3 1.3.3 6.1.4 7 0 1-.4.4-.3 0-.3-.5 0-.7-.3 0-.7.7-.3 1.1-1 1.3-1.7m-42.3-5.8a62 62 0 0 1-9.6 2.5c-2 .9-3.6 1.4-4.6 1.4.7.6 3.5 1.2 4.5.9-.6.7-2 1.3-2.5 1.7 1.7-.3 3.5.2 4.4.3a12.2 12.2 0 0 1-6.7 1.4c.6.6 1.3 1.3 2.2 1.3a11.3 11.3 0 0 1-5.5.2c.6 1 1 1.6 1.8 1.8-1.7.1-3.7.4-5.4-.6 1.3 1.8 4.2 2.3 8.6 1.8 4.4-.5 8-2.4 9-3.2-1.8.2-4.3.3-5.4 0a32.2 32.2 0 0 0 8.6-3.7 4.9 4.9 0 0 1-2.8-.9 27 27 0 0 0 8-.8 5.8 5.8 0 0 1-3.5-2.3 34.2 34.2 0 0 0 17 .5c.8-.2.8-1.3-.7-1.1-2.8.2-8.3-.6-9.8-1.3a10.1 10.1 0 0 0 4 1.7c-2.5.8-6.2 1.3-11.6-1.7z"
      />
      <path
        fill="#00d860"
        d="M473.6 332.4c.5-.4 2-1 2.5-1.7-1.1.3-3.8-.3-4.5-1 1 0 2.6-.4 4.6-1.3-3.6-.1-6-.1-7.5-.9-1.4-.8-3.7-.4-4.7-.2-1 .1-.6 1.7 3.3 1.3a13.4 13.4 0 0 1-7.6 1c.4 1.4.7 2.7.3 3.5 2.1 1.2 7.7 2.7 10.5 2.5-2.5-.9-3.8-1.9-1.8-2.2 2-.2 3.2-.6 5-1z"
      />
      <path
        d="M467.3 339c4.8-.4 11.4-.5 16.6-5 1.3-1 2.2-.6.9.5a28.8 28.8 0 0 1-16 6c-2.7 0-3.9-1.3-1.5-1.6z"
      />
      <path
        fill="#00d860"
        d="M503.7 331a19 19 0 0 1-5.6.8 6 6 0 0 0-3.3.2c-.8.5-.9 1 .2 1l3.3.2a5.4 5.4 0 0 0-1.8 1.5c1.8-.4 4.7.3 5.6.8a2.6 2.6 0 0 1-2-.4c2.7 3 10.9 3 12.2 2.4-.6.5-1.2 1-1.7 1 2.2.5 4.8.4 7.5-1l-4.2-.2a4.9 4.9 0 0 1 2-1.2c-1-.2-4.2-.1-5 .3a3.5 3.5 0 0 1 1.5-1.7c-4 0-8.9 0-10.6-1 2.7.4 5.9-1.3 7.2-1.3-2.2 0-4.6-.5-5.2-1.5zm-10.1 2c-2 .5-5 1.4-5.9 1.8-.8.5-1.6.7.1.7a109.4 109.4 0 0 1 .6-.1c-.7 0-1.5 0-.1-.5 1.3-.4 3-1.3 5.2-1.7zm-4 4.9c.7 0 3.7 0 5-1 1.2.8 3.7 2.2 5.2 2.2 1.6 0 1.4.4 0 .6a10.5 10.5 0 0 1-5.4-1.7c-1.8.7-3.3.1-5-.1zM466 351.6a17 17 0 0 0 10.3 1.1c1.8 1.5 5.3 1.6 7.2 1.2 2-.4 3.7-.6 5.9 0 2 .8 6.4.9 7.7 1.9l-4.1.1c-.6.2-.3.5.8 1a22 22 0 0 0-11.3 3 6.4 6.4 0 0 1 6-3.8c-1.8-.6-7.7-.7-9.7.5a5.8 5.8 0 0 1-1.2-2c-3.1 1.7-9.2-.9-11.7-3zm-8-5.8a14 14 0 0 0 7.3-2.8c.7.6 3.5 1.2 6.5.3-.6.4-.7 1.3-.5 1.7a22.8 22.8 0 0 0-7 1.8c-1.2.6-5 1.1-6.2.4-1.2-.6-1.2-1.2-.2-1.4z"
      />
      <path
        fill="#00d860"
        d="M471.3 345.1a22.8 22.8 0 0 0-7 1.8l.5 1.7a44.4 44.4 0 0 1 15.3-1.6c-1.6.1-4.5 1.8-6.1 1.9 4-.3 7.8.5 8.8.8 1 .2 1.3 1 .5 1.8-.8.9-1.1.7.5.9 1.6 0 5-.3 6.5-1.8-.7-.6-2.2-.3-2.7-.9a7 7 0 0 0 2.7-1.6 25.3 25.3 0 0 1-4.6-.3c-.8-.2-1.5-.5-.4-1.1a6.6 6.6 0 0 0 2-1.5c-2 .5-5.1 1-7.8-1 1 .2 3.3 0 4.1-.3a5.2 5.2 0 0 0-2.2-.8c2-1 6-1.9 11.3.1a27 27 0 0 1 7.1.4c1-.8 2.6-2.8 3.5-3.2-6 .4-16.8-.6-16.5-3.8-2 2.6-6.5 4-8.4 3.6-.2.8.6 2 1.3 2.6-2 .4-5.5.8-7.1.4 1 .9 2.6 1.7 3.6 1.7-2 0-3.2.4-4.9.2"
      />
      <path
        fill="#00d860"
        d="M483.7 352.3c1.8 0 5-.2 6.6-1.7-.7-.6-2.2-.3-2.7-.9a7 7 0 0 0 2.7-1.6c4.4-.4 8.1-.2 10-.7 1.8-.5 6.5-.3 7.4-.5-4.1.7-4.9 1-5 1.7-.2.7 1.2 1.1 2.2 1.1-1.7 0-4.1 1.9-4.4 2.7-2.4-1.4-3.4.2-3.8.8-1-.4-4.4-.3-6.1 1.2-2.2-.7-3.7-1-6-.7 1.5-.3 1.2-1.3-.8-1.4zm19.5-12c1.4 0 4.4.2 5.5 0a6.5 6.5 0 0 0-1.8 1.3c3.5-.4 8.2-.7 9.6-.4-1.8-.3-3.5.9-4.4 1.4-.8.5-.3.9.9 1 1.2.2 2.7 1 .6.8-2-.2-6.4-.3-7.4-.2-1 .2-1.6-.3 0-.6a10 10 0 0 0 3.1-1c-1.2.3-3.5.3-4.3 0-.8-.3-1.1-.5-.3-.8.9-.3.3-.4-.6-.3-.9 0-3 1-4.3 2.1 1.3-1.4 2.6-2.6 3.4-3.2z"
      />
      <path
        d="M487.8 342.7a8.7 8.7 0 0 0 6.8 3c.6 0 2 .9.3 1-4.3.2-6.4-.9-8.3-3.6-.4-.6.3-1.4 1.2-.4m25.5-35.6c2.2 1 6.7 2 10.2 1.9.7 0 1.8.6.3.7a18.3 18.3 0 0 1-10.8-2c-.9-.5-.6-1 .3-.6"
      />
      <path
        fill="#00d860"
        d="M515.5 307.1c3.5 0 6.1 0 7 .9 2-.5 5.7-.9 6.4-.7.8.2 1.8-.3-.1-.7-2-.4-6.2-.6-7.6-.3-1.4.2-5.7.4-7 .2.5 0 .9.2 1.3.6m13.4 1.3c1.6-.8 6.3 0 7.7-.6-1 1.2 3.3 1.3 7 .4-1.4.8-4.5 1-5.8 1.6-1.3.6-2 .1-3-.3a11 11 0 0 0-5.9-1z"
      />
      <path
        fill="#00d860"
        d="M543.6 308.2c-3.7.8-8 .8-7-.4-1.4.6-6-.2-7.7.6 1.8-1 3-.1 4.2-2.2.8.1 2.6.2 3.2-.6 1 .3 3 .7 3.5 1.3.5.6 1.3-.2.7-1 1.7-.6.6.7 4.5-.3.9-.2 2.8-.6 3.5-.6a24 24 0 0 1-5 3.2z"
      />
      <path
        fill="#ff0"
        stroke="#000"
        stroke-width=".4"
        d="m471.6 291.1-.7-86.8c0-3.9-2-3-2 0v86zm28.2-91.4 3.1 91.4-.4.8h-2l-1.9-92.2zm26.6 77.4-1.6-74.3c0-2.4-2-2-2 .4l1.6 73.9z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-width=".4"
        d="m484.2 214.9-27.4-.4c-1.2 5.5 5.5 5 7.8 4 3.1 1.9 5.5 1.9 7 0 2.4 1.9 5.5 1.5 6.7 0 3.1 2.7 6.6 0 5.9-4zm2 13.3h-27.5c-5 4.7 1.2 7 6.7 3.9.8 1.6 3.9 2.3 6.2 1.2 2.4 1.5 5.5.4 7-1.2 2.8 1.2 6.3 1.6 7.9-4zm-.9 17.6h-26.6c-.3 4.3 5.1 3.9 7 2.7 2 3.2 6.7 2.4 8.3.4 2.7 2 5 1.6 6.2 0 2.8 2.4 5.5-.8 5.1-3.1zM487 263l-30.1-.4c-1.6 5 3.1 5.9 5 4.7.9 2.7 4.8 2 6 0 1.5 1.2 3.5.4 4.2-.8.4 2.7 4 3.1 6.7.8 5.5 3.9 10.5-.8 7.8-4.3zm26.2-7h-24.6c1.1 4.6 3.5 5.8 7.4 3 3.1 3.2 7.8 2 9 .5 5.5 4.3 8.2-.8 8.2-4zm-2.4-17.2-24.2-.8c.4 6.2 6.3 5.8 9.4 3.5 2 2.7 5.9 2 7.8 0 2.7 3.1 7.8 1.2 7-2.7zm3.2-19.2h-26c0 4.3 5.8 6.6 10.1 2.7 1.2 5.1 5.9 3.5 7.9 1.6 3 3.9 9.7-.8 7.8-4zm-1.6-13-23.5.5c0 3.9 5.5 5.5 7.5 2.3 1.2 2 5 1.6 6.2 0 1.6 2.8 4 .8 4.7 0 2.8 2 5.5.8 5.1-2.7zm27 8.7-28.2-.4c0 2.7 2.8 4 4.7 2.7 0 3.2 4 4 6.7 1.6 1.5 2.7 6.6 3.1 8.6 0 3.9 3.5 8.6.8 7.8-4zm-.4 23h-27.4c0 4 4.3 5.1 7 3.2.5 3.1 4 3.5 6 1.6 2.7 2.7 6.6 3 9 0 3 1.1 5.8-1.6 5.4-4.7zm-1.6 20.8h-21.9c0 3.9 4.7 3.9 6.7 2 2.3 2.7 5.5 2.7 7.4.7 2.7 2.4 7.4 1.6 7.8-2.7z"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="M502.5 292c-11.7 0-23.8 0-32-.9-8.2-.7-10.6-2.3-16.4-5.8L432 272c-1.9-.8-3.8.4-1.1 2l21.9 14.4a60 60 0 0 1 13.3 11.7c4.7 5.1 7.8 5.1 10.1 4.3 2.4-.7 5.5-2 9-1.1 3.2.7 7.8 1.1 10.2.7 2 2 7 1.6 9.8.8 2.7-.8 4.7-.8 6.6-.4h6.7c2 0 7-1.1 10.5-.7 4 .7 7.4 0 9.8 0a19.5 19.6 0 0 1 7.8-.4c2.4-1.6 3.1-3.6 4-5.5 2.3-.4 3-.8 3.4-2l2.4-6.2h.8v-2.4l-1.6-2.3.8-4 2-.7-.8-4-34.4.9a7.8 7.8 0 0 0-2.4 4.3l-10.2 1.5c-1.1.4-2.3.4-3.5 2z"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="m543.6 276.7 5-19.2c.8-2-1.1-2.3-1.9 0l-5 19.2z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-width=".4"
        d="M563.5 255.2c-4.3 2-6.6 3.1-8.6 2.3-2-.8-4.3-1.2-5.8-.4a2 2 0 0 1 0 .4 1928.6 1928.8 0 0 1-4.3 14.9c3 1.2 8.6 1.2 9.7 0 1.6-1.6 5.1-1.2 7-1.2 1.2-1.6 1.6-3.5 1.2-4.3-.4-.8 0-2.7 0-4 0-1 1.6-5.4.8-7.7z"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width=".4"
        d="M465 218.4a208 208 0 0 1-31.3 54.8m7.8 4.7a213 213.1 0 0 0 44.6-49.3m-27.4 16.8c-1.1 10.6-4.3 29.3-5.8 39.1m10.1-15.6c-3.9 3.9-9 10.1-13.2 13.6m49.6-34.8c-3.1 3.2-6.6 7-10.2 7.9m12.2-7a27.4 27.4 0 0 0 10.5 7.4m-12.5-24.3a33.2 33.2 0 0 1-11.7 6.7M501 232c2.3 2.3 5 5 8.6 6.7m-21.1-19.2a27.4 27.4 0 0 0 10.5-5.9m1.2 0a30 30 0 0 0 10.5 6.3m-21.5-13a15.6 15.6 0 0 0 9.4-5.4m1.2-.8c2.7 2.4 7.8 5.5 10.6 5.9m12.5 3.1c-1.6 2-5.9 5.1-8.6 5.1m10.5-5c1.2 1.9 4.3 5 6.3 5m-18.8 23.5a28.1 28.2 0 0 0 11-7.5m2 .4a21.9 21.9 0 0 0 7.3 7m-16 20.4c1.6 0 5.9-2.4 7-5m2.4-1.3a27.4 27.4 0 0 0 7.8 6.7m-73.1 3.5c5-1.6 14.9-7.8 20-13.7m-9.4 7.4c3.9 2.8 9 6 12.5 6.7m-24.3-17.6a31.3 31.3 0 0 0 9.4-5.9m2-.4c1.1 1.6 9.3 6.7 12.9 6.7m-14.9-23a38.3 38.3 0 0 1-9.8 5.4m11.8-5.5c2.7 2 8.6 5.5 12 5.5M469 207c-2.3 2.3-6.2 6.2-9.4 7.4m11.4-7c1.5 2.7 6.2 6.6 9.3 7m31.3 10.2c7.5 12.9 20.7 29 34 37.5m-55-52c10.9 15.6 32 49.7 52.3 62.2m4-13.3a72 72 0 0 1-19.2 18m17.5-13.7c-6.6-11-10.1-24.6-15.6-43m-54.7 48.5 7.8 23.4m-9.4-23.8 7.4 23.4m-9.3-24.6 7 24.2m-7.8-23.8 5.4 23.8m0-.7h6.7m-.8-2.4h-6.2m5.4-2h-6.2m5.4-1.9H474m5-2.3h-5m-.4-2h5m-5.4-1.6h5m-5.4-2h4.7m-5-1.5h4.2m-4.7-2h4m-4.4-1.5h4m-4.3-1.2h3.9m-4-1.5h3.6m-10.2 0-4.7 19.5m5.9-19.5-4 20.3M467 268l-3.2 21.5m4.7-22-2.3 22.8m2.7-1.6h-7.8m7.8-2h-9m9-2.3h-8.2m7.8-2h-7.4m7.8-2h-7.4m7.4-2.3h-6.6m6.6-2h-6.6m6.2-1.9h-5.8m5.8-2h-5m5-1.9h-4.7m4.7-1.2h-4.3m4 21.6v-23.1m25.3-7.8L478 291.5m16.8-32-13.3 32.4m14.1-32.8L485 291.9m11.8-32-8.6 32m.4-1.1h-9.8m10.5-3.2H480m9.7-2.3h-7.8m9.4-2.4h-7.8m8.2-2.3h-7.4m8.2-2.4h-7m7.7-2.7H487m6.6-2h-5.8m6.6-2.3h-5.5m6-1.6h-5.2m5.5-1.5h-5.5m5.1-1.6h-3.9m4-1.2h-3.6m3.9-1.5H492m3.9-1.6h-3.1m3-1.2h-2.7m13.3-.4 6.7 22m-5.5-21.6 8.2 21.2m-7-21.2 9.8 20.8m2.3-2-11-19.2m11 19.6h-7.8m7-3.1h-7.8m6.7-2.4h-7.5m5.9-2.7h-6.7m5.1-2.4H510m4.3-2.7h-5.1m3.9-2.7h-4.7m3.1-2.4h-3.9m12.5.4-7 20.3m9-21-6.3 20.7m2.8-.4 4.7-19.6m1.1.8-3.9 18.4m-6.6-1.2h6.6m-5.8-2.3h6.6m-5.9-2.8h6.3m-5-2.3h5.8m-5.1-2.8h5.5m-4.7-2.3h5m-3.9-2.8h4.7m-3.9-2.3h4m3.5.4 3 14m-1.9-14.8 4.3 14.5m-2.7-14.5 4.7 14.5m-2.8-13.7 5.1 13.7m-.4-1.2h-6.6m5.9-2h-6.3m5.5-1.9h-5.9m5-2.4h-5.8m4.7-2H528m4.7-1.9h-5m4.3-2h-4.7"
      />
      <path
        fill="#00b800"
        d="M467.6 299.2c3.1-2 8.5-1.7 11.3.4 3.3-1.8 9.2-1.3 11.9 1.2 4.2-3 7.7-3.4 11.7-.6a10.5 10.5 0 0 1 11.9.2c3.7-1.7 7.7-3.1 11.2.6a9.3 9.3 0 0 0-11.3.7c-3.5-3.5-9.7-2.2-11.8.3a7.7 7.7 0 0 0-11.5.2c-3.7-3-9.1-3.2-12-1a13 13 0 0 0-11.4-2"
      />
      <path
        fill="#cf6200"
        d="M523.1 294.8c-16.1 2.8-51.4 1-59-1.1-2.7-.6-2-1.6.3-1 8.9 2 27.9 2 38.3 1.4l6.2-8.5c1-1.3 1.4-1.4 3.5-1.7l8.7-1.5v1.2c-.2.3-.4.6-.7.7 0 2 .4 7.1.9 9l1.1-.3c.7-.2 1.4 1.7.7 1.8"
      />
      <path
        fill="#cf6200"
        d="M549.6 295.6h2.2c.6 0 1.6-.5 1.9-1.5l2.2-6.3-1.7-2.5.9-5.3 2-.9c.2-.3 0-1.6-.4-2l-31.6 1c-1 0-1.4 0-1.7 1.3a23.5 23.5 0 0 0 8 23.2c.5.4 1.2 0 .3-.7a26 26 0 0 1-4.3-5.7h5.2c.4 1.7 1.7 5.2 2 5.9.2.7.8.7.4-.3-.6-2-1-4.5-1.3-5.7h5.3l.4 5.2c0 .7.6.7.6-.1V296l4.8-.2-.4 5.2c-.1.9.3 1.2.5 0l.7-5.2 3.3-.2c0 1.2-1.1 4.4-1.4 5.2-.3 1 .2 1 .5.1a30.5 30.5 0 0 0 1.6-5.2z"
      />
      <path
        d="M526.5 294.8c-.5-1.1-2.3-5.1-2.4-8h7c.2 2.1.8 6.8 1.2 7.9zm5.8-8.2c.1 1.8 1 7.5 1.2 8h5.6l-.4-8.1zm-7.9-7a33.1 33.1 0 0 0-.2 6l6.7-.3-.6-5.9zm7.3-.2.4 6 6.6-.2-.3-6zm8-.3.2 6 5.7-.1c0-1.3.3-5.2.2-6.1zm7.2-.2-.2 6 6.2-.2c.3-1.3.9-4.7.9-6zm6.3 7.2-6.6.2-.6 8 6.3-.2a53.7 53.7 0 0 0 2.3-6c-.5-1-.9-1.3-1.4-2m-13.3.4.2 8 4.8-.2.6-8zm-27-1.6-2.6.4a196 196 0 0 1-6.3 8.8l9.3-.2zm1.2-.3.4 9.2 5.6-.4-1-9.6z"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="M486.9 263h-30.1v-.8l30 .4zm23.5-24.2c.3 0 .3 0 0 0l-23.5-.4c-.4 0-.4 0 0 0h23.5zm-25 6.6c.3 0 .3.4 0 .4h-26.7c-.3 0 0-.4 0-.4zm.7-17.2c.4 0 .4.4 0 .4h-27.7c-.4 0-.4-.4 0-.4zm-2-13.7c.4 0 .4.4 0 .4h-27c-.3 0 0-.8 0-.8l27.4.4z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-width=".4"
        d="m512.3 206.7-23.5.4z"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="M513.5 220c.4 0 .4 0 0 0H488c-.4 0-.4 0 0 0zm25.4 18v.4h-27.4c-.8 0-.8 0 0 0H539zm0-23.1c.8 0 .8.4 0 .4H511c-.4 0-.4-.4 0-.4h28.2zM513 255.6c.4 0 .4.4 0 .4h-25v-.4zm24.2 3.5c.4 0 .4 0 0 0h-21.9z"
      />
      <path
        fill="#ef072d"
        stroke="#000"
        stroke-width=".4"
        d="M557.3 263a11.7 11.7 0 0 0 0-5.5 4.3 4.3 0 0 1-2.4 0 11.7 11.7 0 0 0-1.2-.8 25 25 0 0 1-1.5 7.5c-1.2 0-4 0-5.1-.8l-1.2 3.9a13.7 13.7 0 0 0 5.9 0c0 2.3-.4 4.3-1.6 5.9 2 0 4 0 4.3-1.2 1.2-1.6 1.2-4 1.6-5.1l2-.4 1.9-.8 2.7-.4V263l.8-1.6-6.2 2z"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="M460.3 130.8c-3.1 0-10.2 0-11.7.8-1.2.8-1.6 1.2.8 1.6 2.3.4 6.6 2 9 3.1 2.3 1.6 3.9 4 3.9 7.8a23.5 23.5 0 0 0 11.7 24.7c.4.4.8.7.4 2.3l-1.2 4.3c0 .8-.4 1.6.8 1.2a78.2 78.2 0 0 1-4 6.2c-6.2-.7-11.6 0-11.6 7 0 .9 0 1.6.7 0 1.2-1.5 2.4-3 5.1-3.8-1.5 2.7-2.3 5-2 6.6 0 1.2.8 2 1.6 0 .4-1.6 2-3.1 3.2-4.3.7-.4.7-.4.3.8a6 6 0 0 0 1.2 4.3c.8.8 1.2.4.8-.8 0-1.6 0-4.3 2-5 2.3-1.6 4.6-.9 5.4.7 1.2 2 2 0 .8-1.6-1.2-1.5-2.3-3.5-3.9-3.5l4-6.6c0-.8.7-1.2 1.5-.8 0 .4.8.4 1.1-.8l2.8-5.5 2.3-.7 4 5.8v2.4c0 1.5-1.6 5-2 6.2-4.7 0-7 0-8.6 2.8-.8 1.1.4 1.5 1.5 1.1a7.8 7.8 0 0 1 4-1.1c.7 0 1.1.7 0 1.1-2.8 1.2-4.7 3.2-4.7 5.9 0 .8.7 1.2 1.1 0a9 9 0 0 1 5.1-4c0 2 .4 5.2 2 6 1.1.7 1.1 0 .8-1.2-.8-2 0-4 1.1-5.1 2-2.3 6.7.8 7.9 1.6.7.7 1.5 1.1.7-1.2-.4-2.7-4.3-4-7.8-4.7l4.7-16.4c2 1.2 4-2 7-.8a83.4 83.4 0 0 1 14.9 8.6c1.6 1.2 2 .8 2.7 0 .8-.4 2 0 3.2 0 .7.4 1.5.8.4-1.6a28.1 28.2 0 0 0-9.4-10.1c3.1 0 7 0 7-.8s-4.7-2.4-6.6-2.4a12.9 12.9 0 0 0 6.2-3c.8-.9 0-1.3-3.1-1.3-8.2 0-12.5 0-16.8-2.3-7-4-11.4-8.6-14.9-10.2-1.5-1.1-2.7-3.5-3.9-5.4-2-6-2-9-7-11-5.1-2-11.8.4-14.5 3.1z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-width=".4"
        d="M460.7 132.4h-6.6s-.8 0 0 0l5.8 1.6c1.2 0 .8 1.1 0 .7-.8-.3-1.5 0-.8.8 4 2.8 4.7 4 4 14.5l1.9 1.6c.8 0 .4.7 0 .3-.4-.3-2 0-.8.8s2 .8.8.8-2.3.8 0 .4c2 0 3.1.8 0 1.2-2.3 0-1.6.8 0 .8 2.7 0 2 .7 1.2.7s-1.2.8.8.8h2.7c.4 0 .8 0 0 .4-.8 0-.8.8.4.8 1.2 0 2 0 .8.4-.4 0-1.2.4 0 .8 2.7 0 3 .7 2.3 1.1-.8.4-1.2.4 0 .4s2.4.4 1.2.8c-.8 0-1.2.8 0 .8s2 .8 1.2 1.2c-.8.4-1.2.8 0 .8 1.1 0 1.5.3.7.7-.7.8-1.1.8-2 0 0-.7-.7-.7-.7 0l-.8-1.1c-.4-1.2-1.2-1.2-1.2 0 0 1.1-.7.4-1.5 0a12.9 12.9 0 0 0 15.6 3c.4 0 .8 0 1.2 1.3l2.3 4.3c.4.7 1.2 0 1.2-.8l2.4-6.7c0-1.1 1.5-2 1.1 1.2 1.2-.8 5.9-1.2 9.8 0a47.7 47.7 0 0 1 10.6 5.9 2.3 2.3 0 0 0 2 .4c1 0 1.5 0-.5-2s-1.1-2.7 0-2c1.2.8 2 .4.8-.7l-3.9-3.5c-.4 0-.4-.8-2.3-.8h-6c-.7 0-1.5 0 .9.8 2.3.7 6.6 3.9 7.8 4.6 1.2.8 1.6 2.4-.4.8a102 102 0 0 0-14-7.8c-10.6 1.2-19.2 2.4-25.5-4.3-3.1-3.5-3.1-11 2-14-.8-.9-.8-1.6-.4-1.6v-2.4c-.8-.4-1.6-1.2-1.6-2-1.2 0-2-1.9-3.9-1.1-2 .8-2.3 0-3.1-.4-.4-.8-.8-.8-2-.8s-2 0-2-.8c0-.7.8-.7 2.4 0 2.7 1.2 5 2 7-.7 1.6-2.4-.7-4.3-3.9-5.1-3.5-.8-5.8 2-7.4 3.1z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-width=".4"
        d="M477.9 131.2a11 11 0 0 0-4-2.3c-1 0-1 .8-.7 1.2v2.3c.8.4 1.2 1.2 0 1.2-.8.8 0 3.5 1.2 2.7h.8s0 1.2.7 1.2c.8 0 0 .8 0 1.2h.8c.8 0 .4 1.5-.4 2 1.2 0 1.6 0 1.6.7.4.8 1.6 1.2 1.6 2.3 0 1.2 0 1.2-1.6.8-1.6-.4-1.6 0-2 .8-.3.8-.7 1.2 0 1.2.8 0 1.6.4.4.8-1.1.3-2.3 0-2.7 1.1 0 1.2 0 1.6.8 1.2l2.7-1.6 2 .4c.8.4 0 2-.8 1.2s-1.6 0-2 .4l-2 .8c-.7 0-1.5 0-1 2 0 5.4 4.2 9.3 12 9.3h13c-2.4-1.6-4-2.3-5.2-2.3H492c.4-.4 0-1.2-.4-1.2s-1.2-.8-2 0l-3.9 2c-.8 0-2 0-.8-.8l3.6-1.6c.7 0 .3-.8.3-.8s0-1.2 1.2-.8c2.4 1.6 5.9 3.6 7 3.6 1.2 0 1.6-.8.8-1.2-.7-.4-1.1-1.2-1.1-1.6 0-.4.4-.8 2 0 1.5 1.2 3.8 2 5 2.4 1.2.4 2 .4 0-.8l-9-6.7c-1.2-1.1-1.2 0-.8.8.4.8-1.1 1.2-2 .4-.7-.8-1.1-1.2 0-1.6 1.2-.3.9-.7-.3-2-1.6-1-2-1-1.6 0 .4 1.3.4 2-.8 1.7-1.1-.4-2.3-1.2-1.1-1.6.7-.8 2-1.2 0-2.4-2-1.1-.8 0-1.2.8-.4.8-1.6.8-2 0-.4-.8-1.1-1.1-.7-1.5.3-.4.3-.8 1.1 0 .8.7 1.6 0 .4-1.2-1.2-1.2-1.5-.8-1.2 0 .4.8-.7 1.6-2.3 0-.8-.4-.8-1.2 0-1.6.8 0 .8-.4 0-1.1-2.7-4.7-1.6-8.3-4.7-11.8z"
      />
      <path
        fill="#cf6200"
        d="M478 132c-.2.4-.3.3-.8.7-.5.4-.7 1.5.3 1.4a2 2 0 0 0 1.4-.8 8.7 8.7 0 0 0-.8-1.3zm-3-2.6c-.9.8-1 1.2-.6 1.2.5 0 .3 0 0 .6-.4.5.6.8 1 .3.5-.4.5-.5.7 0 .1.5 1 0 1.3-.3-.7-.7-1.7-1.3-2.5-1.8zm-1.5 4.4c-1 .5-.7 3.2.9 2.4.5-.2.9 0 .9.3v.7a4.7 4.7 0 0 0 1.7-1.2c.9-1.2 0-1-1.4-1s-1.7-.3-.4-1.1c1.2-.8.3-1.2-1.3-1 .2.3.1.6-.4.9m5.9 6c-.8-.9-.3-1.2.5-1.7a1 1 0 0 0 .4-.3l-.7-2.6c-.3.2-.8 1.1-1 1.5-.2.7-.4 1.1-1 1-.7-.3-1.3.4-1.4 1.1h.5c.2.1.3.6.2 1 1.9 0 2.2 1.1 2.5 2 .4 1 .7.9 1 .3.3-.6-.3-1.5-1-2.3"
      />
      <path
        fill="#ff0"
        d="M479.9 150.4c-.4.8-.4.7-1.5.7-1 .1-2.4.3-3 .9-.3.3-2.2.5-2.2 1.3 0 .9 0 1.5.8 1.6.8 0 1 .2.7.8-.4.6-.6 1.5.8 1.7 1.4 0 2.5-.3 2.8.4.4 1 0 2.1.3 2.7.2.5 1.2.7 2.7 1.2 1 .2 4.8.5 6 .3 1-.2.6-.8-.5-.8-1.2-.2-2-.4-2.3-1.2-.3-.9-.5-1.3.2-2 .6-.8 1.2-1.3.8-2.5-.3-1.1-1-2.5-2.3-2.9-1.3-.4-.9-2.3-2.3-2.4-.5 0-.8 0-1 .2"
      />
      <path
        fill="#cf6200"
        d="M473.3 161.4c1.2.2 2.1.5 1.2.8-.9.3-1.5.8-.3.9 1.2 0 2.3.6 1.3.8-1 .3-1 1 .1 1s1.7.4.9 1c-.9.4-1.4.7-2-.1-.5-.9-.8-1-.9-.5-.2.6-.5.2-.9-.7-.3-.8-1.2-1.2-1-.5.3.7-.6.9-1.5.5a11 11 0 0 0 2.9 2.4c1.2-.4 2.6 0 3 0 .6 0 2.1.4 3 .9.9.4 1.5-.4 1.1-1.3-.4-1-.4-.7-.8 0-.6.4-.6-.3-.6-1.4 0-.8-.6-.7-.7-.1-.2.5-.7-.4-.5-.9.3-.5 0-.8-.4-.6-.5.2-.5 0-.6-1-.1-1.1-.5-1-.6-.5-.1.4-.6-.2-1.3-1-.5-.6-1-.2-2.1.1z"
      />
      <path
        fill="#ff0"
        d="M485.6 167.8c-5.5 2.2-9.5 1.2-12.5-.8 1.2-.4 2.6 0 3.1 0s2.1.4 2.9.9c.8.4 1.5-.4 1.1-1.3.7 1 1.3 1.6 2.2 1.5zM473.8 142c-.4-1.2-.7-1.4-1.3-1.3-.6 0-.9-.1-1.6-.4-.6-.3-1.5 0-1.6 1.3-.2 1.3-1 1.8-2 2.6-1 .7-1.5 1.3-1.5 2.6 0 1.2-.3 1.4-1 2.4l-1.1 1.3 1.2.7c.8.4.5.9-.2.7-.7-.2-1.5.2-.2.4 1.2.3 1.7 1 .6 1-1.3-.3-2.6.8-.3.5 2.3-.2 3.1.9.5.9-2.7 0-1.7.9-.2.9 2.5 0 1.7.7 1 .7-.6 0-.9 1 .8.7l.6-1c.3-.8.5-3.1 1.5-3.8.9-.6 1.4-1.7 1.4-2.3 0-.6 1.5-3.7 2.3-4.4 1-.7 1.4-2.3 1-3.4z"
      />
      <path
        fill="#cf6200"
        d="M471.8 142.2c-.9-.7-1.9-.2-1.9 1 0 1-.6 1.5-1.4 2a3.5 3.5 0 0 0-1.8 2.3c0 1 .2 1.5-.4 2.3-.7.7-.8 1.3-.4 1.8.6.4.6.4.7 1 .3.6 1.4 0 1.4-.7s.3-.7 1-1.1c.8-.4 2-2.4 1.7-2.9-.2-.5-1-1 0-1.7 1-.8 1.8-1 1.8-1.6 0-.8.2-1 .5-1.3.3-.3-.6-.7-1.2-1z"
      />
      <path
        d="M471.8 141.2c-.6-.2-1 1.1-.1 1.3.9.2 1-.9 0-1.2zm-.1 1.7c-.7.1-1.5 1-.4 1 1.2-.2 1.6-1 .3-1zm-1.4 1.7c-.7.3-.5 1.3.5.6 1-.7 1.2-1.5-.5-.6m-1 1.4c-.7.3-.7 1.3.4.6 1-.6 1.3-1.5-.4-.6"
      />
      <path
        d="M467.9 146.7c-.7.3-.3 1.2.7.6s1-1.5-.7-.6m.8.9c-.8.3-.3 1.2.7.6s1-1.5-.8-.6z"
      />
      <path
        d="M467.4 147.9c-.6.4-.2 1.2.9.6 1-.6.9-1.5-.9-.6m.9 1c-.8.3-.4 1.2.7.6 1-.7 1-1.5-.8-.6z"
      />
      <path d="M467 149.5c-.6.3-.2 1.2.9.6 1-.6.8-1.5-.8-.6z" />
      <path d="M467 150.3c-.5.4-.1 1.4 1 .7 1-.7.8-1.5-1-.7" />
      <path
        fill="#cf6200"
        d="M466.6 158.9c-.7 0-1.2 1.1-.3 1.3.9.2 1.1.3 1.1.9 0 .6.3 1.7 1.2 1.7 1 0 1.8-1 1-1.3-.9-.3-1.6-.6-1.7-1.4 0-.7-.8-1.2-1.3-1.2"
      />
      <path
        fill="#ff0"
        d="m491.5 153 .5.6c.7.5 2 0 1.7-.5-.1-.4-.8-2 1-.8l9.2 6.5c1.9 1.4.6 1.6-.2 1.1l-5-2.3c-1.5-.9-1.7-.5-2-.3 0 .3 0 .9.6 1.4-.9.1-2.3 0-2.8-1-.5-1.2-1.7-2.6-2.6-3.7-.3-.4-.4-.7-.3-.9z"
      />
      <path
        fill="#00d860"
        d="M542 319.5c-1.3.9-3 2.4-1.9 4.5l.4-.1a124.1 124.1 0 0 0 12.9-19v-.6a17.9 17.9 0 0 1-4.5 2.7c.6 1.7-2.3 3.8-3.7 4.4.6 1 .4 2.6-1 2.9.3.8-.7.8-2 1.4-1.1.5-1.7.8-2.1 1.5.6-.4 1.6-.7 2-.5.4.2.6.9-.3 1.1-.8.3-1.4.7-1.8 1 1.3-.3 3.2-.2 2 .7"
      />
      <path
        stroke="#000"
        stroke-width=".4"
        d="M481.8 151.2c-1.6-1.2-2-.4-1.6 0 .4.4 0 1.5-1.1 2h-4c-.7 0-1.9 1.5 0 1l6.3-1c.8 0 1.6-.9 0-2zm2.7 2.3c-1.1-1.2-1.5-.8-1.1 0 .4.8-.4 1.2-1.2 1.2l-5.5 1.5c-1.5 0-1.5 1.2.4 1.2 2 0 5.9-2 6.3-2 .4 0 .8-1.1 1.1-.7.4.4 1.2 0 0-1.2zm1.2 3.1-3.9 2c-1.2 0-2 1.2 0 1.2s4-2 4.7-2.4l1.6-.8s1.5-.4 0-1.5c-1.6-1.2-3.2 0-2.4.4.8.4 0 1.1 0 1.1z"
      />
      <path d="M469.7 131.2c-2.5-1.7-5.2 1.7-2.5 3.6 2.4 1.7 5-2 2.6-3.6z" />
      <path
        fill="#fff"
        d="M466.6 132.7h.7c0 .8.7 2 1.8 1.7-.9.7-2.6-.2-2.5-1.7m9.6 37c.8.3 3.4.5 4.4.5l-1.2 2.2c-.3.7-.4.8-.5-.3 0-1-.6-1.7-1.1-.6l-1 2c-.3.4-.7.5-.6-.6.2-1.1.1-2.3 0-3.2"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width="1.2"
        d="M574.5 199.7c0 63.7-10.2 132.5-93 165.3-82.6-32.8-92.7-101.6-93.1-165.3zm0 0c0-24.3-1.2-47.8-.8-68a248.7 248.7 0 0 0-92.3-16.9c-20.7 0-61.4 3.1-92.2 16.8.7 20.3-.8 43.8-.8 68z"
      />
      <path fill="#012169" d="M0 0h320v240H0Z" />
      <path
        fill="#fff"
        d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0Z"
      />
      <path
        fill="#c8102e"
        d="M212 140.5 320 220v20l-135.5-99.5Zm-92 10 3 17.5-96 72H0ZM320 0v1.5l-124.5 94 1-22L295 0ZM0 0l119.5 88h-30L0 21Z"
      />
      <path fill="#fff" d="M120.5 0v240h80V0ZM0 80v80h320V80Z" />
      <path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0Z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgShTaFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
