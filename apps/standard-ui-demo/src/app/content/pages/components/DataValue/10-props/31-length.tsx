import { DataValue } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'length',
    items: [
        createDocsItemData({ title: 'full', props }, () => (
            <DataValue length="full">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'l', props }, () => (
            <DataValue length="l">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'm', props: { ...props, defaultValue: true } }, () => (
            <DataValue length="m">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 's', props }, () => (
            <DataValue length="s">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'auto', props }, () => (
            <DataValue length="auto">
                <LoremIpsum words={2} />
            </DataValue>
        )),
    ],
});
