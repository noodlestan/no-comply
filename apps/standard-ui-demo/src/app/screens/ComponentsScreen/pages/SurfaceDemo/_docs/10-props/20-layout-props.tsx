import { Surface } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleNano } from '../../../../../../examples';
import { SurfaceVariantExample } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'padding', props }, () => (
        <SurfaceVariantExample onVariant="stage">
            <Surface variant="panel" padding="l">
                <ExampleNano title="Page" />
            </Surface>
        </SurfaceVariantExample>
    )),
];

export default createDemoSectionData({
    title: 'Layout props',
    items,
});
