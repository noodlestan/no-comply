import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { AllButtonVariants } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'positive', props }, () => <AllButtonVariants intent="positive" />),
    createDemoItem({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
        <AllButtonVariants intent="negative" />
    )),
    createDemoItem({ title: 'neutral', props }, () => <AllButtonVariants intent="neutral" />),
];

export default createDemoSectionData({
    title: 'intent',
    items,
});
