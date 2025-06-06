import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'large', props }, () => <Icon icon={ClockIcon} size="large" />),
		createDocsItemData({ title: 'medium', props }, () => <Icon icon={ClockIcon} size="medium" />),
		createDocsItemData({ title: 'normal', props }, () => <Icon icon={ClockIcon} size="normal" />),
		createDocsItemData({ title: 'small', props }, () => <Icon icon={ClockIcon} size="small" />),
	],
});
