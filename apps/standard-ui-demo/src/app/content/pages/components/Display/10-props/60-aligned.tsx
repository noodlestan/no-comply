import { AlignFirstLine, Display, Flex, Icon } from '@no-comply/standard-ui';
import HomeIcon from 'lucide-solid/icons/home';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'aligned',
	collapse: true,
	items: [
		createDocsItemData({ title: 'm variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="label" variant="medium" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Display variant="m" aligned>
						<LoremIpsum words={70} />
					</Display>
				</AlignFirstLine>
			</Flex>
		)),
		createDocsItemData({ title: 'l variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="label" variant="large" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Display variant="l" aligned>
						<LoremIpsum words={30} />
					</Display>
				</AlignFirstLine>
			</Flex>
		)),
	],
});
