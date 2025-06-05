import { Icon, Layout } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'tag ',
    items: [
        createDemoItem({ title: 'article', props }, () => (
            <Layout tag="article">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'div', props: { ...props, defaultValue: true } }, () => (
            <Layout tag="div">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'nav', props: { ...props, defaultValue: true } }, () => (
            <Layout tag="nav">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'span', props: { ...props, defaultValue: true } }, () => (
            <Layout tag="span">
                <LoremIpsum words={5} />
            </Layout>
        )),
    ],
});
