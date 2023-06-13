const styles = new CSSStyleSheet();

styles.replaceSync(/*css*/`
    /* Reseta alguns estilos padrões do navegador */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: gainsboro;
    }

    /* Remove a barra de rolagem */
    body::-webkit-scrollbar {
        display: none;
    }

    /* Cores */
    :root {
        --color-primary: #FFA45D;
        --color-dendem-50: #FAF2E9;
        --color-dendem-200: #AEE590;
        --color-dendem-300: #86B649;
        --color-dendem-400: #004B35;

        --color-success: #28a745;
        --color-danger: #dc3545;
        --color-warning: #ffc107;
        --color-info: #17a2b8;

        --color-white: #fff;
        --color-black: #000;

        --color-gray-50: #F9FAFB;
        --color-gray-100: #F3F4F6;
        --color-gray-200: #E5E7EB;
        --color-gray-300: #D1D5DB;
        --color-gray-400: #9CA3AF;
        --color-gray-500: #6B7280;
        --color-gray-600: #4B5563;
        --color-gray-700: #374151;
        --color-gray-800: #1F2937;
        --color-gray-900: #111827;
    }

    /* Tipografia */
    :root {
        --font-family: 'DM Sans', sans-serif;
        --font-size-base: 16px;
        --font-size-heading: 30px;
        --line-height-base: 1.5;
    }

    /* Espaçamento */
    :root {
        --spacing-base: 1rem;
        --spacing-small: 0.5rem;
        --spacing-large: 2rem;
    }

    /* Fonte */
    html {
        font-size: var(--font-size-base);
        font-family: var(--font-family);
        line-height: var(--line-height-base);
    }

    /* Tamanho */
    .text-xs {
        font-size: 0.75rem;
    }

    .text-sm {
        font-size: 0.875rem;
    }

    .text-base {
        font-size: 1rem;
    }

    .text-lg {
        font-size: 1.125rem;
    }

    .text-xl {
        font-size: 1.25rem;
    }

    .text-2xl {
        font-size: 1.5rem;
    }

    .text-3xl {
        font-size: 1.875rem;
    }

    .text-4xl {
        font-size: 2.25rem;
    }

    .text-5xl {
        font-size: 3rem;
    }

    .text-6xl {
        font-size: 4rem;
    }


    /* Peso da fonte */
    .font-regular {
        font-weight: 400;
    }

    .font-bold {
        font-weight: 700;
    }

    /* Cores de texto */
    .text-white {
        color: var(--color-white);
    }

    .text-black {
        color: var(--color-black);
    }

    .text-gray-50 {
        color: var(--color-gray-50);
    }

    .text-gray-100 {
        color: var(--color-gray-100);
    }

    .text-gray-200 {
        color: var(--color-gray-200);
    }

    .text-gray-300 {
        color: var(--color-gray-300);
    }

    .text-gray-400 {
        color: var(--color-gray-400);
    }

    .text-gray-500 {
        color: var(--color-gray-500);
    }

    .text-gray-600 {
        color: var(--color-gray-600);
    }

    .text-gray-700 {
        color: var(--color-gray-700);
    }

    .text-gray-800 {
        color: var(--color-gray-800);
    }

    .text-gray-900 {
        color: var(--color-gray-900);
    }
`);

export default styles;
