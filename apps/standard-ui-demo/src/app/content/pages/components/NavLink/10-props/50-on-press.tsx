import type { PressEvent } from '@no-comply/solid-primitives';
import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'onPress',
	items: [
		createDocsItemData({ props }, () => {
			const handleOnPress = (ev: PressEvent) => {
				ev.preventDefault();
				console.info('Press');
			};

			return (
				<NavLink href="https://noodlestan.org" onPress={handleOnPress}>
					<LoremIpsum words={2} />
				</NavLink>
			);
		}),
	],
});
