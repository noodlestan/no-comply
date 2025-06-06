import { Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	collapse: true,
	items: [
		createDocsItemData({ title: 'large', props }, () => <Button size="large">Size Large</Button>),
		createDocsItemData({ title: 'medium', props }, () => (
			<Button size="medium">Size Medium</Button>
		)),
		createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
			<Button size="normal">Size Normal</Button>
		)),
		createDocsItemData({ title: 'small', props }, () => <Button size="small">Size Small</Button>),
	],
});
