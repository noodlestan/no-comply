import { Display } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'tag',
	collapse: true,
	items: [
		createDocsItemData({ title: 'div', props }, () => (
			<Display tag="div">
				<LoremIpsum words={5} />
			</Display>
		)),
		createDocsItemData({ title: 'h3', props: { ...props, defaultValue: true } }, () => (
			<Display tag="h3">
				<LoremIpsum words={3} />
			</Display>
		)),
		createDocsItemData({ title: 'p', props: { ...props, defaultValue: true } }, () => (
			<Display tag="p">
				<LoremIpsum words={4} />
			</Display>
		)),
		createDocsItemData({ title: 'span', props: { ...props, defaultValue: true } }, () => (
			<Display tag="span">
				<LoremIpsum words={3} />
			</Display>
		)),
	],
});
