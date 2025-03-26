import { Display, Flex, Surface, createAriaRegion, createClassList } from '@noodlestan/ui-system';
import { type Component } from 'solid-js';

import { ContextTreePanel } from '../panels';

import styles from './DebugDrawer.module.css';

export const DebugDrawer: Component = () => {
    const classList = createClassList(styles, ['DebugDrawer']);

    const region = createAriaRegion();

    return (
        <div classList={classList()}>
            <Surface variant="card" {...region.elProps}>
                <Flex direction="column" padding="l" gap="m">
                    <Display level={3} {...region.labelProps}>
                        Debug
                    </Display>
                    <ContextTreePanel />
                </Flex>
            </Surface>
        </div>
    );
};
