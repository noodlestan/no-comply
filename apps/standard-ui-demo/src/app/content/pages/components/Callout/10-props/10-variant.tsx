import { Callout } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
    createDocsItemData({ title: 'passive', props }, () => (
        <Callout title={lipsumWords()} variant="passive" />
    )),
    createDocsItemData({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <Callout title={lipsumWords()} variant="info" />
    )),
    createDocsItemData({ title: 'success', props }, () => (
        <Callout title={lipsumWords()} variant="success" />
    )),
    createDocsItemData({ title: 'warning', props }, () => (
        <Callout title={lipsumWords()} variant="warning" />
    )),
    createDocsItemData({ title: 'danger', props }, () => (
        <Callout title={lipsumWords()} variant="danger" />
    )),
];

export default createDocsSectionData({
    title: 'variant',
    items,
});
