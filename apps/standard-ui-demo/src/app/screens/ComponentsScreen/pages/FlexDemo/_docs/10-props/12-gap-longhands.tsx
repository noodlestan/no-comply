import { Flex, Icon } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_GAP = { _: 'xs', m: 'm', l: 'xl' } as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_GAP) };

export default createDemoSectionData({
    title: 'gap (longhands)',
    items: [
        createDemoItem({ title: 'rowGap', props }, () => (
            <Flex direction="row" wrap rowGap="s">
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'rowGap (responsive)', props }, () => (
            <Flex direction="row" wrap rowGap={RESPONSIVE_GAP}>
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
            </Flex>
        )),
        createDemoItem({ title: 'columnGap', props }, () => (
            <Flex direction="row" wrap columnGap="s">
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'columnGap (responsive)', props }, () => (
            <Flex direction="row" wrap columnGap={RESPONSIVE_GAP}>
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
                <ExampleLayoutChild
                    content={<Icon icon={HomeIcon} />}
                    style={{ 'min-width': '40%' }}
                />
            </Flex>
        )),
    ],
});
