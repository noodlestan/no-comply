import { Display } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemPropsWrap as props } from '../constants';

export default createDocsSectionData({
	title: 'nowrap',
	collapse: true,
	items: [
		createDocsItemData({ title: 'true', props }, () => (
			<Display variant="s" nowrap>
				<LoremIpsum words={50} />
			</Display>
		)),
		createDocsItemData(
			{ title: 'false', props: { ...props, width: '280px', defaultValue: true } },
			() => (
				<Display variant="s">
					<LoremIpsum words={7} />
				</Display>
			),
		),
	],
});
