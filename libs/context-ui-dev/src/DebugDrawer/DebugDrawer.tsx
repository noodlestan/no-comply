import { Display, Flex, Surface, createClassList } from '@noodlestan/ui-system';
import { type Component } from 'solid-js';

import { ContextTreePanel } from '../panels';

import styles from './DebugDrawer.module.css';

export const DebugDrawer: Component = () => {
    const classList = () =>
        createClassList(styles, {
            DebugDrawer: true,
        });

    return (
        <div classList={classList()}>
            <Surface variant="card" role="region" aria-labelledby="debug-drawer">
                <Flex direction="column" padding="l" gap="m">
                    <Display level={3} id="debug-drawer">
                        Debug
                    </Display>
                    <ContextTreePanel />
                </Flex>
            </Surface>
        </div>
    );
};
