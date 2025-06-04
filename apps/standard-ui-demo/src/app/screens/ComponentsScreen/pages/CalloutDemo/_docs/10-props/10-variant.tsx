import { Callout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'passive', props }, () => (
        <Callout title={lipsumWords()} variant="passive" />
    )),
    createDemoItem({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <Callout title={lipsumWords()} variant="info" />
    )),
    createDemoItem({ title: 'success', props }, () => (
        <Callout title={lipsumWords()} variant="success" />
    )),
    createDemoItem({ title: 'warning', props }, () => (
        <Callout title={lipsumWords()} variant="warning" />
    )),
    createDemoItem({ title: 'danger', props }, () => (
        <Callout title={lipsumWords()} variant="danger" />
    )),
];

export default createDemoSectionData({
    title: 'variant',
    items,
});
