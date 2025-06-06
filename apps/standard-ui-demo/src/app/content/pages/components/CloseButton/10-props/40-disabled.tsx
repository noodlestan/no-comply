import { CloseButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const disabled = createDocsItemData({ props }, () => <CloseButton label="Close" disabled />);

export default createDocsSectionData({
	title: 'disabled',
	items: [disabled],
});
