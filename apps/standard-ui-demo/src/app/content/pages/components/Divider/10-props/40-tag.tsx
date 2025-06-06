import { Divider, IconButton } from '@no-comply/standard-ui';
import { BikeIcon, DogIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props, itemPropsStyled as propsStyled } from '../constants';

export default createDocsSectionData({
	title: 'tag',
	items: [
		createDocsItemData({ title: 'hr', props: { ...props, defaultValue: true } }, () => (
			<Divider tag="hr" />
		)),
		createDocsItemData({ title: 'div', props }, () => <Divider tag="div" />),
		createDocsItemData({ title: 'span (horizontal)', props }, () => <Divider tag="span" />),
		createDocsItemData({ title: 'span (vertical)', props: propsStyled }, () => (
			<>
				<IconButton icon={DogIcon} label="Dog" />
				<Divider tag="span" orientation="vertical" />
				<IconButton icon={BikeIcon} label="BikeIcon" />
			</>
		)),
	],
});
