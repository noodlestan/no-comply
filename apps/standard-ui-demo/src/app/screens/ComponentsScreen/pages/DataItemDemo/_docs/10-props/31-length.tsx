import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full', props }, () => (
            <DataItem length="full">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'l', props }, () => (
            <DataItem length="l">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'm', props: { ...props, defaultValue: true } }, () => (
            <DataItem length="m">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 's', props }, () => (
            <DataItem length="s">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'auto', props }, () => (
            <DataItem length="auto">
                <LoremIpsum words={2} />
            </DataItem>
        )),
    ],
});
