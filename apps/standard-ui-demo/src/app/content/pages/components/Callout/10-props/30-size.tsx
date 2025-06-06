import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
	createDocsItemData({ title: 'medium', props }, () => (
		<Callout title={lipsumWords(5)} variant="success" size="medium">
			<LoremIpsum words={12} />
		</Callout>
	)),
	createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
		<Callout title={lipsumWords(5)} variant="success" size="normal">
			<LoremIpsum words={12} />
		</Callout>
	)),
	createDocsItemData({ title: 'small', props }, () => (
		<Callout title={lipsumWords(5)} variant="success" size="small">
			<LoremIpsum words={12} />
		</Callout>
	)),
];

export default createDocsSectionData({
	title: 'size',
	items,
});
