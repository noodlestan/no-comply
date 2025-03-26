import { SystemContextProvider } from '@noodlestan/context-ui';
import { render } from 'solid-js/web';

import './styles/reset.css';

import { App } from './app';

const root = document.getElementById('root') as HTMLElement;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error('Root element not found.');
}

render(() => {
    return (
        <SystemContextProvider>
            <App />
        </SystemContextProvider>
    );
}, root);
