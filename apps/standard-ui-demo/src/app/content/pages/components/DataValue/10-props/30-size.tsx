import { DataValue } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'size',
    items: [
        createDocsItemData({ title: 'large', props }, () => (
            <DataValue size="large">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'medium', props }, () => (
            <DataValue size="medium">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <DataValue size="normal">
                <LoremIpsum words={2} />
            </DataValue>
        )),
        createDocsItemData({ title: 'small', props }, () => (
            <DataValue size="small">
                <LoremIpsum words={2} />
            </DataValue>
        )),
    ],
});
