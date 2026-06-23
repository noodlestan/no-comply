import { Callout } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	collapse: true,
	items: [
		createDocsItemData({ title: 'medium', props }, () => (
			<Callout title={lipsumWords(3)} summary={lipsumWords()} variant="info" size="medium">
				<LoremIpsum words={12} />
			</Callout>
		)),
		createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
			<Callout title={lipsumWords(3)} summary={lipsumWords()} variant="info" size="normal">
				<LoremIpsum words={12} />
			</Callout>
		)),
		createDocsItemData({ title: 'small', props }, () => (
			<Callout title={lipsumWords(3)} summary={lipsumWords()} variant="info" size="small">
				<LoremIpsum words={12} />
			</Callout>
		)),
	],
});
