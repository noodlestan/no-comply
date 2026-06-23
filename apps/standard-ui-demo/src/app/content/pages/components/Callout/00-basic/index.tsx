import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({}, () => (
			<Callout title={lipsumWords()} variant="info" summary={<LoremIpsum words={30} />} />
		)),
	],
});
