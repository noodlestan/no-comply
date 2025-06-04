import { Menu } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { AllMenuItemItemActionVariants } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'positive', props }, () => (
        <Menu aria-label="foo">
            <AllMenuItemItemActionVariants intent="positive" />
        </Menu>
    )),
    createDemoItem({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
        <Menu aria-label="foo">
            <AllMenuItemItemActionVariants intent="negative" />
        </Menu>
    )),
    createDemoItem({ title: 'neutral', props }, () => (
        <Menu aria-label="foo">
            <AllMenuItemItemActionVariants intent="neutral" />
        </Menu>
    )),
];

export default createDemoSectionData({
    title: 'intent',
    items,
});
