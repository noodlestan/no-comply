import { Surface } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLarge, ExampleMedium, ExampleTiny } from '../../../../../../examples';
import { SurfaceVariantExample } from '../../examples';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'page (on stage)', props }, () => (
        <SurfaceVariantExample onVariant="stage">
            <Surface variant="page">
                <ExampleLarge title="Page" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'panel (on stage)', props: { ...props, defaultValue: true } }, () => (
        <SurfaceVariantExample onVariant="stage">
            <Surface variant="panel">
                <ExampleTiny title="Panel" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'panel (on page)', props }, () => (
        <SurfaceVariantExample onVariant="page">
            <Surface variant="panel">
                <ExampleTiny title="Panel" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'card (on stage)', props }, () => (
        <SurfaceVariantExample onVariant="stage">
            <Surface variant="card">
                <ExampleMedium title="Card" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'card (on page)', props }, () => (
        <SurfaceVariantExample onVariant="page">
            <Surface variant="card">
                <ExampleMedium title="Card" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'message (on page)', props }, () => (
        <SurfaceVariantExample onVariant="page" data-message="info">
            <Surface variant="message">
                <ExampleMedium title="Message" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'inverse (on stage)', props }, () => (
        <SurfaceVariantExample onVariant="stage">
            <Surface variant="inverse">
                <ExampleMedium title="Inverse" />
            </Surface>
        </SurfaceVariantExample>
    )),
    createDemoItem({ title: 'inverse (on page)', props }, () => (
        <SurfaceVariantExample onVariant="page">
            <Surface variant="inverse">
                <ExampleMedium title="Inverse" />
            </Surface>
        </SurfaceVariantExample>
    )),
];

export default createDemoSectionData({
    title: 'variant',
    items,
});
