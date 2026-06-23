import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'variant',
	collapse: true,
	items: [
		createDocsItemData({ title: 'passive', props }, () => (
			<Callout title={lipsumWords()} variant="passive" summary={<LoremIpsum />} />
		)),
		createDocsItemData({ title: 'info', props: { ...props, defaultValue: true } }, () => (
			<Callout title={lipsumWords()} variant="info" summary={<LoremIpsum />} />
		)),
		createDocsItemData({ title: 'warning', props }, () => (
			<Callout title={lipsumWords()} variant="warning" summary={<LoremIpsum />} />
		)),
		createDocsItemData({ title: 'danger', props }, () => (
			<Callout title={lipsumWords()} variant="danger" summary={<LoremIpsum />} />
		)),
	],
});
