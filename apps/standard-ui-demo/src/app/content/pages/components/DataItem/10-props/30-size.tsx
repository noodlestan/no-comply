import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'large', props }, () => (
			<DataItem size="large">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'medium', props }, () => (
			<DataItem size="medium">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
			<DataItem size="normal">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'small', props }, () => (
			<DataItem size="small">
				<LoremIpsum words={2} />
			</DataItem>
		)),
	],
});
