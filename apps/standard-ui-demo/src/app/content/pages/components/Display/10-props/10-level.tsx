import { Display } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'level ',
	items: [
		createDocsItemData({ title: '1', props }, () => (
			<Display level={1}>
				<LoremIpsum words={3} />
			</Display>
		)),
		createDocsItemData({ title: '2', props }, () => (
			<Display level={2}>
				<LoremIpsum words={4} />
			</Display>
		)),
		createDocsItemData({ title: '3', props: { ...props, defaultValue: true } }, () => (
			<Display level={3}>
				<LoremIpsum words={5} />
			</Display>
		)),
		createDocsItemData({ title: '4', props }, () => (
			<Display level={4}>
				<LoremIpsum words={7} />
			</Display>
		)),
		createDocsItemData({ title: '5', props }, () => (
			<Display level={5}>
				<LoremIpsum words={5} />
			</Display>
		)),
		createDocsItemData({ title: 'level 1 with variant "s"', props }, () => (
			<Display variant="s" level={1}>
				<LoremIpsum words={7} />
			</Display>
		)),
	],
});
