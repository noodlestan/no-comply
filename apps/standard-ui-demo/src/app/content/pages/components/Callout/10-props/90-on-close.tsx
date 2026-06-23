import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'onClose',
	items: [
		createDocsItemData({ title: 'medium', props }, () => (
			<Callout title={lipsumWords()} summary={lipsumWords()} variant="warning" size="medium">
				<LoremIpsum words={12} />
			</Callout>
		)),
	],
});
