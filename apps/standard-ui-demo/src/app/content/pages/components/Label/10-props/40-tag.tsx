import { Label } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'tag ',
	items: [
		createDocsItemData({ title: 'span', props }, () => (
			<Label tag="span">
				<LoremIpsum words={9} />
			</Label>
		)),
		createDocsItemData({ title: 'label', props: { ...props, defaultValue: true } }, () => (
			<Label tag="label">
				<LoremIpsum words={8} />
			</Label>
		)),
	],
});
