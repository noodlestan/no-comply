import { Surface } from '@no-comply/standard-ui';

import { ExampleTiny } from '../../../../examples';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ title: 'Stage surface', props }, () => (
            <Surface variant="stage">
                <ExampleTiny title="Foobar" />
            </Surface>
        )),
        createDocsItemData({ title: 'Page surface', props }, () => (
            <Surface variant="page">
                <ExampleTiny title="Foobar" />
            </Surface>
        )),
    ],
});
