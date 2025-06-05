import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => (
            <Layout padding="s">
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
