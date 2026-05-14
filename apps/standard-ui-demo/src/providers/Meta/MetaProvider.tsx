import { createNoComplyMetaService } from '@no-comply/meta';
import { type ParentComponent } from 'solid-js';

import { MetaContext } from './private';

export const MetaProvider: ParentComponent = props => {
	const meta = createNoComplyMetaService();

	return <MetaContext.Provider value={meta}>{props.children}</MetaContext.Provider>;
};
