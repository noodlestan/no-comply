import { Surface } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleTiny } from '../../../../../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ title: 'Stage surface', props }, () => (
            <Surface variant="stage">
                <ExampleTiny title="Foobar" />
            </Surface>
        )),
        createDemoItem({ title: 'Page surface', props }, () => (
            <Surface variant="page">
                <ExampleTiny title="Foobar" />
            </Surface>
        )),
    ],
});
