import { Surface } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { AllDividerVariants } from '../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Usage in surfaces',
    items: [
        createDemoItem({ title: 'on stage', props }, () => (
            <Surface variant="stage" padding="l">
                <AllDividerVariants />
            </Surface>
        )),
        createDemoItem({ title: 'on page', props }, () => (
            <Surface variant="page" padding="l">
                <AllDividerVariants />
            </Surface>
        )),
        createDemoItem({ title: 'on card', props }, () => (
            <Surface variant="card" padding="l">
                <AllDividerVariants />
            </Surface>
        )),
        createDemoItem({ title: 'on message', props }, () => (
            <Surface variant="message" padding="l" data-message="info">
                <AllDividerVariants />
            </Surface>
        )),
        createDemoItem({ title: 'on inverse', props }, () => (
            <Surface variant="inverse" padding="l">
                <AllDividerVariants />
            </Surface>
        )),
        createDemoItem({ title: 'on menu', props }, () => (
            <Surface variant="menu" padding="l">
                <AllDividerVariants />
            </Surface>
        )),
    ],
});
