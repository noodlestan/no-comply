import { DataValue } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full', props }, () => (
            <DataValue length="full">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'l', props }, () => (
            <DataValue length="l">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'm', props: { ...props, defaultValue: true } }, () => (
            <DataValue length="m">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 's', props }, () => (
            <DataValue length="s">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDemoItem({ title: 'auto', props }, () => (
            <DataValue length="auto">
                <LoremIpsum words={2} />
            </DataValue>
        )),
    ],
});
