import { createDemoItem, createDemoSection } from '../../../../../../components';
import { IconButtonIntentsExample } from '../../examples';

const items = [
    createDemoItem(
        {
            title: 'positive',
            props: { gap: 'l' },
        },
        () => <IconButtonIntentsExample intent="positive" />,
    ),
    createDemoItem(
        {
            title: 'negative',
            props: { gap: 'l' },
        },
        () => <IconButtonIntentsExample intent="negative" />,
    ),
    createDemoItem(
        {
            title: 'neutral',
            props: { gap: 'l' },
        },
        () => <IconButtonIntentsExample intent="neutral" />,
    ),
];

export default createDemoSection({
    title: 'intent',
    items,
});
