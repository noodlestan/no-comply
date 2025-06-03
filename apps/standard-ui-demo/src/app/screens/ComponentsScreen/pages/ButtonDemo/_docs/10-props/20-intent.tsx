import { createDemoItem, createDemoSection } from '../../../../../../components';
import { ButtonIntentsExample } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'positive', props }, () => <ButtonIntentsExample intent="positive" />),
    createDemoItem({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
        <ButtonIntentsExample intent="negative" />
    )),
    createDemoItem({ title: 'neutral', props }, () => <ButtonIntentsExample intent="neutral" />),
];

export default createDemoSection({
    title: 'intent',
    items,
});
