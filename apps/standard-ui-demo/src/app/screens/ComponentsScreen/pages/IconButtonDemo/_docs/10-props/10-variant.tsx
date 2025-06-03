import { createDemoItem, createDemoSection } from '../../../../../../components';
import { IconButtonVariantsExample } from '../../examples';

const items = [
    createDemoItem({ title: 'primary', props: { row: true, gap: 'm' } }, () => (
        <IconButtonVariantsExample variant="primary" />
    )),
    createDemoItem(
        { title: 'secondary', props: { row: true, gap: 'm', defaultValue: true } },
        () => <IconButtonVariantsExample variant="secondary" />,
    ),
    createDemoItem({ title: 'plain', props: { row: true, gap: 'm' } }, () => (
        <IconButtonVariantsExample variant="plain" />
    )),
];

export default createDemoSection({
    title: 'variant',
    items,
});
