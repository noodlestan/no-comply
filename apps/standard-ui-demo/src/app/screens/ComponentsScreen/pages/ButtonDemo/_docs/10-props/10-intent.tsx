import { createDemoItem, createDemoSection } from '../../../../../../components';
import { ButtonIntentsExample } from '../../examples';

const items = [
    createDemoItem(
        {
            title: 'positive',
            props: { gap: 'l' },
        },
        () => <ButtonIntentsExample intent="positive" />,
    ),
    createDemoItem(
        {
            title: 'negative',
            props: { gap: 'l' },
        },
        () => <ButtonIntentsExample intent="negative" />,
    ),
    createDemoItem(
        {
            title: 'neutral',
            props: { gap: 'l' },
        },
        () => <ButtonIntentsExample intent="neutral" />,
    ),
];

export default createDemoSection({
    title: 'intent',
    items,
});
