import { CloseButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'label',
	items: [createDocsItemData({ props }, () => <CloseButton label="Close Dialog" />)],
});
