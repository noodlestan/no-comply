import { Text } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemPropsWrap as props } from '../constants';

export default createDemoSectionData({
    title: 'nowrap ',
    items: [
        createDemoItem({ title: 'true', props }, () => (
            <Text variant="normal" nowrap>
                <LoremIpsum words={20} />
            </Text>
        )),
        createDemoItem({ title: 'false', props: { ...props, defaultValue: true } }, () => (
            <Text variant="normal">
                <LoremIpsum words={20} />
            </Text>
        )),
    ],
});
