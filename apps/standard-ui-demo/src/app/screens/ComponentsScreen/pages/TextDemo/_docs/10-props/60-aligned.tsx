import { AlignFirstLine, Flex, Icon, Text } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'aligned ',
    items: [
        createDemoItem({ title: 'medium variant with medium icon', props }, () => (
            <Flex direction="row" gap="l">
                <AlignFirstLine type="text" variant="medium" height="s">
                    <Icon size="medium" icon={HomeIcon} />
                    <Text variant="medium" aligned>
                        <LoremIpsum words={70} />
                    </Text>
                </AlignFirstLine>
            </Flex>
        )),
        createDemoItem({ title: 'large variant with medium icon', props }, () => (
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
