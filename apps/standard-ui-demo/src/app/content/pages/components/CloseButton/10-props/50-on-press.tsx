import type { PressEvent } from '@no-comply/solid-primitives';
import { CloseButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'onPress',
	items: [
		createDocsItemData(
			{ title: 'event handler', props: { ...props, note: 'see console log' } },
			() => {
				const handlePress = (ev: PressEvent) => console.info(ev);
				return <CloseButton label="Close" onPress={handlePress} />;
			},
		),
	],
});
