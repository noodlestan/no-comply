import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'length',
	items: [
		createDocsItemData({ title: 'full', props }, () => (
			<DataItem length="full">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'l', props }, () => (
			<DataItem length="l">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'm', props: { ...props, defaultValue: true } }, () => (
			<DataItem length="m">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 's', props }, () => (
			<DataItem length="s">
				<LoremIpsum words={2} />
			</DataItem>
		)),
		createDocsItemData({ title: 'auto', props }, () => (
			<DataItem length="auto">
				<LoremIpsum words={2} />
			</DataItem>
		)),
	],
});
