import type { CodeLayoutContextValue } from '@purrtrait/code-layout';
import { type ParentComponent } from 'solid-js';

import { CodeLayoutCTX } from './private';

type Props = {
	context: CodeLayoutContextValue;
};
export const CodeLayoutProvider: ParentComponent<Props> = props => {
	return (
		// eslint-disable-next-line solid/reactivity
		<CodeLayoutCTX.Provider value={props.context}>{props.children}</CodeLayoutCTX.Provider>
	);
};
