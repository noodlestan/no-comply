import { type ParentComponent } from 'solid-js';

import { RenderingContextCTX, createRenderingContext } from './private';

export const RenderingProvider: ParentComponent = props => {
	const rendering = createRenderingContext();

	return (
		<RenderingContextCTX.Provider value={rendering}>{props.children}</RenderingContextCTX.Provider>
	);
};
