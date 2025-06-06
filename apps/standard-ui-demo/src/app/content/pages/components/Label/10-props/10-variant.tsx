import { Label } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'variant ',
    items: [
        createDocsItemData({ title: 'large', props }, () => (
            <Label variant="large">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDocsItemData({ title: 'medium', props }, () => (
            <Label variant="medium">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <Label variant="normal">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDocsItemData({ title: 'small', props }, () => (
            <Label variant="small">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDocsItemData({ title: 'small', props }, () => (
            <Label variant="small">
                <LoremIpsum words={2} />
            </Label>
        )),
    ],
});
