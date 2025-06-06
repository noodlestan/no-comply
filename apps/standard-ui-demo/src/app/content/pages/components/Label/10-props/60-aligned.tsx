import { AlignFirstLine, Flex, Icon, Label } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'aligned',
	items: [
		createDocsItemData({ title: 'medium variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="label" variant="medium" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Label variant="medium" aligned>
						<LoremIpsum words={70} />
					</Label>
				</AlignFirstLine>
			</Flex>
		)),
		createDocsItemData({ title: 'large variant with medium icon', props }, () => (
			<Flex direction="row" gap="l">
				<AlignFirstLine type="label" variant="large" height="s">
					<Icon size="medium" icon={HomeIcon} />
					<Label variant="large" aligned>
						<LoremIpsum words={30} />
					</Label>
				</AlignFirstLine>
			</Flex>
		)),
	],
});
