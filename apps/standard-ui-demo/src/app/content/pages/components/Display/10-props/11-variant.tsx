import { Display } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'variant ',
	items: [
		createDocsItemData({ title: 'hero', props }, () => (
			<Display variant="hero">
				<LoremIpsum words={3} />
			</Display>
		)),
		createDocsItemData({ title: 'xl', props }, () => (
			<Display variant="xl">
				<LoremIpsum words={4} />
			</Display>
		)),
		createDocsItemData({ title: 'l', props }, () => (
			<Display variant="l">
				<LoremIpsum words={5} />
			</Display>
		)),
		createDocsItemData({ title: 'm', props }, () => (
			<Display variant="m">
				<LoremIpsum words={7} />
			</Display>
		)),
		createDocsItemData({ title: 's', props }, () => (
			<Display variant="s">
				<LoremIpsum words={5} />
			</Display>
		)),
		createDocsItemData({ title: 'xs', props }, () => (
			<Display variant="xs">
				<LoremIpsum words={7} />
			</Display>
		)),
		createDocsItemData({ title: 'variant "s" with level 1', props }, () => (
			<Display variant="s" level={1}>
				<LoremIpsum words={7} />
			</Display>
		)),
	],
});
