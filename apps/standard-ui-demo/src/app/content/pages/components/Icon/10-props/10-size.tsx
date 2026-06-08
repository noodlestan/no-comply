import { Icon } from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	collapse: true,
	items: [
		createDocsItemData({ title: 'large', props }, () => <Icon icon={ClockIcon} size="large" />),
		createDocsItemData({ title: 'medium', props }, () => <Icon icon={ClockIcon} size="medium" />),
		createDocsItemData({ title: 'normal', props }, () => <Icon icon={ClockIcon} size="normal" />),
		createDocsItemData({ title: 'small', props }, () => <Icon icon={ClockIcon} size="small" />),
	],
});
