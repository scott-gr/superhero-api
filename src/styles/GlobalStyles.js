import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        /* colors */
        --appred: #e63946;
        --appwhite: #f1faee;
        --applightblue: #a8dadc;
        --appmedblue: #457b9d;
        --appdarkblue: #1d3557;
        /* scale of sizes  */
        --ratio: 1.5;
        --s-5: calc(var(--s-4) / var(--ratio));
        --s-4: calc(var(--s-3) / var(--ratio));
        --s-3: calc(var(--s-2) / var(--ratio));
        --s-2: calc(var(--s-1) / var(--ratio));
        --s-1: calc(var(--s0) / var(--ratio));
        --s0: 1rem;
        --s1: calc(var(--s0) * var(--ratio));
        --s2: calc(var(--s1) * var(--ratio));
        --s3: calc(var(--s2) * var(--ratio));
        --s4: calc(var(--s3) * var(--ratio));
        --s5: calc(var(--s4) * var(--ratio));
        /* prevents unintentional selection on mobile */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        /* prevents font-family switching suddenly on page load */
        font-display: optional;
      }

      html {
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      button {
        cursor: pointer;
      }
      body {
        background-color: var(--appdarkblue);
      }
      img {
        width: 100%;
      }
      header {
        text-align: center;
        color: var(--applightblue);
      }
      * {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }
    `}
  />
);
