import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #0B82FF;
        font-family: 'Inter', sans-serif;
    }

    button {
        font-family: inherit;
    }

    input {
        font-family: inherit;
    }
`

export default GlobalStyle;
