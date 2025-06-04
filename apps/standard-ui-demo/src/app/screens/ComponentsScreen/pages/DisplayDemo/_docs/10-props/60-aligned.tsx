import { AlignFirstLine, Display, Flex, Icon } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'aligned ',
    items: [
        createDemoItem({ title: 'm variant with medium icon', props }, () => (
            <Flex direction="row" gap="l">
                <AlignFirstLine type="label" variant="medium" height="s">
                    <Icon size="medium" icon={HomeIcon} />
                    <Display variant="m" aligned>
                        <LoremIpsum words={70} />
                    </Display>
                </AlignFirstLine>
            </Flex>
        )),
        createDemoItem({ title: 'l variant with medium icon', props }, () => (
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
