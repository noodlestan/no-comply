import { createDemoItem, createDemoSection } from '../../../../../../components';
import { IconButtonIntentsExample } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'positive', props }, () => (
        <IconButtonIntentsExample intent="positive" />
    )),
    createDemoItem({ title: 'negative', props }, () => (
        <IconButtonIntentsExample intent="negative" />
    )),
    createDemoItem({ title: 'neutral', props: { ...props, defaultValue: true } }, () => (
        <IconButtonIntentsExample intent="neutral" />
    )),
];

export default createDemoSection({
    title: 'intent',
    items,
});
