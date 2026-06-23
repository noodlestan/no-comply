import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'length',
	collapse: true,
	items: [
		createDocsItemData({ title: 'compact', props }, () => (
			<Callout title={lipsumWords(3)} summary={lipsumWords()} variant="info" length="compact" />
		)),
		createDocsItemData({ title: 'full', props: { ...props, defaultValue: true } }, () => (
			<Callout title={lipsumWords(7)} summary={lipsumWords(15)} variant="info" length="full">
				<LoremIpsum words={30} />
			</Callout>
		)),
	],
});
