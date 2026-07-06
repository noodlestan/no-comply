import { type ClosedTagProps } from '@no-comply/solid-primitives';
import { type ParentComponent } from 'solid-js';

import { createAlignFirstLineContext } from '../../contexts';
import { AlignFirstLineResolver } from '../../private';
import { AlignFirstLineContextProvider } from '../../providers';

import { type AlignFirstLineProps } from './types';

type Props = ClosedTagProps & AlignFirstLineProps;

export const AlignFirstLine: ParentComponent<Props> = props => {
	const contextValue = createAlignFirstLineContext();

	return (
		<AlignFirstLineContextProvider context={contextValue}>
			<AlignFirstLineResolver {...props} />
		</AlignFirstLineContextProvider>
	);
};
