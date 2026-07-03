import type { CodeLinkComponent } from '@purrtrait/solid-code';
import { type ParentComponent } from 'solid-js';

import { useMeta } from '../Meta';

import { RenderingContextCTX, createRenderingContext } from './private';

type Props = {
	link: CodeLinkComponent;
};

export const RenderingProvider: ParentComponent<Props> = props => {
	const metaContext = useMeta();
	if (!metaContext) {
		throw new Error('RenderingProvider must be wrapped in <MetaProvider/>');
	}

	// eslint-disable-next-line solid/reactivity
	const rendering = createRenderingContext(props.link);

	return (
		<RenderingContextCTX.Provider value={rendering}>{props.children}</RenderingContextCTX.Provider>
	);
};
