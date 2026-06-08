import { IconButton } from '@no-comply/standard-ui';
import PlusIcon from 'lucide-solid/icons/plus';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [createDocsItemData({ props }, () => <IconButton icon={PlusIcon} label="And an item" />)],
});
