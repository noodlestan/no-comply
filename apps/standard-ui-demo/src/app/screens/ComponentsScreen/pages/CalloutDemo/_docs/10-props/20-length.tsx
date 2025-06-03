import { Callout } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSection,
    lipsumWords,
} from '../../../../../../components';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'compact', props }, () => (
        <Callout title={lipsumWords(5)} variant="info" length="compact" />
    )),
    createDemoItem({ title: 'full', props: { ...props, defaultValue: true } }, () => (
        <Callout title={lipsumWords()} variant="info" length="full">
            <LoremIpsum words={30} />
        </Callout>
    )),
];

export default createDemoSection({
    title: 'length',
    items,
});
