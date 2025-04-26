import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import { SurfaceBase } from '@noodlestan/headless-ui';
import { Display, Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { DebugContextTreePanel } from '../panels';

import styles from './DebugDrawer.module.css';

export const DebugDrawer: Component = () => {
    const region = createAriaRegion();

    return (
        <div classList={staticClassList(styles, 'DebugDrawer')}>
            <SurfaceBase variant="card" {...region.$root}>
                <Flex direction="column" padding="l" gap="m">
                    <Display level={3} {...region.$label}>
                        Debug
                    </Display>
                    <DebugContextTreePanel />
                </Flex>
            </SurfaceBase>
        </div>
    );
};
