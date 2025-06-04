import { AlignFirstLine, Flex, Icon, Label } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'aligned ',
    items: [
        createDemoItem({ title: 'medium variant with medium icon', props }, () => (
            <Flex direction="row" gap="l">
                <AlignFirstLine type="label" variant="medium" height="s">
                    <Icon size="medium" icon={HomeIcon} />
                    <Label variant="medium" aligned>
                        <LoremIpsum words={70} />
                    </Label>
                </AlignFirstLine>
            </Flex>
        )),
        createDemoItem({ title: 'large variant with medium icon', props }, () => (
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
