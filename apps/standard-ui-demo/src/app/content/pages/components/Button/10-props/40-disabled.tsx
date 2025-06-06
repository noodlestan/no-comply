import { Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'disabled',
	items: [createDocsItemData({ props }, () => <Button disabled>Disabled</Button>)],
});
