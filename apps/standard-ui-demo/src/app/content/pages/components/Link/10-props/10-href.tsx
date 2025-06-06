import { Link } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'href ',
	items: [
		createDocsItemData({ title: 'internal', props }, () => (
			<Link href="/features/components/NavLink">NavLink component</Link>
		)),
		createDocsItemData({ title: 'external', props }, () => (
			<Link href="https://noodlestan.org">Noodlestan Collective</Link>
		)),
	],
});
