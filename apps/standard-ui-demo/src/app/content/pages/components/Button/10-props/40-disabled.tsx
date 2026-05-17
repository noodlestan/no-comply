import { Button } from '@no-comply/standard-ui';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'disabled',
		items: [createDocsItemData({ props }, () => <Button disabled>Disabled</Button>)],
	});
}
