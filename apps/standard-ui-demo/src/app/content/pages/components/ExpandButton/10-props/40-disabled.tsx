import { ExpandButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'disabled',
	items: [
		createDocsItemData({ props }, () => {
			const { labels, id } = createExpandButtonExampleController();
			return <ExpandButton size="small" expanded={true} labels={labels} controls={id} disabled />;
		}),
	],
});
