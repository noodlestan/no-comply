import { SystemContextProvider } from '@no-comply/solid-contexts';
import { render } from 'solid-js/web';

import './styles/layers.css';
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
