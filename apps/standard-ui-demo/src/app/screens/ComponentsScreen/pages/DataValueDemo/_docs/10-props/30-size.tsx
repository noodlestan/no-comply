import { DataValue } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props }, () => (
            <DataValue size="large">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'medium', props }, () => (
            <DataValue size="medium">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <DataValue size="normal">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'small', props }, () => (
            <DataValue size="small">
                <LoremIpsum words={2} />
            </DataValue>
        )),
    ],
});
