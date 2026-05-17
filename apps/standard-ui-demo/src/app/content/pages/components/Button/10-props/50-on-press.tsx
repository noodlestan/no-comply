import type { PressEvent } from '@no-comply/solid-primitives';
import { Button } from '@no-comply/standard-ui';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'onPress',
		items: [
			createDocsItemData(
				{ title: 'event handler', props: { ...props, note: 'see console log' } },
				() => {
					const handlePress = (ev: PressEvent) => console.info(ev);
					return <Button onPress={handlePress}>Foobar</Button>;
				},
			),
		],
	});
}
