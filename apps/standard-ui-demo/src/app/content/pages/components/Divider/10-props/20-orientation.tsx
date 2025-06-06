import { Display, Divider, IconButton, Text } from '@no-comply/standard-ui';
import { BikeIcon, CarIcon, CatIcon, DogIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemPropsStyled as props } from '../constants';

export default createDocsSectionData({
	title: 'orientation',
	collapse: true,
	items: [
		createDocsItemData({ title: 'horizontal', props }, () => (
			<>
				<Display variant="m">Heading</Display>
				<Divider orientation="horizontal" />
				<Text variant="medium">Long Text</Text>
			</>
		)),
		createDocsItemData(
			{ title: 'vertical', props: { ...props, row: true, padding: 'm', gap: 'm' } },
			() => (
				<>
					<IconButton icon={CatIcon} label="Cat" />
					<IconButton icon={DogIcon} label="Dog" />
					<Divider orientation="vertical" />
					<IconButton icon={BikeIcon} label="BikeIcon" />
					<IconButton icon={CarIcon} label="Car" />
				</>
			),
		),
	],
});
