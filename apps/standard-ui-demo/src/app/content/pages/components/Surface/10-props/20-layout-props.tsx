import { Surface } from '@no-comply/standard-ui';

import { ExampleNano } from '../../../../examples';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { SurfaceVariantExample } from '../examples';

const items = [
	createDocsItemData({ title: 'padding', props }, () => (
		<SurfaceVariantExample onVariant="stage">
			<Surface variant="panel" padding="l">
				<ExampleNano title="Page" />
			</Surface>
		</SurfaceVariantExample>
	)),
];

export default createDocsSectionData({
	title: 'Layout props',
	items,
});
