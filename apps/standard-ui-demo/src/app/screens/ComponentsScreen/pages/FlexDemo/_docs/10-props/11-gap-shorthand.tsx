import { Flex, Icon } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_GAP = [
    { _: 'xs', m: 's', l: 'm' },
    { _: 'm', m: 'l', l: 'xl' },
] as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_GAP) };

export default createDemoSectionData({
    title: 'gap (shorthand)',
    items: [
        createDemoItem({ title: '[block, inline]', props }, () => (
            <Flex direction="row" wrap gap={['s', 'l']}>
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
        createDemoItem({ title: '[block start, inline, block end])', props }, () => (
            <Flex direction="row" wrap gap={['s', 'm', 'l']}>
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
        createDemoItem(
            { title: '[block start, inline end, block end, inline start])', props },
            () => (
                <Flex direction="row" wrap gap={['none', 'm', 'l', 's']}>
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
            ),
        ),
        // ResponsiveDemoItem
        createDemoItem({ title: '[block, inline] (responsive)', props }, () => (
            <Flex direction="row" wrap gap={RESPONSIVE_GAP}>
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
