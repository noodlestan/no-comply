import { NavLink } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ props }, () => (
			<>
				<NavLink href="/features/components/NavLink">NavLink</NavLink>
				<NavLink href="/features/components/Button">Button</NavLink>
				<NavLink href="/features/components/IconButton">IconButton</NavLink>
			</>
		)),
	],
});
