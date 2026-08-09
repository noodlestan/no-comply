import { type ParentComponent } from 'solid-js';

import { OverflowItemsMeasureContextCTX } from './private';

export const OverflowItemsMeasureProvider: ParentComponent = props => {
	return (
		<OverflowItemsMeasureContextCTX.Provider value={true}>
			{props.children}
		</OverflowItemsMeasureContextCTX.Provider>
	);
};
