import { Text } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemPropsWrap as props } from '../constants';

export default createDocsSectionData({
	title: 'nowrap',
	items: [
		createDocsItemData({ title: 'true', props }, () => (
			<Text variant="normal" nowrap>
				<LoremIpsum words={20} />
			</Text>
		)),
		createDocsItemData({ title: 'false', props: { ...props, defaultValue: true } }, () => (
			<Text variant="normal">
				<LoremIpsum words={20} />
			</Text>
		)),
	],
});
