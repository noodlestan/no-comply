// Static imports for build-time JSON inclusion
import { tsCodeLayout } from '@purrtrait/code-ts';
import {
	type CodeLinkComponent,
	SolidCodeLayoutProvider,
	createSolidCodeLayoutContext,
} from '@purrtrait/solid-code';
import { type ParentComponent } from 'solid-js';

import { getTokenLinkMaybe } from './helpers';

type Props = {
	link: CodeLinkComponent;
};

export const CodeBlockProvider: ParentComponent<Props> = props => {
	const codeLayoutContext = createSolidCodeLayoutContext({
		langs: [tsCodeLayout],
		linker: getTokenLinkMaybe,
		// eslint-disable-next-line solid/reactivity
		link: props.link,
	});

	return (
		<SolidCodeLayoutProvider context={codeLayoutContext}>{props.children}</SolidCodeLayoutProvider>
	);
};
