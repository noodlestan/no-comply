import { Layout } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { ExampleLayoutChild } from '../../../../examples';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'tag ',
	items: [
		createDocsItemData({ title: 'article', props }, () => (
			<Layout tag="article">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'div', props: { ...props, defaultValue: true } }, () => (
			<Layout tag="div">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'nav', props: { ...props, defaultValue: true } }, () => (
			<Layout tag="nav">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'span', props: { ...props, defaultValue: true } }, () => (
			<Layout tag="span">
				<LoremIpsum words={5} />
			</Layout>
		)),
	],
});
