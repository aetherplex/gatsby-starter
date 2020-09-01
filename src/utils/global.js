import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: ${primaryFont};
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
    }
`;
