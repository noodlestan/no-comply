import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
	createDocsItemData({ title: 'compact', props }, () => (
		<Callout title={lipsumWords(5)} variant="info" length="compact" />
	)),
	createDocsItemData({ title: 'full', props: { ...props, defaultValue: true } }, () => (
		<Callout title={lipsumWords()} variant="info" length="full">
			<LoremIpsum words={30} />
		</Callout>
	)),
];

export default createDocsSectionData({
	title: 'length',
	items,
});
