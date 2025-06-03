import { createDemoItem, createDemoSection } from '../../../../../../components';
import { IconButtonVariantsExample } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'primary', props }, () => (
        <IconButtonVariantsExample variant="primary" />
    )),
    createDemoItem({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <IconButtonVariantsExample variant="secondary" />
    )),
    createDemoItem({ title: 'plain', props }, () => <IconButtonVariantsExample variant="plain" />),
];

export default createDemoSection({
    title: 'variant',
    items,
});
