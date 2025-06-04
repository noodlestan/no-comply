import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props }, () => (
            <DataItem size="large">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'medium', props }, () => (
            <DataItem size="medium">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <DataItem size="normal">
                <LoremIpsum words={2} />
            </DataItem>
        )),
        createDemoItem({ title: 'small', props }, () => (
            <DataItem size="small">
                <LoremIpsum words={2} />
            </DataItem>
        )),
    ],
});
