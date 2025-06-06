import { AlignFirstLine, Flex, Icon, Text } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'aligned ',
	items: [
		createDocsItemData({ title: 'medium variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="text" variant="medium" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Text variant="medium" aligned>
						<LoremIpsum words={70} />
					</Text>
				</AlignFirstLine>
			</Flex>
		)),
		createDocsItemData({ title: 'large variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="text" variant="large" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Text variant="large" aligned>
						<LoremIpsum words={30} />
					</Text>
				</AlignFirstLine>
			</Flex>
		)),
	],
});
